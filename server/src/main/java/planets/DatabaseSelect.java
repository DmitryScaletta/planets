package planets;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class DatabaseSelect 
{
	public static ResultSet run(String sql, ArrayList<Object> params) throws SQLException 
	{
		Connection db = Database.connect();

		if (db == null) { return null; }

		PreparedStatement stmt = db.prepareStatement(sql);

		int i = 0;
		for (Object param : params) 
		{
			++i;
			if (param instanceof Double)  { stmt.setDouble(i, (double) param); } else
			if (param instanceof Integer) { stmt.setInt   (i, (int)    param); } else
			if (param instanceof String)  { stmt.setString(i, (String) param); }
		}

		ResultSet res = stmt.executeQuery();
		
		return res;
	}
	
}
