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
		Database.bindParams(stmt, params);

		ResultSet res = stmt.executeQuery();
		
		return res;
	}
	
}
