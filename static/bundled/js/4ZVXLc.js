import{g as t,P as e}from"./cVJHck.js";import{W as n,c as a,s,i,a as o,d as g}from"./main.js";let r=[],c={x:0,y:0};const d=new n([]),l=new n(!1),h=new n(!1),m=new n(!1);function u(){return d.get().map((t=>r[t.i]))}function f(){const t=u().slice(-s.get().trailLength);return t.slice(0,t.length-1)}function y(){const t=u();return t[t.length-1]}function I(){const t=s.get(),e=[];for(let n=0;n<5;n++)e.push(r[i(t.index+n,t.length)]);return e}function p(){const t=s.get();return r[i(t.index,t.length)]}function w(){const t=s.get();return r[g(t.index,t.length)]}function x(t){if(l.get()||h.get())return;const e={x:t.clientX,y:t.clientY};if(Math.hypot(e.x-c.x,e.y-c.y)>s.get().threshold){c=e,o();const t={i:s.get().index,...e};d.set([...d.get(),t].slice(-s.get().length))}}function W(){if(h.get())return;l.set(!0),h.set(!0),v([y(),p(),w()]);const n=t.timeline();n.to(f(),{y:"+=20",ease:e.easeIn,stagger:.075,duration:.3,delay:.1,opacity:0}),n.to(y(),{x:0,y:0,ease:e.easeInOut,duration:.7,delay:.3}),n.to(y(),{delay:.1,scale:1,ease:e.easeInOut}),n.then((()=>{h.set(!1)}))}function E(){if(h.get())return;l.set(!1),h.set(!0),U([y()]),U(f());const n=t.timeline();n.to(y(),{scale:.6,duration:.6,ease:e.easeInOut}),n.to(y(),{delay:.3,duration:.7,ease:e.easeInOut,x:d.get()[d.get().length-1].x-window.innerWidth/2,y:d.get()[d.get().length-1].y-window.innerHeight/2}),n.to(f(),{y:"-=20",ease:e.easeOut,stagger:-.1,duration:.3,opacity:1}),n.then((()=>{h.set(!1)}))}function H(e){!function(t){const e=document.createElement("div");e.className="stage";for(const n of t){const t=document.createElement("img");t.height=n.loImgH,t.width=n.loImgW,t.dataset.hiUrl=n.hiUrl,t.dataset.hiImgH=n.hiImgH.toString(),t.dataset.hiImgW=n.hiImgW.toString(),t.dataset.loUrl=n.loUrl,t.dataset.loImgH=n.loImgH.toString(),t.dataset.loImgW=n.loImgW.toString(),t.alt="image",e.append(t)}a.append(e)}(e);const n=document.getElementsByClassName("stage").item(0);r=Array.from(n.getElementsByTagName("img")),n.addEventListener("click",(()=>{W()})),n.addEventListener("keydown",(()=>{W()})),window.addEventListener("mousemove",x,{passive:!0}),l.addWatcher((()=>{m.set(l.get()&&!h.get())})),h.addWatcher((()=>{m.set(l.get()&&!h.get())})),d.addWatcher((()=>{!function(){const e=u();0!==e.length&&(U(I()),t.set(e,{x:t=>d.get()[t].x-window.innerWidth/2,y:t=>d.get()[t].y-window.innerHeight/2,opacity:t=>t+1+s.get().trailLength<=d.get().length?0:1,zIndex:t=>t,scale:.6}),l.get()&&(U(u()),v([y()]),t.set(r,{opacity:0}),t.set(y(),{opacity:1,x:0,y:0,scale:1})))}()})),U(I())}function v(t){t.forEach((t=>{t.src=t.dataset.hiUrl,t.height=parseInt(t.dataset.hiImgH),t.width=parseInt(t.dataset.hiImgW)}))}function U(t){t.forEach((t=>{t.src=t.dataset.loUrl,t.height=parseInt(t.dataset.loImgH),t.width=parseInt(t.dataset.loImgW)}))}export{m as active,d as cordHist,H as initStage,h as isAnimating,l as isOpen,E as minimizeImage};