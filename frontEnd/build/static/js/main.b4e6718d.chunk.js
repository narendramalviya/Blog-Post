(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{29:function(e,t){var n="http://localhost:7000/api";t.fetchAllPost=function(e,t){return console.log(e,t),fetch("".concat(n,"/").concat(e,"/?statusid=").concat(t)).then((function(e){return e.json()})).then((function(e){return e}))},t.fetchNewPost=function(e,t){return fetch("".concat(n,"/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})}},67:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),a=n.n(s),l=n(8),i=n.n(l),o=(n(67),n(21)),r=n(13),d=n(14),j=n(16),h=n(15),u=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"about us"})})}}]),n}(s.Component),b=function(){var e=[{path:"/",name:"Home"},{path:"/admin",name:"Admin"},{path:"/about",name:"About"},{path:"/contact",name:"Contact"},{path:"/login",name:"Login"},{path:"/logout",name:"Log Out"}].map((function(e,t){return Object(c.jsxs)(o.b,{to:e.path,className:"ml-3",children:[" ",e.name]},t)}));return Object(c.jsx)("div",{className:"mt-2 ml-2",children:Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("h6",{children:"Blogs"}),e]})})},m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(b,{})})}}]),n}(s.Component),p=n(10),f=n(104),x=n(56),O=n.n(x),v=function(e){var t,n,s=e.post,a=e.num,l=s.id,i=s.fk_user_id,o=s.title,r=s.description,d=(s.content,r.title<29?o:(t=s.title,n=28,t.slice(0,n)+"..."));return Object(c.jsxs)(f.a,{variant:"outlined",style:{height:"300px"},className:"p-2",children:[Object(c.jsx)("img",{src:"https://picsum.photos/600/".concat(700+a,"/?random"),alt:"random pic",style:{width:"100%",height:"222px"}}),Object(c.jsxs)("p",{children:[l,".",d]}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)(O.a,{}),Object(c.jsxs)("p",{className:"mb-0 ml-1",children:["Author ",i]}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("i",{class:"far fa-thumbs-up"}),Object(c.jsx)("p",{children:"Like"}),Object(c.jsx)("i",{class:"far fa-comments"}),Object(c.jsx)("p",{children:"Comments"}),Object(c.jsx)("i",{class:"far fa-share-square"}),Object(c.jsx)("p",{children:"Share"})]})]})]})},g=n(108),y=n(29),N=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={posts:null,fileterBy:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(y.fetchAllPost)("/all-post",this.state.fileterBy).then((function(t){console.log("posts.js",t),t.error?(console.log("if inside",t),alert("error")):e.setState({posts:t})})).catch((function(e){return console.log("failed to fetch all post",e)}))}},{key:"render",value:function(){console.log("posts",this.state.posts);var e=null,t=this.state.posts;return null!=t&&(e=t.map((function(e,t){return Object(c.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,className:"p-2",children:Object(c.jsx)(v,{post:e,num:t})},t)}))),Object(c.jsx)(g.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",children:e})}}]),n}(s.Component),w=n.p+"static/media/lindsay kolowich headshot.27fc002e.jpg",C=n.p+"static/media/blogging-for-beginners.81ac7996.webp",k=(n.p,n.p,n.p,n.p,n.p,n.p,n(110)),P=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=["primary","secondary","success","danger","warning","info","light","dark"],t=["fasion","nature","history","politics","programming","space"].map((function(t,n){return Object(c.jsx)(k.a,{variant:"contained",color:e[n%8],className:"mr-2",children:t},n)}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"row p-5 m-0",children:[Object(c.jsxs)("div",{className:"align-items-center col-12 col-lg-6 col-md-6 col-xl-6 d-flex flex-column justify-content-center",children:[Object(c.jsx)("h1",{className:"font-weight-normal text-center",children:"17 Blogging Mistakes to Avoid in 2020, According to HubSpot Bloggers"}),Object(c.jsxs)("div",{className:"align-content-between d-flex justify-content-center",children:[Object(c.jsx)("img",{id:"authorPic",src:w,alt:"author",style:{width:"90px",height:"90px",borderRadius:"45px"}}),Object(c.jsx)("div",{className:"align-items-center d-flex",children:Object(c.jsxs)("p",{className:"mb-0 ml-3",children:[" ","Written by Lindsay Kolowich Cox"]})})]})]}),Object(c.jsx)("div",{className:"d-flex align-items-center col-12 col-lg-6 col-md-6 col-xl-6 justify-content-center",children:Object(c.jsx)("img",{src:C,alt:"random pic",style:{width:"400px"}})})]}),Object(c.jsx)("p",{className:"text-center",children:"\u25cf\u25cf\u25cf"}),Object(c.jsx)("div",{className:"align-items-center d-flex justify-content-center mx-0 my-5 row",children:t}),Object(c.jsx)("div",{className:"row my-5 mx-0",children:Object(c.jsx)(N,{})})]})}}]),n}(s.Component),S=n(39),I=n(41),A=n(109),B=n(45),T=n.n(B),D=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={post:{userId:1,title:"new post title",description:"some descriptio about new post",content:"React is a library for creating front end views. It has a big ecosystem of libraries that work with it. Also, we can use it to enhance existing apps To build single-page apps, we have to have some way to map URLs to the React component to display.In this article, we\u2019ll look at how to define nested routes with React Router.Nested Routes To define nested routes, first, we define a grandchild route to display the content of the nested routes. We can use the useParams hook to get any route parameters.Then we can define nested routes by defining a child component to hold our nested routes.In the child component, we get the url and path properties from the useRouteMatch hook.Then we use the url variable to prefix the path in the to prop of the Link s. In the Route components, we prefix the path prop with the path property returned from useRouteMatchm Then we create a parent component that holds the child route that we defined above.",fileId:2,categoryId:2}},e.onChange=function(t){var n=t.target,c=n.name,s=n.value,a=e.state.post;e.setState({post:Object(I.a)(Object(I.a)({},a),{},Object(S.a)({},c,s))})},e.onSubmit=function(){Object(y.fetchNewPost)("new-post",Object(I.a)({},e.state.post)).then((function(e){return e.json()})).then((function(e){e.error?console.log(e.error):console.log("result",e.result)})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.post,t=e.userId,n=e.title,s=e.fileId,a=e.categoryId,l=e.description,i=e.content;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"mb-5",children:Object(c.jsx)("h3",{className:"text-center  ",children:"New Post"})}),Object(c.jsx)("form",{className:" ustify-content-center",noValidate:!0,autoComplete:"off",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-12 pr-0",children:[Object(c.jsx)(A.a,{id:"standard-uncontrolled",label:"User Id",variant:"outlined",className:"mr-2",value:t,name:"userId",onChange:this.onChange}),Object(c.jsx)(A.a,{id:"title",label:"title",variant:"outlined",className:"mr-2",value:n,name:"title",onChange:this.onChange}),Object(c.jsx)(A.a,{id:"fileId",label:"file id",variant:"outlined",className:"mr-2",value:s,name:"fileId",onChange:this.onChange})," ",Object(c.jsx)(A.a,{id:"categoryId",label:"category id",variant:"outlined",className:"",value:a,name:"categoryId",onChange:this.onChange})]}),Object(c.jsx)("div",{className:"col-12 pt-3",children:Object(c.jsx)(A.a,{id:"outlined-name",label:"Description",variant:"outlined",fullWidth:!0,className:"",name:"description",value:l,onChange:this.onChange})}),Object(c.jsx)("div",{className:"col-12 pt-3",children:Object(c.jsx)(A.a,{id:"outlined-name",label:"Content",variant:"outlined",fullWidth:!0,multiline:!0,rows:15,className:"",value:i,name:"content",onChange:this.onChange})}),Object(c.jsx)("div",{className:"col-12 my-4",children:Object(c.jsx)(k.a,{variant:"contained",color:"secondary",size:"large",className:"",startIcon:Object(c.jsx)(T.a,{}),fullWidth:!0,onClick:this.onSubmit,children:"Save"})})]})})]})}}]),n}(s.Component),L=function(e){var t,n,s=e.post,a=(s.id,s.fk_user_id,s.title),l=s.description,i=(s.content,s.status);a<29||(t=s.title,n=28,t.slice(0,n));return Object(c.jsx)("div",{className:"card d-flex mt-4",style:{width:"100%"},children:Object(c.jsxs)("div",{className:"align-items-center card-body d-flex justify-content-between",children:[Object(c.jsxs)("div",{className:"d-flex flex-column",children:[Object(c.jsx)("h3",{children:a}),Object(c.jsx)("p",{className:"card-text",children:l})]}),Object(c.jsxs)("div",{className:"d-flex flex-column",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-end ",children:[" ",Object(c.jsx)("p",{className:"badge ".concat(i?"badge-success":"badge-secondary"),children:i?"Published":"Un Published"})," "]}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center p-3",children:[Object(c.jsx)("p",{className:"mb-0",children:"Likes"}),Object(c.jsx)("p",{className:"mb-0",children:"834"})]}),Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center p-3",children:[Object(c.jsx)("p",{className:"mb-0",children:"Comments"}),Object(c.jsx)("p",{className:"mb-0",children:"929"})]}),Object(c.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center p-3",children:[Object(c.jsx)("p",{className:"mb-0",children:"Shares"}),Object(c.jsx)("p",{className:"mb-0",children:"57"})]})]})]})]})})},R=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={posts:null,fileterBy:null},e.selectOnChange=function(t){e.setState({fileterBy:t.target.value})},e.fetchPostsData=function(){Object(y.fetchAllPost)("/all-post",e.state.fileterBy).then((function(t){console.log("posts[fetALlData,userpost]",t),t.error?(console.log("if inside",t),alert("error")):e.setState({posts:t})})).catch((function(e){return console.log("failed to fetch all post",e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchPostsData()}},{key:"componentDidUpdate",value:function(e,t){console.log("did update",e,t),t.fileterBy!==this.state.fileterBy&&this.fetchPostsData()}},{key:"render",value:function(){var e=null,t=this.state.posts;return null!=t&&(e=t.map((function(e,t){return Object(c.jsx)(g.a,{item:!0,xs:12,sm:12,md:12,children:Object(c.jsx)(L,{post:e})},t)}))),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)("h1",{children:"Posts"})})}),Object(c.jsx)("div",{className:"d-flex flex-column",children:Object(c.jsxs)("div",{className:"d-flex ",children:[Object(c.jsx)(A.a,{label:"Search By Author/Title",variant:"outlined",className:"mr-2",name:"searchText",fullWidth:!0}),Object(c.jsx)("button",{className:"btn btn-primary mt-2",children:"Search"})]})}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"sel1",children:"Select list:"}),Object(c.jsxs)("select",{className:"form-control",id:"sel1",name:"postStatus",onChange:this.selectOnChange,children:[Object(c.jsx)("option",{value:"0",children:"All Posts"}),Object(c.jsx)("option",{value:"1",children:"UnPublished"}),Object(c.jsx)("option",{value:"2",children:"Published"})]})]}),e]})}}]),n}(s.Component),M=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.match.path;return Object(c.jsxs)("div",{className:"row m-0 mt-5",children:[Object(c.jsx)("div",{className:"col-2 border",children:Object(c.jsx)("nav",{className:"mt-3 nav",children:Object(c.jsxs)("ul",{className:"align-content-center d-flex flex-column justify-content-center p-3",style:{listStyle:"none"},children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"".concat(e),children:"all post"})}),Object(c.jsx)("li",{className:"mt-1",children:Object(c.jsx)(o.b,{to:"".concat(e,"/new-post"),children:"New Post"})}),Object(c.jsx)("li",{className:"mt-1",children:Object(c.jsx)(o.b,{to:"",children:"Bulk SMS"})}),Object(c.jsx)("li",{className:"mt-1",children:Object(c.jsx)(o.b,{to:"",children:"option4"})})]})})}),Object(c.jsx)("div",{className:"col-10 border",children:Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{exact:!0,path:"".concat(e),component:R}),Object(c.jsx)(p.a,{exact:!0,path:"".concat(e,"/new-post"),component:D})]})})]})}}]),n}(s.Component),W=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return console.log("main layout"),Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{exact:!0,path:"/",component:P}),Object(c.jsx)(p.a,{path:"/admin",component:M})]}),Object(c.jsx)(u,{})]})}}]),n}(s.Component),F=function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)(W,{})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),a(e),l(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),U()}},[[74,1,2]]]);
//# sourceMappingURL=main.b4e6718d.chunk.js.map