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
define(["exports","./Matrix2-9b0f2da2","./defaultValue-953c9e5b","./Transforms-4a1e1fac"],(function(t,e,n,i){"use strict";function h(t,e,i,h){this.x=n.defaultValue(t,0),this.y=n.defaultValue(e,0),this.width=n.defaultValue(i,0),this.height=n.defaultValue(h,0)}h.packedLength=4,h.pack=function(t,e,i){return i=n.defaultValue(i,0),e[i++]=t.x,e[i++]=t.y,e[i++]=t.width,e[i]=t.height,e},h.unpack=function(t,e,i){return e=n.defaultValue(e,0),n.defined(i)||(i=new h),i.x=t[e++],i.y=t[e++],i.width=t[e++],i.height=t[e],i},h.fromPoints=function(t,e){if(n.defined(e)||(e=new h),!n.defined(t)||0===t.length)return e.x=0,e.y=0,e.width=0,e.height=0,e;const i=t.length;let r=t[0].x,a=t[0].y,d=t[0].x,u=t[0].y;for(let e=1;e<i;e++){const n=t[e],i=n.x,h=n.y;r=Math.min(i,r),d=Math.max(i,d),a=Math.min(h,a),u=Math.max(h,u)}return e.x=r,e.y=a,e.width=d-r,e.height=u-a,e};const r=new i.GeographicProjection,a=new e.Cartographic,d=new e.Cartographic;h.fromRectangle=function(t,i,u){if(n.defined(u)||(u=new h),!n.defined(t))return u.x=0,u.y=0,u.width=0,u.height=0,u;const o=(i=n.defaultValue(i,r)).project(e.Rectangle.southwest(t,a)),c=i.project(e.Rectangle.northeast(t,d));return e.Cartesian2.subtract(c,o,c),u.x=o.x,u.y=o.y,u.width=c.x,u.height=c.y,u},h.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e):new h(t.x,t.y,t.width,t.height)},h.union=function(t,e,i){n.defined(i)||(i=new h);const r=Math.min(t.x,e.x),a=Math.min(t.y,e.y),d=Math.max(t.x+t.width,e.x+e.width),u=Math.max(t.y+t.height,e.y+e.height);return i.x=r,i.y=a,i.width=d-r,i.height=u-a,i},h.expand=function(t,e,n){n=h.clone(t,n);const i=e.x-n.x,r=e.y-n.y;return i>n.width?n.width=i:i<0&&(n.width-=i,n.x=e.x),r>n.height?n.height=r:r<0&&(n.height-=r,n.y=e.y),n},h.intersect=function(t,e){const n=t.x,h=t.y,r=e.x,a=e.y;return n>r+e.width||n+t.width<r||h+t.height<a||h>a+e.height?i.Intersect.OUTSIDE:i.Intersect.INTERSECTING},h.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},h.prototype.clone=function(t){return h.clone(this,t)},h.prototype.intersect=function(t){return h.intersect(this,t)},h.prototype.equals=function(t){return h.equals(this,t)},t.BoundingRectangle=h}));
