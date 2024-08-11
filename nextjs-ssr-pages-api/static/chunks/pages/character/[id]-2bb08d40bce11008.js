(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{262:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/character/[id]",function(){return s(5394)}])},5177:function(e,t,s){"use strict";s.d(t,{o:function(){return i}});var a=s(5893),n=s(3967),r=s.n(n),c=s(7790),l=s.n(c);function i({children:e,type:t="button",onClick:s,className:n,isDisabled:c=!1,id:i="",aria_label:o="Button"}){return(0,a.jsx)("button",{className:r()(l().button,n),type:t,onClick:s,disabled:c,id:i,"aria-label":o,children:e})}},1037:function(e,t,s){"use strict";s.d(t,{_:function(){return i}});var a=s(5893),n=s(5007),r=s(4127),c=s(9505),l=s.n(c);function i({character:e}){let t=(0,n.I0)(),s=(0,r._2)(e);return(0,a.jsx)("button",{type:"button",className:l().favorite,name:"favorite",value:String(s),"aria-label":s?"Remove from favorites":"Add to favorites",onClick:()=>e&&(s?t((0,r.zm)(e)):t((0,r._p)(e))),children:s?"★":"☆"})}},151:function(e,t,s){"use strict";s.d(t,{r:function(){return u}});var a=s(5893),n=s(5675),r=s.n(n),c=s(7294),l=s(8024),i=s.n(l);function o(){return(0,a.jsx)("div",{className:i().loader})}var _=s(7649),d=s.n(_);function u({src:e,alt:t}){let[s,n]=(0,c.useState)(!0);return(0,a.jsxs)("div",{className:d().image_container,children:[s&&(0,a.jsx)(o,{}),(0,a.jsx)(r(),{className:s?d().hidden:d().character_img,src:e,alt:t,onLoad:()=>n(!1),width:300,height:300})]})}},5394:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var a=s(5893),n=s(1163),r=s(5177),c=s(1037),l=s(151),i=s(1783),o=s(9144),_=s.n(o);function d({characterID:e}){let{query:t,push:s,replace:o}=(0,n.useRouter)(),{data:d,isFetching:u,isError:h,error:x}=(0,i.P6)(Number(e));if(h)throw x;if(null===d)return o("*").catch(()=>{}),null;let p=[`Species: ${d?.species}`,`Gender: ${d?.gender}`,`Status: ${d?.status}`,`Origin: ${d?.origin?.name}`,`Location: ${d?.location?.name}`];return(0,a.jsx)("section",{className:_().detailed_Card,children:u?(0,a.jsx)("div",{className:_().loader}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:_().card,children:[(0,a.jsx)(l.r,{src:d?.image||"",alt:"Character"}),(0,a.jsxs)("div",{className:_().text_container,children:[(0,a.jsx)("h2",{className:_().card_title,children:d?.name}),(0,a.jsx)("ul",{className:_().desc,children:p.map(e=>(0,a.jsx)("li",{className:_().desc_item,children:e},e))}),d?.type!==""&&(0,a.jsxs)("p",{className:_().type,children:["Type: ",d?.type]}),(0,a.jsxs)("p",{className:_().episodes,children:["Episodes: ",d?.episode.map(e=>e.replace(/\D/g,"")).join(", ")]}),(0,a.jsx)(c._,{character:d})]})]}),(0,a.jsx)(r.o,{className:_().close,onClick:()=>{s({pathname:"/",query:{page:t.page}}).catch(()=>{})},children:"Close"})]})})}var u=s(795);function h(){return(0,a.jsx)(u.default,{children:e=>(0,a.jsx)(d,{characterID:e})})}},795:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return G},default:function(){return I}});var a=s(5893),n=s(1163),r=s(7294),c=s(5007);let l=e=>{let t=e.map(e=>({name:e.name,species:e.species,gender:e.gender,status:e.status,origin:e.origin.name,location:e.location.name,episodes:e.episode.map(e=>e.replace(/\D/g,"")).join(", "),url:e.url})),s=[],a=Object.keys(t[0]||{});return s.push(a.join(",")),t.forEach(e=>{s.push(Object.values(e).map(e=>`"${e.replace(/"/g,'\\"')}"`).join(","))}),s.join("\n")};var i=s(4127),o=s(5177),_=s(6388),d=s.n(_);function u(){let e=(0,c.I0)(),t=(0,i.rc)(),s=URL.createObjectURL(new Blob([l(t)],{type:"text/csv"}));return(0,r.useEffect)(()=>()=>URL.revokeObjectURL(s),[s]),!!t.length&&(0,a.jsxs)("div",{className:d().flyout,children:[(0,a.jsx)("h3",{className:d().title,children:`${t.length} items are selected`}),(0,a.jsxs)("div",{className:d().buttons,children:[(0,a.jsx)(o.o,{className:d().button,"aria-label":"Unselect all",onClick:()=>e((0,i.V1)()),children:"Unselect all"}),(0,a.jsx)(o.o,{className:d().button,"aria-label":"Download as .csv",children:(0,a.jsx)("a",{className:d().download_link,href:s,download:`${t.length}_characters.csv`,children:"Download"})})]})]})}var h={src:"/_next/static/media/not_found.76733abb.jpg"},x=s(1664),p=s.n(x),f=s(1037),m=s(151),g=s(8930),j=s.n(g);function y({character:e}){let{query:t}=(0,n.useRouter)(),s=t.page||"1";return(0,a.jsxs)("div",{className:j().card,children:[(0,a.jsx)(m.r,{src:e.image,alt:"Character"}),(0,a.jsxs)("div",{className:j().text_container,children:[(0,a.jsx)(p(),{href:`/character/${e.id}?page=${String(s)}`,className:j().card_link,children:(0,a.jsx)("h2",{className:j().card_title,children:e.name})}),(0,a.jsx)(f._,{character:e})]})]})}var b=s(2121),N=s.n(b);function v({page:e,total:t,handleClose:s}){let{push:r}=(0,n.useRouter)(),c=N().pagination_box;e-1||(c=`${N().pagination_box_before}`),e<t||(c=`${N().pagination_box_after}`),e-1||e<t||(c=N().pagination_box);let l=e=>{r({pathname:"/",query:{page:String(e)}}).catch(()=>{})};return(0,a.jsx)("div",{className:N().pagination,onClick:s,children:(0,a.jsxs)("div",{className:c,onClick:s,children:[!!(e-1)&&(0,a.jsx)("button",{type:"button","aria-label":"Left",className:N().pag_left,onClick:()=>l(e-1)}),(0,a.jsxs)("div",{className:N().pages,children:[(0,a.jsx)("span",{children:e}),"-",(0,a.jsx)("span",{children:t})]}),e<t&&(0,a.jsx)("button",{type:"button","aria-label":"Right",className:N().pag_right,onClick:()=>l(e+1)})]})})}var C=s(5515),k=s.n(C);function w({characters:e,total:t,page:s,characterID:n,handleClose:r}){return e.length?(0,a.jsxs)("div",{className:"/"!==n?k().results:k().no_character,onClick:r,children:[(0,a.jsx)("ul",{className:k().characters,onClick:r,role:"presentation",children:e.map(e=>(0,a.jsx)("li",{className:k().characters_item,children:(0,a.jsx)(y,{character:e})},e.id))}),(0,a.jsx)(v,{total:t,page:s,handleClose:r})]}):(0,a.jsx)("div",{className:k().not_found_box,onClick:r,children:(0,a.jsxs)("div",{className:k().not_found,children:[(0,a.jsx)(m.r,{src:h.src,alt:"Rick and Morty not found"}),(0,a.jsx)("div",{className:k().text_container,children:"Characters not found"})]})})}function R(e){let[t,s]=(0,r.useState)(localStorage.getItem(e)||"");return(0,r.useEffect)(()=>localStorage.setItem(e,t),[e,t]),[t,s]}var S=s(8557),D=s.n(S);function L({searchField:e,character:t,setCharacter:s,loader:r}){let[,c]=R("R&M_search"),{replace:l}=(0,n.useRouter)();return(0,a.jsxs)("form",{className:D().search_form,onSubmit:t=>{if(t.preventDefault(),"string"==typeof e.current?.value&&!r){let t=e.current?.value.trim();s({name:t}),c(t),l({pathname:"/",query:{page:"1"}}).catch(()=>{})}},children:[(0,a.jsx)("input",{id:"search",className:D().search,type:"text",placeholder:"Search...",ref:e,defaultValue:t.name}),(0,a.jsx)("button",{type:"submit",className:D().search_button,"aria-label":"Search-button"})]})}var $=s(3890),U=s(1783),E=s(2227),F=s.n(E),G=!0;function I({children:e}){let{query:t,push:s}=(0,n.useRouter)(),c=Math.floor(Number(t.page))||1,[l]=R("R&M_search"),[i,o]=(0,r.useState)({name:l}),_=(0,r.useRef)(null),d=t.id||"/",{data:h,isFetching:x,isError:p,error:f}=(0,U.C)({page:c,character:i}),{characters:m,totalPages:g}=h||{characters:[],totalPages:0},{theme:j}=(0,$.F)();if(p)throw f;let y=e=>{e.target===e.currentTarget&&"/"!==d&&s({pathname:"/",query:{page:c}}).catch(()=>{})};return(0,a.jsxs)("main",{className:"dark"===j?"main":"main light",onClick:y,role:"presentation",children:[(0,a.jsx)("section",{onClick:y,children:(0,a.jsx)(L,{character:i,loader:x,searchField:_,setCharacter:o})}),(0,a.jsx)("section",{className:F().results,onClick:y,children:(0,a.jsxs)("div",{className:"/"!==d?F().character:F().results_box,children:[x?(0,a.jsx)("div",{className:F().loader}):(0,a.jsx)(w,{characters:m,total:g,page:c,characterID:String(d),handleClose:y}),e?.(String(d))]})}),(0,a.jsx)(u,{})]})}},8930:function(e){e.exports={card:"styles_card__qCQY2",text_container:"styles_text_container__0gNaz",card_title:"styles_card_title__nFRJb",card_link:"styles_card_link__L9Wd4"}},7790:function(e){e.exports={button:"styles_button__WdoMM"}},9144:function(e){e.exports={detailed_Card:"styles_detailed_Card__uZt00",card:"styles_card__sXVC9",text_container:"styles_text_container__G1bUS",card_title:"styles_card_title__IWGUs",desc:"styles_desc__djtHh",desc_item:"styles_desc_item__dDOZi",type:"styles_type__9rVP_",episodes:"styles_episodes__GecFr",close:"styles_close__4yfrC",loader:"styles_loader__hO1oi"}},9505:function(e){e.exports={favorite:"styles_favorite__3_Hph"}},6388:function(e){e.exports={flyout:"styles_flyout__LFcDu",title:"styles_title__G3ZZV",buttons:"styles_buttons__KGnzR",button:"styles_button__j_xqT",download_link:"styles_download_link__aN5ry"}},7649:function(e){e.exports={image_container:"styles_image_container__HWpun",character_img:"styles_character_img__y8_sx",hidden:"styles_hidden__wncEB"}},8024:function(e){e.exports={loader:"styles_loader__cVuQp",l2:"styles_l2__TBnA6"}},2121:function(e){e.exports={pagination:"styles_pagination__Jm8Ba",pagination_box:"styles_pagination_box____K_t",pagination_box_before:"styles_pagination_box_before__vb3hf",pagination_box_after:"styles_pagination_box_after__2uIdq",pages:"styles_pages__8piJe",pag_left:"styles_pag_left__FQd1b",pag_right:"styles_pag_right__Qi_Dm"}},5515:function(e){e.exports={characters:"styles_characters__fwFvw",not_found_box:"styles_not_found_box__MrUxX",not_found:"styles_not_found__eyYz1",text_container:"styles_text_container__KMvGL",results:"styles_results__n4MfD",no_character:"styles_no_character__XzIuL"}},8557:function(e){e.exports={search_form:"styles_search_form__iDKGP",search:"styles_search__94caR",search_button:"styles_search_button__Qr77L"}},2227:function(e){e.exports={results:"index_results__8Gf0O",results_box:"index_results_box__UGopo",character:"index_character__4jTMT",loader:"index_loader__CIU8c"}}},function(e){e.O(0,[432,888,774,179],function(){return e(e.s=262)}),_N_E=e.O()}]);