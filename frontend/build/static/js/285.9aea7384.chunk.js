(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[285],{3965:function(e,t,r){"use strict";var n=r(1243);n.Z.defaults.withCredentials=!0;var a=n.Z.create({baseURL:"http://localhost:4000"});a.interceptors.response.use((function(e){return e.data&&e.data.results?e.data.results:e.data})),t.Z=a},470:function(e,t,r){"use strict";var n=r(2791),a=r(7689),s=r(4849),i=r(184);t.Z=function(e){var t=e.delay,r=void 0===t?2e3:t,o=(0,a.s0)();return(0,n.useEffect)((function(){var e=setTimeout((function(){o("/")}),r);return function(){return clearTimeout(e)}}),[o,r]),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,i.jsx)(s.Z,{animation:"border",role:"status"})})}},5285:function(e,t,r){"use strict";r.r(t);var n=r(4165),a=r(5861),s=r(9439),i=r(2791),o=r(7022),c=r(9743),u=r(2677),l=r(5316),d=r(3360),p=r(2469),f=r(3855),h=r(7434),x=r(1087),v=r(470),j=r(184);t.default=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),m=t[0],Z=t[1],b=(0,i.useState)(""),g=(0,s.Z)(b,2),C=g[0],y=g[1],w=r(4224).get("recovery-pass"),k=(0,i.useState)(""),I=(0,s.Z)(k,2),S=I[0],R=I[1],F=(0,i.useState)(""),T=(0,s.Z)(F,2),N=T[0],U=T[1],B=(0,i.useState)({}),L=(0,s.Z)(B,2),D=L[0],E=L[1],z=(0,i.useState)(!1),A=(0,s.Z)(z,2),O=A[0],P=A[1],G=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!1),t={password:m,emailToken:w,password2:C},e.prev=2,e.next=5,(0,h.i)(t);case 5:return R("Se ha cambiado la contrase\xf1a de su cuenta correctamente"),U(""),Z(""),y(""),alert("La contrase\xf1a se ha cambiado correctamente, inicie Sesion de nuevo"),e.abrupt("return",(0,j.jsx)(v.Z,{}));case 13:e.prev=13,e.t0=e.catch(2),U("Las contrase\xf1as no coinciden entre ellas."),R("");case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),H=function(){P(!1)};return w?(0,j.jsxs)(o.Z,{style:{display:"flex",alignItems:"center",margin:"0 auto",padding:"17px"},children:[(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)(c.Z,{className:"justify-content-md-center",children:(0,j.jsxs)(u.Z,{md:"6",children:[(0,j.jsxs)(l.Z,{show:O,onHide:H,children:[(0,j.jsx)(l.Z.Header,{closeButton:!0,children:(0,j.jsx)(l.Z.Title,{children:"Confirmar"})}),(0,j.jsx)(l.Z.Body,{children:"\xbfEst\xe1s seguro de que deseas cambiar tu contrase\xf1a?"}),(0,j.jsxs)(l.Z.Footer,{children:[(0,j.jsx)(d.Z,{variant:"secondary",onClick:H,children:"Cancelar"}),(0,j.jsx)(d.Z,{variant:"primary",onClick:G,children:"Aceptar"})]})]}),S&&(0,j.jsx)(p.Z,{variant:"success",children:S}),N&&(0,j.jsx)(p.Z,{variant:"danger",children:N}),(0,j.jsxs)(f.Z,{onSubmit:function(e){e.preventDefault(),function(){var e={};return m||(e.price="La nueva contrase\xf1a es obligatoria"),C||(e.price="La nueva contrase\xf1a es obligatoria"),E(e),0===Object.keys(e).length}()&&P(!0)},encType:"multipart/form-data",style:{padding:"30px",width:"700px",borderRadius:"30px",backgroundColor:"#BC05C8",color:"#FFFFFF "},children:[(0,j.jsx)("br",{}),(0,j.jsx)("h2",{children:"Recuperar contrase\xf1a"}),(0,j.jsxs)("p",{children:["Ingresa tu nueva contrase\xf1a y asegurate repitiendola para actualizar la configuracion en tu cuenta"," "]}),(0,j.jsxs)("h6",{children:["Su correo electronico es: ",w]}),(0,j.jsxs)(f.Z.Group,{controlId:"formPrice",children:[(0,j.jsx)(f.Z.Label,{children:" Nueva Contrase\xf1a: "}),(0,j.jsx)(f.Z.Control,{type:"password",placeholder:"Ingresa tu  nueva contrase\xf1a...",value:m,onChange:function(e){return Z(e.target.value)}}),D.price&&(0,j.jsx)(f.Z.Text,{className:"text-danger",children:D.price})]}),(0,j.jsx)("br",{}),(0,j.jsxs)(f.Z.Group,{controlId:"formPrice2",children:[(0,j.jsx)(f.Z.Label,{children:"Repita la Nueva Contrase\xf1a: "}),(0,j.jsx)(f.Z.Control,{type:"password",placeholder:"Repite tu nueva contrase\xf1a...",value:C,onChange:function(e){return y(e.target.value)}}),D.price&&(0,j.jsx)(f.Z.Text,{className:"text-danger",children:D.price})]}),(0,j.jsx)("br",{}),(0,j.jsx)(d.Z,{variant:"primary",type:"submit",children:"Cambiar contrase\xf1a"}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsxs)("p",{children:["\xbfEstas perdido?"," ",(0,j.jsx)(x.rU,{to:"/login",style:{textDecoration:"none"},children:"Iniciar Sesion"})]})]})]})})]}):(0,j.jsx)(v.Z,{})}},7434:function(e,t,r){"use strict";r.d(t,{i:function(){return i},u:function(){return s}});var n=r(3965),a="/api/users",s=function(e){return n.Z.post("".concat(a,"/recovery"),e,{headers:{"Content-Type":"application/json"}})},i=function(e){return n.Z.post("".concat(a,"/change-password"),e,{headers:{"Content-Type":"application/json"}})}},4224:function(e){e.exports=function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}function t(r,n){function a(t,a,s){if("undefined"!==typeof document){"number"===typeof(s=e({},n,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var o in s)s[o]&&(i+="; "+o,!0!==s[o]&&(i+="="+s[o].split(";")[0]));return document.cookie=t+"="+r.write(a,t)+i}}function s(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},a=0;a<t.length;a++){var s=t[a].split("="),i=s.slice(1).join("=");try{var o=decodeURIComponent(s[0]);if(n[o]=r.read(i,o),e===o)break}catch(c){}}return e?n[e]:n}}return Object.create({set:a,get:s,remove:function(t,r){a(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},4849:function(e,t,r){"use strict";var n=r(1413),a=r(5987),s=r(1694),i=r.n(s),o=r(2791),c=r(162),u=r(184),l=["bsPrefix","variant","animation","size","as","className"],d=o.forwardRef((function(e,t){var r=e.bsPrefix,s=e.variant,o=e.animation,d=void 0===o?"border":o,p=e.size,f=e.as,h=void 0===f?"div":f,x=e.className,v=(0,a.Z)(e,l);r=(0,c.vE)(r,"spinner");var j="".concat(r,"-").concat(d);return(0,u.jsx)(h,(0,n.Z)((0,n.Z)({ref:t},v),{},{className:i()(x,j,p&&"".concat(j,"-").concat(p),s&&"text-".concat(s))}))}));d.displayName="Spinner",t.Z=d}}]);
//# sourceMappingURL=285.9aea7384.chunk.js.map