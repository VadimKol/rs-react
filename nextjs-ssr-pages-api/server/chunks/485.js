exports.id=485,exports.ids=[485],exports.modules={7189:e=>{e.exports={card:"styles_card__qCQY2",text_container:"styles_text_container__0gNaz",card_title:"styles_card_title__nFRJb",card_link:"styles_card_link__L9Wd4"}},8896:e=>{e.exports={button:"styles_button__WdoMM"}},3070:e=>{e.exports={favorite:"styles_favorite__3_Hph"}},8682:e=>{e.exports={flyout:"styles_flyout__LFcDu",title:"styles_title__G3ZZV",buttons:"styles_buttons__KGnzR",button:"styles_button__j_xqT",download_link:"styles_download_link__aN5ry"}},8894:e=>{e.exports={footer:"styles_footer__1cZ8q",container:"styles_container__1t_Oy",dark_rs:"styles_dark_rs__itWCf",light_rs:"styles_light_rs__amkGm"}},8232:e=>{e.exports={header:"styles_header__fpulf",container:"styles_container__CZwiU",theme:"styles_theme__JS6GT",button_dark:"styles_button_dark__KT9Zb",button_light:"styles_button_light__72xaf"}},853:e=>{e.exports={image_container:"styles_image_container__HWpun",character_img:"styles_character_img__y8_sx",hidden:"styles_hidden__wncEB"}},4850:e=>{e.exports={loader:"styles_loader__cVuQp",l2:"styles_l2__TBnA6"}},8336:e=>{e.exports={pagination:"styles_pagination__Jm8Ba",pagination_box:"styles_pagination_box____K_t",pagination_box_before:"styles_pagination_box_before__vb3hf",pagination_box_after:"styles_pagination_box_after__2uIdq",pages:"styles_pages__8piJe",pag_left:"styles_pag_left__FQd1b",pag_right:"styles_pag_right__Qi_Dm"}},4539:e=>{e.exports={characters:"styles_characters__fwFvw",not_found_box:"styles_not_found_box__MrUxX",not_found:"styles_not_found__eyYz1",text_container:"styles_text_container__KMvGL",results:"styles_results__n4MfD",no_character:"styles_no_character__XzIuL"}},2884:e=>{e.exports={search_form:"styles_search_form__iDKGP",search:"styles_search__94caR",search_button:"styles_search_button__Qr77L"}},6652:e=>{e.exports={error:"error_error__KFc3y",error_img:"error_error_img__TDnxV",desc:"error_desc__0fQ47",name:"error_name___x6ME"}},5294:e=>{e.exports={results:"index_results__8Gf0O",results_box:"index_results_box__UGopo",character:"index_character__4jTMT",loader:"index_loader__CIU8c"}},7581:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});let r={src:"/_next/static/media/not_found.76733abb.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAIBF/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIEEgADITL/2gAIAQEAAT8ASf5lHWxZIZcC/LWqM//EABcRAQADAAAAAAAAAAAAAAAAAAEAMYH/2gAIAQIBAT8AK1n/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhESMf/aAAgBAwEBPwCizh//2Q==",blurWidth:8,blurHeight:5}},6063:(e,t,a)=>{"use strict";a.d(t,{X:()=>r});let r=e=>{let t=e.map(e=>({name:e.name,species:e.species,gender:e.gender,status:e.status,origin:e.origin.name,location:e.location.name,episodes:e.episode.map(e=>e.replace(/\D/g,"")).join(", "),url:e.url})),a=[],r=Object.keys(t[0]||{});return a.push(r.join(",")),t.forEach(e=>{a.push(Object.values(e).map(e=>`"${e.replace(/"/g,'\\"')}"`).join(","))}),a.join("\n")}},6412:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{O:()=>u});var s=a(997),n=a(1664),i=a.n(n),c=a(1163),l=a(1037),o=a(151),_=a(7189),d=a.n(_),h=e([l]);function u({character:e}){let{query:t}=(0,c.useRouter)(),a=t.page||"1";return(0,s.jsxs)("div",{className:d().card,children:[s.jsx(o.r,{src:e.image,alt:"Character"}),(0,s.jsxs)("div",{className:d().text_container,children:[s.jsx(i(),{href:`/character/${e.id}?page=${String(a)}`,className:d().card_link,children:s.jsx("h2",{className:d().card_title,children:e.name})}),s.jsx(l._,{character:e})]})]})}l=(h.then?(await h)():h)[0],r()}catch(e){r(e)}})},5177:(e,t,a)=>{"use strict";a.d(t,{o:()=>l});var r=a(997),s=a(9003),n=a.n(s),i=a(8896),c=a.n(i);function l({children:e,type:t="button",onClick:a,className:s,isDisabled:i=!1,id:l="",aria_label:o="Button"}){return r.jsx("button",{className:n()(c().button,s),type:t,onClick:a,disabled:i,id:l,"aria-label":o,children:e})}},4883:(e,t,a)=>{"use strict";a.d(t,{S:()=>i});var r=a(997),s=a(6689),n=a(8620);class i extends s.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(t)}render(){let{hasError:e,error:t}=this.state,{children:a}=this.props;return e?r.jsx(n.default,{error:t||Error("Something went wrong")}):a}}},1037:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{_:()=>_});var s=a(997),n=a(3291),i=a(4127),c=a(3070),l=a.n(c),o=e([n,i]);function _({character:e}){let t=(0,n.useDispatch)(),a=(0,i._2)(e);return s.jsx("button",{type:"button",className:l().favorite,name:"favorite",value:String(a),"aria-label":a?"Remove from favorites":"Add to favorites",onClick:()=>e&&(a?t((0,i.zm)(e)):t((0,i._p)(e))),children:a?"★":"☆"})}[n,i]=o.then?(await o)():o,r()}catch(e){r(e)}})},7083:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{z:()=>h});var s=a(997);a(6689);var n=a(3291),i=a(6063),c=a(4127),l=a(5177),o=a(8682),_=a.n(o),d=e([n,c]);function h(){let e=(0,n.useDispatch)(),t=(0,c.rc)(),a=URL.createObjectURL(new Blob([(0,i.X)(t)],{type:"text/csv"}));return!!t.length&&(0,s.jsxs)("div",{className:_().flyout,children:[s.jsx("h3",{className:_().title,children:`${t.length} items are selected`}),(0,s.jsxs)("div",{className:_().buttons,children:[s.jsx(l.o,{className:_().button,"aria-label":"Unselect all",onClick:()=>e((0,c.V1)()),children:"Unselect all"}),s.jsx(l.o,{className:_().button,"aria-label":"Download as .csv",children:s.jsx("a",{className:_().download_link,href:a,download:`${t.length}_characters.csv`,children:"Download"})})]})]})}[n,c]=d.then?(await d)():d,r()}catch(e){r(e)}})},6038:(e,t,a)=>{"use strict";a.d(t,{$:()=>c});var r=a(997),s=a(3890),n=a(8894),i=a.n(n);function c(){let{theme:e}=(0,s.F)();return r.jsx("footer",{className:i().footer,children:r.jsx("div",{className:`${i().container} ${"dark"===e?i().dark_rs:i().light_rs}`})})}},3883:(e,t,a)=>{"use strict";a.d(t,{h:()=>c});var r=a(997),s=a(3890),n=a(8232),i=a.n(n);function c(){let{theme:e,toggleTheme:t}=(0,s.F)();return(0,r.jsxs)("header",{className:i().header,children:[r.jsx("div",{className:i().container}),r.jsx("button",{className:`${i().theme} ${"dark"===e?i().button_dark:i().button_light}`,type:"button","aria-label":"Theme switcher",onClick:t})]})}},151:(e,t,a)=>{"use strict";a.d(t,{r:()=>h});var r=a(997),s=a(5675),n=a.n(s),i=a(6689),c=a(4850),l=a.n(c);function o(){return r.jsx("div",{className:l().loader})}var _=a(853),d=a.n(_);function h({src:e,alt:t}){let[a,s]=(0,i.useState)(!0);return(0,r.jsxs)("div",{className:d().image_container,children:[a&&r.jsx(o,{}),r.jsx(n(),{className:a?d().hidden:d().character_img,src:e,alt:t,onLoad:()=>s(!1),width:300,height:300})]})}},9707:(e,t,a)=>{"use strict";a.d(t,{t:()=>c});var r=a(997),s=a(1163),n=a(8336),i=a.n(n);function c({page:e,total:t,handleClose:a}){let{push:n}=(0,s.useRouter)(),c=i().pagination_box;e-1||(c=`${i().pagination_box_before}`),e<t||(c=`${i().pagination_box_after}`),e-1||e<t||(c=i().pagination_box);let l=e=>{n({pathname:"/",query:{page:String(e)}}).catch(()=>{})};return r.jsx("div",{className:i().pagination,onClick:a,children:(0,r.jsxs)("div",{className:c,onClick:a,children:[!!(e-1)&&r.jsx("button",{type:"button","aria-label":"Left",className:i().pag_left,onClick:()=>l(e-1)}),(0,r.jsxs)("div",{className:i().pages,children:[r.jsx("span",{children:e}),"-",r.jsx("span",{children:t})]}),e<t&&r.jsx("button",{type:"button","aria-label":"Right",className:i().pag_right,onClick:()=>l(e+1)})]})})}},1529:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{u:()=>h});var s=a(997),n=a(7581),i=a(6412),c=a(151),l=a(9707),o=a(4539),_=a.n(o),d=e([i]);function h({characters:e,total:t,page:a,characterID:r,handleClose:o}){return e.length?(0,s.jsxs)("div",{className:"/"!==r?_().results:_().no_character,onClick:o,children:[s.jsx("ul",{className:_().characters,onClick:o,role:"presentation",children:e.map(e=>s.jsx("li",{className:_().characters_item,children:s.jsx(i.O,{character:e})},e.id))}),s.jsx(l.t,{total:t,page:a,handleClose:o})]}):s.jsx("div",{className:_().not_found_box,onClick:o,children:(0,s.jsxs)("div",{className:_().not_found,children:[s.jsx(c.r,{src:n.Z.src,alt:"Rick and Morty not found"}),s.jsx("div",{className:_().text_container,children:"Characters not found"})]})})}i=(d.then?(await d)():d)[0],r()}catch(e){r(e)}})},1339:(e,t,a)=>{"use strict";a.d(t,{o:()=>l});var r=a(997),s=a(1163),n=a(8789),i=a(2884),c=a.n(i);function l({searchField:e,character:t,setCharacter:a,loader:i}){let[,l]=(0,n._)("R&M_search"),{replace:o}=(0,s.useRouter)();return(0,r.jsxs)("form",{className:c().search_form,onSubmit:t=>{if(t.preventDefault(),"string"==typeof e.current?.value&&!i){let t=e.current?.value.trim();a({name:t}),l(t),o({pathname:"/",query:{page:"1"}}).catch(()=>{})}},children:[r.jsx("input",{id:"search",className:c().search,type:"text",placeholder:"Search...",ref:e,defaultValue:t.name}),r.jsx("button",{type:"submit",className:c().search_button,"aria-label":"Search-button"})]})}},8726:(e,t,a)=>{"use strict";a.d(t,{N:()=>n,f:()=>i});var r=a(997),s=a(6689);let n=(0,s.createContext)({theme:"dark",toggleTheme:()=>{}});function i({children:e}){let[t,a]=(0,s.useState)("dark"),i=(0,s.useCallback)(()=>a(e=>"light"===e?"dark":"light"),[]),c=(0,s.useMemo)(()=>({theme:t,toggleTheme:i}),[t,i]);return r.jsx(n.Provider,{value:c,children:e})}},8789:(e,t,a)=>{"use strict";a.d(t,{_:()=>s});var r=a(6689);function s(e){let[t,a]=(0,r.useState)("");return[t,a]}},3890:(e,t,a)=>{"use strict";a.d(t,{F:()=>n});var r=a(6689),s=a(8726);let n=()=>(0,r.useContext)(s.N)},3893:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>A});var s=a(997);a(5810);var n=a(968),i=a.n(n),c=a(3291),l=a(4883),o=a(6038),_=a(3883),d=a(8726),h=a(4091),u=e([c,h]);function A({Component:e,pageProps:t}){let{store:a}=h.Y.useWrappedStore(t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i(),{children:[s.jsx("link",{rel:"icon",href:"icon.svg",type:"image/svg+xml"}),s.jsx("link",{rel:"apple-touch-icon",href:"apple-icon.png"}),s.jsx("link",{rel:"icon",href:"favicon.ico"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),s.jsx("title",{children:"Rick and Morty"})]}),s.jsx(l.S,{children:s.jsx(d.f,{children:(0,s.jsxs)(c.Provider,{store:a,children:[s.jsx(_.h,{}),s.jsx(e,{...t}),s.jsx(o.$,{})]})})})]})}[c,h]=u.then?(await u)():u,r()}catch(e){r(e)}})},1070:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var r=a(997),s=a(6859);function n(){return(0,r.jsxs)(s.Html,{lang:"en",children:[r.jsx(s.Head,{}),(0,r.jsxs)("body",{className:"body",children:[r.jsx(s.Main,{}),r.jsx(s.NextScript,{})]})]})}},8620:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var r=a(997),s=a(5675),n=a.n(s);let i={src:"/_next/static/media/loader.c3602ec3.png",height:684,width:700,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42mNYtL6V8d+JR4ytu1uYGCaZcjFMMuJhiDRkfjAtlJEBGUTsMjeddsJnyuyTPgtajnhGhx8NEARLbN88Ubx7f5Ndy/6AE007HP9Xb3X937DL/W/KVqu4ifODuRnaVoYoLtk6a9ba4/P/bzmX+3vK/vjfy48m/d++penZ/l3NjgwHTqzQX36guWHG/vr/W863/O7dGf3zxPW0/4sPB21hmB8rwHB4/2rpghMx+sV7Da9lb7T/X7fJ7f+i417/a486pzNkMrAwgMEcBvaygwGe3Ue9Z/Uf9VpVd8gjw22rm/inKzmMDLv3rYV4Z5YzM8Mie26GZTb8DPPsWP89jgaLAwA1QHHOl8XBpwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};var c=a(3890),l=a(6652),o=a.n(l);function _({error:e}){let{theme:t}=(0,c.F)();return r.jsx("main",{className:"dark"===t?"main":"main light",children:(0,r.jsxs)("div",{className:o().error,children:[r.jsx("p",{className:o().name,children:"ERROR"}),r.jsx(n(),{className:o().error_img,src:i,alt:"Rick and Morty error",width:500,height:500}),r.jsx("p",{className:o().desc,children:e?.message}),r.jsx("p",{className:o().desc,children:"Please refresh the page"})]})})}},1364:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>m,getServerSideProps:()=>p});var s=a(997),n=a(1163),i=a(6689),c=a(7083),l=a(1529),o=a(1339),_=a(8789),d=a(3890),h=a(9335),u=a(4091),A=a(5294),g=a.n(A),x=e([c,l,h,u]);[c,l,h,u]=x.then?(await x)():x;let p=u.Y.getServerSideProps(e=>async t=>{let{page:a,id:r}=t.query;return await e.dispatch(h.Hv.getCharacters.initiate({page:Math.floor(Number(a))||1,character:{name:""}})),r&&await e.dispatch(h.Hv.getCharacter.initiate(Number(r))),await Promise.all(e.dispatch((0,h.zk)())),{props:{}}});function m({children:e}){let{query:t,push:a}=(0,n.useRouter)(),r=Math.floor(Number(t.page))||1,[u]=(0,_._)("R&M_search"),[A,x]=(0,i.useState)({name:u}),m=(0,i.useRef)(null),p=t.id||"/",{data:y,isFetching:f,isError:j,error:b}=(0,h.C)({page:r,character:A}),{characters:v,totalPages:N}=y||{characters:[],totalPages:0},{theme:w}=(0,d.F)();if(j)throw b;let C=e=>{e.target===e.currentTarget&&"/"!==p&&a({pathname:"/",query:{page:r}}).catch(()=>{})};return(0,s.jsxs)("main",{className:"dark"===w?"main":"main light",onClick:C,role:"presentation",children:[s.jsx("section",{onClick:C,children:s.jsx(o.o,{character:A,loader:f,searchField:m,setCharacter:x})}),s.jsx("section",{className:g().results,onClick:C,children:(0,s.jsxs)("div",{className:"/"!==p?g().character:g().results_box,children:[f?s.jsx("div",{className:g().loader}):s.jsx(l.u,{characters:v,total:N,page:r,characterID:String(p),handleClose:C}),e?.(String(p))]})}),s.jsx(c.z,{})]})}r()}catch(e){r(e)}})},4127:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{V1:()=>_,_2:()=>A,_p:()=>l,rc:()=>u,vU:()=>c,zm:()=>o});var s=a(3258),n=a(3291),i=e([s,n]);[s,n]=i.then?(await i)():i;let c=(0,s.createSlice)({name:"favorites",initialState:[],reducers:{addToFavorites:(e,t)=>{e.push(t.payload)},removeFromFavorites:(e,t)=>e.filter(e=>e.id!==t.payload.id),clearFavorites:()=>[]}}),{addToFavorites:l,removeFromFavorites:o,clearFavorites:_}=c.actions,d=e=>e.favorites,h=(e,t)=>e.favorites.some(e=>e.id===t?.id),u=()=>(0,n.useSelector)(d),A=e=>(0,n.useSelector)(t=>h(t,e));r()}catch(e){r(e)}})},9335:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{C:()=>o,Hv:()=>h,P6:()=>_,_e:()=>l,zk:()=>d});var s=a(9943),n=a(5648),i=a(9548),c=e([s]);s=(c.then?(await c)():c)[0];let l=(0,s.createApi)({reducerPath:"rickmortyApi",baseQuery:(0,s.fakeBaseQuery)(),extractRehydrationInfo(e,{reducerPath:t}){if(e.type===n.HYDRATE)return e.payload[t]},endpoints:e=>({getCharacters:e.query({queryFn:async({page:e,character:t})=>{try{let{data:a,status:r,statusMessage:s}=await (0,i.getCharacters)({page:e,name:t.name});if(200===r)return{data:{characters:a.results||[],totalPages:a.info?.pages||0}};if(404===r)return{data:{characters:[],totalPages:0}};throw Error(s)}catch(e){return{error:e}}}}),getCharacter:e.query({queryFn:async e=>{try{let{data:t,status:a,statusMessage:r}=await (0,i.getCharacter)(e);if(200===a)return{data:t};if(404===a)return{data:null};throw Error(r)}catch(e){return{error:e}}}})})}),{useGetCharactersQuery:o,useGetCharacterQuery:_,util:{getRunningQueriesThunk:d}}=l,{endpoints:h}=l;r()}catch(e){r(e)}})},4091:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{Y:()=>o});var s=a(3258),n=a(5648),i=a(4127),c=a(9335),l=e([s,i,c]);[s,i,c]=l.then?(await l)():l;let o=(0,n.createWrapper)(()=>(0,s.configureStore)({reducer:{favorites:i.vU.reducer,[c._e.reducerPath]:c._e.reducer},middleware:e=>e().concat(c._e.middleware)}));r()}catch(e){r(e)}})},5810:()=>{}};