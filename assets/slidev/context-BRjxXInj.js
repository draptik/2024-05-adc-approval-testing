import{a1 as n,ag as r,t as u,y as j,ae as $,aA as v}from"../modules/vue-BeL89dC_.js";import{w as p,C,ax as x,B as S,z as A,A as R,ay as l,y as T,az as g,aA as k}from"../index-u5DI0zHx.js";function y(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(A),c=n(R),o=n(l,{}),d=n(T,void 0),m=n(p,u(1)),f=n(C,j(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;$(l,t);const{$slidev:a,$page:s}=y(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,a){return{...v(t,a===0?g:k),frontmatter:t}}export{O as f,L as p,y as u};
