package planets;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnect 
{
	public static Connection connect(String filename)
	{
		Connection connection = null;

		try
		{
			Class.forName("org.sqlite.JDBC");
			connection = DriverManager.getConnection("jdbc:sqlite:" + filename);
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
