// Dialogue engine: typewriter, ekspresi + fallback, klik/Spasi untuk lanjut. Data ada di data/dialogues.js
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const Dialogue=(()=>{
 let q=[],typing=false,t=null,full='',box=null,scr=null,last={},idleAt=Date.now();
 const src=(c,e)=>{const h=CHARACTERS[c];return h.path+(h.expressions.includes(e)?e:'normal')+'.'+h.ext};
 function sprite(c,e){const s=$('.spr',scr);if(!s||s.dataset.c!==c)return;const u=src(c,e);
  if(s.getAttribute('src')!==u){s.onerror=()=>{s.onerror=null;s.src=src(c,'normal')};s.setAttribute('src',u)}
  s.className='spr ex-'+e;void s.offsetWidth;s.classList.add('pop')}
 function end(){clearInterval(t);typing=false;$('.tx',box).textContent=full;box.classList.add('done');box.classList.toggle('more',q.length>0)}
 function show(l){const h=CHARACTERS[l.c];$('.nm',box).textContent=h.name;box.style.setProperty('--c',h.color);sprite(l.c,l.e||'normal');
  full=l.t;const tx=$('.tx',box);tx.textContent='';box.classList.remove('done','more');typing=true;let i=0;clearInterval(t);
  t=setInterval(()=>{i++;tx.textContent=full.slice(0,i);if(i%3===0)Sound.sfx('talk');if(i>=full.length)end()},CONFIG.typeSpeed)}
 function next(){if(!box)return;if(typing){end();return}if(q.length)show(q.shift())}
 function say(mode,ev,vars={},append=false){scr=$('.screen.active');box=$('.dlg',scr);if(!box)return;
  const v=(DIALOGUES[mode]||{})[ev];if(!v)return;const k=mode+ev;let i;
  do{i=Math.floor(Math.random()*v.length)}while(v.length>1&&i===last[k]);last[k]=i;
  const lines=v[i].map(l=>({...l,t:l.t.replace(/\{(\w+)\}/g,(m,n)=>vars[n]??m)}));idleAt=Date.now();
  if(append){q.push(...lines);return}q=lines;next()}
 document.addEventListener('click',e=>{const d=e.target.closest('.dlg');if(d&&d===box)next()});
 document.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&!e.target.closest('button,input')){e.preventDefault();next()}});
 setInterval(()=>{const s=$('.screen.active');if(s&&s.dataset.mode&&Date.now()-idleAt>30000&&!typing)say(s.dataset.mode,'idle')},5000);
 return{say,next,stop(){q=[];clearInterval(t);typing=false},activity(){idleAt=Date.now()}};
})();
