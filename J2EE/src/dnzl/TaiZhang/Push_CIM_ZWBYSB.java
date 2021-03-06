package dnzl.TaiZhang;

import java.sql.SQLException;
import java.util.List;

import dnzl.Core.Push_CIM_SuperClass;
import dnzl.DataFactory.XmlFactory;

public class Push_CIM_ZWBYSB extends Push_CIM_SuperClass{
	public List<String> xmlContents() throws SQLException{
		return XmlFactory.GetXMLAll_ZBSB();
	}

	@Override
	public void initData() {
		List<String> list = null;
		try {
			list = xmlContents();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		if(list == null || list.size() == 0){
			this.IsLog(false);
			this.IsNeed(false);
		}else{
			this.setXmlContents(list);
		}
	}
}
