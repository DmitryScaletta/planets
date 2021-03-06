package planets;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;


@WebServlet("/api/*")
public class Api extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// System.out.println(request.getServletContext().getRealPath(""));
		
		String pathInfo = request.getPathInfo();
		
		if (pathInfo == null)
		{
			// no access to /api
			response.setStatus(404);
			return;
		}
		
		String[] params = pathInfo.split("/");
		
		String  table = params[1];
		Integer id    = null;
		String  sql   = "";
		ArrayList<Object> queryParams = new ArrayList<>();
		
		if (params.length != 2 && params.length != 3)
		{
			// too many parameters
			response.setStatus(400);
			return;
		}
		
		if (params.length == 3)
		{
			// try to parse the id
			try
			{
				id = Integer.parseInt(params[2]);
			}
			catch (NumberFormatException e)
			{
				// id is not an integer
				response.setStatus(400);
				return;
			}
		}

		final String SELECT_GALAXY = 
			"SELECT g.id,g.name,COUNT(p.id) AS planets_count " +
			"FROM Galaxy AS g " + 
			"INNER JOIN Planet AS p ON g.id=p.galaxy_id";
		final String SELECT_PLANET = 
			"SELECT p.id,p.galaxy_id,g.name AS galaxy_name,p.name,p.radius,p.core_temperature,p.atmosphere,p.life " +
			"FROM Planet AS p " + 
			"INNER JOIN Galaxy AS g ON p.galaxy_id=g.id";
		final String SELECT_SATELLITE =
			"SELECT s.id,s.planet_id,p.name AS planet_name,s.name,s.radius,s.distance " +
			"FROM Satellite AS s " +
			"INNER JOIN Planet AS p ON s.planet_id=p.id";
		
		switch (table)
		{
			case "galaxy": 
			{
				sql = SELECT_GALAXY;
				if (id != null) sql += " WHERE g.id=?";
				sql += " GROUP BY g.id";
				break;
			}
			case "planet":
			{
				sql = SELECT_PLANET;
				String galaxyId = request.getParameter("galaxy_id");
				
				if (id == null && galaxyId != null)
				{
					Integer param = null;
					try 
					{
						param = Integer.parseInt(galaxyId);
					}
					catch (NumberFormatException e)
					{
						// galaxy_id is not an integer
						response.setStatus(400);
						return;
					}
					sql += " WHERE p.galaxy_id=?";
					queryParams.add(param);
				}
				if (id != null) sql += " WHERE p.id=?";
				break;
			}
			case "satellite":
			{
				sql = SELECT_SATELLITE;
				String planetId = request.getParameter("planet_id");
				
				if (id == null && planetId != null)
				{
					Integer param = null;
					try 
					{
						param = Integer.parseInt(planetId);
					}
					catch (NumberFormatException e)
					{
						// planet_id is not an integer
						response.setStatus(400);
						return;
					}
					queryParams.add(param);
					sql += " WHERE s.planet_id=?";
				}
				if (id != null) sql += " WHERE s.id=?";
				break;
			}
			
			default:
			{
				// wrong table name
				response.setStatus(400);
				return;
			}
		}
		
		
		String json = new String();
		try
		{
			if (id == null)
			{
				// api/:table
				ResultSet result = DatabaseSelect.run(sql, queryParams);
				json = ResultSetToJSON.toArray(result);
			}
			else
			{
				// api/:table/:id
				queryParams.add(id);
				ResultSet result = DatabaseSelect.run(sql, queryParams);
				json = ResultSetToJSON.toObject(result);
			}
		}
		catch (SQLException e) 
		{
			e.printStackTrace();
			response.setStatus(500);
		}
		
		response.setContentType("application/json");
		response.getWriter().append(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String pathInfo = request.getPathInfo();
		
		if (pathInfo == null)
		{
			// no access to /api
			response.setStatus(404);
			return;
		}
		
		String[] params = pathInfo.split("/");
		
		String  table = params[1];
		String  sql   = "";
		ArrayList<Object> queryParams = new ArrayList<>();
		
		if (params.length != 2)
		{
			// too many parameters
			response.setStatus(400);
			return;
		}
		
		
		// read content
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while ((line = reader.readLine()) != null) {
			buffer.append(line);
		}
		String data = buffer.toString();
		
		// System.out.println(data);
		
		
		// parse json
		JSONObject json = new JSONObject(data);
		
		switch (table)
		{
			case "galaxy": 
			{
				sql = "INSERT INTO Galaxy(name) VALUES(?)";
				
				String name = json.getString("name");
				
				if (name == null)
				{
					// reed all required fields
					response.setStatus(400);
					return;
				}
				
				queryParams.add(name);
				
				break;
			}
			case "planet":
			{
				sql = "INSERT INTO Planet(galaxy_id,name,radius,core_temperature,atmosphere,life) VALUES(?,?,?,?,?,?)";
				
				Integer galaxyId         = json.getInt("galaxy_id");
				String  name             = json.getString("name");
				Integer radius           = json.getInt("radius");
				Integer core_temperature = json.getInt("core_temperature");
				Integer atmosphere       = json.getInt("atmosphere");
				Integer life             = json.getInt("life");
				
				if (name             == null ||
					galaxyId         == null ||
					radius           == null ||
					core_temperature == null ||
					atmosphere       == null ||
					life             == null)
				{
					// reed all required fields
					response.setStatus(400);
					return;
				}
				
				queryParams.add(galaxyId);
				queryParams.add(name);
				queryParams.add(radius);
				queryParams.add(core_temperature);
				queryParams.add(atmosphere);
				queryParams.add(life);
				
				break;
			}
			case "satellite":
			{
				sql = "INSERT INTO Satellite(planet_id,name,radius,distance) VALUES(?,?,?,?)";
				
				Integer planetId = json.getInt("planet_id");
				String  name     = json.getString("name");
				Integer radius   = json.getInt("radius");
				Integer distance = json.getInt("distance");
				
				if (name     == null ||
					planetId == null ||
					radius   == null ||
					distance == null)
				{
					// reed all required fields
					response.setStatus(400);
					return;
				}
				
				queryParams.add(planetId);
				queryParams.add(name);
				queryParams.add(radius);
				queryParams.add(distance);

				
				break;
			}
			
			default:
			{
				// wrong table name
				response.setStatus(400);
				return;
			}
		}
		
		
		// send database request
		if (DatabaseInsert.run(sql, queryParams))
		{
			response.setStatus(200);
		}
		else
		{
			response.setStatus(500);
		}
	}
	
}