"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[793],{31303:function(M,s,a){a.r(s);var c=a(5574),g=a.n(c),v=a(26641),l=a(35312),h=a(28459),d=a(2487),E=a(4393),_=a(67294),e=a(85893),m=function(){var r=(0,l.useParams)(),D=r.categoryid,p=r.categoryname,x=(0,_.useState)([]),i=g()(x,2),f=i[0],C=i[1],P=function(){(0,v.iq)(D).then(function(n){C(n.data.songs)})};(0,_.useEffect)(function(){P()},[]);var y=function(n,t){l.history.push(window.location.pathname+"/songs/"+n+"/"+t)};return(0,e.jsx)(h.ZP,{theme:{token:{fontFamily:"Segoe UI"}},children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
          @media (max-width: 1900px) {
            .ant-list-grid.ant-list-item {
              width: 50%;
            }
            .ant-card .ant-card-head {
              font-size: 11px; 
              overflow: visible;
            }
          }
        `}),(0,e.jsxs)("div",{style:{overflow:"auto",padding:"25px 25px",marginTop:"10px"},children:[(0,e.jsx)("h3",{children:p}),(0,e.jsx)("p",{style:{color:"#B6B6B6",paddingBottom:"10px",fontSize:"12px"},children:"Select playList and add songs to the playlist"}),(0,e.jsx)(d.Z,{grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:4},dataSource:f,renderItem:function(n){var t,o;return(0,e.jsx)(d.Z.Item,{children:(0,e.jsx)(E.Z,{bodyStyle:{padding:"10px"},style:{backgroundColor:"#C2B0D8",textAlign:"center"},onClick:function(){return y(n.id,n==null?void 0:n.name)},cover:(0,e.jsx)("img",{alt:"example",src:n!=null&&n.images&&n.images.length>0?n.images[0].url:null}),title:(t=n==null?void 0:n.name)!==null&&t!==void 0?t:"-",children:(0,e.jsx)("div",{style:{height:"50px",overflowY:"auto"},children:(o=n==null?void 0:n.description)!==null&&o!==void 0?o:"-"})})})}})]})]})})};s.default=m}}]);
