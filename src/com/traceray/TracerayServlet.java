package com.traceray;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.ServletContext;
import javax.servlet.http.*;

import org.w3c.dom.Document;
import java.util.concurrent.ThreadFactory;
import com.google.appengine.api.ThreadManager;

import java.io.BufferedReader;


@SuppressWarnings("serial")
public class TracerayServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		ServletContext context = getServletContext();
		String fullPath = context.getRealPath("/WEB-INF/schema/xml_schema.xsd");
		InputStream input=req.getInputStream();
		resp.setContentType("text/plain");
		OutputStream out=resp.getOutputStream();
		XmlHandler h=new XmlHandler(fullPath, input, out);
		try{
			h.write();
		}catch(IOException e){
			out.write(new byte[]{'o', 'o', 'p', 's'});
		}
	}
}

class XmlHandler{
	private SceneImageWriter w;
	public XmlHandler(String schemaPath, InputStream xmlInput, OutputStream imageOutput){
		SceneXmlFactory f=SceneXmlFactory.getInstance(schemaPath);
		Document xmlScene=f.getSceneXml(xmlInput);
		SceneXml sceneXml=new SceneXml(xmlScene);
		this.w=new SceneImageWriter(sceneXml.getScene(), sceneXml.getViewPort(), imageOutput, 3);
	}
	public void write() throws IOException{
		this.w.write();
	}
}

