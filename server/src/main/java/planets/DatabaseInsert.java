package planets;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

public class DatabaseInsert 
{
	public static boolean run(String sql, ArrayList<Object> params)
	{
		Connection db = Database.connect();

		if (db == null) { return false; }

		try
		{
			PreparedStatement stmt = db.prepareStatement(sql);
			Database.bindParams(stmt, params);
			stmt.execute();
		}
		catch (SQLException e)
		{
			e.printStackTrace();
			return false;
		}
		
		return true;
	}
	
}
