package com.traceray;
public class MyImage {
	public int w;
	public int h;
	double[][] brightness;
	MyColor[][] color;
	public MyImage(int w, int h){
		this.w=w;
		this.h=h;
		this.brightness=new double[w][h];
		this.color=new MyColor[w][h];
	}
	public MyImage setBrightness(int l, int t, double b){
		this.brightness[l-1][t-1]=b;
		return setColor(l, t, new MyColor(b, b, b));
	}
	public MyImage setColor(int l, int t, MyColor c){
		this.color[l-1][t-1]=c;
		return this;
	}
}

class MyBMP{
	
}
