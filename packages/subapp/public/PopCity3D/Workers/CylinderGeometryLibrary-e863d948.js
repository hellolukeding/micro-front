define(["exports","./Math-ee85dd73"],(function(t,e){"use strict";const n={computePositions:function(t,n,o,r,s){const i=.5*t,c=-i,a=r+r,u=new Float64Array(3*(s?2*a:a));let d,f=0,h=0;const y=s?3*a:0,M=s?3*(a+r):3*r;for(d=0;d<r;d++){const t=d/r*e.CesiumMath.TWO_PI,a=Math.cos(t),l=Math.sin(t),m=a*o,p=l*o,C=a*n,P=l*n;u[h+y]=m,u[h+y+1]=p,u[h+y+2]=c,u[h+M]=C,u[h+M+1]=P,u[h+M+2]=i,h+=3,s&&(u[f++]=m,u[f++]=p,u[f++]=c,u[f++]=C,u[f++]=P,u[f++]=i)}return u}};var o=n;t.CylinderGeometryLibrary=o}));