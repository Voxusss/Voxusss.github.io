import{r as y,g as Y,j as x,F as G,a as p}from"./index-00d42c2c.js";import{s as A}from"./styles-bea25d13.js";import{e as J}from"./index-edc38212.js";import{S as Q,t as X}from"./SectionWrapper-6c97d5ca.js";import{m as Z}from"./motion-80248028.js";var E={},N={},ee={get exports(){return N},set exports(e){N=e}},te="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ne=te,re=ne;function q(){}function B(){}B.resetWarningCache=q;var ie=function(){function e(a,t,i,c,o,l){if(l!==re){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:B,resetWarningCache:q};return r.PropTypes=r,r};ee.exports=ie();var T={},ae={get exports(){return T},set exports(e){T=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var a=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if(c==="string"||c==="number")a.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&a.push(o)}}else if(c==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){a.push(i.toString());continue}for(var l in i)n.call(i,l)&&i[l]&&a.push(l)}}}return a.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(ae);E.__esModule=!0;E.default=void 0;var oe=$(y),h=$(N),le=$(T);function $(e){return e&&e.__esModule?e:{default:e}}const L=({animate:e=!0,className:n="",layout:r="2-columns",lineColor:a="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),oe.default.createElement("div",{className:(0,le.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},t));L.propTypes={children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node]).isRequired,className:h.default.string,animate:h.default.bool,layout:h.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:h.default.string};var se=L;E.default=se;var k={};function R(){return R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},R.apply(this,arguments)}function ce(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,M(e,n)}function M(e,n){return M=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a},M(e,n)}function ue(e,n){if(e==null)return{};var r={},a=Object.keys(e),t,i;for(i=0;i<a.length;i++)t=a[i],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var P=new Map,w=new WeakMap,D=0,z=void 0;function de(e){z=e}function fe(e){return e?(w.has(e)||(D+=1,w.set(e,D.toString())),w.get(e)):"0"}function pe(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?fe(e.root):e[n])}).toString()}function me(e){var n=pe(e),r=P.get(n);if(!r){var a=new Map,t,i=new IntersectionObserver(function(c){c.forEach(function(o){var l,u=o.isIntersecting&&t.some(function(d){return o.intersectionRatio>=d});e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=u),(l=a.get(o.target))==null||l.forEach(function(d){d(u,o)})})},e);t=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:i,elements:a},P.set(n,r)}return r}function j(e,n,r,a){if(r===void 0&&(r={}),a===void 0&&(a=z),typeof window.IntersectionObserver>"u"&&a!==void 0){var t=e.getBoundingClientRect();return n(a,{isIntersecting:a,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var i=me(r),c=i.id,o=i.observer,l=i.elements,u=l.get(e)||[];return l.has(e)||l.set(e,u),u.push(n),o.observe(e),function(){u.splice(u.indexOf(n),1),u.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),P.delete(c))}}var he=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function U(e){return typeof e.children!="function"}var S=function(e){ce(n,e);function n(a){var t;return t=e.call(this,a)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(i){t.node&&(t.unobserve(),!i&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=i||null,t.observeNode()},t.handleChange=function(i,c){i&&t.props.triggerOnce&&t.unobserve(),U(t.props)||t.setState({inView:i,entry:c}),t.props.onChange&&t.props.onChange(i,c)},t.state={inView:!!a.initialInView,entry:void 0},t}var r=n.prototype;return r.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,i=t.threshold,c=t.root,o=t.rootMargin,l=t.trackVisibility,u=t.delay,d=t.fallbackInView;this._unobserveCb=j(this.node,this.handleChange,{threshold:i,root:c,rootMargin:o,trackVisibility:l,delay:u},d)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!U(this.props)){var t=this.state,i=t.inView,c=t.entry;return this.props.children({inView:i,entry:c,ref:this.handleNode})}var o=this.props,l=o.children,u=o.as,d=ue(o,he);return y.createElement(u||"div",R({ref:this.handleNode},d),l)},n}(y.Component);S.displayName="InView";S.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ve(e){var n=e===void 0?{}:e,r=n.threshold,a=n.delay,t=n.trackVisibility,i=n.rootMargin,c=n.root,o=n.triggerOnce,l=n.skip,u=n.initialInView,d=n.fallbackInView,m=y.useRef(),b=y.useState({inView:!!u}),_=b[0],O=b[1],I=y.useCallback(function(g){m.current!==void 0&&(m.current(),m.current=void 0),!l&&g&&(m.current=j(g,function(C,W){O({inView:C,entry:W}),W.isIntersecting&&o&&m.current&&(m.current(),m.current=void 0)},{root:c,rootMargin:i,threshold:r,trackVisibility:t,delay:a},d))},[Array.isArray(r)?r.toString():r,c,i,o,l,t,d,a]);y.useEffect(function(){!m.current&&_.entry&&!o&&!l&&O({inView:!!u})});var f=[I,_.inView,_.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const ye=Object.freeze(Object.defineProperty({__proto__:null,InView:S,default:S,defaultFallbackInView:de,observe:j,useInView:ve},Symbol.toStringTag,{value:"Module"})),ge=Y(ye);k.__esModule=!0;k.default=void 0;var v=F(y),s=F(N),V=F(T),be=ge;function F(e){return e&&e.__esModule?e:{default:e}}const H=({children:e="",className:n="",contentArrowStyle:r=null,contentStyle:a=null,date:t="",dateClassName:i="",icon:c=null,iconClassName:o="",iconOnClick:l=null,onTimelineElementClick:u=null,iconStyle:d=null,id:m="",position:b="",style:_=null,textClassName:O="",intersectionObserverProps:I={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:f=!1})=>v.default.createElement(be.InView,I,({inView:g,ref:C})=>v.default.createElement("div",{ref:C,id:m,className:(0,V.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":b==="left","vertical-timeline-element--right":b==="right","vertical-timeline-element--no-children":e===""}),style:_},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:d,onClick:l,className:(0,V.default)(o,"vertical-timeline-element-icon",{"bounce-in":g||f,"is-hidden":!(g||f)})},c),v.default.createElement("div",{style:a,onClick:u,className:(0,V.default)(O,"vertical-timeline-element-content",{"bounce-in":g||f,"is-hidden":!(g||f)})},v.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,V.default)(i,"vertical-timeline-element-date")},t)))));H.propTypes={children:s.default.oneOfType([s.default.arrayOf(s.default.node),s.default.node]),className:s.default.string,contentArrowStyle:s.default.shape({}),contentStyle:s.default.shape({}),date:s.default.node,dateClassName:s.default.string,icon:s.default.element,iconClassName:s.default.string,iconStyle:s.default.shape({}),iconOnClick:s.default.func,onTimelineElementClick:s.default.func,id:s.default.string,position:s.default.string,style:s.default.shape({}),textClassName:s.default.string,visible:s.default.bool,intersectionObserverProps:s.default.shape({root:s.default.object,rootMargin:s.default.string,threshold:s.default.number,triggerOnce:s.default.bool})};var _e=H;k.default=_e;var K={VerticalTimeline:E.default,VerticalTimelineElement:k.default};const Oe=({experience:e})=>x(K.VerticalTimelineElement,{contentStyle:{background:"#301c10",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:p("div",{className:"flex justify-center items-center w-full h-full",children:p("img",{src:e.icon,alt:e.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[x("div",{children:[p("h3",{className:"text-white text-[24px] font-bold",children:e.title}),p("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:e.company_name})]}),p("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map((n,r)=>p("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${r}`))})]}),we=()=>x(G,{children:[x(Z.div,{variants:X(),children:[p("p",{className:`${A.sectionSubText} mt-10`,children:"What I have done so far"}),p("h2",{className:`${A.sectionHeadText} `,children:"Experience."})]}),p("div",{className:"flex flex-col",children:p(K.VerticalTimeline,{layout:"1-column-left",children:J.map((e,n)=>p(Oe,{experience:e},n))})})]}),Ee=Q(we,"work");export{Ee as default};