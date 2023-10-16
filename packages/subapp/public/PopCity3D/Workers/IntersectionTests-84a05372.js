/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.97.2
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["exports","./Matrix2-d39df7ef","./defaultValue-953c9e5b","./Transforms-a9e23e0a","./ComponentDatatype-2dae6676"],(function(t,e,n,a,i){"use strict";const r={};function s(t,e,n){const a=t+e;return i.CesiumMath.sign(t)!==i.CesiumMath.sign(e)&&Math.abs(a/Math.max(Math.abs(t),Math.abs(e)))<n?0:a}r.computeDiscriminant=function(t,e,n){return e*e-4*t*n},r.computeRealRoots=function(t,e,n){let a;if(0===t)return 0===e?[]:[-n/e];if(0===e){if(0===n)return[0,0];const e=Math.abs(n),r=Math.abs(t);if(e<r&&e/r<i.CesiumMath.EPSILON14)return[0,0];if(e>r&&r/e<i.CesiumMath.EPSILON14)return[];if(a=-n/t,a<0)return[];const s=Math.sqrt(a);return[-s,s]}if(0===n)return a=-e/t,a<0?[a,0]:[0,a];const r=s(e*e,-(4*t*n),i.CesiumMath.EPSILON14);if(r<0)return[];const o=-.5*s(e,i.CesiumMath.sign(e)*Math.sqrt(r),i.CesiumMath.EPSILON14);return e>0?[o/t,n/o]:[n/o,o/t]};var o=r;const c={};function u(t,e,n,a){const i=t,r=e/3,s=n/3,o=a,c=i*s,u=r*o,l=r*r,C=s*s,M=i*s-l,h=i*o-r*s,m=r*o-C,f=4*M*m-h*h;let d,g;if(f<0){let t,e,n;l*u>=c*C?(t=i,e=M,n=-2*r*M+i*h):(t=o,e=m,n=-o*h+2*s*m);const a=-(n<0?-1:1)*Math.abs(t)*Math.sqrt(-f);g=-n+a;const p=g/2,w=p<0?-Math.pow(-p,1/3):Math.pow(p,1/3),R=g===a?-w:-e/w;return d=e<=0?w+R:-n/(w*w+R*R+e),l*u>=c*C?[(d-r)/i]:[-o/(d+s)]}const p=M,w=-2*r*M+i*h,R=m,S=-o*h+2*s*m,O=Math.sqrt(f),x=Math.sqrt(3)/2;let y=Math.abs(Math.atan2(i*O,-w)/3);d=2*Math.sqrt(-p);let P=Math.cos(y);g=d*P;let N=d*(-P/2-x*Math.sin(y));const b=g+N>2*r?g-r:N-r,q=i,L=b/q;y=Math.abs(Math.atan2(o*O,-S)/3),d=2*Math.sqrt(-R),P=Math.cos(y),g=d*P,N=d*(-P/2-x*Math.sin(y));const I=-o,E=g+N<2*s?g+s:N+s,v=I/E,z=-b*E-q*I,T=(s*z-r*(b*I))/(-r*z+s*(q*E));return L<=T?L<=v?T<=v?[L,T,v]:[L,v,T]:[v,L,T]:L<=v?[T,L,v]:T<=v?[T,v,L]:[v,T,L]}c.computeDiscriminant=function(t,e,n,a){const i=e*e,r=n*n;return 18*t*e*n*a+i*r-27*(t*t)*(a*a)-4*(t*r*n+i*e*a)},c.computeRealRoots=function(t,e,n,a){let i,r;if(0===t)return o.computeRealRoots(e,n,a);if(0===e){if(0===n){if(0===a)return[0,0,0];r=-a/t;const e=r<0?-Math.pow(-r,1/3):Math.pow(r,1/3);return[e,e,e]}return 0===a?(i=o.computeRealRoots(t,0,n),0===i.Length?[0]:[i[0],0,i[1]]):u(t,0,n,a)}return 0===n?0===a?(r=-e/t,r<0?[r,0,0]:[0,0,r]):u(t,e,0,a):0===a?(i=o.computeRealRoots(t,e,n),0===i.length?[0]:i[1]<=0?[i[0],i[1],0]:i[0]>=0?[0,i[0],i[1]]:[i[0],0,i[1]]):u(t,e,n,a)};var l=c;const C={};function M(t,e,n,a){const r=t*t,s=e-3*r/8,c=n-e*t/2+r*t/8,u=a-n*t/4+e*r/16-3*r*r/256,C=l.computeRealRoots(1,2*s,s*s-4*u,-c*c);if(C.length>0){const e=-t/4,n=C[C.length-1];if(Math.abs(n)<i.CesiumMath.EPSILON14){const t=o.computeRealRoots(1,s,u);if(2===t.length){const n=t[0],a=t[1];let i;if(n>=0&&a>=0){const t=Math.sqrt(n),i=Math.sqrt(a);return[e-i,e-t,e+t,e+i]}if(n>=0&&a<0)return i=Math.sqrt(n),[e-i,e+i];if(n<0&&a>=0)return i=Math.sqrt(a),[e-i,e+i]}return[]}if(n>0){const t=Math.sqrt(n),a=(s+n-c/t)/2,i=(s+n+c/t)/2,r=o.computeRealRoots(1,t,a),u=o.computeRealRoots(1,-t,i);return 0!==r.length?(r[0]+=e,r[1]+=e,0!==u.length?(u[0]+=e,u[1]+=e,r[1]<=u[0]?[r[0],r[1],u[0],u[1]]:u[1]<=r[0]?[u[0],u[1],r[0],r[1]]:r[0]>=u[0]&&r[1]<=u[1]?[u[0],r[0],r[1],u[1]]:u[0]>=r[0]&&u[1]<=r[1]?[r[0],u[0],u[1],r[1]]:r[0]>u[0]&&r[0]<u[1]?[u[0],r[0],u[1],r[1]]:[r[0],u[0],r[1],u[1]]):r):0!==u.length?(u[0]+=e,u[1]+=e,u):[]}}return[]}function h(t,e,n,a){const r=t*t,s=-2*e,c=n*t+e*e-4*a,u=r*a-n*e*t+n*n,C=l.computeRealRoots(1,s,c,u);if(C.length>0){const s=C[0],c=e-s,u=c*c,l=t/2,M=c/2,h=u-4*a,m=u+4*Math.abs(a),f=r-4*s,d=r+4*Math.abs(s);let g,p,w,R,S,O;if(s<0||h*d<f*m){const e=Math.sqrt(f);g=e/2,p=0===e?0:(t*M-n)/e}else{const e=Math.sqrt(h);g=0===e?0:(t*M-n)/e,p=e/2}0===l&&0===g?(w=0,R=0):i.CesiumMath.sign(l)===i.CesiumMath.sign(g)?(w=l+g,R=s/w):(R=l-g,w=s/R),0===M&&0===p?(S=0,O=0):i.CesiumMath.sign(M)===i.CesiumMath.sign(p)?(S=M+p,O=a/S):(O=M-p,S=a/O);const x=o.computeRealRoots(1,w,S),y=o.computeRealRoots(1,R,O);if(0!==x.length)return 0!==y.length?x[1]<=y[0]?[x[0],x[1],y[0],y[1]]:y[1]<=x[0]?[y[0],y[1],x[0],x[1]]:x[0]>=y[0]&&x[1]<=y[1]?[y[0],x[0],x[1],y[1]]:y[0]>=x[0]&&y[1]<=x[1]?[x[0],y[0],y[1],x[1]]:x[0]>y[0]&&x[0]<y[1]?[y[0],x[0],y[1],x[1]]:[x[0],y[0],x[1],y[1]]:x;if(0!==y.length)return y}return[]}C.computeDiscriminant=function(t,e,n,a,i){const r=t*t,s=e*e,o=s*e,c=n*n,u=c*n,l=a*a,C=l*a,M=i*i;return s*c*l-4*o*C-4*t*u*l+18*t*e*n*C-27*r*l*l+256*(r*t)*(M*i)+i*(18*o*n*a-4*s*u+16*t*c*c-80*t*e*c*a-6*t*s*l+144*r*n*l)+M*(144*t*s*n-27*s*s-128*r*c-192*r*e*a)},C.computeRealRoots=function(t,e,n,a,r){if(Math.abs(t)<i.CesiumMath.EPSILON15)return l.computeRealRoots(e,n,a,r);const s=e/t,o=n/t,c=a/t,u=r/t;let C=s<0?1:0;switch(C+=o<0?C+1:C,C+=c<0?C+1:C,C+=u<0?C+1:C,C){case 0:case 3:case 4:case 6:case 7:case 9:case 10:case 12:case 13:case 14:case 15:return M(s,o,c,u);case 1:case 2:case 5:case 8:case 11:return h(s,o,c,u);default:return}};var m=C;function f(t,a){a=e.Cartesian3.clone(n.defaultValue(a,e.Cartesian3.ZERO)),e.Cartesian3.equals(a,e.Cartesian3.ZERO)||e.Cartesian3.normalize(a,a),this.origin=e.Cartesian3.clone(n.defaultValue(t,e.Cartesian3.ZERO)),this.direction=a}f.clone=function(t,a){if(n.defined(t))return n.defined(a)?(a.origin=e.Cartesian3.clone(t.origin),a.direction=e.Cartesian3.clone(t.direction),a):new f(t.origin,t.direction)},f.getPoint=function(t,a,i){return n.defined(i)||(i=new e.Cartesian3),i=e.Cartesian3.multiplyByScalar(t.direction,a,i),e.Cartesian3.add(t.origin,i,i)};const d={rayPlane:function(t,a,r){n.defined(r)||(r=new e.Cartesian3);const s=t.origin,o=t.direction,c=a.normal,u=e.Cartesian3.dot(c,o);if(Math.abs(u)<i.CesiumMath.EPSILON15)return;const l=(-a.distance-e.Cartesian3.dot(c,s))/u;return l<0?void 0:(r=e.Cartesian3.multiplyByScalar(o,l,r),e.Cartesian3.add(s,r,r))}},g=new e.Cartesian3,p=new e.Cartesian3,w=new e.Cartesian3,R=new e.Cartesian3,S=new e.Cartesian3;d.rayTriangleParametric=function(t,a,r,s,o){o=n.defaultValue(o,!1);const c=t.origin,u=t.direction,l=e.Cartesian3.subtract(r,a,g),C=e.Cartesian3.subtract(s,a,p),M=e.Cartesian3.cross(u,C,w),h=e.Cartesian3.dot(l,M);let m,f,d,O,x;if(o){if(h<i.CesiumMath.EPSILON6)return;if(m=e.Cartesian3.subtract(c,a,R),d=e.Cartesian3.dot(m,M),d<0||d>h)return;if(f=e.Cartesian3.cross(m,l,S),O=e.Cartesian3.dot(u,f),O<0||d+O>h)return;x=e.Cartesian3.dot(C,f)/h}else{if(Math.abs(h)<i.CesiumMath.EPSILON6)return;const t=1/h;if(m=e.Cartesian3.subtract(c,a,R),d=e.Cartesian3.dot(m,M)*t,d<0||d>1)return;if(f=e.Cartesian3.cross(m,l,S),O=e.Cartesian3.dot(u,f)*t,O<0||d+O>1)return;x=e.Cartesian3.dot(C,f)*t}return x},d.rayTriangle=function(t,a,i,r,s,o){const c=d.rayTriangleParametric(t,a,i,r,s);if(n.defined(c)&&!(c<0))return n.defined(o)||(o=new e.Cartesian3),e.Cartesian3.multiplyByScalar(t.direction,c,o),e.Cartesian3.add(t.origin,o,o)};const O=new f;d.lineSegmentTriangle=function(t,a,i,r,s,o,c){const u=O;e.Cartesian3.clone(t,u.origin),e.Cartesian3.subtract(a,t,u.direction),e.Cartesian3.normalize(u.direction,u.direction);const l=d.rayTriangleParametric(u,i,r,s,o);if(!(!n.defined(l)||l<0||l>e.Cartesian3.distance(t,a)))return n.defined(c)||(c=new e.Cartesian3),e.Cartesian3.multiplyByScalar(u.direction,l,c),e.Cartesian3.add(u.origin,c,c)};const x={root0:0,root1:0};function y(t,i,r){n.defined(r)||(r=new a.Interval);const s=t.origin,o=t.direction,c=i.center,u=i.radius*i.radius,l=e.Cartesian3.subtract(s,c,w),C=function(t,e,n,a){const i=e*e-4*t*n;if(i<0)return;if(i>0){const n=1/(2*t),r=Math.sqrt(i),s=(-e+r)*n,o=(-e-r)*n;return s<o?(a.root0=s,a.root1=o):(a.root0=o,a.root1=s),a}const r=-e/(2*t);return 0!==r?(a.root0=a.root1=r,a):void 0}(e.Cartesian3.dot(o,o),2*e.Cartesian3.dot(o,l),e.Cartesian3.magnitudeSquared(l)-u,x);if(n.defined(C))return r.start=C.root0,r.stop=C.root1,r}d.raySphere=function(t,e,a){if(a=y(t,e,a),n.defined(a)&&!(a.stop<0))return a.start=Math.max(a.start,0),a};const P=new f;d.lineSegmentSphere=function(t,a,i,r){const s=P;e.Cartesian3.clone(t,s.origin);const o=e.Cartesian3.subtract(a,t,s.direction),c=e.Cartesian3.magnitude(o);if(e.Cartesian3.normalize(o,o),r=y(s,i,r),!(!n.defined(r)||r.stop<0||r.start>c))return r.start=Math.max(r.start,0),r.stop=Math.min(r.stop,c),r};const N=new e.Cartesian3,b=new e.Cartesian3;function q(t,e,n){const a=t+e;return i.CesiumMath.sign(t)!==i.CesiumMath.sign(e)&&Math.abs(a/Math.max(Math.abs(t),Math.abs(e)))<n?0:a}d.rayEllipsoid=function(t,n){const i=n.oneOverRadii,r=e.Cartesian3.multiplyComponents(i,t.origin,N),s=e.Cartesian3.multiplyComponents(i,t.direction,b),o=e.Cartesian3.magnitudeSquared(r),c=e.Cartesian3.dot(r,s);let u,l,C,M,h;if(o>1){if(c>=0)return;const t=c*c;if(u=o-1,l=e.Cartesian3.magnitudeSquared(s),C=l*u,t<C)return;if(t>C){M=c*c-C,h=-c+Math.sqrt(M);const t=h/l,e=u/h;return t<e?new a.Interval(t,e):{start:e,stop:t}}const n=Math.sqrt(u/l);return new a.Interval(n,n)}return o<1?(u=o-1,l=e.Cartesian3.magnitudeSquared(s),C=l*u,M=c*c-C,h=-c+Math.sqrt(M),new a.Interval(0,h/l)):c<0?(l=e.Cartesian3.magnitudeSquared(s),new a.Interval(0,-c/l)):void 0};const L=new e.Cartesian3,I=new e.Cartesian3,E=new e.Cartesian3,v=new e.Cartesian3,z=new e.Cartesian3,T=new e.Matrix3,U=new e.Matrix3,W=new e.Matrix3,B=new e.Matrix3,V=new e.Matrix3,Z=new e.Matrix3,D=new e.Matrix3,A=new e.Cartesian3,F=new e.Cartesian3,G=new e.Cartographic;d.grazingAltitudeLocation=function(t,a){const r=t.origin,s=t.direction;if(!e.Cartesian3.equals(r,e.Cartesian3.ZERO)){const t=a.geodeticSurfaceNormal(r,L);if(e.Cartesian3.dot(s,t)>=0)return r}const c=n.defined(this.rayEllipsoid(t,a)),u=a.transformPositionToScaledSpace(s,L),l=e.Cartesian3.normalize(u,u),C=e.Cartesian3.mostOrthogonalAxis(u,v),M=e.Cartesian3.normalize(e.Cartesian3.cross(C,l,I),I),h=e.Cartesian3.normalize(e.Cartesian3.cross(l,M,E),E),f=T;f[0]=l.x,f[1]=l.y,f[2]=l.z,f[3]=M.x,f[4]=M.y,f[5]=M.z,f[6]=h.x,f[7]=h.y,f[8]=h.z;const d=e.Matrix3.transpose(f,U),g=e.Matrix3.fromScale(a.radii,W),p=e.Matrix3.fromScale(a.oneOverRadii,B),w=V;w[0]=0,w[1]=-s.z,w[2]=s.y,w[3]=s.z,w[4]=0,w[5]=-s.x,w[6]=-s.y,w[7]=s.x,w[8]=0;const R=e.Matrix3.multiply(e.Matrix3.multiply(d,p,Z),w,Z),S=e.Matrix3.multiply(e.Matrix3.multiply(R,g,D),f,D),O=e.Matrix3.multiplyByVector(R,r,z),x=function(t,n,a,r,s){const c=r*r,u=s*s,l=(t[e.Matrix3.COLUMN1ROW1]-t[e.Matrix3.COLUMN2ROW2])*u,C=s*(r*q(t[e.Matrix3.COLUMN1ROW0],t[e.Matrix3.COLUMN0ROW1],i.CesiumMath.EPSILON15)+n.y),M=t[e.Matrix3.COLUMN0ROW0]*c+t[e.Matrix3.COLUMN2ROW2]*u+r*n.x+a,h=u*q(t[e.Matrix3.COLUMN2ROW1],t[e.Matrix3.COLUMN1ROW2],i.CesiumMath.EPSILON15),f=s*(r*q(t[e.Matrix3.COLUMN2ROW0],t[e.Matrix3.COLUMN0ROW2])+n.z);let d;const g=[];if(0===f&&0===h){if(d=o.computeRealRoots(l,C,M),0===d.length)return g;const t=d[0],n=Math.sqrt(Math.max(1-t*t,0));if(g.push(new e.Cartesian3(r,s*t,s*-n)),g.push(new e.Cartesian3(r,s*t,s*n)),2===d.length){const t=d[1],n=Math.sqrt(Math.max(1-t*t,0));g.push(new e.Cartesian3(r,s*t,s*-n)),g.push(new e.Cartesian3(r,s*t,s*n))}return g}const p=f*f,w=h*h,R=f*h,S=l*l+w,O=2*(C*l+R),x=2*M*l+C*C-w+p,y=2*(M*C-R),P=M*M-p;if(0===S&&0===O&&0===x&&0===y)return g;d=m.computeRealRoots(S,O,x,y,P);const N=d.length;if(0===N)return g;for(let t=0;t<N;++t){const n=d[t],a=n*n,o=Math.max(1-a,0),c=Math.sqrt(o);let u;u=i.CesiumMath.sign(l)===i.CesiumMath.sign(M)?q(l*a+M,C*n,i.CesiumMath.EPSILON12):i.CesiumMath.sign(M)===i.CesiumMath.sign(C*n)?q(l*a,C*n+M,i.CesiumMath.EPSILON12):q(l*a+C*n,M,i.CesiumMath.EPSILON12);const m=u*q(h*n,f,i.CesiumMath.EPSILON15);m<0?g.push(new e.Cartesian3(r,s*n,s*c)):m>0?g.push(new e.Cartesian3(r,s*n,s*-c)):0!==c?(g.push(new e.Cartesian3(r,s*n,s*-c)),g.push(new e.Cartesian3(r,s*n,s*c)),++t):g.push(new e.Cartesian3(r,s*n,s*c))}return g}(S,e.Cartesian3.negate(O,L),0,0,1);let y,P;const N=x.length;if(N>0){let t=e.Cartesian3.clone(e.Cartesian3.ZERO,F),n=Number.NEGATIVE_INFINITY;for(let a=0;a<N;++a){y=e.Matrix3.multiplyByVector(g,e.Matrix3.multiplyByVector(f,x[a],A),A);const i=e.Cartesian3.normalize(e.Cartesian3.subtract(y,r,v),v),o=e.Cartesian3.dot(i,s);o>n&&(n=o,t=e.Cartesian3.clone(y,t))}const o=a.cartesianToCartographic(t,G);return n=i.CesiumMath.clamp(n,0,1),P=e.Cartesian3.magnitude(e.Cartesian3.subtract(t,r,v))*Math.sqrt(1-n*n),P=c?-P:P,o.height=P,a.cartographicToCartesian(o,new e.Cartesian3)}};const Y=new e.Cartesian3;d.lineSegmentPlane=function(t,a,r,s){n.defined(s)||(s=new e.Cartesian3);const o=e.Cartesian3.subtract(a,t,Y),c=r.normal,u=e.Cartesian3.dot(c,o);if(Math.abs(u)<i.CesiumMath.EPSILON6)return;const l=e.Cartesian3.dot(c,t),C=-(r.distance+l)/u;return C<0||C>1?void 0:(e.Cartesian3.multiplyByScalar(o,C,s),e.Cartesian3.add(t,s,s),s)},d.trianglePlaneIntersection=function(t,n,a,i){const r=i.normal,s=i.distance,o=e.Cartesian3.dot(r,t)+s<0,c=e.Cartesian3.dot(r,n)+s<0,u=e.Cartesian3.dot(r,a)+s<0;let l,C,M=0;if(M+=o?1:0,M+=c?1:0,M+=u?1:0,1!==M&&2!==M||(l=new e.Cartesian3,C=new e.Cartesian3),1===M){if(o)return d.lineSegmentPlane(t,n,i,l),d.lineSegmentPlane(t,a,i,C),{positions:[t,n,a,l,C],indices:[0,3,4,1,2,4,1,4,3]};if(c)return d.lineSegmentPlane(n,a,i,l),d.lineSegmentPlane(n,t,i,C),{positions:[t,n,a,l,C],indices:[1,3,4,2,0,4,2,4,3]};if(u)return d.lineSegmentPlane(a,t,i,l),d.lineSegmentPlane(a,n,i,C),{positions:[t,n,a,l,C],indices:[2,3,4,0,1,4,0,4,3]}}else if(2===M){if(!o)return d.lineSegmentPlane(n,t,i,l),d.lineSegmentPlane(a,t,i,C),{positions:[t,n,a,l,C],indices:[1,2,4,1,4,3,0,3,4]};if(!c)return d.lineSegmentPlane(a,n,i,l),d.lineSegmentPlane(t,n,i,C),{positions:[t,n,a,l,C],indices:[2,0,4,2,4,3,1,3,4]};if(!u)return d.lineSegmentPlane(t,a,i,l),d.lineSegmentPlane(n,a,i,C),{positions:[t,n,a,l,C],indices:[0,1,4,0,4,3,2,3,4]}}};var _=d;t.IntersectionTests=_,t.Ray=f}));
