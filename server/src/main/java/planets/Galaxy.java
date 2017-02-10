package planets;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/galaxy")
public class Galaxy extends HttpServlet 
{
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		//galaxies = null;
		String json = new String();
		try {
			ResultSet galaxies = DatabaseSelect.run("SELECT * FROM Galaxy");
			json = ResultSetToJSON.convert(galaxies); 
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		response.setContentType("application/json");
		response.getWriter().append(json);
	}

}
