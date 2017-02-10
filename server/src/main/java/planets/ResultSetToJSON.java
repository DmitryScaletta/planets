package planets;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

public class ResultSetToJSON {
	
	// convert full ResultSet
	// returns array of objects or []
	public static String toArray(ResultSet resultSet) throws SQLException
	{
		if (resultSet == null) return new String();
		
		ResultSetMetaData resultSetMetaData = resultSet.getMetaData(); 
		int               columnCount       = resultSetMetaData.getColumnCount(); 
		JSONArray         jsonArray         = new JSONArray();
		
		while (resultSet.next())
		{ 
			JSONObject row = new JSONObject();
			for (int i = 0; i < columnCount; ++i) 
			{
				row.put(
					resultSetMetaData.getColumnLabel(i + 1),
					resultSet.getObject(i + 1)
				); 
			}
			
			jsonArray.put(row);
		}
		
		return jsonArray.toString();
	}
	
	// convert only first row
	// returns object or {}
	public static String toObject(ResultSet resultSet) throws SQLException
	{
		if (resultSet == null) return new String();
		
		ResultSetMetaData resultSetMetaData = resultSet.getMetaData(); 
		int               columnCount       = resultSetMetaData.getColumnCount(); 
		//JSONObject         jsonArray         = new JSONArray();
		JSONObject         jsonObject        = new JSONObject();
		
		if (resultSet.next())
		{
			for (int i = 0; i < columnCount; ++i) 
			{
				jsonObject.put(
					resultSetMetaData.getColumnLabel(i + 1),
					resultSet.getObject(i + 1)
				); 
			}
		}
		
		return jsonObject.toString();
	}
	
}
