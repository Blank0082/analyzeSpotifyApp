"use strict";(self.webpackChunkanalyze_spotify_app=self.webpackChunkanalyze_spotify_app||[]).push([[119],{4119:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(7767),n=r(6540),o=r(1087),i=r(4285),s=r(4848);function c(){const e=(0,a.Zp)(),[t,r]=(0,n.useState)(null),[c,l]=(0,n.useState)(!1);(0,n.useEffect)((()=>{c||d().then((()=>l(!0)));const r=t=>{"authorized"===t.data.type?e("/playlists"):"AUTH_ERROR"===t.data.type&&e("/")},a=setInterval((()=>{t&&t.closed&&(clearInterval(a),l(!1),e("/"))}),1e3);return window.addEventListener("message",r,!1),()=>{window.removeEventListener("message",r,!1),clearInterval(a)}}),[e,,c,t]);const d=async()=>{const e=(()=>{const e=new Uint32Array(28);return window.crypto.getRandomValues(e),Array.from(e,(e=>("0"+e.toString(16)).slice(-2))).join("")})(),t=(a=await(async e=>{const t=await crypto.subtle.digest("SHA-256",e);return new Uint8Array(t)})((new TextEncoder).encode(e)),btoa(String.fromCharCode.apply(null,a)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""));var a;localStorage.setItem("code_verifier",e);const n=new URL("https://accounts.spotify.com/authorize");if(n.search=new URLSearchParams({client_id:o.A.client_id,response_type:"code",redirect_uri:o.A.redirect_uri,code_challenge_method:"S256",code_challenge:t,scope:o.A.scope}).toString(),(0,i.A)())window.location.href=n.toString();else{const e=window.open(n.toString(),"_blank");r(e)}};return(0,s.jsx)("div",{})}},1087:(e,t,r)=>{r.d(t,{A:()=>a});const a={redirect_uri:"https://blank0082.github.io/analyzeSpotifyApp/#/callback",client_id:"ebf1bf4571374afa83e28c5c465bf0e6",scope:"user-read-private user-read-email playlist-read-private user-library-read"}},4285:(e,t,r)=>{function a(){return/Mobi|Android/i.test(navigator.userAgent)}r.d(t,{A:()=>a})}}]);