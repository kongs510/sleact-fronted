(self.webpackChunkalecture=self.webpackChunkalecture||[]).push([[13],{2309:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(7753),r=n(1039);const l=(0,a.Z)("div",{target:"e1hwany95"})({name:"ra6cyy",styles:"display:flex;width:100%;padding:20px;padding-top:0"}),o=(0,a.Z)("form",{target:"e1hwany94"})({name:"33ihw2",styles:"color:rgb(29, 28, 29);font-size:15px;width:100%;border-radius:4px;border:1px solid rgb(29, 28, 29)"}),i=(0,a.Z)(r.r,{target:"e1hwany93"})({name:"bka2jr",styles:"font-family:Slack-Lato,appleLogo,sans-serif;font-size:15px;padding:8px 9px;width:100%;& strong{background:skyblue;}& textarea{height:44px;padding:9px 10px!important;outline:none!important;border-radius:4px!important;resize:none!important;line-height:22px;border:none;}& ul{border:1px solid lightgray;max-height:200px;overflow-y:auto;padding:9px 10px;background:white;border-radius:4px;width:150px;}"}),s=(0,a.Z)("div",{target:"e1hwany92"})({name:"13ie2qx",styles:"position:relative;background:rgb(248, 248, 248);height:41px;display:flex;border-top:1px solid rgb(221, 221, 221);align-items:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px"}),c=(0,a.Z)("button",{target:"e1hwany91"})({name:"xrrdm2",styles:"position:absolute;right:5px;top:5px"}),d=(0,a.Z)("button",{target:"e1hwany90"})("padding:4px 20px;background:transparent;border:none;display:flex;align-items:center;color:rgb(28, 29, 28);width:100%;& img{margin-right:5px;}",(({focus:e})=>e&&"\n    background: #1264a3;\n    color: white;\n  "),";");var p=n(3564),u=n(7294),m=n(9367),g=n.n(m),h=n(5977),x=n(8100),b=n(6182),y=n.n(b);const f=({chat:e,onSubmitForm:t,onChangeChat:n,placeholder:a})=>{const{workspace:m}=(0,h.UO)(),{data:b,error:f,revalidate:k,mutate:v}=(0,x.ZP)("/api/users",p.Z,{dedupingInterval:2e3}),{data:w}=(0,x.ZP)(b?`/api/workspaces/${m}/members`:null,p.Z),E=(0,u.useRef)(null);(0,u.useEffect)((()=>{E.current&&g()(E.current)}),[]);const Z=(0,u.useCallback)((e=>{"Enter"===e.key&&(e.shiftKey||(e.preventDefault(),t(e)))}),[t]),_=(0,u.useCallback)(((e,t,n,a,r)=>{if(w)return u.createElement(d,{focus:r},u.createElement("img",{src:y().url(w[a].email,{s:"20px",d:"retro"}),alt:w[a].nickname}),u.createElement("span",null,n))}),[w]);return u.createElement(l,null,u.createElement(o,{onSubmit:t},u.createElement(i,{id:"editor-chat",value:e,onChange:n,onKeyPress:Z,placeholder:a,inputRef:E,allowSuggestionsAboveCursor:!0},u.createElement(r.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==w?void 0:w.map((e=>({id:e.id,display:e.nickname}))))||[],renderSuggestion:_})),u.createElement(s,null,u.createElement(c,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=e&&e.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=e&&e.trim())},u.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))}},2545:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(7753);const r=(0,a.Z)("div",{target:"ez0ni310"})({name:"1gm3yh0",styles:"display:flex;padding:8px 20px;&:hover{background:#eee;}& .chat-img{display:flex;width:36px;margin-right:8px;& img{width:36px;height:36px;}}"});var l=n(7294),o=n(6182),i=n.n(o),s=n(7484),c=n.n(s),d=n(8817),p=n(3727),u=n(5977);const m=({data:e})=>{const{workspace:t}=(0,u.UO)(),n="Sender"in e?e.Sender:e.User,a=(0,l.useMemo)((()=>(0,d.Z)({input:e.content,pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator(e,n){const a=e.match(/@\[(.+?)]\((\d+?)\)/);return a?l.createElement(p.rU,{key:e+n,to:`/workspace/${t}/dm/${a[2]}`},"@",a[1]):l.createElement("br",{key:n})}})),[e.content]);return l.createElement(r,null,l.createElement("div",{className:"chat-img"},l.createElement("img",{src:i().url(n.email,{s:"36px",d:"retro"}),alt:n.nickname})),l.createElement("div",{className:"chat-text"},l.createElement("div",{className:"chat-user"},l.createElement("b",null,n.nickname),l.createElement("span",null,c()(e.createdAt).format("h:mm A"))),l.createElement("p",null,a)))},g=(0,l.memo)(m),h=(0,a.Z)("div",{target:"e1gz5es32"})({name:"1op36e9",styles:"width:100%;display:flex;flex:1"}),x=(0,a.Z)("section",{target:"e1gz5es31"})({name:"10zp55f",styles:"margin-top:20px;border-top:1px solid #eee"}),b=(0,a.Z)("div",{target:"e1gz5es30"})({name:"16cu5ak",styles:"display:flex;justify-content:center;flex:1;width:100%;position:sticky;top:14px;& button{font-weight:bold;font-size:13px;height:28px;line-height:27px;padding:0 16px;z-index:2;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 1px 3px 0 rgba(0, 0, 0, 0.08);border-radius:24px;position:relative;top:-13px;background:white;border:none;outline:none;}"});var y=n(1298);const f=({chatSections:e,setSize:t,scrollRef:n,isReachingEnd:a})=>{const r=(0,l.useCallback)((e=>{0!==e.scrollTop||a||(console.log("가장 위"),t((e=>e+1)).then((()=>{var t,a;null!=n&&n.current&&(null===(t=n.current)||void 0===t||t.scrollTop((null===(a=n.current)||void 0===a?void 0:a.getScrollHeight())-e.scrollHeight))})))}),[]);return l.createElement(h,null,l.createElement(y.$B,{autoHide:!0,ref:n,onScrollFrame:r},Object.entries(e).map((([e,t])=>l.createElement(x,{className:`section-${e}`,key:e},l.createElement(b,null,l.createElement("button",null,e)),t.map((e=>l.createElement(g,{key:e.id,data:e}))))))))}},8667:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7484),r=n.n(a);function l(e){const t={};return e.forEach((e=>{const n=r()(e.createdAt).format("YYYY-MM-DD");Array.isArray(t[n])?t[n].push(e):t[n]=[e]})),t}}}]);