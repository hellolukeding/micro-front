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
define(["exports","./Matrix2-d39df7ef","./defaultValue-953c9e5b","./Transforms-a9e23e0a","./ComponentDatatype-2dae6676"],(function(t,n,a,e,o){"use strict";const r=Math.cos,s=Math.sin,i=Math.sqrt,c={computePosition:function(t,n,e,o,c,g,u){const h=n.radiiSquared,l=t.nwCorner,C=t.boundingRectangle;let d=l.latitude-t.granYCos*o+c*t.granXSin;const S=r(d),w=s(d),M=h.z*w;let X=l.longitude+o*t.granYSin+c*t.granXCos;const Y=S*r(X),m=S*s(X),f=h.x*Y,p=h.y*m,x=i(f*Y+p*m+M*w);if(g.x=f/x,g.y=p/x,g.z=M/x,e){const n=t.stNwCorner;a.defined(n)?(d=n.latitude-t.stGranYCos*o+c*t.stGranXSin,X=n.longitude+o*t.stGranYSin+c*t.stGranXCos,u.x=(X-t.stWest)*t.lonScalar,u.y=(d-t.stSouth)*t.latScalar):(u.x=(X-C.west)*t.lonScalar,u.y=(d-C.south)*t.latScalar)}}},g=new n.Matrix2;let u=new n.Cartesian3;const h=new n.Cartographic;let l=new n.Cartesian3;const C=new e.GeographicProjection;function d(t,a,e,o,r,s,i){const c=Math.cos(a),h=o*c,d=e*c,S=Math.sin(a),w=o*S,M=e*S;u=C.project(t,u),u=n.Cartesian3.subtract(u,l,u);const X=n.Matrix2.fromRotation(a,g);u=n.Matrix2.multiplyByVector(X,u,u),u=n.Cartesian3.add(u,l,u),s-=1,i-=1;const Y=(t=C.unproject(u,t)).latitude,m=Y+s*M,f=Y-h*i,p=Y-h*i+s*M,x=Math.max(Y,m,f,p),G=Math.min(Y,m,f,p),R=t.longitude,y=R+s*d,O=R+i*w,P=R+i*w+s*d;return{north:x,south:G,east:Math.max(R,y,O,P),west:Math.min(R,y,O,P),granYCos:h,granYSin:w,granXCos:d,granXSin:M,nwCorner:t}}c.computeOptions=function(t,a,e,r,s,i,c){let g,u=t.east,S=t.west,w=t.north,M=t.south,X=!1,Y=!1;w===o.CesiumMath.PI_OVER_TWO&&(X=!0),M===-o.CesiumMath.PI_OVER_TWO&&(Y=!0);const m=w-M;g=S>u?o.CesiumMath.TWO_PI-S+u:u-S;const f=Math.ceil(g/a)+1,p=Math.ceil(m/a)+1,x=g/(f-1),G=m/(p-1),R=n.Rectangle.northwest(t,i),y=n.Rectangle.center(t,h);0===e&&0===r||(y.longitude<R.longitude&&(y.longitude+=o.CesiumMath.TWO_PI),l=C.project(y,l));const O=G,P=x,W=n.Rectangle.clone(t,s),_={granYCos:O,granYSin:0,granXCos:P,granXSin:0,nwCorner:R,boundingRectangle:W,width:f,height:p,northCap:X,southCap:Y};if(0!==e){const t=d(R,e,x,G,0,f,p);w=t.north,M=t.south,u=t.east,S=t.west,_.granYCos=t.granYCos,_.granYSin=t.granYSin,_.granXCos=t.granXCos,_.granXSin=t.granXSin,W.north=w,W.south=M,W.east=u,W.west=S}if(0!==r){e-=r;const t=n.Rectangle.northwest(W,c),a=d(t,e,x,G,0,f,p);_.stGranYCos=a.granYCos,_.stGranXCos=a.granXCos,_.stGranYSin=a.granYSin,_.stGranXSin=a.granXSin,_.stNwCorner=t,_.stWest=a.west,_.stSouth=a.south}return _};var S=c;t.RectangleGeometryLibrary=S}));
