package planets;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Database 
{
	public static String filename = "D:/planets.sqlite3";
	
	public static Connection connect()
	{
		Connection connection = null;

		try
		{
			Class.forName("org.sqlite.JDBC");
			connection = DriverManager.getConnection("jdbc:sqlite:" + Database.filename);
		}
		catch (ClassNotFoundException e)
		{
			System.err.println(e.getMessage());
			connection = null;
		}
		catch (SQLException e)
		{
			System.err.println(e.getMessage());
			connection = null;
		}

		return connection;
	}
}
