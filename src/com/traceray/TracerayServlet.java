package com.traceray;

import java.io.IOException;
import javax.servlet.http.*;
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
		BufferedReader contentReader=req.getReader();
		String line=null;
		int i=0;
		while(line==null&&i<5){
			line=contentReader.readLine();
			i++;
		}
		resp.setContentType("text/plain");
		resp.getWriter().println(line);
	}
}
