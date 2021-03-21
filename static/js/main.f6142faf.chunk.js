(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=n(10),s=n(4),l=n(5),u=n(7),h=n(6),d=n(19),m=n.n(d),g=(n(45),n(46),n(0)),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state.query;""!==n&&(e.props.onSubmit(n),e.setState({query:""}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.query;return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),n}(a.Component),f=(n(48),function(e){var t=e.url,n=e.tag;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image"})})}),j=(n(49),function(e){var t=e.images,n=e.tag;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL;return Object(g.jsx)(f,{url:a,tag:n},t)}))})}),p=(n(50),function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}),y=(n(51),document.querySelector("#modal-root")),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOnBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.handleOnBackdropClick,children:Object(g.jsx)("div",{className:"Modal",children:this.props.children})}),y)}}]),n}(a.Component),O=n(20),w=n.n(O),k={fetchImages:function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a,c=e.perPage,o=void 0===c?12:c;return w.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=19734316-10978fed4d6ca650a445cb4b9&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))}},x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,bigImageUrl:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null,bigImageUrl:""})},e.fetchImages=function(){var t=e.state,n=t.currentPage,a={searchQuery:t.searchQuery,currentPage:n};e.setState({isLoading:!0}),k.fetchImages(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleOnImageClick=function(t){var n=e.state,a=n.images,r=n.showModal;if("IMG"===t.target.nodeName&&!r){var c=a.find((function(e){return e.webformatURL===t.target.src}));e.setState({bigImageUrl:c.largeImageURL}),e.toggleModal()}},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOnImageClick)}},{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOnImageClick)}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.searchQuery,a=e.isLoading,r=e.showModal,c=e.bigImageUrl,o=t.length>0&&!a;return Object(g.jsxs)("div",{children:[Object(g.jsx)(b,{onSubmit:this.onChangeQuery}),Object(g.jsx)(j,{images:t,tag:n}),a&&Object(g.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",width:100,height:100}),o&&Object(g.jsx)(p,{onClick:this.fetchImages}),r&&Object(g.jsx)(v,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:c,alt:n,width:1e3})})]})}}]),n}(a.Component);n(70);o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f6142faf.chunk.js.map