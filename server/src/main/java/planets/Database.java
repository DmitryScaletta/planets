package planets;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

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
	
	public static void bindParams(PreparedStatement stmt, ArrayList<Object> params) throws SQLException
	{
		int i = 0;
		for (Object param : params) 
		{
			++i;
			if (param instanceof Double)  { stmt.setDouble(i, (double) param); } else
			if (param instanceof Integer) { stmt.setInt   (i, (int)    param); } else
			if (param instanceof String)  { stmt.setString(i, (String) param); }
		}
	}
	
}
