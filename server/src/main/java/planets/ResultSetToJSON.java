package planets;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

public class ResultSetToJSON {
	
	public static String convert(ResultSet resultSet) throws SQLException
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
	
}
