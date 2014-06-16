package webServices.cxf.client.demo;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

/**
 * This class was generated by Apache CXF 2.5.9
 * 2014-06-16T11:27:22.153+08:00
 * Generated source version: 2.5.9
 * 
 */
@WebServiceClient(name = "DataTypeWSImpleService", 
                  wsdlLocation = "http://localhost:8080/J2EE/services/datatype?wsdl",
                  targetNamespace = "http://impl.serv.cxf.webServices/") 
public class DataTypeWSImpleService extends Service {

    public final static URL WSDL_LOCATION;

    public final static QName SERVICE = new QName("http://impl.serv.cxf.webServices/", "DataTypeWSImpleService");
    public final static QName DataTypeWSImplePort = new QName("http://impl.serv.cxf.webServices/", "DataTypeWSImplePort");
    static {
        URL url = null;
        try {
            url = new URL("http://localhost:8080/J2EE/services/datatype?wsdl");
        } catch (MalformedURLException e) {
            java.util.logging.Logger.getLogger(DataTypeWSImpleService.class.getName())
                .log(java.util.logging.Level.INFO, 
                     "Can not initialize the default wsdl from {0}", "http://localhost:8080/J2EE/services/datatype?wsdl");
        }
        WSDL_LOCATION = url;
    }

    public DataTypeWSImpleService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public DataTypeWSImpleService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public DataTypeWSImpleService() {
        super(WSDL_LOCATION, SERVICE);
    }
    
    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    public DataTypeWSImpleService(WebServiceFeature ... features) {
        super(WSDL_LOCATION, SERVICE, features);
    }

    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    public DataTypeWSImpleService(URL wsdlLocation, WebServiceFeature ... features) {
        super(wsdlLocation, SERVICE, features);
    }

    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    public DataTypeWSImpleService(URL wsdlLocation, QName serviceName, WebServiceFeature ... features) {
        super(wsdlLocation, serviceName, features);
    }

    /**
     *
     * @return
     *     returns DataTypeWS
     */
    @WebEndpoint(name = "DataTypeWSImplePort")
    public DataTypeWS getDataTypeWSImplePort() {
        return super.getPort(DataTypeWSImplePort, DataTypeWS.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns DataTypeWS
     */
    @WebEndpoint(name = "DataTypeWSImplePort")
    public DataTypeWS getDataTypeWSImplePort(WebServiceFeature... features) {
        return super.getPort(DataTypeWSImplePort, DataTypeWS.class, features);
    }

}
