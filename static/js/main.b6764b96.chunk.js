(this["webpackJsonpcomplete-photo-video"]=this["webpackJsonpcomplete-photo-video"]||[]).push([[0],{63:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a,i,c,r,s=n(0),o=n.n(s),j=n(11),l=n.n(j),b=(n(63),n(8)),d=n(7),u=d.a.div(a||(a=Object(b.a)(["\n    margin: 100px auto;\n    text-align: center;\n"]))),m=d.a.h2(i||(i=Object(b.a)(["\n    font-size: 36px;\n    text-transform: uppercase;\n"]))),f=d.a.p(c||(c=Object(b.a)(["\n    font-size: 22px;\n    font-weight: 200;\n    line-height: 1.5;\n"]))),p=n(2),O=function(){return Object(p.jsxs)(u,{children:[Object(p.jsx)(m,{children:"Czym si\u0119 zajmuj\u0119?"}),Object(p.jsxs)(f,{children:["Mam r\xf3\u017cnorodne umiej\u0119tno\u015bci, od nagrywania i edycji film\xf3w,",Object(p.jsx)("br",{})," do fotografii i obr\xf3bki graficznej.",Object(p.jsx)("br",{})," Tworzenie jest tym czym zajmuj\u0119 si\u0119 na codzie\u0144, to moja pasja.",Object(p.jsx)("br",{})," Zawsze szukam nowych pomys\u0142\xf3w i nowych miejsc,",Object(p.jsx)("br",{})," aby zaspokoi\u0107 moj\u0105 wyobra\u017ani\u0119."]})]})},g=d.a.p(r||(r=Object(b.a)(["\n    color: white;\n    background-color: black;\n    padding: 15px;\n    margin: 0;\n    text-align: center;\n"]))),h=function(){return Object(p.jsx)(g,{children:"Kacper Puzio\xa9. Wszelkie prawa zastrze\u017cone"})},x=n(44),v=n(26),w=n(21),z=n(22),y="value",k="error";function S(e){return"object"===typeof e&&null!==e}function F(e,t){return!e&&t?"Pole nie mo\u017ce by\u0107 puste!":""}function A(e,t){return Object.keys(e).reduce((function(n,a){return n[a]="boolean"===typeof t?t:e[a][t],n}),{})}var C,Z,I,N,P,E,T,q,M,B,D,K,V,W,Y,H,J,L,_,R,U,$,G,Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=Object(s.useState)(e),i=Object(z.a)(a,2),c=i[0],r=i[1],o=Object(s.useState)(A(c,y)),j=Object(z.a)(o,2),l=j[0],b=j[1],d=Object(s.useState)(A(c,k)),u=Object(z.a)(d,2),m=u[0],f=u[1],p=Object(s.useState)(A(c,!1)),O=Object(z.a)(p,2),g=O[0],h=O[1],x=Object(s.useState)(!0),C=Object(z.a)(x,2),Z=C[0],I=C[1],N=Object(s.useState)(!1),P=Object(z.a)(N,2),E=P[0],T=P[1];Object(s.useEffect)((function(){r(e),I(!0),D()}),[]),Object(s.useEffect)((function(){var e=A(c,y);b(e),f(Object.keys(e).reduce((function(t,n){return t[n]=B(n,e[n]),t}),{}))}),[c]),Object(s.useEffect)((function(){E&&I(K())}),[m,E]);var q=function(e){var t=e.name,n=e.value;b((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(v.a)({},t,n))})),h((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(v.a)({},t,!0))}))},M=function(e){var t=e.name,n=e.error;return f((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(v.a)({},t,n))}))},B=Object(s.useCallback)((function(e,n){var a=t;if(a[e]){var i=a[e],c="";if(c=F(n,i.required),S(i.validator)&&""===c){var r=i.validator;r.func(n,l)||(c=r.error)}return c}}),[t,l]),D=Object(s.useCallback)((function(){Object.keys(m).map((function(e){return M({name:e,error:B(e,l[e])})}))}),[m,l,B]),K=Object(s.useCallback)((function(){return Object.values(m).some((function(e){return e}))}),[m]),V=Object(s.useCallback)((function(e){e.preventDefault(),K()||n(l)}),[K,n,l]),W=Object(s.useCallback)((function(e){T(!0);var t=e.target.name,n=e.target.value,a=B(t,n);q({name:t,value:n}),M({name:t,error:a})}),[B]);return{dirty:g,values:l,errors:m,disable:Z,setStateSchema:r,setFieldValue:q,setFieldError:M,handleOnChange:W,handleOnSubmit:V,validateErrorState:K}},X=n(107),ee=n(106),te=n(108),ne=n(102),ae=d.a.div(C||(C=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n"]))),ie=d.a.h3(Z||(Z=Object(b.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 200;\n    font-size: 28px;\n    line-height: 1.5;\n"]))),ce=d.a.span(I||(I=Object(b.a)(["\n    font-weight: bold;\n"]))),re=function(){return Object(p.jsxs)(ie,{children:["Skontaktuj si\u0119 ",Object(p.jsx)(ce,{children:"ze mn\u0105"})," i sprawd\u017a",Object(p.jsx)("br",{}),"co mo\u017cemy zrobi\u0107 ",Object(p.jsx)(ce,{children:"razem!"})]})},se=Object(ne.a)((function(e){return{root:{margin:e.spacing(1),width:"50%",display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"20px"},textFields:{width:"100%",marginBottom:"10px"},button:{width:"100%"},error:{color:"red",fontSize:"14px",padding:"5px"}}})),oe=function(){var e=Q({firstname:{value:"",error:""},lastname:{value:"",error:""},email:{value:"",error:""}},{firstname:{required:!0,validator:{func:function(e){return/^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(e)},error:"Imi\u0119 musi mie\u0107 wi\u0119cej ni\u017c jedna litera!"}},lastname:{required:!0,validator:{func:function(e){return/^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(e)},error:"Nazwisko musi mie\u0107 wi\u0119cej ni\u017c trzy litery!"}},email:{required:!0,validator:{func:function(e){return/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e)},error:"Nieprawid\u0142owy format e-mail'a!"}}}),t=e.values,n=e.errors,a=e.dirty,i=e.handleOnChange,c=t.firstname,r=t.lastname,s=t.email,o=se();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(re,{}),Object(p.jsx)(ae,{children:Object(p.jsxs)("form",{className:o.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),Object(x.a)("firstname"),c=""},children:[Object(p.jsx)(X.a,{className:o.textFields,id:"outlined-basic",label:"Imi\u0119",variant:"outlined",name:"firstname",value:c,onChange:i}),n.firstname&&a.firstname&&Object(p.jsx)(ee.a,{className:o.error,children:n.firstname}),Object(p.jsx)(X.a,{className:o.textFields,id:"outlined-basic",label:"Nazwisko",variant:"outlined",name:"lastname",value:r,onChange:i}),n.lastname&&a.lastname&&Object(p.jsx)(ee.a,{className:o.error,children:n.lastname}),Object(p.jsx)(X.a,{className:o.textFields,id:"outlined-basic",label:"e-mail",variant:"outlined",name:"email",value:s,onChange:i,required:!0}),n.email&&a.email&&Object(p.jsx)(ee.a,{className:o.error,children:n.email}),Object(p.jsx)(X.a,{className:o.textFields,id:"standard-multiline-static",label:"Tre\u015b\u0107 wiadomo\u015bci",multiline:!0,rows:4,variant:"outlined"}),Object(p.jsx)(te.a,{className:o.button,type:"submit",variant:"contained",color:"primary",children:"Wy\u015blij"})]})})]})},je=n(35),le=n.n(je),be=n.p+"static/media/gif1.6d6cba86.gif",de=n.p+"static/media/gif2.665d8488.gif",ue=n.p+"static/media/gif3.d39656e7.gif",me=n.p+"static/media/gif4.29bf6739.gif",fe=n.p+"static/media/gif5.b0509630.gif",pe=n.p+"static/media/gif6.e6569c29.gif",Oe=n.p+"static/media/gif7.4d6a3fed.gif",ge=n.p+"static/media/gif8.46a9d80d.gif",he=n.p+"static/media/gif9.fecea656.gif",xe=n.p+"static/media/gif10.f83373b7.gif",ve=n.p+"static/media/gif11.cbcd98f1.gif",we=n.p+"static/media/img1.5c64fbc9.jpg",ze=n.p+"static/media/img2.d366e029.jpg",ye=n.p+"static/media/img3.6660bef1.jpg",ke=n.p+"static/media/img4.538d617a.jpg",Se=n.p+"static/media/img5.30ee97a6.jpg",Fe=n.p+"static/media/img6.5aec1320.jpg",Ae=n.p+"static/media/img7.277883a4.jpg",Ce=n.p+"static/media/img8.7060963f.jpg",Ze=n.p+"static/media/img9.8e8a3dcb.jpg",Ie=d.a.div(N||(N=Object(b.a)(["\n    margin: 0 15px;\n"]))),Ne=function(){var e=[be,ze,Se,Ce,fe,pe,Ze,ge,he,xe,ve,we,de,ye,ke,ue,Fe,Ae,me,Oe];return Object(p.jsx)(Ie,{children:Object(p.jsx)(je.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3,1100:4},children:Object(p.jsx)(le.a,{gutter:"15px",children:e.map((function(e,t){return Object(p.jsx)("img",{src:e,style:{width:"100%",display:"block"},alt:""},t)}))})})})},Pe=d.a.h2(P||(P=Object(b.a)(["\n    margin: 100px auto;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 1.5;\n    font-size: 40px;\n"]))),Ee=function(){return Object(p.jsxs)(Pe,{children:["Obraz jest tak samo wa\u017cny jak tysi\u0105c",Object(p.jsx)("br",{})," s\u0142\xf3w, wi\u0119c sprawd\u017a kilka moich ",Object(p.jsx)("br",{}),"projekt\xf3w."]})},Te=n(53),qe=n.p+"static/media/photographer.4a4103e8.jpg",Me=d.a.div(E||(E=Object(b.a)(["\n    position: relative;\n    top: 40px;\n    left: 48%;\n    color: white;\n"]))),Be=d.a.h3(T||(T=Object(b.a)(["\n    font-size: 36px;\n"]))),De=d.a.p(q||(q=Object(b.a)(["\n    font-size: 22px;\n    font-weight: 200;\n    line-height: 1.5;\n"]))),Ke=d.a.div(M||(M=Object(b.a)(["\n    background: rgba(0, 0, 0, 0.5);\n"]))),Ve=function(){return Object(p.jsx)(Ke,{children:Object(p.jsx)(Te.Parallax,{bgImage:qe,bgImageAlt:"photographer",strength:150,style:{position:"relative"},bgImageStyle:{zIndex:"-1"},children:Object(p.jsxs)(Me,{style:{height:400},children:[Object(p.jsx)(Be,{children:"Troszeczk\u0119 o mnie"}),Object(p.jsxs)(De,{children:["Moj\u0105 g\u0142\xf3wn\u0105 inspiracj\u0105 do tworzenia film\xf3w i robienia zdj\u0119\u0107 s\u0105 podr\xf3\u017ce.",Object(p.jsx)("br",{})," Urodzi\u0142em si\u0119 w Polsce, ale zwiedzi\u0142em wiele zak\u0105tk\xf3w \u015bwiata.",Object(p.jsx)("br",{})," Obecnie mieszkam w Milton Keynes - mie\u015bcie, kt\xf3re ci\u0105gle jest w ruchu,",Object(p.jsx)("br",{})," tak jak ja. "]})]})})})},We=n.p+"static/media/beta.6eebd0ed.mp4",Ye=d.a.ul(B||(B=Object(b.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin-right: 100px;\n"]))),He=d.a.li(D||(D=Object(b.a)(["\n    padding: 0 5px;\n"]))),Je=d.a.li(K||(K=Object(b.a)(["\n\n"]))),Le=function(){return Object(p.jsxs)(Ye,{children:[Object(p.jsx)(He,{children:Object(p.jsx)(Je,{href:"#",children:"Home"})}),Object(p.jsx)(He,{children:Object(p.jsx)(Je,{href:"#",children:"Video"})}),Object(p.jsx)(He,{children:Object(p.jsx)(Je,{href:"#",children:"Pricing"})}),Object(p.jsx)(He,{children:Object(p.jsx)(Je,{href:"#",children:"Contact"})})]})},_e=d.a.div(V||(V=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    color: white;\n    height: 60px;\n    text-transform: uppercase;\n    z-index: 1;\n"]))),Re=d.a.img(W||(W=Object(b.a)(["\n    margin-left: 100px;\n    height: 40px;\n"]))),Ue=n.p+"static/media/logo.aa65e940.png",$e=function(){return Object(p.jsxs)(_e,{children:[Object(p.jsx)(Re,{src:Ue}),Object(p.jsx)(Le,{})]})},Ge=Object(d.b)(Y||(Y=Object(b.a)([" {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-30px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n}"]))),Qe=d.a.video(H||(H=Object(b.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n"]))),Xe=d.a.div(J||(J=Object(b.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #03a9f4;\n    mix-blend-mode: overlay;\n"]))),et=d.a.div(L||(L=Object(b.a)(["\n    position: absolute;\n    top: 45%;\n    left: 0;\n    padding: 10px;\n    color: white;\n    margin-left: 100px;\n"]))),tt=d.a.h2(_||(_=Object(b.a)(["\n    font-size: 3em;\n"]))),nt=d.a.h3(R||(R=Object(b.a)(["\n   font-size: 2em; \n"]))),at=d.a.div(U||(U=Object(b.a)(["\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    animation: "," 2s infinite;\n    overflow: hidden;\n"])),Ge),it=d.a.a($||($=Object(b.a)(["\n    color: white;\n    font-size: 3em;\n"]))),ct=d.a.div(G||(G=Object(b.a)(["\n    height: 100vh;\n"]))),rt=n(36),st=n.n(rt),ot=function(){return Object(p.jsxs)(ct,{children:[Object(p.jsx)($e,{}),Object(p.jsx)(Qe,{src:We,autoPlay:!0,muted:!0,loop:!0}),Object(p.jsx)(Xe,{}),Object(p.jsxs)(et,{children:[Object(p.jsx)(tt,{children:Object(p.jsx)(st.a,{onInit:function(e){e.typeString("Hi, I'm Kacper and I can help you").pauseFor(2500).start()}})}),Object(p.jsx)(nt,{children:Object(p.jsx)(st.a,{options:{loop:!0},onInit:function(e){e.pauseFor(4500).typeString("take nice photos.").pauseFor(2500).deleteAll().typeString("create a beautiful logo.").pauseFor(2500).deleteAll().typeString("make a cool video.").pauseFor(2500).deleteAll().start()}})})]}),Object(p.jsx)(at,{class:"arrow bounce",children:Object(p.jsx)(it,{href:"#",children:Object(p.jsx)("i",{class:"fas fa-chevron-down"})})})]})};var jt=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ot,{}),Object(p.jsx)(Ee,{}),Object(p.jsx)(Ne,{}),Object(p.jsx)(O,{}),Object(p.jsx)(Ve,{}),Object(p.jsx)(oe,{}),Object(p.jsx)(h,{})]})},lt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};l.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(jt,{})}),document.getElementById("root")),lt()}},[[71,1,2]]]);
//# sourceMappingURL=main.b6764b96.chunk.js.map