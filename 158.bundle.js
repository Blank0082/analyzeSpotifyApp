"use strict";(self.webpackChunkanalyze_spotify_app=self.webpackChunkanalyze_spotify_app||[]).push([[158],{7151:(n,t,e)=>{e.r(t),e.d(t,{default:()=>S});var o=e(6540),i=e(9611),s=e(5072),a=e.n(s),r=e(7825),l=e.n(r),c=e(7659),d=e.n(c),p=e(5056),m=e.n(p),g=e(540),u=e.n(g),x=e(1113),h=e.n(x),f=e(7822),b={};b.styleTagTransform=h(),b.setAttributes=m(),b.insert=d().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=u(),a()(f.A,b),f.A&&f.A.locals&&f.A.locals;var y=e(4848);function v(n){const t=`https://open.spotify.com/embed/track/${n.uri.split(":")[2]}`;return(0,y.jsx)("iframe",{title:"Spotify Music Player",src:t,allowtransparency:"true"})}function j(n){let{playlist:t,token:e,isOpen:i,onToggle:s,playingUri:a,setPlayingUri:r}=n;const[l,c]=(0,o.useState)([]),[d,p]=(0,o.useState)();return(0,y.jsxs)("div",{className:"playlist-item",children:[(0,y.jsxs)("button",{onClick:async()=>{if(i||0!==l.length)r(null);else{const n=await fetch(`https://api.spotify.com/v1/playlists/${t.id}/tracks`,{headers:{Authorization:`Bearer ${e}`}}),o=await n.json();p(o.total),c(o.items.map((n=>({name:n.track.name,artist:n.track.artists.map((n=>n.name)).join(", "),imageUrl:n.track.album.images[0].url,uri:n.track.uri}))))}s(t.id)},className:"playlist-button",children:[t.images&&(0,y.jsx)("img",{src:t.images[0].url,alt:t.name}),(0,y.jsx)("div",{style:{color:"white"},children:t.name})]}),i&&(0,y.jsxs)("div",{className:"playlist-container",children:[(0,y.jsxs)("div",{className:"songTotal",children:["總共",d,"首歌曲，點擊下一步即可幫你尋找你可能喜歡的歌曲！"]}),d>0?(0,y.jsx)("div",{className:"songs-list",children:l.map(((n,t)=>(0,y.jsxs)("div",{className:"song-item",children:[(0,y.jsx)("img",{src:n.imageUrl,alt:n.name}),(0,y.jsxs)("div",{className:"song-info",children:[(0,y.jsx)("p",{children:n.name}),(0,y.jsx)("p",{children:n.artist}),(0,y.jsx)("button",{onClick:()=>{return t=n.uri,void r(a===t?null:t);var t},className:"button "+(a===n.uri?"playing":""),children:a===n.uri?"取消":"試聽"}),a===n.uri&&v(n.uri)]})]},t)))}):null,d>0&&(0,y.jsx)("button",{onClick:()=>(async n=>{const t=await fetch("http://localhost:3001/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),e=await t.json();sessionStorage.setItem("recommendedSongs",JSON.stringify(e.return)),console.log(e)})(t.id),className:"button next-button",children:"下一步"})]})]})}var k=e(7767),w=e(761),A={};function N(n){let{isOpen:t,onClose:e}=n;const[i,s]=(0,o.useState)([]),[a,r]=(0,o.useState)(0);return(0,o.useEffect)((()=>{if(t){const n=JSON.parse(sessionStorage.getItem("recommendedSongs")||"[]");s(n)}}),[t]),(0,y.jsxs)("div",{className:"modal "+(t?"open":"closed"),children:[(0,y.jsx)("button",{onClick:e,children:"關閉"}),(0,y.jsx)("div",{className:"songs-container",children:i.length>0?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{children:["已推薦",i.length,"首歌曲，目前在第",a+1,"首歌曲。"]}),(0,y.jsx)(v,{uri:i[a]}),(0,y.jsxs)("div",{className:"navigation-buttons",children:[(0,y.jsx)("button",{onClick:()=>{r((n=>n>0?n-1:i.length-1))},children:"上一首"}),(0,y.jsx)("button",{onClick:()=>{r((n=>n<i.length-1?n+1:0))},children:"下一首"})]})]}):(0,y.jsx)("div",{children:"目前沒有推薦任何歌曲，請先選擇你的播放清單。"})})]})}function S(){const n=(0,k.Zp)(),[t,e]=(0,o.useState)([]),[s,a]=(0,o.useState)(null),[r,l]=(0,o.useState)(null),c=localStorage.getItem("access_token"),[d,p]=(0,o.useState)(!1),m=(0,o.useCallback)((()=>{fetch("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:`Bearer ${c}`}}).then((t=>{if(t.ok)return t.json();throw 401===t.status?(n("/login"),localStorage.removeItem("token"),new Error("Unauthorized")):new Error("Failed to fetch playlists")})).then((n=>e(n.items))).catch((n=>{console.error(n),e(null)}))}),[c,n]),g=n=>{a(s===n?null:n)};return(0,o.useEffect)((()=>{if(!c)return void n("/login");m();const t=setInterval(m,6e5);return()=>clearInterval(t)}),[c,n,m]),(0,y.jsxs)("div",{children:[(0,y.jsx)(i.A,{showRecommended:()=>p(!0)}),(0,y.jsxs)("div",{className:"list-container",children:[(0,y.jsx)("h2",{children:"Your Playlists"}),"點擊圖片選擇你的音樂清單。",t&&t.length>0?t.map((n=>(0,y.jsx)(j,{playlist:n,token:c,isOpen:n.id===s,onToggle:g,playingUri:r,setPlayingUri:l},n.id))):(0,y.jsx)("div",{children:"No playlists found."})]}),(0,y.jsx)(N,{isOpen:d,onClose:()=>p(!1)})]})}A.styleTagTransform=h(),A.setAttributes=m(),A.insert=d().bind(null,"head"),A.domAPI=l(),A.insertStyleElement=u(),a()(w.A,A),w.A&&w.A.locals&&w.A.locals},9611:(n,t,e)=>{e.d(t,{A:()=>v}),e(6540);var o=e(4976),i=e(5072),s=e.n(i),a=e(7825),r=e.n(a),l=e(7659),c=e.n(l),d=e(5056),p=e.n(d),m=e(540),g=e.n(m),u=e(1113),x=e.n(u),h=e(8600),f={};f.styleTagTransform=x(),f.setAttributes=p(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=g(),s()(h.A,f),h.A&&h.A.locals&&h.A.locals;const b=e.p+"fdebcf1ad00e6b94a71d.jpg";var y=e(4848);function v(n){let{showRecommended:t}=n;return(0,y.jsx)("nav",{children:(0,y.jsxs)("div",{className:"logo-container",children:[(0,y.jsx)("img",{alt:"",className:"logo_img",src:b}),(0,y.jsx)(o.N_,{to:"/login",className:"btn_style",children:"登入"}),t&&(0,y.jsx)("button",{className:"btn_style",onClick:t,children:"已推薦歌曲"}),(0,y.jsx)(o.N_,{to:"/playlists",className:"btn_style",children:"推薦歌曲"}),(0,y.jsx)(o.N_,{to:"/",className:"btn_style",children:"首頁"})]})})}},7822:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(1601),i=e.n(o),s=e(6314),a=e.n(s)()(i());a.push([n.id,".playlist-item {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 20px;\n}\n\n.playlist-button {\n    display: block;\n    text-align: left;\n    cursor: pointer;\n    background: none;\n    border: none;\n}\n\n.playlist-button img {\n    width: 320px;\n    height: 320px;\n    object-fit: cover;\n}\n\n.songs-list {\n    flex-grow: 1;\n    overflow-y: auto; /* 允许在歌曲列表内滚动 */\n    max-height: 320px; /* 调整高度以适应内容 */\n    margin-left: 20px; /* 添加间距 */\n    padding: 10px;\n    margin-bottom: 1px; /* Space for the 'next' button */\n}\n.song-item {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    justify-content: space-between; /* Push content to each end */\n}\n\n.song-item img {\n    width: 100px;\n    height: 100px;\n    object-fit: cover;\n    margin-right: 10px;\n}\n.song-info {\n    flex-grow: 1;\n    margin-right: 10px;\n}\n.song-info p {\n    margin: 0;\n}\n/* 公共按鈕樣式 */\n.button {\n    padding: 10px 15px;\n    border: none;\n    background-color: #1db954; /* Spotify綠色 */\n    color: white;\n    border-radius: 20px;\n    cursor: pointer;\n    outline: none;\n    font-size: 16px;\n    transition: background-color 0.3s ease;\n}\n\n.button:hover {\n    background-color: #1ed760; /* 深一點的Spotify綠色 */\n}\n\n/* 按鈕被點擊時的動畫 */\n@keyframes button-click {\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(0.95);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n.button:active {\n    animation: button-click 0.1s;\n}\n.playing {\n    background-color: #d50b0b; /* 暗色背景 */\n}\n\n.playlist-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    margin-left: 20px; /* Distance between playlist and songs list */\n    flex-grow: 1; /* Let the container fill the remaining space */\n    max-height: 330px; /* Maximum height of the container */\n}\n.next-button {\n    bottom: 0;\n}\n.songTotal{\n    font-size: 14px;\n    color: white;\n    margin-bottom: 2px;\n}\niframe {\n    width: 100%; /* Full width of its container */\n    max-height: 80px; /* Adjust as needed */\n}",""]);const r=a},761:(n,t,e)=>{e.d(t,{A:()=>r});var o=e(1601),i=e.n(o),s=e(6314),a=e.n(s)()(i());a.push([n.id,"/* RecommendedSongsModal.css */\ndiv {\n    color: white;\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 1000;\n    justify-content: center;\n    align-items: center;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n}\n\n.modal.open {\n    display: flex;\n}\n.modal.closed {\n    display: none;\n}\n\n\n.modal .songs-container {\n    padding-right: 10px; /* 防止內容與滾動條靠太近 */\n    display: flex;\n    flex-direction: column;\n    align-items: center; /* 確保歌曲在容器中居中 */\n    max-height: 80vh; /* 使用vh單位來限制最大高度 */\n    overflow-y: auto;\n}\n\n.modal .song {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 0;\n    width: 100%;\n    max-width: 500px; /* 設置一個最大寬度 */\n    margin-bottom: 10px;\n}\n\n.modal .navigation-buttons {\n    display: flex;\n    gap: 10px;\n    margin-top: 10px;\n    justify-content: space-around;\n    width: 100%;\n    max-width: 500px;\n}\n\n.modal button {\n    padding: 8px 16px;\n    background-color: #1db954;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    cursor: pointer;\n    outline: none;\n    font-size: 0.9rem;\n}\n\n.modal button:hover {\n    background-color: #1ed760;\n}\n\n.modal button:active {\n    transform: scale(0.98);\n}\n\n.spotify-player {\n    width: 100%;\n    margin: 10px 0;\n}\n\n.navigation-buttons button {\n    background-color: #1db954;\n    color: white;\n    border: none;\n    cursor: pointer;\n    padding: 10px 20px;\n    margin: 0 5px;\n    border-radius: 20px;\n    font-weight: bold;\n    text-transform: uppercase;\n    transition: background-color 0.3s;\n}\n\n.navigation-buttons button:hover {\n    background-color: #17a74b;\n}\n\n/* 如果需要特殊標示當前播放的歌曲 */\n.song-item.playing {\n    border-left: 5px solid #1db954;\n    padding-left: 10px;\n}\n\n/* 如果需要動畫效果 */\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.modal.open {\n    animation: fadeIn 0.3s;\n}\n\n@media (max-width: 600px) {\n    .modal .song {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .modal .songs-container {\n        max-height: 70vh;\n    }\n\n    .modal .navigation-buttons {\n        flex-direction: column;\n    }\n}\n.modal {\n    overflow: hidden;\n}",""]);const r=a},8600:(n,t,e)=>{e.d(t,{A:()=>m});var o=e(1601),i=e.n(o),s=e(6314),a=e.n(s),r=e(4417),l=e.n(r),c=new URL(e(6584),e.b),d=a()(i()),p=l()(c);d.push([n.id,`.background_container{\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    background-size: cover;\n    background-position: center;\n    background-image: url(${p});\n    height: 400px;\n    width: 100%;\n    margin: 80px 0 0 0;\n}\n\n.list-container{\n    margin: 60px 0 0 0;\n    color:white;\n}\n\n.logo-container {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 60px;\n    background-color: black;\n    opacity: 0.7;\n    backdrop-filter: blur(5px);\n    position: fixed;\n    transition: opacity 0.3s ease;\n    margin: 0 0 80px 0 ;\n}\n\n.logo-container:hover {\n    opacity: 1;\n    backdrop-filter: blur(5px);\n}\n\n.logo_img {\n    width: 70px;\n    height: 60px;\n    cursor: pointer;\n}\n\n\n.btn_style {\n    margin: 0 50px 0 0;\n    padding: 15px 0 12.5px 0;\n    display: inline-block;\n    float: right;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    font-size: 18px;\n    border: none;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    transition: transform 0.3s;\n}\nbutton{\nbackground-color: black;\n}\n\n.btn_style ::before {\n    content: '';\n    position: absolute;\n    top: 5px;\n    right: -5px;\n    bottom: 5px;\n    left: -5px;\n    background: #2671a3;\n    transform: skew(-15deg);\n    z-index: -1;\n}\n\n.btn_style:hover {\n    transform: scale(1.1);\n    border-bottom: orange 3px solid;\n}\n\n.first_p{\n    position: absolute;\n    top: 70%;\n    left: -100%;\n    white-space: nowrap;\n    font-size: 32px;\n    color: #fff;\n    animation: slideIn 2s forwards;\n}\n\n@keyframes slideIn {\n    to {\n        left: 25%; /* 文本最终位置在屏幕中间 */\n    }\n}`,""]);const m=d},6584:(n,t,e)=>{n.exports=e.p+"1aee1799715143d92617.jpg"}}]);