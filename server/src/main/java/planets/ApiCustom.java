package planets;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/api/custom/*")
public class ApiCustom extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String pathInfo = request.getPathInfo();
		
		if (pathInfo == null)
		{
			// no access to /api/custom
			response.setStatus(404);
			return;
		}
		
		String[] params = pathInfo.split("/");
		
		if (params.length != 2)
		{
			// too many parameters
			response.setStatus(400);
			return;
		}
		
		String  queryType = params[1];
		Integer limit     = null;
		String  rawLimit  = request.getParameter("limit");
		
		if (rawLimit != null)
		{
			try
			{
				limit = Integer.parseInt(rawLimit);
			}
			catch (NumberFormatException e)
			{
				// limit must be an integer
				response.setStatus(400);
				return;
			}
		}
		
		if (limit <= 0)
		{
			// limit must be greater than 0
			response.setStatus(400);
			return;
		}
		
		String sql = "";
		ArrayList<Object> queryParams = new ArrayList<>();
		
		switch (queryType)
		{
			case "planets-with-life":
			{
				String rawGalaxyId = request.getParameter("galaxy_id");
				if (rawGalaxyId == null)
				{
					// required galaxy_id
					response.setStatus(400);
					return;
				}
				
				try
				{
					queryParams.add(Integer.parseInt(rawGalaxyId));
				}
				catch (NumberFormatException e)
				{
					// galaxy_id must be an integer
					response.setStatus(400);
					return;
				}
				
				sql = 
					"SELECT p.id,p.name,p.galaxy_id,g.name AS galaxy_name,p.radius,p.core_temperature,p.atmosphere,p.life " + 
					"FROM Planet AS p " +
					"INNER JOIN Galaxy AS g ON p.galaxy_id=g.id " +
					"WHERE g.id=? AND p.life=1";
				
				break;
			}
			
			case "planets-min-radius":
			{
				sql =
					"SELECT p.id,p.name,p.galaxy_id,g.name AS galaxy_name,p.radius,p.core_temperature,p.atmosphere,p.life,COUNT(p.id) AS satellites_count " +
					"FROM Planet AS p " +
					"INNER JOIN Galaxy    AS g ON p.galaxy_id=g.id " +
					"INNER JOIN Satellite AS s ON s.planet_id=p.id " +
					"GROUP BY p.id " +
					"ORDER BY p.radius ASC, satellites_count DESC";
				
				break;
			}
			
			case "planets-max-satellites":
			{
				sql = 
					"SELECT " +
					"	p.id, " +
					"	p.name," +
					"	g.id AS galaxy_id," +
					"	g.name AS galaxy_name," +
					"	p.radius," +
					"	p.core_temperature," +
					"	p.atmosphere," +
					"	p.life," +
					"	COUNT(p.id) AS satellites_count," +
					"	SUM(2.356194 * s.radius * s.radius * s.radius) AS satellites_volume " +
					"FROM Planet AS p " +
					"INNER JOIN Galaxy    AS g ON p.galaxy_id=g.id " +
					"INNER JOIN Satellite AS s ON s.planet_id=p.id " +
					"GROUP BY p.id " +
					"ORDER BY satellites_count DESC, satellites_volume ASC";
				break;
			}
			
			case "galaxies-max-core-temperatures":
			{
				sql = 
					"SELECT g.id,g.name,SUM(p.core_temperature) AS sum_of_core_temperatures,COUNT(p.id) AS planets_count " + 
					"FROM Galaxy AS g " +
					"INNER JOIN Planet AS p ON g.id=p.galaxy_id " +
					"GROUP BY g.id " +
					"ORDER BY sum_of_core_temperatures DESC";
				break;
			}
		
			default:
			{
				// wrong queryType
				response.setStatus(400);
				return;
			}
		}
		
		if (limit != null)
		{
			queryParams.add(limit);
			sql += " LIMIT ?";
		}
		
		String json = new String();
		try
		{
			ResultSet result = DatabaseSelect.run(sql, queryParams);
			json = ResultSetToJSON.toArray(result);
		}
		catch (SQLException e) 
		{
			e.printStackTrace();
			response.setStatus(500);
		}
		
		response.setContentType("application/json");
		response.getWriter().append(json);
	}

}
