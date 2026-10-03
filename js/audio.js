// Sistem audio: pakai file dari CONFIG.audio jika diisi, kalau tidak pakai suara sintetis (placeholder).
const Sound=(()=>{
 let ctx,bg,sg,cur=null,tm=null,step=0,fileBgm=null,vol={bgm:.5,sfx:.7,mute:false};
 try{Object.assign(vol,JSON.parse(localStorage.getItem('tkm_vol')))}catch(e){}
 const save=()=>{try{localStorage.setItem('tkm_vol',JSON.stringify(vol))}catch(e){}};
 function apply(){if(ctx){bg.gain.value=vol.mute?0:vol.bgm*.3;sg.gain.value=vol.mute?0:vol.sfx}if(fileBgm)fileBgm.volume=vol.mute?0:vol.bgm;save()}
 function tone(f,t0,d,type='square',g=.2,out=sg){const o=ctx.createOscillator(),n=ctx.createGain();o.type=type;o.frequency.value=f;n.gain.setValueAtTime(g,t0);n.gain.exponentialRampToValueAtTime(.001,t0+d);o.connect(n);n.connect(out);o.start(t0);o.stop(t0+d+.02)}
 const SFX={hover:[[880,0,.04,.08]],click:[[660,0,.05],[990,.05,.06]],transition:[[300,0,.1],[450,.1,.1],[600,.2,.12]],correct:[[523,0,.1],[659,.1,.1],[784,.2,.2]],wrong:[[220,0,.15],[165,.15,.25]],toggle:[[740,0,.05],[1100,.05,.06]]};
 const SEQ={menu:[[0,4,7,12,7,4,9,5],300],materi:[[0,2,4,7,4,2,0,-3],360],simulasi:[[0,7,12,7,5,9,12,16],260],latihan:[[0,3,7,3,0,-2,3,-5],400]};
 function stopBgm(){clearInterval(tm);if(fileBgm){fileBgm.pause();fileBgm=null}}
 return{
  vol,set(k,v){vol[k]=v;apply()},
  unlock(){if(!ctx){ctx=new(window.AudioContext||window.webkitAudioContext)();bg=ctx.createGain();sg=ctx.createGain();bg.connect(ctx.destination);sg.connect(ctx.destination);apply()}ctx.resume();if(cur)Sound.bgm(cur)},
  sfx(n){const f=CONFIG.audio.sfx[n];if(f){const a=new Audio(f);a.volume=vol.mute?0:vol.sfx;a.play().catch(()=>{});return}
   if(!ctx)return;const s=n==='talk'?[[380+Math.random()*160,0,.03,.05]]:SFX[n];if(s)s.forEach(([f,t,d,g])=>tone(f,ctx.currentTime+t,d,'square',g||.2))},
  bgm(m){cur=m;stopBgm();if(!ctx)return;const f=CONFIG.audio.bgm[m];
   if(f){fileBgm=new Audio(f);fileBgm.loop=true;apply();fileBgm.play().catch(()=>{});return}
   const [sc,ms]=SEQ[m];step=0;tm=setInterval(()=>{const n=261.6*Math.pow(2,sc[step%8]/12),t=ctx.currentTime;tone(n,t,.22,'triangle',.5,bg);if(step%4===0)tone(n/2,t,.5,'sine',.5,bg);step++},ms)}
 }})();
