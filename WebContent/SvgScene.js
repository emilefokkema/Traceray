var SvgScene=function(){
	var Images={
		"pencil": '<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><g stroke="null" id="layer1"><g stroke="#FFFFFF" id="svg_1" fill="none"><path stroke="null" stroke-width="2" d="m10.13272,24.78455l17.69503,-17.69458l5.08626,5.0863l-17.69456,17.69501l-6.12544,1.0387l1.03872,-6.12543l-0.00001,0z" id="rect2990"/><path stroke="null" stroke-width="2" d="m10.15659,24.56989l5.22951,5.22948" id="path3771"/><path stroke="null" stroke-width="2" d="m30.05628,9.93994l-17.33666,17.33618" id="path3777"/><path stroke="null" stroke-width="2" d="m9.38373,28.79895l1.93725,1.86975" id="path3763"/></g></g></g></svg>',
		"trashcan": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><title>Layer 1</title><g stroke="null" id="trashcan"><path fill="#ffffff" stroke="null" id="svg_1" d="m13.77909,4.9061l-2.39124,0c0.00052,-0.01666 0.00263,-0.03331 0.00263,-0.05058l0,-0.48884c0,-0.88933 -0.71697,-1.61769 -1.5923,-1.61769l-2.65412,0c-0.87596,0 -1.5923,0.72832 -1.5923,1.61769l0,0.48884c0,0.01727 0.00199,0.03396 0.00256,0.05058l-2.39117,0c-0.43792,0 -0.79615,0.36423 -0.79615,0.80892l0,0.80872c0,0.44515 0.35819,0.80938 0.79615,0.80938l0.26551,0l0,-0.53961l10.08482,0l0,0.53961l0.26559,0c0.43766,0 0.79592,-0.36423 0.79592,-0.80938l0,-0.80872c0.00004,-0.44469 -0.35825,-0.80892 -0.79588,-0.80892l-0.00002,0zm-6.90851,-0.80873l3.18456,0l0,0.80873l-3.18456,0l0,-0.80873z"/><path fill="#ffffff" stroke="null" id="svg_2" d="m3.95952,7.60277l0,8.08885c0,0.44534 0.35804,0.80938 0.7963,0.80938l7.43062,0c0.43801,0 0.7963,-0.36404 0.7963,-0.80938l0,-8.08885l-9.02323,0l0.00001,0zm2.65381,7.14528c0,0.14852 -0.11955,0.26966 -0.26524,0.26966l-0.53075,0c-0.14629,0 -0.26551,-0.12114 -0.26551,-0.26966l0,-5.39281c0,-0.14799 0.11925,-0.26977 0.26551,-0.26977l0.53075,0c0.14569,0 0.26524,0.12178 0.26524,0.26977l0,5.39281zm2.38858,0c0,0.14852 -0.1199,0.26966 -0.26525,0.26966l-0.53105,0c-0.14599,0 -0.26525,-0.12114 -0.26525,-0.26966l0,-5.39281c0,-0.14799 0.11926,-0.26977 0.26525,-0.26977l0.53105,0c0.14531,0 0.26525,0.12178 0.26525,0.26977l0,5.39281zm2.3886,0c0,0.14852 -0.11989,0.26966 -0.26551,0.26966l-0.53076,0c-0.14606,0 -0.26524,-0.12114 -0.26524,-0.26966l0,-5.39281c0,-0.14799 0.11918,-0.26977 0.26524,-0.26977l0.53076,0c0.14561,0 0.26551,0.12178 0.26551,0.26977l0,5.39281z"/></g></g></svg>',
		"cloneStamp": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><title>Layer 1</title><g stroke="null" id="svg_1"><path fill="#ffffff" stroke="null" d="m17.4787,12.87671l-5.27603,0c-0.47429,-1.57969 1.34658,-4.95068 1.34658,-4.95068l-0.00057,0c0.30968,-0.57067 0.48617,-1.22589 0.48617,-1.92285c0.00057,-2.21091 -1.77126,-4.00319 -3.957,-4.00319s-3.95748,1.79228 -3.95748,4.00343c0,0.69696 0.17676,1.3519 0.48634,1.92283l-0.00057,0c0,0 1.8208,3.37071 1.34675,4.95088l-5.27587,0l0,3.27079l14.802,0l0,-3.27121l-0.00031,0l0,-0.00001z" id="svg_2"/><rect fill="#ffffff" stroke="null" x="3.66108" y="16.65824" width="12.83365" height="0.74675" id="svg_3"/></g></g></svg>',
		"ccwArrow": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><title>Layer 1</title><path fill="#ffffff" d="m19.25052,11.33195c0,2.54255 -0.95532,4.93405 -2.68992,6.73055l-1.6236,-1.68264c1.30066,-1.34797 2.01717,-3.13985 2.01717,-5.04792s-0.7165,-3.69994 -2.01717,-5.04791c-2.67647,-2.77262 -7.02249,-2.7796 -9.71126,-0.02789l2.60133,2.69594l-6.88905,0l0,-7.13959l2.66301,2.75871c3.58468,-3.68135 9.3906,-3.66975 12.9596,0.03024c1.73457,1.7965 2.68989,4.18796 2.68989,6.73051l0,0l0,0.00001z" id="svg_1"/></g></svg>'

	};

	var Color=function(r_, g_, b_){
		var r=r_;
		var g=g_;
		var b=b_;
		var reflectable=true;
		var confine=function(){
			var c=function(v){return Math.floor(Math.max(Math.min(v,255), 0));}
			r=c(r);
			g=c(g);
			b=c(b);
		};
		confine();
		return {
			toString: function(){confine();return "rgb("+r+", "+g+", "+b+")";},
			toString2: function(){confine();return r+","+g+","+b+(reflectable?'t':'');},
			toString3: function(){confine();return '['+r+','+g+','+b+(reflectable?', true':'')+']';},
			r: function(){confine();return r},
			g: function(){confine();return g},
			b: function(){confine();return b},
			setReflectable: function(b){reflectable=b;return this;},
			isReflectable: function(){return reflectable;},
			plus: function(color){
				return Color(r+color.r(),g+color.g(),b+color.b());
			},
			scale: function(r_){return Color(r*r_,g*r_,b*r_);},
			clone: function(){return Color(r, g, b).setReflectable(reflectable);}
		};
	};

	var ShapeAttributeSet=function(attrs){
		var attrNames=["reflection", "diffusion", "shininess", "transparency", "refractionIndex", "roughness"];
		var attrValues=[0.5, 0.5, 0.5, 0, 1, 0];
		var getAttributeByName=function(name){
			var v=0;
			for(var i=0;i<attrNames.length;i++){
				if(attrNames[i]==name){v=attrValues[i];}
			}
			return v;
		};
		var setAttributes=function(attrs){
			//attrs is like {reflection: 0.5, shininess: 0.3}
			for(var i=0;i<attrNames.length;i++){
				var n=attrNames[i];
				if(attrs.hasOwnProperty(n)){attrValues[i]=attrs[n];}
			}
		};
		var toString=function(){
			var s='';
			for(var i=0;i<attrNames.length;i++){s+=attrNames[i]+'="'+attrValues[i]+'" ';}
			return s;
		};
		var toString2=function(){
			var s='';
			for(var i=0;i<attrNames.length;i++){s+=attrNames[i]+': '+attrValues[i]+((i==attrNames.length-1)?'':', ');}
			return '{'+s+'}';
		};
		var clone=function(){
			var attrs={};
			for(var i=0;i<attrNames.length;i++){
				attrs[attrNames[i]]=attrValues[i];
			}
			return ShapeAttributeSet(attrs);
		};
		var getAttrNames=function(){return attrNames;};
		if(attrs){setAttributes(attrs);}
		return {
			getAttributeByName: getAttributeByName,
			setAttributes: setAttributes,
			toString: toString,
			toString2: toString2,
			getAttrNames: getAttrNames,
			clone: clone
		};
	};

	var threeD=(function(){
		var or, xu, yu, zu;
		var Point=function(x_, y_, z_){
			var x=x_;
			var y=y_;
			var z=z_;
			var p={
				x: function(){return x;},
				y: function(){return y;},
				z: function(){return z;},
				plus: function(p){return Point(p.x()+x, p.y()+y,p.z()+z);},
				scale: function(r){return Point(r*x,r*y,r*z);},
				minus: function(p){return Point(x-p.x(), y-p.y(),z-p.z());},
				dot: function(p){return x*p.x()+y*p.y()+z*p.z();},
				cross: function(p){return Point(y*p.z()-z*p.y(),z*p.x()-x*p.z(),x*p.y()-y*p.x());},
				norm: function(){return Math.sqrt(x*x+y*y+z*z);},
				unit: function(){if(this.norm()==0){return this;}else{return this.scale(1/this.norm());}},
				project: function(p){
					var u=this.unit();
					return u.scale(u.dot(p));
				},
				projectOnPlane: function(p,n){
					var tmp=this.minus(p);
					return p.plus(tmp.minus(n.project(tmp)));
				},
				getSomePerpendicularVector: function(){
					if(this.cross(xu).norm()!=0){
						return xu.projectOnPlane(or, this).unit();
					}
					else if(this.cross(yu).norm()!=0){
						return yu.projectOnPlane(or, this).unit();
					}
					else if(this.cross(zu).norm()!=0){
						return zu.projectOnPlane(or, this).unit();
					}
				},
				rotate: function(around, axis, angle){
					var op=this.minus(around);
					if(axis==0){
						var npy=op.y()*Math.cos(angle)-op.z()*Math.sin(angle);
						var npz=op.z()*Math.cos(angle)+op.y()*Math.sin(angle);
						return around.plus(Point(op.x(), npy, npz));
					}
					if(axis==1){
						var npz=op.z()*Math.cos(angle)-op.x()*Math.sin(angle);
						var npx=op.x()*Math.cos(angle)+op.z()*Math.sin(angle);
						return around.plus(Point(npx, op.y(), npz));
					}
					if(axis==2){
						var npx=op.x()*Math.cos(angle)-op.y()*Math.sin(angle);
						var npy=op.y()*Math.cos(angle)+op.x()*Math.sin(angle);
						return around.plus(Point(npx, npy, op.z()));
					}
				},
				rotateWithRotation: function(r){
					return this.rotate(r.around, r.axis, r.angle);
				},
				rotateWithOtherRotation: function(r){
					var op=this.minus(r.around);
					var opUnchanged=r.direction.project(op);
					op=op.minus(opUnchanged);
					if(op.norm()>0){
						var yAxis=r.direction.cross(op);
						op=op.scale(Math.cos(r.angle)).plus(yAxis.unit().scale(op.norm()*Math.sin(r.angle)));
						return r.around.plus(opUnchanged).plus(op);
					}else{
						return Point(x, y, z);
					}
				},
				perpendicularTo: function(p){return Math.abs(this.dot(p))<0.0005;},
				isZero: function(){return x==0&&y==0&&z==0;},
				equals: function(p){return x==p.x()&&y==p.y()&&z==p.z();},
				sameDirection: function(p){return !this.isZero()&&!p.isZero()&&(this.dot(p)==this.norm()*p.norm());},
				toString: function(){return '('+x+','+y+','+z+')';}
			};
			return p;
		};
		var Line=function(point1, point2){
			var p1=point1;
			var p2=point2;
			var baseVector=point2.minus(point1);
			var intersectWithPlane=function(point, normal){
				if(baseVector.perpendicularTo(normal)){return null;}
				var t=-normal.dot(p1.minus(point))/normal.dot(baseVector);
				return p1.plus(baseVector.scale(t));
			};
			var l={
				p1: function(){return p1;},
				p2: function(){return p2;},
				baseVector: function(){return baseVector;},
				intersectWithPlane: intersectWithPlane
			};
			return l;
		};
		var Rotation=function(around, axis, angle){
			return {
				around: around,
				axis: axis,
				angle: angle
			};
		};
		var OtherRotation=function(around, axisDirection, angle){
			return {
				around: around,
				direction: axisDirection,
				angle: angle
			};
		};
		or=Point(0,0,0);
		xu=Point(1,0,0);
		yu=Point(0,1,0);
		zu=Point(0,0,1);
		return {
			Point: Point,
			Line: Line,
			Rotation: Rotation,
			OtherRotation: OtherRotation,
			or: or,
			xu: xu,
			yu: yu,
			zu: zu
		};
	})();
	var Point=threeD.Point;
	var Line=threeD.Line;
	var OtherRotation=threeD.OtherRotation;
	var Rotation=threeD.Rotation;
	var or=threeD.or;
	var xu=threeD.xu;
	var yu=threeD.yu;
	var zu=threeD.zu;

	var twoD=(function(){
		var w,h,corners,ltcorners;
		var d=function(lt1, lt2){return plt(lt1).minus(plt(lt2)).norm();};
		var p=function(x,y){return Point(x,y,0);};
		var plt=function(lt){return p(lt.left, lt.top);};
		var ltp=function(p){return {left:p.x(),top:p.y()};};
		var intersectLineSegments=function(p1,p2,p3,p4){
			var a=p2.minus(p1);
			var b=p4.minus(p3);
			var c=p3.minus(p1);
			var d=a.cross(b);
			var nd=d.norm();
			if(nd==0){return null;}
			var i=p1.plus(a.scale(c.cross(b).dot(d)/Math.pow(nd, 2)));
			return ltp(i);
		};
		var distanceToLine=function(p1, direction, p2){
			var l=p2.minus(p1);
			return l.norm()*l.unit().dot(direction.unit());
		};
		var distanceToEdge=function(lt1, lt2){
			var direction=plt(lt2).minus(plt(lt1));
			var d=0;
			for(var i=0;i<4;i++){
				var dd=distanceToLine(plt(lt2), direction, corners[i]);
				if(dd>=d){d=dd;}
			}
			return d;
		};
		var moveToEdge=function(lt1, lt2, w, h){
			var d_=d(lt1, lt2);
			var d1=distanceToEdge(lt1, lt2);
			return {left:lt1.left+(lt2.left-lt1.left)*(1+d1/d_),top:lt1.top+(lt2.top-lt1.top)*(1+d1/d_)};
		};
		var setCorners=function(){
			corners=[p(0,0), p(0,h), p(w, h), p(w,0)];
			ltcorners=[{left:0,top:0},{left:0,top:h},{left: w, top:h},{left:w,top:0}];
		};
		var makeInfinite=function(lt1, lt2, hlt){
			var d_=d(lt1, lt2);
			var nlt1=lt1;
			var nlt2=lt2;
			if(d_!=0){
				if(lt1.left!=lt2.left){
					if(hlt!=null&&((hlt.left<lt1.left&&lt1.left<lt2.left)||(hlt.left>lt1.left&&lt1.left>lt2.left))){
						nlt1=hlt;
					}else{
						var toEdge=moveToEdge(lt2, lt1, w, h);
						nlt1=toEdge;
					}
					if(hlt!=null&&((hlt.left<lt2.left&&lt2.left<lt1.left)||(hlt.left>lt2.left&&lt2.left>lt1.left))){
						nlt2=hlt;
					}else{
						var toEdge=moveToEdge(lt1, lt2, w, h);
						nlt2=toEdge;
					}

				}else{
					if(hlt!=null&&((hlt.top<lt1.top&&lt1.top<lt2.top)||(hlt.top>lt1.top&&lt1.top>lt2.top))){
						nlt1=hlt;
					}else{
						var toEdge=moveToEdge(lt2, lt1, w, h);
						nlt1=toEdge;
					}
					if(hlt!=null&&((hlt.top<lt2.top&&lt2.top<lt1.top)||(hlt.top>lt2.top&&lt2.top>lt1.top))){
						nlt2=hlt;
					}else{
						var toEdge=moveToEdge(lt1, lt2, w, h);
						nlt2=toEdge;
					}

				}
			}
			return [nlt1, nlt2];
		};
		var completeTheSquare=function(lt1, lt2, lt3){
			var step1=plt(lt1);
			var step2=plt(lt2);
			var a=step2.minus(step1);
			var b=plt(lt3).minus(step1);
			if(a.cross(b).z()>0){
				var step3=step2.plus(Point(-a.y(), a.x(), 0));
			}else{
				var step3=step2.plus(Point(a.y(), -a.x(), 0));
			}
			var step4=step3.plus(a.scale(-1));
			return [ltp(step3),ltp(step4)];
		};
		return {
			setWh: function(w_,h_){w=w_;h=h_;setCorners();},
			ltcorners: function(){return ltcorners;},
			makeInfinite: makeInfinite,
			completeTheSquare: completeTheSquare
		};
	})();

	var viewPort=(function(){
		var w,h,normal, leftAxis, topAxis, leftAxisNorm, topAxisNorm, lu, tu, ndvpmlt; //last one meaning normal.dot(viewPoint.minus(leftTop))
		var setLeftAxis=function(la){leftAxis=la;leftAxisNorm=la.norm();setLu();};
		var setTopAxis=function(ta){topAxis=ta;topAxisNorm=ta.norm();setTu();};
		var setLu=function(){lu=leftAxis.unit();};
		var setTu=function(){tu=topAxis.unit();};
		var setNdvpmlt=function(){ndvpmlt=normal.dot(viewPoint.minus(leftTop));};
		var leftTop=Point(1, 1, -1);
		setLeftAxis(Point(-1,0,0));
		setTopAxis(Point(0,-1,0));
		var viewPoint=Point(0,0,-2);
		var setSize=function(){
			var r=h/w;
			leftTop=Point(0.5, 0.5*r,-1);
			setLeftAxis(leftAxis);
			setTopAxis(topAxis.scale(r));
			normal=leftAxis.cross(topAxis);
			setNdvpmlt();
		};
		var setScale=function(r){
			leftAxis=leftAxis.scale(r);
			topAxis=topAxis.scale(r);
		};
		var setUp=function(leftTop_, leftAxis_, topAxis_, viewPoint_){
			leftTop=leftTop_;
			setLeftAxis(leftAxis_);
			setTopAxis(topAxis_.unit().scale(leftAxis_.norm()*h/w));
			normal=leftAxis.cross(topAxis);
			viewPoint=viewPoint_;
			var middle=leftTop.plus(leftAxis.plus(topAxis).scale(0.5));
			viewPoint=middle.plus(viewPoint.minus(middle).minus(viewPoint.minus(middle).projectOnPlane(or, normal)));
			setNdvpmlt();
			turnToCenter();
		};
		var turnToCenter=function(){
			var crossX=topAxis.unit().cross(leftAxis.cross(or.minus(viewPoint)).unit());
			var dirX=crossX.dot(leftAxis)>=0?-1:1;
			var angleX=dirX*Math.asin(crossX.norm());
			rot2X(angleX);
			console.log("turning viewport around x by "+angleX);
			var crossY=leftAxis.unit().cross(topAxis.cross(or.minus(viewPoint)).unit());
			var dirY=crossY.dot(topAxis)>=0?1:-1;
			var angleY=dirY*Math.asin(crossY.norm());
			console.log("turning viewport around y by "+angleY);
			rot2Y(angleY);
		};
		var horizonLt=function(line){
			var direction=line.baseVector();
			if(direction.perpendicularTo(normal)){return null;}
			if(direction.dot(normal)<0){direction=direction.scale(-1);}
			return lt(viewPoint.plus(direction));
		};
		var getVisiblePointsOn=function(line){
			if(line.baseVector().perpendicularTo(normal)){
				if(line.p1().minus(viewPoint).dot(normal)>0){return [lt(line.p1()), lt(line.p2())];}
				else{return [null, null];}
			}
			var p1=line.intersectWithPlane(leftTop, normal);
			var p2=p1.scale(0.5).plus(line.intersectWithPlane(viewPoint, normal).scale(0.5));
			return [lt(p1),lt(p2)];
		};
		var getVisiblePointsBetween=function(p1, p2){
			var ltp1=lt(p1);
			var ltp2=lt(p2);
			if(ltp1==null&&ltp2==null){return [null, null];}
			if(ltp1!=null&&ltp2!=null){return [ltp1, ltp2];}
			var p3=Line(p1,p2).intersectWithPlane(viewPoint, normal);
			if(p3==null){return [null, null];}
			if(ltp1==null){
				return [lt(p2.plus(p3).scale(0.5)), ltp2];
			}
			if(ltp2==null){
				return [ltp1, lt(p1.plus(p3).scale(0.5))];
			}
		};
		var lt=function(point){
			var lb=point.minus(viewPoint);
			if(lb.perpendicularTo(normal)){return null;}
			var t=-ndvpmlt/normal.dot(lb);
			if(t<0){return null;}
			var leftTopToInPlane=viewPoint.plus(lb.scale(t)).minus(leftTop);
			var l=lu.dot(leftTopToInPlane)/leftAxisNorm;
			var t=tu.dot(leftTopToInPlane)/topAxisNorm;
			return {left: l*w,top: t*h};
		};
		var rotateWithOtherRotation=function(around, axis, angle){
			var r=OtherRotation(around, axis, angle);
			var r2=OtherRotation(or, axis, angle);
			leftTop=leftTop.rotateWithOtherRotation(r);
			leftAxis=leftAxis.rotateWithOtherRotation(r2);
			topAxis=topAxis.rotateWithOtherRotation(r2);
			viewPoint=viewPoint.rotateWithOtherRotation(r);
			normal=leftAxis.cross(topAxis);
			setLu();
			setTu();
		};
		var rotX=function(angle){
			rotateWithOtherRotation(or, leftAxis, angle);
		};
		var rotY=function(angle){
			rotateWithOtherRotation(or, topAxis, angle);
		};
		var rotZ=function(angle){
			rotateWithOtherRotation(or, leftAxis.cross(topAxis), angle);
		};
		var rot2X=function(angle){
			rotateWithOtherRotation(viewPoint, leftAxis, angle);
		};
		var rot2Y=function(angle){
			rotateWithOtherRotation(viewPoint, topAxis, angle);
		};
		var scale=function(r){
			leftTop=leftTop.scale(r);
			setLeftAxis(leftAxis.scale(r));
			setTopAxis(topAxis.scale(r));
			viewPoint=viewPoint.scale(r);
			normal=leftAxis.cross(topAxis);
			setNdvpmlt();
		};
		var scale2=function(r){
			var middleOfView=leftTop.plus(leftAxis.plus(topAxis).scale(0.5));
			viewPoint=middleOfView.plus(viewPoint.minus(middleOfView).scale(r));
			setNdvpmlt();
		};
		var toString=function(){
			var s='<viewport w="'+w+'" h="'+h+'">';
			s+='<lefttop x="'+leftTop.x()+'" y="'+leftTop.y()+'" z="'+leftTop.z()+'" />';
			s+='<leftaxis x="'+leftAxis.x()+'" y="'+leftAxis.y()+'" z="'+leftAxis.z()+'" />';
			s+='<topaxis x="'+topAxis.x()+'" y="'+topAxis.y()+'" z="'+topAxis.z()+'" />';
			s+='<viewpoint x="'+viewPoint.x()+'" y="'+viewPoint.y()+'" z="'+viewPoint.z()+'" />';
			s+='</viewport>';
			return s;
		};
		var toString2=function(){
			return '{lefttop: ['+leftTop.x()+','+leftTop.y()+','+leftTop.z()+'],leftaxis: ['+leftAxis.x()+','+leftAxis.y()+','+leftAxis.z()+'],topaxis: ['+topAxis.x()+','+topAxis.y()+','+topAxis.z()+'],viewpoint: ['+viewPoint.x()+','+viewPoint.y()+','+viewPoint.z()+']}';
		};
		return {
			lt: lt,
			setWh: function(w_, h_){w=w_; h=h_; setSize();},
			w: function(){return w;},
			h: function(){return h;},
			leftTop: function(){return leftTop;},
			leftAxis: function(){return leftAxis;},
			topAxis: function(){return topAxis},
			normal: function(){return normal;},
			viewPoint: function(){return viewPoint;},
			rotX: rotX,
			rotY: rotY,
			rotZ: rotZ,
			rot2X: rot2X,
			rot2Y: rot2Y,
			getVisiblePointsBetween: getVisiblePointsBetween,
			getVisiblePointsOn: getVisiblePointsOn,
			toString: toString,
			toString2: toString2,
			scale: scale,
			scale2: scale2,
			horizonLt: horizonLt,
			setUp: setUp,
			turnToCenter: turnToCenter
		};
	})();
	
	var LineSegmentFactory=(function(){
		var lineSegments=[];
		//var currentNumber=0;
		var LineSegment=function(from_, to_){
			var from, to, thisSvg;
			var setFromTo=function(from_, to_){
				from=from_;
				to=to_;
			};
			var draw=function(){
				var visible=viewPort.getVisiblePointsBetween(from, to);
				var flt=visible[0];
				var tlt=visible[1];
				if(flt==null||tlt==null){
					thisSvg.none();
				}else{
					thisSvg.setFromTo(flt, tlt);
				}
				thisSvg.draw();
			};
			var setColor=function(color){
				thisSvg.setColor(color);
			};
			var highlightOn=function(){thisSvg.highlightOn();};
			var highlightOff=function(){thisSvg.highlightOff();};
			var setSvg=function(svg_){
				thisSvg=svg_;
			};
			var remove=function(){thisSvg.remove();};
			setFromTo(from_, to_);
			return {
				setFromTo: setFromTo,
				draw: draw,
				setColor: setColor,
				setSvg: function(svg_){setSvg(svg_); return this;},
				highlightOn: highlightOn,
				highlightOff: highlightOff,
				remove: remove
			};
		};
		var makeArrow=function(from, to, color, thickness){
			var shaft, arrowSide1, arrowSide2;
			shaft=LineSegment(from, to).setSvg(svg.addLineSegment(0,0,0,0, color, thickness));
			arrowSide1=LineSegment(from, to).setSvg(svg.addLineSegment(0,0,0,0, color, thickness));
			arrowSide2=LineSegment(from, to).setSvg(svg.addLineSegment(0,0,0,0, color, thickness));
			var setFromTo=function(from, to){
				shaft.setFromTo(from, to);
				var turnDir=from.minus(to).getSomePerpendicularVector();
				arrowSide1.setFromTo(to, to.plus(from.minus(to).rotateWithOtherRotation(OtherRotation(or, turnDir, Math.PI/8)).scale(0.3)));
				arrowSide2.setFromTo(to, to.plus(from.minus(to).rotateWithOtherRotation(OtherRotation(or, turnDir, -Math.PI/8)).scale(0.3)))
			};
			setFromTo(from, to);
			var highlightOn=function(){shaft.highlightOn();arrowSide1.highlightOn();arrowSide2.highlightOn();};
			var highlightOff=function(){shaft.highlightOff();arrowSide1.highlightOff();arrowSide2.highlightOff();};
			var remove=function(){removeLineSegment(shaft);removeLineSegment(arrowSide1);removeLineSegment(arrowSide2);};
			lineSegments.push(shaft);
			lineSegments.push(arrowSide1);
			lineSegments.push(arrowSide2);
			return {setFromTo:setFromTo, highlightOn:highlightOn, highlightOff:highlightOff, remove:remove};
		};
		var makeLineSegment=function(from, to, color, thickness){
			var ls=LineSegment(from, to).setSvg(svg.addLineSegment(0,0,0,0, color, thickness));
			lineSegments.push(ls);
			return ls;
		};
		var removeLineSegment=function(lineSegment){
			lineSegment.remove();
			var index=lineSegments.indexOf(lineSegment);
			lineSegments.splice(index, 1);
		};
		var draw=function(){for(var i=0;i<lineSegments.length;i++){
			lineSegments[i].draw();
		}};
		return {
			makeLineSegment: makeLineSegment,
			makeArrow: makeArrow,
			removeLineSegment: removeLineSegment,
			lineSegments: function(){return lineSegments;},
			draw: draw
		};
	})();

	var LineLineFactory=(function(){
		var lineLines=[];
		//var currentNumber=0;
		var LineLine=function(p1_, p2_){
			var p1,p2,line,thisSvg;
			var setFromTo=function(p1_,p2_){
				p1=p1_;
				p2=p2_;
				line=Line(p1_,p2_);
			};
			var draw=function(){
				var visible=viewPort.getVisiblePointsOn(line);
				var p1lt=viewPort.lt(p1);
				if(p1lt==null){p1lt=visible[0];}
				var p2lt=viewPort.lt(p2);
				if(p2lt==null){p2lt=visible[1];}
				var hlt=viewPort.horizonLt(line);
				if(p1lt==null&&p2lt==null){
					thisSvg.none();
				}else{
					thisSvg.setFromTo(p1lt, p2lt);
					thisSvg.makeInfinite(hlt);
				}
				thisSvg.draw();
			};
			var remove=function(){thisSvg.remove();};
			var setColor=function(color){
				thisSvg.setColor(color);
			};
			var highlightOn=function(){thisSvg.highlightOn();};
			var highlightOff=function(){thisSvg.highlightOff();};
			var setSvg=function(svg_){
				thisSvg=svg_;
			};
			setFromTo(p1_,p2_);
			return {
				setFromTo: setFromTo,
				draw: draw,
				setColor: setColor,
				setSvg: function(svg_){setSvg(svg_); return this;},
				highlightOn: highlightOn,
				highlightOff: highlightOff,
				remove: remove
			};
		};
		var makeLineLine=function(p1, p2, color, thickness){
			var ll=LineLine(p1, p2).setSvg(svg.addLineLine(0,0,0,0, color, thickness));
			lineLines.push(ll);
			return ll;
		};
		var removeLineLine=function(lineLine){
			lineLine.remove();
			var index=lineLines.indexOf(lineLine);
			lineLines.splice(index, 1);
		};
		var draw=function(){
			for(var i=0;i<lineLines.length;i++){
				lineLines[i].draw();
			}
		};
		return {
			makeLineLine: makeLineLine,
			removeLineLine: removeLineLine,
			lineLines: function(){return lineLines;},
			draw: draw
		};
	})();

	var PlaneFactory=(function(){
		var planes=[];
		//var currentNumber=0;
		var Plane=function(point_, normal_, color_){
			var normalArrow=LineSegmentFactory.makeArrow(point_, point_.plus(normal_), color_, 3);
			var point, normal, color, thisSvg, gridLines, xAxis, yAxis, shapeAttributes;
			point=point_;
			normal=normal_;
			color=color_;
			shapeAttributes=ShapeAttributeSet({reflection: 0});
			var setShapeAttributes=function(attrs_){shapeAttributes=attrs_;};
			var setAxes=function(){
				xAxis=normal.getSomePerpendicularVector();
				yAxis=normal.cross(xAxis);
			};
			var getHorizonLts=function(){
				var horizonDirections=[];
				horizonDirections[0]=normal.cross(viewPort.leftAxis());
				horizonDirections[1]=normal.cross(horizonDirections[0]);
				horizonDirections[2]=horizonDirections[0].plus(horizonDirections[1]);
				horizonDirections[3]=normal.cross(viewPort.topAxis());
				horizonDirections[4]=normal.cross(horizonDirections[3]);
				horizonDirections[5]=horizonDirections[3].plus(horizonDirections[4]);
				var nonNullHlt=[];
				var count=0;
				for(var i=0;i<horizonDirections.length;i++){
					var hlt=viewPort.horizonLt(Line(point, point.plus(horizonDirections[i])));
					if(hlt!=null){
						nonNullHlt[count++]=hlt;
					}
					if(count==2){break;}
				}
				return nonNullHlt;
			};
			var getInPlaneLt=function(){
				var lt_;
				var inPlane1=Line(viewPort.leftTop(), viewPort.leftTop().plus(viewPort.leftAxis())).intersectWithPlane(point, normal);
				var inPlane2=Line(viewPort.leftTop(), viewPort.leftTop().plus(viewPort.topAxis())).intersectWithPlane(point, normal);
				if(inPlane1==null){
					lt_=viewPort.lt(inPlane2);
				}else{
					lt_=viewPort.lt(inPlane1);
				}
				return lt_;
			};
			var pointWithCoords=function(x,y){
				return point.plus(xAxis.scale(x)).plus(yAxis.scale(y));
			};
			var getPairwiseGridPoints=function(){
				var gp=[];
				var n=20;
				var f=function(i){return i+Math.pow(i, 3)/5;}
				for(var i=-n;i<=n;i++){
					gp.push([pointWithCoords(f(i),n), pointWithCoords(f(i),-n)]);
					gp.push([pointWithCoords(-n,f(i)), pointWithCoords(n,f(i))]);
				}
				return gp;
			};
			var draw=function(){
				if(normal.cross(viewPort.normal()).norm()==0){
					if(point.minus(viewPort.viewPoint()).dot(viewPort.normal())>=0){thisSvg.full();}else{thisSvg.none();}
					thisSvg.draw();
					return;
				}
				var nonNullHlt=getHorizonLts();
				thisSvg.setHorizonPoints(nonNullHlt[0], nonNullHlt[1], getInPlaneLt());
				thisSvg.draw();
			};
			var setColor=function(color_){
				color=color_;
				thisSvg.setColor(color_);
				for(var i in gridLines){gridLines[i].setColor(color_);}
			};
			var highlightOn=function(){
				normalArrow.highlightOn();
				thisSvg.highlightOn();
				for(var i=0;i<gridLines.length;i++){
					gridLines[i].highlightOn();
				}
			};
			var highlightOff=function(){
				normalArrow.highlightOff();
				thisSvg.highlightOff();
				for(var i=0;i<gridLines.length;i++){
					gridLines[i].highlightOff();
				}
			};
			var setPointAndNormal=function(point_, normal_){
				if(!point_.equals(point)||!normal_.equals(normal)){
					if(normal_.norm()==0){alert("A plane with normal (0,0,0)? Let's not.");return;}
					console.log("[plane] setting point "+point_.toString()+" and normal "+normal_.toString()+"!");
					point=point_;
					normal=normal_;
					normalArrow.setFromTo(point_, point_.plus(normal_));
					setAxes();
					setGrid();
				}
			};
			var toString=function(){
				return '<plane '+shapeAttributes.toString()+'color="'+color.toString2()+'">'+
				'<point x="'+point.x()+'" y="'+point.y()+'" z="'+point.z()+'"/>'+
				'<normal x="'+normal.x()+'" y="'+normal.y()+'" z="'+normal.z()+'"/>'+
				'</plane>';
			};
			var toString2=function(){
				return '{type: "plane", point: ['+point.x()+','+point.y()+','+point.z()+'], normal: ['+normal.x()+','+normal.y()+','+normal.z()+'], color: '+color.toString3()+', shapeAttributes: '+shapeAttributes.toString2()+'}';
			};
			var setSvg=function(svg_){
				thisSvg=svg_;
			};
			var remove=function(){
				normalArrow.remove();
				thisSvg.remove();
				for(var i in gridLines){
					LineLineFactory.removeLineLine(gridLines[i]);
				}
			};
			var setGrid=function(){
				var pairwiseGridPoints=getPairwiseGridPoints();
				for(var i in pairwiseGridPoints){
					gridLines[i].setFromTo(pairwiseGridPoints[i][0],pairwiseGridPoints[i][1]);
				}
			};
			var makeGrid=function(){
				gridLines=[];
				var pairwiseGridPoints=getPairwiseGridPoints();
				for(var i in pairwiseGridPoints){
					gridLines.push(LineLineFactory.makeLineLine(pairwiseGridPoints[i][0],pairwiseGridPoints[i][1], color, 0.5));
				}
			};
			setAxes();
			makeGrid();
			return {
				draw: draw,
				setColor: setColor,
				setSvg: function(svg_){setSvg(svg_);return this;},
				toString: toString,
				toString2: toString2,
				point: function(){return point;},
				normal: function(){return normal;},
				color: function(){return color;},
				setPointAndNormal: setPointAndNormal,
				highlightOn: highlightOn,
				highlightOff: highlightOff,
				remove: remove,
				shapeAttributes: function(){return shapeAttributes;},
				setShapeAttributes: function(attrs_){setShapeAttributes(attrs_); return this;}
			};
		};
		var makePlane=function(point, normal, color){
			var svgThing=svg.addPlane(0,0,0,0,0,0,0,0, color);
			var p=Plane(point, normal, color).setSvg(svgThing);
			planes.push(p);
			return p;
		};
		var removePlane=function(plane){
			plane.remove();
			var index=planes.indexOf(plane);
			planes.splice(index, 1);
		};
		var clonePlane=function(plane){
			makePlane(plane.point(), plane.normal(), plane.color().clone()).setShapeAttributes(plane.shapeAttributes().clone());
		};
		var draw=function(){for(var i=0;i<planes.length;i++){planes[i].draw();}};
		return {
			makePlane: makePlane,
			removePlane: removePlane,
			clonePlane:clonePlane,
			planes: function(){return planes;},
			draw:draw
		};
	})();

	var SphereFactory=(function(){
		var spheres=[];
		var lightSources=[];
		//var currentNumber=0;
		var Sphere=function(center_, radius_, color_, toBecomeLightSource){
			var center, radius, color, gridLineSegments, thisSvg, shapeAttributes;
			center=center_;
			radius=radius_;
			color=color_;
			shapeAttributes=ShapeAttributeSet({transparency:0.4, refractionIndex:0.5});
			var setShapeAttributes=function(attrs_){shapeAttributes=attrs_;};
			var draw=function(){
				var toCenter=center.minus(viewPort.viewPoint());
				var d=toCenter.norm();
				var r=radius;
				if(d<=r){thisSvg.none();thisSvg.draw();return;}
				var startingPoint=center.plus(toCenter.cross(viewPort.leftAxis()).unit().scale(d*r/Math.sqrt(d*d-r*r)));
				var pointList=[startingPoint];
				var n=24;
				var rot=OtherRotation(viewPort.viewPoint(), toCenter, 2*Math.PI/n);
				for(var i=1;i<n;i++){
					startingPoint=startingPoint.rotateWithOtherRotation(rot);
					pointList[pointList.length]=startingPoint;
				}
				var ltList=[];
				for(var i=0;i<pointList.length;i++){
					var lt=viewPort.lt(pointList[i]);
					if(lt!=null){ltList[ltList.length]=lt;}
				}
				thisSvg.setPoints(ltList);
				thisSvg.draw();
			};
			var setColor=function(color_){
				color=color_;
				thisSvg.setColor(color);
				for(var i in gridLineSegments){
					gridLineSegments[i].setColor(color_);

				}
			};
			var highlightOn=function(){
				thisSvg.highlightOn();
				for(var i=0;i<gridLineSegments.length;i++){
					gridLineSegments[i].highlightOn();
				}
			};
			var highlightOff=function(){
				thisSvg.highlightOff();
				for(var i=0;i<gridLineSegments.length;i++){
					gridLineSegments[i].highlightOff();
				}
			};
			var setCenterAndRadius=function(center_,radius_){
				if(!center_.equals(center)||radius_!=radius){
					center=center_;
					radius=radius_;
					setGrid();
				}
			};
			var pointWithCoords=function(lo, la){
				return center.plus(xu.rotate(or, 2, la).rotate(or, 1, lo).scale(radius));
			};
			var gridAngle=Math.PI/8;
			var circleParts=20;
			var getPairwiseGridPoints=function(){
				var gp=[];
				for(var lo=-Math.PI;lo<=Math.PI;lo+=gridAngle){
					var pointsOnMeridian_=pointsOnMeridian(lo,circleParts);
					for(var i=1;i<pointsOnMeridian_.length;i++){
						gp.push([pointsOnMeridian_[i-1], pointsOnMeridian_[i]]);
					}
				}
				for(var la=-Math.PI/2;la<=Math.PI/2;la+=gridAngle){
					var pointsOnLatitude_=pointsOnLatitude(la, circleParts);
					for(var i=1;i<pointsOnLatitude_.length;i++){
						gp.push([pointsOnLatitude_[i-1], pointsOnLatitude_[i]]);
					}
				}
				return gp;
			};
			var pointsOnMeridian=function(lo, n){
				var pointsOnMeridian_=[];
				for(var la=-Math.PI/2; la<=Math.PI/2; la+=2*Math.PI/n){
					pointsOnMeridian_[pointsOnMeridian_.length]=pointWithCoords(lo,la);
				}
				return pointsOnMeridian_;
			};
			var pointsOnLatitude=function(la, n){
				var pointsOnLatitude_=[];
				for(var lo=-Math.PI;lo<=Math.PI;lo+=2*Math.PI/n){
					pointsOnLatitude_[pointsOnLatitude_.length]=pointWithCoords(lo,la);
				}
				return pointsOnLatitude_;
			};
			var setSvg=function(svg_){thisSvg=svg_;};
			var remove=function(){
				thisSvg.remove();
				for(var i in gridLineSegments){LineSegmentFactory.removeLineSegment(gridLineSegments[i]);}
			};
			var toString=(function(){
				if(!toBecomeLightSource){
					return function(){
						var s='<sphere '+shapeAttributes.toString()+'color="'+color.toString2()+'" radius="'+radius+'">'+
						'<center x="'+center.x()+'" y="'+center.y()+'" z="'+center.z()+'" />'+
						'</sphere>';
						return s;
					};
				}else{
					return function(){
						var s='<lightsource color="'+color.toString2()+'" radius="'+radius+'">'+
						'<location x="'+center.x()+'" y="'+center.y()+'" z="'+center.z()+'" />'+
						'</lightsource>';
						return s;
					};
				}
			})();
			var toString2=(function(){
				if(!toBecomeLightSource){
					return function(){
						//{type: "sphere",center: [0.25,0.25,0.25],radius:0.1,color:[255,255,0]},
						return '{type: "sphere", center: ['+center.x()+','+center.y()+','+center.z()+'], radius: '+radius+', color: '+color.toString3()+', shapeAttributes: '+shapeAttributes.toString2()+'}';
					};
				}else{
					return function(){
						return '{type: "lightsource", center: ['+center.x()+','+center.y()+','+center.z()+'], radius: '+radius+', color: '+color.toString3()+'}';
					};
				}
			})();
			var setGrid=function(){
				var pairwiseGridPoints=getPairwiseGridPoints();
				for(var i in pairwiseGridPoints){
					gridLineSegments[i].setFromTo(pairwiseGridPoints[i][0],pairwiseGridPoints[i][1]);
				}
			};
			var makeGrid=function(){
				gridLineSegments=[];
				var pairwiseGridPoints=getPairwiseGridPoints();
				for(var i in pairwiseGridPoints){
					gridLineSegments.push(LineSegmentFactory.makeLineSegment(pairwiseGridPoints[i][0],pairwiseGridPoints[i][1], color, 0.5));
				}
			};
			makeGrid();
			return {
				draw: draw,
				setColor: setColor,
				setSvg: function(svg_){setSvg(svg_);return this;},
				toString: toString,
				toString2: toString2,
				center: function(){return center;},
				radius: function(){return radius;},
				color: function(){return color;},
				setCenterAndRadius: setCenterAndRadius,
				highlightOn: highlightOn,
				highlightOff: highlightOff,
				remove: remove,
				shapeAttributes: function(){return shapeAttributes;},
				setShapeAttributes: setShapeAttributes
			};
		};
		var removeSphere=function(sphere){
			sphere.remove();
			var index=spheres.indexOf(sphere);
			spheres.splice(index,1);
		};
		var cloneSphere=function(sphere){
			makeSphere(sphere.center(), sphere.radius(), sphere.color().clone()).setShapeAttributes(sphere.shapeAttributes().clone());
		};
		var removeLightSource=function(lightSource){
			lightSource.remove();
			var index=lightSources.indexOf(lightSource);
			lightSources.splice(index, 1);
		};
		var cloneLightSource=function(lightSource){
			makeLightSource(lightSource.center(), lightSource.radius(), lightSource.color().clone());
		};
		var makeSphere=function(center, radius, color){
			var svgThing=svg.addSphere(color);
			var s=Sphere(center, radius, color, false).setSvg(svgThing);
			spheres.push(s);
			return s;
		};
		var makeLightSource=function(center, radius, color){
			var svgThing=svg.addSphere(color);
			var s=Sphere(center, radius, color, true).setSvg(svgThing);
			lightSources.push(s);
			return s;
		};
		var draw=function(){
			for(var i=0;i<spheres.length;i++){
				spheres[i].draw();
			}
			for(var i=0;i<lightSources.length;i++){
				lightSources[i].draw();
			}
		};
		return {
			makeSphere: makeSphere,
			removeSphere: removeSphere,
			removeLightSource: removeLightSource,
			makeLightSource: makeLightSource,
			cloneSphere: cloneSphere,
			cloneLightSource: cloneLightSource,
			spheres: function(){return spheres;},
			lightSources: function(){return lightSources;},
			draw: draw
		};
	})();

	var drawThings=function(){
		svg.drawAxes();
		LineSegmentFactory.draw();
		LineLineFactory.draw();
		PlaneFactory.draw();
		SphereFactory.draw();
	};

	var sceneXml=function(){
		var s='<?xml version="1.0" encoding="UTF-8"?><scene xmlns="http://www.sogyo.nl/efokkema_raytrace" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ><group>';
		var planes=PlaneFactory.planes();
		for(var i=0;i<planes.length;i++){
			s+=planes[i].toString();
		}
		var lightSources=SphereFactory.lightSources();
		for(var i=0;i<lightSources.length;i++){
			s+=lightSources[i].toString();
		}
		var spheres=SphereFactory.spheres();
		for(var i=0;i<spheres.length;i++){
			s+=spheres[i].toString();
		}
		return s+'</group>'+viewPort.toString()+'</scene>';
	};

	var Interaction=(function(){
		var connected=true;
		var doSomething=function(){
			if(connected){
				var req=new XMLHttpRequest();
				req.onload=function(){
					//this.response
					(function(colorString){
						var w=viewPort.w();
						var h=viewPort.h();
						var win=window.open("","","width="+w+", height="+h);
						var canvas=document.createElement('canvas');
						canvas.setAttribute('width',w);
						canvas.setAttribute('height', h);
						canvas.setAttribute('style', 'position:absolute;left:0;top:0');
						win.document.body.appendChild(canvas);
						var currentL=0;
						var currentT=0;
						var color;
						var ctx=canvas.getContext("2d");
						while(colorString.length>0&&currentL<w&&currentT<h){
							color=colorString.substr(0,6);
							ctx.fillStyle="#"+color;
							ctx.fillRect(currentL, currentT,1,1);
							colorString=colorString.substring(6);
							currentT++;
							if(currentT==h){
								currentT=0;
								currentL++;
							}
						}
					})(this.response);
					
				};
				var s=sceneXml();
				req.open("POST","/traceray", true);
				req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				req.send(s+"\n");
			}
		};
		return {
			disconnect: function(){connected=false;},
			connect: function(){connected=true;},
			doSomething: doSomething
		};
	})();

	var svg=(function(){
		var w,h,whereSvg,where,drawAxes;
		var preventDefault=function(evt){evt.preventDefault();};
		var lineSegments=[];
		var lineLines=[];
		var planes=[];
		var spheres=[];
		var lightSources=[];
		var myMouseEvents=(function(){
			var mouseDown=false;
			return {
				onMove: function(dl, dt){
					if(mouseDown){
						viewPort.rotY(dl/500);
						viewPort.rotX(-dt/500);
						drawThings();
					}
				},
				onDown: function(){mouseDown=true;},
				onUp: function(){mouseDown=false;}
			};
		})();

		var myTouchEvents=(function(){
			var oneTouch=(function(){
				var oldx,oldy,dx,dy;
				var down=false;
				var changeTo=function(x,y){dx=x-oldx;dy=y-oldy;oldx=x;oldy=y;return {x:dx,y:dy};};
				return {
					onDown: function(x,y){changeTo(x,y);down=true;},
					onMove: function(x,y){
						if(down){
							var d=changeTo(x,y);
							viewPort.rotY(d.x/500);
							viewPort.rotX(-d.y/500);
							drawThings();
						}

					},
					onUp: function(){down=false;},
					isDown: function(){return down;}
				};
			})();
			var twoTouches=(function(){
				var oldx1,oldy1,oldx2,oldy2,oldd;
				var down=false;
				var changeTo=function(x1,y1,x2,y2){
					var dd;
					oldx1=x1;
					oldy1=y1;
					oldx2=x2;
					oldy2=y2;
					if(oldd){
						dd=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))-oldd;
						oldd=oldd+dd;
					}
					else{
						oldd=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
						dd=0;
					}

					return {d:dd/oldd};
				};
				return {
					onDown: function(x1,y1,x2,y2){
						changeTo(x1,y1,x2,y2);
						down=true;
					},
					onMove: function(x1,y1,x2,y2){
						if(down){
							var d=changeTo(x1,y1,x2,y2);
							viewPort.scale(Math.pow(2,-d.d));
							drawThings();
						}
					},
					onUp: function(){down=false;},
					isDown: function(){return down;}
				};
			})();
			return {
				oneTouch: oneTouch,
				twoTouches: twoTouches
			};
		})();

		var onMouseDown=function(evt){
			preventDefault(evt);
			myMouseEvents.onDown();
		};
		var onMouseUp=function(){myMouseEvents.onUp();};
		var onMouseMove=function(evt){
			preventDefault(evt);
			var dl=evt.movementX;
			var dt=evt.movementY;
			myMouseEvents.onMove(dl, dt);
		};

		var onTouchStart=function(evt){
			preventDefault(evt);
			var touches=evt.changedTouches;
			if(touches.length==1){
				var touch=evt.changedTouches[0];
				if(!myTouchEvents.oneTouch.isDown()){myTouchEvents.oneTouch.onDown(touch.clientX, touch.clientY);}
			}
			
		};
		var onTouchEnd=function(evt){
			myTouchEvents.oneTouch.onUp();
			myTouchEvents.twoTouches.onUp();
		};
		var onTouchMove=function(evt){
			preventDefault(evt);
			var touches=evt.changedTouches;
			if(touches.length==1){
				var touch=evt.changedTouches[0];
				myTouchEvents.oneTouch.onMove(touch.clientX, touch.clientY);
			}
			else{
				var one=evt.changedTouches[0];
				var two=evt.changedTouches[1];
				var x1=one.clientX;
				var y1=one.clientY;
				var x2=two.clientX;
				var y2=two.clientY;
				if(!myTouchEvents.twoTouches.isDown()){myTouchEvents.twoTouches.onDown(x1,y1,x2,y2);}
				else{myTouchEvents.twoTouches.onMove(x1,y1,x2,y2);}

			}
		};
		var newHighlighter=function(color_, svgThing){
			var highlightColor=Color(255,255,255);
			var color=color_;
			var stroke=svgThing.style.stroke;
			var strokeWidth=svgThing.style.strokeWidth;
			return {
				on: function(){
					svgThing.style.fill=color.scale(0.75).plus(highlightColor.scale(0.25)).toString();
					svgThing.style.stroke=color.scale(0.75).plus(highlightColor.scale(0.25)).toString();
					svgThing.style.strokeWidth=strokeWidth?strokeWidth:'2';
				},
				off: function(){
					svgThing.style.fill=color.toString();
					svgThing.style.stroke=strokeWidth?color.toString():'';
					svgThing.style.strokeWidth=strokeWidth;
				},
				setColor: function(color_){color=color_;}
			};
		};
		var SvgLine=function(l1,t1,l2,t2, color_, thickness){
			var color=color_;
			var svgl={};
			var svgElement=whereSvg.appendChild((function(){
				var NS="http://www.w3.org/2000/svg";
				var line=document.createElementNS(NS, 'line');
				line.setAttribute('x1', l1);
				line.setAttribute('y1', t1);
				line.setAttribute('x2', l2);
				line.setAttribute('y2', t2);
				line.setAttribute('style','stroke: '+color_.toString()+'; stroke-width: '+thickness+'; stroke-opacity: 1.5');
				return line;
			})());
			var highlighter=newHighlighter(color_, svgElement);
			var lt1={left:l1,top:t1};
			var lt2={left:l2,top:t1};
			svgl.setFromTo=function(f,t){lt1=f;lt2=t;};
			svgl.draw=function(){
				svgElement.setAttribute("x1", lt1.left);
				svgElement.setAttribute("y1", lt1.top);
				svgElement.setAttribute("x2", lt2.left);
				svgElement.setAttribute("y2", lt2.top);
			};
			svgl.remove=function(){whereSvg.removeChild(svgElement);};
			svgl.setColor=function(color1){
				color=color1;
				highlighter=newHighlighter(color1, svgElement);
				svgElement.setAttribute('style','stroke:'+color1.toString()+';stroke-width: '+thickness+';stroke-opacity: 1.5');
			};
			svgl.highlightOn=function(){highlighter.on();};
			svgl.highlightOff=function(){highlighter.off();};
			svgl.makeInfinite=function(hlt){
				var nlt=twoD.makeInfinite(lt1, lt2, hlt);
				lt1=nlt[0];
				lt2=nlt[1];
			};
			svgl.none=function(){svgl.setFromTo({left:0,top:0},{left:0,top:0});};
			return svgl;
		};
		var SvgPlane=function(l1, t1, l2, t2, l3, t3, l4, t4, color_){
			var color=color_;
			var svgpl={};
			var svgElement=whereSvg.appendChild((function(){
				var NS="http://www.w3.org/2000/svg";
				var polygon=document.createElementNS(NS, 'polygon');
				polygon.setAttribute('points',l1+','+t1+' '+l2+','+t2+' '+l3+','+t3+' '+l4+','+t4);
				polygon.setAttribute('style','fill: '+color_.toString()+'; fill-opacity: 0.4');
				//polygon.setAttribute('id',id);
				return polygon;
			})());
			var highlighter=newHighlighter(color_, svgElement);
			var lt1={left:l1,top:t1};
			var lt2={left:l2,top:t2};
			var lt3={left:l3,top:t3};
			var lt4={left:l4,top:t4};
			svgpl.setPoints=function(lt1_, lt2_, lt3_, lt4_){
				lt1=lt1_;
				lt2=lt2_;
				lt3=lt3_;
				lt4=lt4_;
			};
			svgpl.full=function(){
				var ltcorners=twoD.ltcorners();
				svgpl.setPoints(ltcorners[0], ltcorners[1], ltcorners[2], ltcorners[3]);
			};
			svgpl.none=function(){
				svgpl.setPoints({left:0,top:0},{left:0,top:0},{left:0,top:0},{left:0,top:0});
			};
			svgpl.setHorizonPoints=function(lt1_, lt2_, inPlaneLt){
				var ltlt=twoD.makeInfinite(lt1_, lt2_, null);
				var otherTwo=twoD.completeTheSquare(ltlt[0], ltlt[1], inPlaneLt);
				svgpl.setPoints(ltlt[0], ltlt[1], otherTwo[0], otherTwo[1]);
			
			};
			svgpl.draw=function(){
				svgElement.setAttribute("points", lt1.left+","+lt1.top+" "+lt2.left+","+lt2.top+" "+lt3.left+","+lt3.top+" "+lt4.left+","+lt4.top);
			};
			svgpl.remove=function(){whereSvg.removeChild(svgElement);};
			svgpl.setColor=function(color1){
				color=color1;
				highlighter=newHighlighter(color1, svgElement);
				svgElement.setAttribute('style', 'fill: '+color1.toString()+';fill-opacity: 0.4');
			};
			svgpl.highlightOn=function(){highlighter.on();};
			svgpl.highlightOff=function(){highlighter.off();};
			return svgpl;
		};
		var SvgSphere=function(color_){
			var svgsph={};
			var color=color_;
			var highlightColor=Color(255,255,255);
			var svgElement=whereSvg.appendChild((function(){
				var NS="http://www.w3.org/2000/svg";
				var polygon=document.createElementNS(NS, 'polygon');
				polygon.setAttribute('points','0,0 0,0 0,0');
				polygon.setAttribute('style','fill: '+color_.toString()+'; fill-opacity: 0.4');
				return polygon;
			})());
			var highlighter=newHighlighter(color_, svgElement);
			var points=[{left:0,top:0},{left:0,top:0},{left:0,top:0}];
			svgsph.setPoints=function(list){
				points=list;
			};
			svgsph.none=function(){svgsph.setPoints([{left:0,top:0},{left:0,top:0},{left:0,top:0}]);};
			svgsph.draw=function(){
				var s="";
				for(i in points){s+=points[i].left+","+points[i].top+" ";}
				svgElement.setAttribute("points", s);
			};
			svgsph.setColor=function(color1){
				color=color1;
				highlighter=newHighlighter(color1, svgElement);
				svgElement.style.fill=color1.toString();
				svgElement.style.fillOpacity='0.4';
			};
			svgsph.remove=function(){whereSvg.removeChild(svgElement);};
			svgsph.highlightOn=function(){
				highlighter.on();
			};
			svgsph.highlightOff=function(){
				highlighter.off();
			};
			return svgsph;
		};
		var addPlane=function(l1, t1, l2, t2, l3, t3, l4, t4, color){
			var s=SvgPlane(l1, t1, l2, t2, l3, t3, l4, t4, color);
			planes.push(s);
			return s;
		};
		var addSphere=function(color){
			var s=SvgSphere(color);
			spheres.push(s);
			return s;
		};
		var addLightSource=function(color){
			var s=SvgSphere(color);
			lightSources.push(s);
			return s;
		};
		var addLineSegment=function(l1,t1,l2,t2, color, thickness){
			var s=SvgLine(l1,t1,l2,t2,color, thickness);
			lineSegments.push(s);
			return s;
		};
		var addLineLine=function(l1,t1,l2,t2,color, thickness){
			var s=SvgLine(l1,t1,l2,t2,color, thickness);
			lineLines.push(s);
			return s;
		};
		var svgObject={};
		svgObject.controls=[];
		var init=function(where_, things_){
			where=where_;
			where.style.backgroundColor=Color(0,0,0).toString();
			var makeAxisAndLabel=function(axisName){
				var NS="http://www.w3.org/2000/svg";
				var line=document.createElementNS(NS,'line');
				line.setAttribute('x1', 0);
				line.setAttribute('y1', 0);
				line.setAttribute('x2', 0);
				line.setAttribute('y2', 0);
				line.setAttribute('style', 'stroke:rgb(100,100,100);stroke-width:0.5');
				//line.setAttribute('id',axisName+'Axis');
				var text=document.createElementNS(NS,'text');
				text.setAttribute('x', 0);
				text.setAttribute('y', 0);
				text.setAttribute('fill', 'rgb(100,100,100)');
				//text.setAttribute('id', axisName+'AxisLabel');
				text.appendChild(document.createTextNode(axisName));
				return {axis:line,label:text};
			};
			whereSvg=(function(){
				var NS="http://www.w3.org/2000/svg";
				var svgNode=document.createElementNS(NS,"svg");
				svgNode.ontouchstart=function(event){onTouchStart(event);};
				svgNode.ontouchmove=function(event){onTouchMove(event);};
				svgNode.ontouchend=function(event){onTouchEnd(event);};
				svgNode.onmousedown=function(event){onMouseDown(event);};
				svgNode.onmouseup=function(event){onMouseUp(event);};
				svgNode.onmousemove=function(event){onMouseMove(event);};
				svgNode.setAttribute('width','100%');
				svgNode.setAttribute('height','100%');
				//svgNode.setAttribute('style', 'border: 1px solid #000000');
				return where.appendChild(svgNode);
			})();

			var axesAndLabels=(function(){
				var svgNode=whereSvg;
				var axesAndLabels=[];

				var al1=makeAxisAndLabel('x');
				axesAndLabels.push({axis:svgNode.appendChild(al1.axis),label:svgNode.appendChild(al1.label)});

				var al2=makeAxisAndLabel('y');
				axesAndLabels.push({axis:svgNode.appendChild(al2.axis),label:svgNode.appendChild(al2.label)});

				var al3=makeAxisAndLabel('z');
				axesAndLabels.push({axis:svgNode.appendChild(al3.axis),label:svgNode.appendChild(al3.label)});

				return axesAndLabels;
			})();

			drawAxes=function(){
				var orlt=viewPort.lt(or);
				if(orlt==null){orlt={left:0,top:0};}
				var u=[xu, yu, zu];
				var lt, i, axis, label, visible;
				for(i=0;i<3;i++){
					visible=viewPort.getVisiblePointsBetween(or, u[i]);
					lt=visible[1];
					if(lt==null){lt=orlt;}
					axis=axesAndLabels[i].axis;
					label=axesAndLabels[i].label;
					axis.setAttribute("x1", orlt.left);
					axis.setAttribute("y1", orlt.top);

					axis.setAttribute("x2", lt.left);
					axis.setAttribute("y2", lt.top);
					
					label.setAttribute("x", lt.left-5);
					label.setAttribute("y", lt.top-5);
				};
			};
			svgObject.drawAxes=drawAxes;

			//BEGIN buttons and such

			var positionString=function(offset){
				return offset?('position:absolute; '+((offset.left||offset.left==0)?'left: '+offset.left+'; ':'right: '+offset.right+'; ')+((offset.top||offset.top==0)?'top: '+offset.top+'; ':'bottom: '+offset.bottom+'; ')):'';
			};
			var sizeString=function(size){
				return size?((size.width?'width: '+size.width+'; ':'')+(size.height?'height: '+size.height+'; ':'')):'';
			};

			var makeButton=function(offset, text, onmousedown, onmouseup, opacity, size){
				var opacityString=opacity?'opacity: '+opacity+'; ':'';
				var setInnerHTML;
				var button=document.createElement('div');
				button.setAttribute('style', positionString(offset)+'background-color:rgb(50,50,50);color: #FFFFFF;cursor: hand;padding:0px;font-family:Arial; '+opacityString+sizeString(size));
				button.setAttribute('align','center');
				button.onmousedown=function(event){
					preventDefault(event);
					if(event.which!=1){return;}
					
					onmousedown.call(null);
				};
				button.onmouseover=function(){button.style.backgroundColor='rgb(150,150,150)';};
				var stopFunction=function(){
					if(onmouseup){
						onmouseup.call(null);
					}
				};
				button.onmouseup=stopFunction;
				button.onmouseleave=function(){stopFunction();button.style.backgroundColor='rgb(50,50,50)';};
				//button.onmouseup=onmouseup||function(){};
				button.appendChild((function(){
					var a=document.createElement('div');
					a.setAttribute('style','position:relative;top:50%;transform: translateY(-50%);');
					a.appendChild(document.createTextNode(text));
					setInnerHTML=function(html){a.innerHTML=html;};
					return a;
				})());
				var hideFrom=function(where_){where_.removeChild(button);};
				var toReturn={
					append: function(where_){where_.appendChild(button);delete toReturn.append; return this;},
					setInnerHTML: function(html){setInnerHTML(html);return this;},
					getNode: function(){return button;},
					hideFrom: hideFrom
				};
				return toReturn;
				//return button;
			};

			var makeTable=function(nodesInCells, rowHeights){
				var table=document.createElement('table');
				table.setAttribute('style', 'width:100%;height:100%;margin:0px;padding:0px;border-spacing:0px;color:inherit');
				for(var i=0;i<nodesInCells.length;i++){
					var row=document.createElement('tr');
					row.setAttribute('style','margin:0px;padding:0px');
					if(rowHeights){row.setAttribute('height', rowHeights[i]);}
					for(var j=0;j<nodesInCells[i].length;j++){
						var td=document.createElement('td');
						td.setAttribute('style','margin:0px;padding:0px');
						td.appendChild(nodesInCells[i][j]);
						row.appendChild(td);
					}
					table.appendChild(row);
				}
				return table;
			};

			svgObject.controls.push(makeButton({left:0,bottom:0},'>',function(){
				Interaction.doSomething();
			}, function(){},0.75,{width:'15%',height:'10%'}).append(where));
			var xmlDialog=(function(){
				var xmlDialog=document.createElement('div');
				xmlDialog.setAttribute('style', 'position:absolute;left:0;top:0;background-color:rgb(50,50,50);padding:0px;width:40%;height:90%;display:none;opacity:0.75');
				var button=makeButton(null,'OK',function(){xmlDialog.style.display='none';}, function(){}, 1, {width:100,height:50}).getNode();
				var text=document.createElement('textarea');
				text.setAttribute('style', 'background-color:rgb(50,50,50);color: #FFFFFF;border: none;resize:none;width:100%;height:100%');
				var table=makeTable([[text],[button]],['90%','10%']);
				xmlDialog.appendChild(table);
				where.appendChild(xmlDialog);
				var showXml=function(string){
					var s=string;
					var lines=s.split('<');
					var indent='';
					var minus, equal, line;
					for(var i=1;i<lines.length;i++){
						line=lines[i];
						if(line[0]=='/'){indent=indent.substring(2);}
						lines[i]=indent+'<'+line;
						if(line[0]!='/'&&line.slice(-2)!='/>'){indent=indent+'  ';}
					}
					var s1=lines.join('\n').replace(/^\n/g, '');
					xmlDialog.style.display="initial";
					text.value=s1;
					text.select();
				};
				var hideFrom=function(where_){where_.removeChild(xmlDialog);};
				return {dialog: xmlDialog,text: text,showXml:showXml, hideFrom:hideFrom};
			})();
			svgObject.controls.push(xmlDialog);

			//svgObject.controls.push(makeButton({left:'15%',bottom:0},'shapes', function(){shapeListDialog.showShapeList(sceneShapeList());}, function(){},0.75,{width:'15%',height:'10%'}).append(where));
			svgObject.controls.push(makeButton({left:'15%',bottom:0},'shapes', function(){shapeListDialog.showShapeList(sceneShapeList());}, function(){},0.75,{width:'15%',height:'10%'}).append(where).setInnerHTML(Images["pencil"]));
			var shapeListDialog=(function(){
				var shapeListDialog=document.createElement('div');
				var onEdit=function(){};
				var dropDown;
				shapeListDialog.setAttribute('style', 'position:absolute;left:0;top:0;background-color: rgb(50,50,50);padding:0px;width:40%;height:90%;display:none;font-family:Arial;opacity:0.75');
				var button=makeButton(null,'DONE',function(){dropDown.hide();shapeListDialog.style.display='none';onEdit();}, function(){}, 1, {width:100,height:50}).getNode();
				var button3=makeButton(null, 'CANCEL', function(){dropDown.hide();shapeListDialog.style.display='none';}, function(){}, 1, {width:100,height:50}).getNode();
				var button2=makeButton(null,'+',function(){dropDown.show();}, function(){}, 1, {width:100,height:50}).getNode();
				var text=document.createElement('div');
				text.setAttribute('style','width:100%;height:100%;overflow:scroll;padding:0px;margin:0px');
				var table=makeTable([[text],[makeTable([[button,button3,button2]])]],['90%','10%']);
				shapeListDialog.appendChild(table);
				dropDown=(function(){
					var dropDown=document.createElement('div');
					dropDown.setAttribute('style', 'position:absolute;right:0;bottom:10%;padding:0px;display:none');
					var button1=makeButton(null,'plane',function(){hide();PlaneFactory.makePlane(Point(0,0,0),Point(0,1,0),Color(255,255,255).setReflectable(true));drawThings();showShapeList(sceneShapeList());}, function(){}, 1, {width:150,height:50}).getNode();
					var button2=makeButton(null,'sphere',function(){hide();SphereFactory.makeSphere(Point(0,0,0),0.1,Color(255,255,255).setReflectable(true));drawThings();showShapeList(sceneShapeList());}, function(){}, 1, {width:150,height:50}).getNode();
					var button3=makeButton(null,'light source',function(){hide();SphereFactory.makeLightSource(Point(0,0,0),0.1,Color(255,255,255).setReflectable(true));drawThings();showShapeList(sceneShapeList());}, function(){}, 1, {width:150,height:50}).getNode();
					dropDown.appendChild(makeTable([[button1],[button2],[button3]]));
					shapeListDialog.appendChild(dropDown);
					var hide=function(){dropDown.style.display="none";};
					return {show: function(){dropDown.style.display="initial";},hide:hide};
				})();
				var showShapeList=function(table){
					shapeListDialog.style.display="initial";
					text.innerHTML="";
					text.appendChild(table.table());
					onEdit=function(){
						var onEdits=table.onEdits();
						for(var i=0;i<onEdits.length;i++){
							onEdits[i]();
						}
						drawThings();
					};
				};
				var append=function(thing){
					shapeListDialog.appendChild(thing);
				};
				var remove=function(thing){shapeListDialog.removeChild(thing);};
				var hideFrom=function(where_){where_.removeChild(shapeListDialog);};
				where.appendChild(shapeListDialog);
				return {showShapeList: showShapeList, append: append, remove: remove, hideFrom:hideFrom};
			})();
			svgObject.controls.push(shapeListDialog);

			var sceneShapeList=function(){
				var makeRow={
					"checkBox": function(name, checked, edit){
						var box=document.createElement('div');
						box.setAttribute('height','30px');
						var onEdit;
						box.appendChild(makeTable([[(function(){
							var checkbox=document.createElement('input');
							checkbox.setAttribute('type','checkbox');
							if(checked){checkbox.setAttribute('checked', 'true');}
							onEdit=function(){edit(checkbox.checked);}
							return checkbox;
						})(),document.createTextNode(name)]]));
						return {box:box,onEdit:onEdit};
					},
					"valueBox": function(name, value, edit){
						var currentValue=value;
						var box=document.createElement('div');
						box.setAttribute('style','width:70px');
						var shorten=function(v){
							var vs=v.toString();
							if(vs.length>7){vs=vs.substring(0,4)+'...';}
							return vs;
						};
						var isEditable;
						var isShy=true;
						var makeNonEditable=function(){
							box.innerHTML='';
							box.appendChild(document.createTextNode(name+shorten(currentValue)));
							isEditable=false;
						};
						var makeEditable=function(){
							if(!isEditable){
								box.innerHTML='';box.appendChild(editable);isEditable=true;
								focus();
							}
						};
						var setValue;
						var setShy=function(b){isShy=b;};
						var onEdit;
						var focus;
						var editable=makeTable([[document.createTextNode(name),(function(){
							var textbox=document.createElement('input');
							textbox.setAttribute('type','text');
							textbox.setAttribute('style','width:40px');
							textbox.setAttribute('value',currentValue);
							setValue=function(v){textbox.value=v;currentValue=v;};
							onEdit=function(){edit(parseFloat(textbox.value));};
							focus=function(){textbox.focus();};
							textbox.onblur=function(){currentValue=parseFloat(textbox.value);if(isShy){makeNonEditable();}};
							return textbox;
						})()]]);
						box.onclick=makeEditable;
						makeNonEditable();
						return {box:box,onEdit:onEdit, makeEditable:makeEditable, makeNonEditable: makeNonEditable, setShy:setShy, setValue:setValue};
					},
					"rotationBox": function(edit){
						var box=document.createElement('div');
						box.setAttribute('style', 'width:20px;height:20px;visibility:hidden');
						box.innerHTML=Images["ccwArrow"];
						var onEdit;
						var currentAround=or;
						var currentAxis=0;
						var currentAngle=0;
						var self=this;
						var picker=(function(){
							var picker=document.createElement('div');
							picker.setAttribute('style','position:absolute;left:0;top:0;background-color:rgb(50,50,50);padding:5px;font-family:inherit;color:#FFFFFF');
							//picker.appendChild(makeButton(null, 'OK',function(){onEdit();}, function(){}, 1, {width:75,height:30}).getNode());
							picker.appendChild((function(){
								var button=makeButton(null, 'OK',function(){aroundEditor.onEdit();axisEditor.onEdit();angleEditor.onEdit();onEdit();}, function(){}, 1, {width:75,height:30}).getNode();
								var aroundEditor=self["pointBox"](currentAround.x(), currentAround.y(), currentAround.z(), function(x,y,z){currentAround=Point(x,y,z);});
								var axisEditor=self["valueBox"]('', currentAxis, function(v){if(v==0||v==1||v==2){currentAxis=v;}});
								var angleEditor=self["valueBox"]('', currentAngle, function(v){currentAngle=v*Math.PI/180;});
								return makeTable([
									[self["propertyRow"]('around: ', aroundEditor.box)],
									[self["propertyRow"]('axis (0..2): ', axisEditor.box)],
									[self["propertyRow"]('angle (deg):', angleEditor.box)],
									[button]
									]);
							})());
							var show=function(){shapeListDialog.append(picker);};
							var remove=function(){shapeListDialog.remove(picker);};
							return {show:show,remove:remove};
						})();
						onEdit=function(){edit(currentAround, currentAxis, currentAngle);};
						var show=function(){box.style.visibility="";};
						var hide=function(){box.style.visibility="hidden";};
						var setOnclick=function(h){box.onclick=h;};
						var showPicker=function(){picker.show();};
						var hidePicker=function(){picker.remove()};
						return {box:box,onEdit:onEdit,show:show,hide:hide,setOnclick:function(h){setOnclick(h);return this;}, showPicker:showPicker, hidePicker:hidePicker};
					},
					"colorBox": function(color,edit){
						var self=this;
						var box=document.createElement('div');
						var currentcolor=color;
						var picker=(function(color_,edit){
							var picker=document.createElement('div');
							picker.setAttribute('style','position: absolute;left:0;top:0;display:none;background-color:rgb(50,50,50);padding:5px;font-family:inherit;color:#FFFFFF');
							var currentcolor=color_;
							var currentr=currentcolor.r();
							var currentg=currentcolor.g();
							var currentb=currentcolor.b();
							var currentReflectable=currentcolor.isReflectable();
							var content=(function(){
								var sample=document.createElement('div');
								sample.setAttribute('style','width:40px;height:40px;border: 1pt solid #000000;background-color: '+currentcolor.toString());
								var button=makeButton(null,'OK',function(){
									hide();
									rBox.onEdit();
									gBox.onEdit();
									bBox.onEdit();
									refBox.onEdit();
									currentcolor=Color(currentr, currentg, currentb);
									currentcolor.setReflectable(currentReflectable);
									sample.style.backgroundColor=currentcolor.toString();
									edit(currentcolor);
								}, function(){}, 1, {width:75,height:30}).getNode();
								var rBox=self["valueBox"]('r:',currentr,function(r){currentr=r;});
								var gBox=self["valueBox"]('g:',currentg,function(r){currentg=r;});
								var bBox=self["valueBox"]('b:',currentb,function(r){currentb=r;});
								var refBox=self["checkBox"]('reflectable', currentReflectable, function(checked_){currentReflectable=checked_;});
								return makeTable([[makeTable([[sample, makeTable([[rBox.box],[gBox.box],[bBox.box],[refBox.box]])]])],[button]]);
							})();
							picker.appendChild(content);
							shapeListDialog.append(picker);
							var show=function(){picker.style.display="initial";};
							var hide=function(){picker.style.display="none";};
							var remove=function(){shapeListDialog.remove(picker);}
							return {show:show,remove:remove};
						})(currentcolor, function(color_){box.style.backgroundColor=color_.toString();currentcolor=color_;});
						box.setAttribute('style','border: 1pt solid #000000;cursor: hand;width:40px;height:40px;background-color: '+color.toString());
						box.onclick=function(){picker.show();};
						var onEdit=function(){picker.remove();if(edit){edit(currentcolor);}};
						return {box:box,onEdit:onEdit};
					},
					"pointBox": function(x,y,z,edit,rotatable){
						var nx=x,ny=y,nz=z;
						var box=document.createElement('div');
						//box.setAttribute('style','border: 1pt solid rgb(150,150,150)');
						var valueBox1=this["valueBox"]('x: ', x, function(v){nx=v;});
						var valueBox2=this["valueBox"]('y: ', y, function(v){ny=v;});
						var valueBox3=this["valueBox"]('z: ', z, function(v){nz=v;});
						var rotator=rotatable?this["rotationBox"](function(around, axis, angle){
							valueBox1.onEdit();
							valueBox2.onEdit();
							valueBox3.onEdit();
							var np=Point(nx, ny, nz).rotate(around, axis, angle);
							nx=np.x();
							ny=np.y();
							nz=np.z();
							valueBox1.setValue(nx);
							valueBox2.setValue(ny);
							valueBox3.setValue(nz);
							valueBox1.makeNonEditable();
							valueBox1.setShy(true);
							valueBox2.makeNonEditable();
							valueBox2.setShy(true);
							valueBox3.makeNonEditable();
							valueBox3.setShy(true);
							rotator.hidePicker();
						}).setOnclick(function(){
							valueBox1.setShy(false);
							valueBox1.makeEditable();
							valueBox2.setShy(false);
							valueBox2.makeEditable();
							valueBox3.setShy(false);
							valueBox3.makeEditable();
							rotator.showPicker();
						}):null;
						var table=rotatable?makeTable([[valueBox1.box,valueBox2.box,valueBox3.box, rotator.box]]):makeTable([[valueBox1.box,valueBox2.box,valueBox3.box]]);
						box.appendChild(table);
						if(rotatable){
							box.onmouseover=rotator.show;
							box.onmouseleave=rotator.hide;
						}
						var onEdit=function(){valueBox1.onEdit();valueBox2.onEdit();valueBox3.onEdit();if(edit){edit(nx, ny, nz);}};
						return {box:box,onEdit:onEdit};
					},
					"shapeAttributesBox": function(attrs, edit){
						var nattrs=attrs.clone();
						var box=document.createElement('div');
						box.setAttribute('style', 'width:150px;color:rgb(180, 180, 180)');
						var tablearray=[];
						var names=attrs.getAttrNames();
						var onEdits=[];
						var self=this;
						for(var i=0;i<names.length;i++){
							tablearray.push([(function(){
								var a=document.createElement('a');
								a.setAttribute('style', 'font-style:italic');
								a.appendChild(document.createTextNode(names[i]));
								return a;
							})(),(function(){
								// var editorFunction=function(v){
								// 	var obj={};
								// 	obj[names[i]]=v;
								// 	nattrs.setAttributes(obj);
								// };
								var editorFunction=(function(attrName){
									return function(v){
										var obj={};
										obj[attrName]=v;
										nattrs.setAttributes(obj);
									};
								})(names[i]);
								var editor=self["valueBox"]('', nattrs.getAttributeByName(names[i]), editorFunction);
								onEdits.push(editor.onEdit);
								return editor.box;
							})()]);
						}
						box.appendChild(makeTable(tablearray));
						var onEdit=function(){
							for(var i=0;i<onEdits.length;i++){onEdits[i]();}
							edit(nattrs);
						};
						return {box:box, onEdit: onEdit};
					},
					"propertyRow": function(name, node, height){
						var row=document.createElement('div');
						row.setAttribute('style','height:'+(height?height:50)+'px;color:inherit');
						var table=makeTable([[document.createTextNode(name),node]]);
						row.appendChild(table);
						return row;
					},
					"rowContainer": function(title, content, highlightOn, highlightOff, remove, clone){
						var row=document.createElement('div');
						row.setAttribute('style','background-color:rgb(75, 75, 75);margin:5px;padding:2px;color:#FFFFFF');
						row.onmouseover=highlightOn;
						row.onmouseleave=highlightOff;
						var titleDiv=document.createElement('div');
						titleDiv.setAttribute('style','font-weight:bold;position:relative');
						titleDiv.appendChild(document.createTextNode(title));
						titleDiv.appendChild((function(){
							var del=document.createElement('a');
							del.setAttribute('style','position:absolute;right:0px');
							del.innerHTML=Images["trashcan"];
							if(remove){del.onclick=function(){remove();drawThings();shapeListDialog.showShapeList(sceneShapeList());};}
							return del;
						})());
						titleDiv.appendChild((function(){
							var clo=document.createElement('a');
							clo.setAttribute('style', 'position:absolute;right:20px');
							clo.innerHTML=Images["cloneStamp"];
							if(clone){clo.onclick=function(){clone();drawThings();shapeListDialog.showShapeList(sceneShapeList());};}
							return clo;
						})());
						row.appendChild(titleDiv);
						var contentDiv=document.createElement('div');
						contentDiv.appendChild(content);
						row.appendChild(contentDiv);
						return row;
					},
					"plane": function(plane){
						var content=document.createElement("div");
						var newpoint=plane.point();
						var newnormal=plane.normal();
						var newcolor=plane.color();
						var newshapeAttributes=plane.shapeAttributes();
						var pointEditor=this["pointBox"](newpoint.x(), newpoint.y(), newpoint.z(), function(x,y,z){
							newpoint=Point(x,y,z);
						}, true);
						var normalEditor=this["pointBox"](newnormal.x(), newnormal.y(), newnormal.z(), function(x,y,z){
							newnormal=Point(x,y,z);
						}, true);
						var colorEditor=this["colorBox"](newcolor,function(color_){newcolor=color_;});
						var shapeAttributesEditor=this["shapeAttributesBox"](newshapeAttributes, function(attrs_){newshapeAttributes=attrs_;});
						content.appendChild(this["propertyRow"]('point: ', pointEditor.box));
						content.appendChild(this["propertyRow"]('normal:', normalEditor.box));
						content.appendChild(this["propertyRow"]('color:', colorEditor.box));
						content.appendChild(this["propertyRow"]('shape attributes:', shapeAttributesEditor.box, 120));
						var onEdit=function(){
							pointEditor.onEdit();
							normalEditor.onEdit();
							colorEditor.onEdit();
							shapeAttributesEditor.onEdit();
							plane.setPointAndNormal(newpoint, newnormal);
							plane.setColor(newcolor);
							plane.setShapeAttributes(newshapeAttributes);
						};
						return {row: this["rowContainer"]("plane",content, function(){plane.highlightOn();}, function(){plane.highlightOff();}, function(){PlaneFactory.removePlane(plane);}, function(){PlaneFactory.clonePlane(plane);}),onEdit:onEdit};
					},
					"sphere": function(sphere){
						var content=document.createElement("div");
						var newcenter=sphere.center();
						var newradius=sphere.radius();
						var newcolor=sphere.color();
						var newshapeAttributes=sphere.shapeAttributes();
						var centerEditor=this["pointBox"](newcenter.x(), newcenter.y(), newcenter.z(), function(x,y,z){
							newcenter=Point(x,y,z);
						}, true);
						var radiusEditor=this["valueBox"]('',newradius, function(r){newradius=r;});
						var colorEditor=this["colorBox"](newcolor, function(color_){newcolor=color_;});
						var shapeAttributesEditor=this["shapeAttributesBox"](newshapeAttributes, function(attrs_){newshapeAttributes=attrs_;});
						content.appendChild(this["propertyRow"]('center: ', centerEditor.box));
						content.appendChild(this["propertyRow"]('radius: ',radiusEditor.box));
						content.appendChild(this["propertyRow"]('color:', colorEditor.box));
						content.appendChild(this["propertyRow"]('shape attributes:', shapeAttributesEditor.box, 120));
						var onEdit=function(){
							centerEditor.onEdit();
							radiusEditor.onEdit();
							colorEditor.onEdit();
							shapeAttributesEditor.onEdit();
							sphere.setCenterAndRadius(newcenter, newradius);
							sphere.setColor(newcolor);
							sphere.setShapeAttributes(newshapeAttributes);
						};
						return {row: this["rowContainer"]("sphere",content, function(){sphere.highlightOn();}, function(){sphere.highlightOff();}, function(){SphereFactory.removeSphere(sphere);}, function(){SphereFactory.cloneSphere(sphere);}), onEdit:onEdit};
					},
					"lightsource": function(lightSource){
						var content=document.createElement("div");
						var newcenter=lightSource.center();
						var newradius=lightSource.radius();
						var newcolor=lightSource.color();
						var centerEditor=this["pointBox"](newcenter.x(), newcenter.y(), newcenter.z(), function(x,y,z){
							newcenter=Point(x,y,z);
						}, true);
						var radiusEditor=this["valueBox"]('',newradius, function(r){newradius=r;});
						var colorEditor=this["colorBox"](newcolor, function(color_){newcolor=color_;});
						content.appendChild(this["propertyRow"]('location: ', centerEditor.box));
						content.appendChild(this["propertyRow"]('radius: ',radiusEditor.box));
						content.appendChild(this["propertyRow"]('color:', colorEditor.box));
						var onEdit=function(){centerEditor.onEdit();radiusEditor.onEdit();colorEditor.onEdit();lightSource.setCenterAndRadius(newcenter, newradius);lightSource.setColor(newcolor);};
						return {row: this["rowContainer"]("light source",content, function(){lightSource.highlightOn();}, function(){lightSource.highlightOff();}, function(){SphereFactory.removeLightSource(lightSource);}, function(){SphereFactory.cloneLightSource(lightSource);}), onEdit:onEdit};
					}
				};
				var rows=[];
				var onEdits=[];
				var row;
				var lightSources=SphereFactory.lightSources();
				for(var i=0;i<lightSources.length;i++){
					row=makeRow["lightsource"](lightSources[i]);
					onEdits.push(row.onEdit);
					rows.push(row.row);
				}
				var planes=PlaneFactory.planes();
				for(var i=0;i<planes.length;i++){
					row=makeRow["plane"](planes[i]);
					onEdits.push(row.onEdit);
					rows.push(row.row);
				}
				var spheres=SphereFactory.spheres();
				for(var i=0;i<spheres.length;i++){
					row=makeRow["sphere"](spheres[i]);
					onEdits.push(row.onEdit);
					rows.push(row.row);
				}
				var table=document.createElement('div');
				table.setAttribute('style','width:100%;height:100%');
				for(var i=0;i<rows.length;i++){
					table.appendChild(rows[i]);
				}
				return {table: function(){return table;}, onEdits: function(){return onEdits;}};
			};

			svgObject.controls.push(makeButton({left:'30%',bottom:0},'json',function(){jsonDialog.showJson(sceneJson());}, function(){},0.75,{width:'15%',height:'10%'}).append(where));
			var jsonDialog=(function(){
				var jsonDialog=document.createElement('div');
				jsonDialog.setAttribute('style', 'position:absolute;left:0;top:0;background-color:rgb(50,50,50);padding:0px;width:40%;height:90%;display:none;opacity:0.75');
				var button=makeButton(null,'OK',function(){jsonDialog.style.display='none';}, function(){}, 1, {width:100,height:50}).getNode();
				var text=document.createElement('textarea');
				text.setAttribute('style', 'background-color:rgb(50,50,50);color: #FFFFFF;border: none;resize:none;width:100%;height:100%');
				var table=makeTable([[text],[button]],['90%','10%']);
				jsonDialog.appendChild(table);
				where.appendChild(jsonDialog);
				var showJson=function(string){
					var s=string.replace(/[\[{]/g, function(x){return x+"\n";}).replace(/,\s*/g, ",\n").replace(/[\]}]/g, function(x){return "\n"+x;});
					var lines=s.split(/\n/g);
					var indent='';
					var line;
					for(var i=0;i<lines.length;i++){
						line=lines[i];
						if(line[0]==']'||line[0]=='}'){indent=indent.substring(2);}
						lines[i]=indent+line;
						if(line.slice(-1)=='{'||line.slice(-1)=='['){indent=indent+'  ';}
					}
					var s1=lines.join("\n");
					jsonDialog.style.display="initial";
					text.value=s1;
					text.select();
				};
				var hideFrom=function(where_){where_.removeChild(jsonDialog);};
				return {dialog: jsonDialog,text: text,showJson:showJson,hideFrom:hideFrom};
			})();
			svgObject.controls.push(jsonDialog);

			svgObject.controls.push(makeButton({left:'45%', bottom:0}, 'center', function(){viewPort.turnToCenter();drawThings();}, function(){}, 0.75, {width:'15%', height:'10%'}).append(where));

			var sceneJson=function(){

				var s=[];
				var planes=PlaneFactory.planes();
				for(var i=0;i<planes.length;i++){
					s.push(planes[i].toString2());
				}
				var lightSources=SphereFactory.lightSources();
				for(var i=0;i<lightSources.length;i++){
					s.push(lightSources[i].toString2());
				}
				var spheres=SphereFactory.spheres();
				for(var i=0;i<spheres.length;i++){
					s.push(spheres[i].toString2());
				}
				return '{viewport: '+viewPort.toString2()+',shapes: ['+s.join(',')+']}';
			};
			
			var newSlideMover=function(move, moveAmountOn){
				var mouseDown=false;
				var currentMoveAmount;
				var doMove=function(){
					if(mouseDown){
						move(currentMoveAmount);
						setTimeout(doMove, 50);
					}
				};
				var setMoveAmount=function(x,y){
					currentMoveAmount=moveAmountOn(x,y);
				};
				return {
					onmousedown: function(x,y){
						setMoveAmount(x,y);
						mouseDown=true;
						doMove();
					},
					onmousemove: function(x,y){
						if(mouseDown){setMoveAmount(x,y);}
					},
					onmouseup: function(){mouseDown=false;}
				};
			};

			var makeSlider=function(offset, size, orientation, slidemover){
				var rectangle=function(offset,size){
					var node=document.createElement('div');
					node.setAttribute('style',positionString(offset)+sizeString(size)+'background-color: rgb(100,100,100);border:1pt solid rgb(200,200,200);border-radius:3px;opacity:0.75');
					return node;
				};
				var barR=1/3;
				var handleR=1/8;
				var whereXy=function(evt){return {x: evt.clientX-where.offsetLeft,y:evt.clientY-where.offsetTop};}
				var slideBar=(function(){
					var thisOffset;
					if(orientation==0){
						thisOffset=offset.left?{left:offset.left}:{right:offset.right};
						if(offset.top){
							thisOffset.top=offset.top+size.height*barR;
						}else{
							thisOffset.bottom=offset.bottom+size.height*barR;
						}
						return rectangle(thisOffset, {width:size.width,height: size.height*barR});
					}else{
						thisOffset=offset.top?{top:offset.top}:{bottom:offset.bottom};
						if(offset.left){
							thisOffset.left=offset.left+size.width*barR;
						}else{
							thisOffset.right=offset.right+size.width*barR;
						}
						return rectangle(thisOffset, {width:size.width*barR,height: size.height});
					}
				})();
				var slideHandle=(function(){
					var thisOffset;
					if(orientation==0){
						thisOffset=offset.top?{top:offset.top}:{bottom:offset.bottom};
						if(offset.left){
							thisOffset.left=offset.left+size.width*(1-handleR)/2;
						}else{
							thisOffset.right=offset.right+size.width*(1-handleR)/2;
						}
					}else{
						thisOffset=offset.left?{left:offset.left}:{right:offset.right};
						if(offset.top){
							thisOffset.top=offset.top+size.height*(1-handleR)/2;
						}else{
							thisOffset.bottom=offset.bottom+size.height*(1-handleR)/2;
						}
					}
					var handle=rectangle(thisOffset,orientation==0?{width:size.width*handleR,height:size.height}:{width:size.width,height:size.height*handleR});
					return handle;
				})();
				var slidePositionHandlers=(function(){
					var mouseDown=false;
					var onMove, onUp;
					var moverXy=(function(){
						if(offset.left||offset.left==0){
							if(offset.top||offset.top==0){
								return function(evt){var xy=whereXy(evt);return {x:xy.x,y:xy.y};}
							}else{
								return function(evt){var xy=whereXy(evt);return {x:xy.x,y:h-xy.y};}
							}
						}else{
							if(offset.top||offset.top==0){
								return function(evt){var xy=whereXy(evt);return {x:w-xy.x,y:xy.y};}
							}else{
								return function(evt){var xy=whereXy(evt);return {x:w-xy.x,y:h-xy.y};}
							}
						}
					})();
					var onMoveAndUp=function(offsetDimension, sizeDimension, direction, smallDisplacement){
						var mindim=offsetDimension;
						var maxdim=offsetDimension+sizeDimension;
						var initdim=offsetDimension+sizeDimension*(1-handleR)/2;
						var onMove=function(evt){
							if(mouseDown){
								preventDefault(evt);
								var mxy=whereXy(evt);
								var xy=moverXy(evt);
								var mouseDim=(direction%2==0)?mxy.x:mxy.y;
								var dimFull=(direction%2==0)?w:h;
								var mouseDim=(direction>1)?dimFull-mouseDim:mouseDim;
								if(slidemover){slidemover.onmousemove(xy.x,xy.y);}
								var newDim=(mouseDim<=mindim)?mindim:((mouseDim>=maxdim)?maxdim:mouseDim-sizeDimension*handleR/2+smallDisplacement);
								switch(direction){
									case 0: slideHandle.style.left=newDim; break;
									case 1: slideHandle.style.top=newDim; break;
									case 2: slideHandle.style.right=newDim; break;
									case 3: slideHandle.style.bottom=newDim; break;
								}
							}
						};
						var onUp=function(){
							switch(direction){
								case 0: slideHandle.style.left=initdim; break;
								case 1: slideHandle.style.top=initdim; break;
								case 2: slideHandle.style.right=initdim; break;
								case 3: slideHandle.style.bottom=initdim; break;
							}
							mouseDown=false;
							if(slidemover){slidemover.onmouseup();}
						};
						return {move:onMove,up:onUp};
					};
					if(orientation==0){
						if(offset.left||offset.left==0){
							var mu=onMoveAndUp(offset.left, size.width, 0, -2);
							onMove=mu.move;
							upUp=mu.up;

						}else{
							var mu=onMoveAndUp(offset.right, size.width, 2, 2);
							onMove=mu.move;
							onUp=mu.up;
						}
					}else{
						if(offset.top||offset.top==0){
							var mu=onMoveAndUp(offset.top, size.height, 1, -2);
							onMove=mu.move;
							onUp=mu.up;
						}else{
							var mu=onMoveAndUp(offset.bottom, size.height, 3, 2);
							onMove=mu.move;
							onUp=mu.up;
						}
					}
					var onDown=function(evt){mouseDown=true;if(slidemover){var xy=moverXy(evt);slidemover.onmousedown(xy.x, xy.y);}};
					return {onDown:onDown,onMove:onMove,onUp:onUp};
				})();
				slideHandle.onmousedown=slidePositionHandlers.onDown;
				slideHandle.onmousemove=slidePositionHandlers.onMove;
				slideHandle.onmouseup=slidePositionHandlers.onUp;
				slideHandle.onmouseleave=slidePositionHandlers.onUp;
				return {bar:slideBar,handle:slideHandle,
					append: function(where_){
					where_.appendChild(slideBar);
					where_.appendChild(slideHandle);
					return this;
					},
					hideFrom: function(where_){
						where_.removeChild(slideHandle);
						where_.removeChild(slideBar);
					}
				};
			};

			svgObject.controls.push(makeSlider({right:20,top:20}, {width:10,height:150},1,newSlideMover(function(amount){viewPort.scale(amount);drawThings();}, function(x,y){return 1+(y-95)/500;})).append(where));

			svgObject.controls.push(makeSlider({right:40,top:20}, {width:10,height:150},1,newSlideMover(function(amount){viewPort.scale2(amount);drawThings();}, function(x,y){return 1+(y-95)/500;})).append(where));

			svgObject.controls.push(makeSlider({right:60,top:20}, {width:10,height:150},1,newSlideMover(function(amount){viewPort.rot2X(amount);drawThings();}, function(x,y){return (y-95)/750;})).append(where));

			svgObject.controls.push(makeSlider({right:20,bottom:20}, {width:150,height:10},0,newSlideMover(function(amount){viewPort.rotZ(amount);drawThings();}, function(x,y){return (x-95)/750})).append(where));

			svgObject.controls.push(makeSlider({right:20,bottom:40}, {width:150,height:10},0,newSlideMover(function(amount){viewPort.rot2Y(amount);drawThings();}, function(x,y){return (x-95)/750;})).append(where));

			//END buttons and such

			var currentOnLoad=whereSvg.onload;
			whereSvg.onload=function(){
				if(currentOnLoad){currentOnLoad();}
				var makeColor=function(arr){
					var c=Color(arr[0], arr[1], arr[2]);
					if(arr.length==4&&arr[3]){c.setReflectable(true);}
					return c;
				};
				var makePoint=function(arr){
					return Point(arr[0], arr[1], arr[2]);
				};
				(function(){
					if(things_&&things_.shapes&&things_.shapes.length>0){
						console.log("begin adding shapes...");
						var shape, shapeMade;
						for(var i=0;i<things_.shapes.length;i++){
							shape=things_.shapes[i];
							switch(shape.type){
								case "sphere": shapeMade=SphereFactory.makeSphere(makePoint(shape.center),shape.radius, makeColor(shape.color)); break;
								case "plane": shapeMade=PlaneFactory.makePlane(makePoint(shape.point), makePoint(shape.normal), makeColor(shape.color)); break;
								case "lightsource": shapeMade=SphereFactory.makeLightSource(makePoint(shape.center),shape.radius, makeColor(shape.color)); break;
							}
							if(shape.shapeAttributes){shapeMade.setShapeAttributes(ShapeAttributeSet(shape.shapeAttributes));}
						}
						console.log("finish adding shapes");
					}
					var w_=whereSvg.offsetWidth;
					var h_=whereSvg.offsetHeight;
					svgObject.setWh(w_,h_);
					viewPort.setWh(w_,h_);
					if(things_&&things_.viewport){
						(function(){
							var viewport=things_.viewport;
							var lefttop=makePoint(viewport.lefttop);
							var leftaxis=makePoint(viewport.leftaxis);
							var topaxis=makePoint(viewport.topaxis);
							var viewpoint=makePoint(viewport.viewpoint);
							viewPort.setUp(lefttop, leftaxis, topaxis, viewpoint);
						})();
					}
					twoD.setWh(w_,h_);
					drawThings();
				})();
				// var w_=whereSvg.offsetWidth;
				// var h_=whereSvg.offsetHeight;
				// svgObject.setWh(w_,h_);
				// viewPort.setWh(w_,h_);
				// if(things_&&things_.viewport){
				// 	(function(){
				// 		var viewport=things_.viewport;
				// 		var lefttop=makePoint(viewport.lefttop);
				// 		var leftaxis=makePoint(viewport.leftaxis);
				// 		var topaxis=makePoint(viewport.topaxis);
				// 		var viewpoint=makePoint(viewport.viewpoint);
				// 		viewPort.setUp(lefttop, leftaxis, topaxis, viewpoint);
				// 	})();
				// }
				// twoD.setWh(w_,h_);
				// drawThings();
			};

		};
		svgObject.setWh=function(w_, h_){w=w_,h=h_;};
		svgObject.addLineSegment=addLineSegment;
		svgObject.addLineLine=addLineLine;
		svgObject.addPlane=addPlane;
		svgObject.addSphere=addSphere;
		svgObject.addLightSource=addLightSource;
		svgObject.init=init;
		svgObject.hideControls=function(){
			for(var i=0;i<svgObject.controls.length;i++){
				svgObject.controls[i].hideFrom(where);
			}
		};
		return svgObject;
	})();

	var sc={
		init: function(where, things){
			svg.init(where, things);
			delete sc.init;
		},
		hideControls: function(){
			svg.hideControls();
			delete sc.hideControls;
		},
		go: function(){Interaction.doSomething();},
		disconnect: function(){Interaction.disconnect();},
		connect: function(){Interaction.connect();}
	};
	return sc;
};