(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Bocj:function(t,e,u){},QfWi:function(t,e,u){"use strict";u.r(e);u("Bocj");const n={minuteHand:document.querySelector(".minute-hand"),hourHand:document.querySelector(".hour-hand"),hourNumetalLeft:document.querySelector("#hourLeft"),hourNumetalRight:document.querySelector("#hourRight"),minutesNumetalLeft:document.querySelector("#minutesLeft"),minutesNumetalRight:document.querySelector("#minutesRight")},{minuteHand:r,hourHand:i,hourNumetalLeft:o,hourNumetalRight:s,minutesNumetalLeft:a,minutesNumetalRight:h}=n,m={hourLeft:0,hourRight:0,minutesLeft:0,minutesRight:0};function d(t){return String(t).padStart(2,"0")}let c=null;const l=t=>{m[t.currentTarget.id]=Number(t.currentTarget.value),c=setInterval(f,1e3)},g=t=>{clearInterval(c),t.currentTarget.value=""},f=()=>{m.minutesRight<10&&(m.minutesRight+=1),m.minutesRight>9&&(m.minutesRight=0,m.minutesLeft+=1),m.minutesLeft>5&&(m.minutesRight=0,m.minutesLeft=0,m.hourRight+=1),m.hourRight>9&&(m.minutesRight=0,m.minutesLeft=0,m.hourLeft+=1),(m.hourLeft>2||m.hourRight>4)&&(m.minutesRight=0,m.minutesLeft=0,m.hourLeft=0,m.hourRight=0),(({hourLeft:t,hourRight:e,minutesLeft:u,minutesRight:n})=>{const r=d(Number(`${t}${e}`)),i=d(Number(`${u}${n}`));L(r,i)})(m)},L=(t,e)=>{const u=e/60*360+(new Date).getSeconds()/60*6+90,n=t/12*360+e/60*30+90;r.style.transform=`rotate(${u}deg)`,i.style.transform=`rotate(${n}deg)`,R(t,e)},R=(t,e)=>{o.value=t.toString().slice(0,1),s.value=t.toString().slice(1,2),a.value=e.toString().slice(0,1),h.value=e.toString().slice(1,2)};window.addEventListener("load",l),o.addEventListener("focus",g),s.addEventListener("focus",g),a.addEventListener("focus",g),h.addEventListener("focus",g),o.addEventListener("blur",l),s.addEventListener("blur",l),a.addEventListener("blur",l),h.addEventListener("blur",l),L()}},[["QfWi",1]]]);
//# sourceMappingURL=main.590650dea8b64f0b04b5.js.map