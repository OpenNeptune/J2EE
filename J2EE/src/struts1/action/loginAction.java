package struts1.action;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import struts1.form.loginForm;

public class loginAction extends Action{

	@Override
	public ActionForward execute(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws Exception {
		loginForm login_form = (loginForm) form;
		if(veriflogin(login_form)){
			request.setAttribute("isLogin",true);

			return mapping.findForward("login");
		}else{
			request.setAttribute("isLogin", false);
			return mapping.findForward("nologin");
		}
	}

	/**
	 * 校验登录用户是否正确
	 * @param login_form
	 * @return
	 */
	public boolean veriflogin(loginForm login_form){
		String username = login_form.getUsername();
		String password = login_form.getPassword();
		if("holly".equals(username) && "holly".equals(password)){
			return true;
		}else{
			return false;
		}
		
	}
	

}
