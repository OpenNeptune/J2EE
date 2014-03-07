﻿package SSH.Action;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;
/*******************************************************************
 * 
 * @author Neptune
 * @descript	获取和处理action的请求参数
 * 
 ******************************************************************/
public class RequestParamAction extends DispatchAction{

	public ActionForward HandleParam(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		//获取一个请求中没有参数
		String param1 = request.getParameter("notes");
		PrintWriter out = response.getWriter();
		out.println(param1);
		return null;
	}
}
