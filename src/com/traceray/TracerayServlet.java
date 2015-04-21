package com.traceray;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletContext;
import javax.servlet.http.*;

import org.w3c.dom.Document;

import java.io.BufferedReader;

@SuppressWarnings("serial")
public class TracerayServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		BufferedReader contentReader=req.getReader();
		String line=null;
		int i=0;
		while(line==null&&i<5){
			line=contentReader.readLine();
			i++;
		}
		resp.setContentType("text/plain");
		resp.getWriter().println(line+", "+i);
	}
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		ServletContext context = getServletContext();
		String fullPath = context.getRealPath("/WEB-INF/schema/xml_schema.xsd");
		InputStream input=req.getInputStream();
		XmlHandler h=new XmlHandler(fullPath, input);
		resp.setContentType("text/plain");
		resp.getWriter().println("right");
	}
}

class XmlHandler{
	private Scene s;
	private Viewport v;
	public XmlHandler(String schemaPath, InputStream xmlInput){
		SceneXmlFactory f=SceneXmlFactory.getInstance(schemaPath);
		Document xmlScene=f.getSceneXml(xmlInput);
		SceneXml sceneXml=new SceneXml(xmlScene);
		this.s=sceneXml.getScene();
		this.v=sceneXml.getViewPort();
	}
}
