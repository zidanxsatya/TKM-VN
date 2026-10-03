// Navigasi, transisi, dan penghubung semua modul.
const Game={cur:'menu',busy:false,
 go(name){if(Game.busy)return;Game.busy=true;Sound.sfx('transition');const T=$('#trans');T.classList.add('in');
  setTimeout(()=>{$$('.screen').forEach(s=>s.classList.toggle('active',s.id==='s-'+name));Game.cur=name;
   $('#back').style.display=name==='menu'?'none':'';Sound.bgm(name);
   ({menu:Dialogue.stop,materi:Material.enter,simulasi:Sim.enter,latihan:Quiz.enter})[name]();
   T.classList.remove('in');setTimeout(()=>Game.busy=false,450)},550)}};
function fit(){const g=$('#game');g.style.width=Math.min(innerWidth,innerHeight*16/9)+'px';g.style.height=Math.min(innerHeight,innerWidth*9/16)+'px'}
(function init(){
 fit();addEventListener('resize',fit);
 $$('.screen').forEach(s=>s.style.backgroundImage=`url(${CONFIG.backgrounds[s.dataset.bg]})`);
 $$('img[data-c]').forEach(i=>i.src=CHARACTERS[i.dataset.c].path+'normal.'+CHARACTERS[i.dataset.c].ext);
 $('#title').innerHTML=CONFIG.title.map(t=>`<span>${t}</span>`).join('');$('#tagline').innerHTML=CONFIG.tagline;
 $('#trans').innerHTML=Array.from({length:60},()=>`<div style="transition-delay:${Math.random()*.3}s"></div>`).join('');
 Knowledge.ui();Sound.bgm('menu');
 addEventListener('pointerdown',()=>Sound.unlock(),{once:true});
 document.addEventListener('pointerover',e=>{if(e.target.closest('button:not(:disabled)'))Sound.sfx('hover')});
 document.addEventListener('click',e=>{const t=e.target,b=t.closest('button');if(b)Sound.sfx('click');Dialogue.activity();
  const go=t.closest('[data-go]');if(go)return Game.go(go.dataset.go);
  const s=t.closest('[data-s]');if(s)return Sim.toggle(s.dataset.s);
  if(t.closest('#run'))return Sim.run();
  const m=t.closest('[data-m]');if(m)return Material.go(+m.dataset.m);
  const tg=t.closest('[data-t]');if(tg){const k=tg.dataset.t;return Material.set(k,Material[k]^1)}
  const tr=t.closest('#board tr[data-a]');if(tr){Material.a=+tr.dataset.a;return Material.set('b',+tr.dataset.b)}
  const o=t.closest('.opt');if(o)return Quiz.pick(+o.dataset.n);
  if(t.closest('#qnext'))return Quiz.next();if(t.closest('#qretry'))return Quiz.enter();
  if(t.closest('#gear'))$('#settings').hidden=!$('#settings').hidden;
  if(t.closest('#reset')&&confirm('Reset Knowledge ke 0?'))Knowledge.reset()});
 $('#v-bgm').value=Sound.vol.bgm;$('#v-sfx').value=Sound.vol.sfx;$('#v-mute').checked=Sound.vol.mute;
 $('#v-bgm').oninput=e=>Sound.set('bgm',+e.target.value);$('#v-sfx').oninput=e=>Sound.set('sfx',+e.target.value);$('#v-mute').onchange=e=>Sound.set('mute',e.target.checked);
})();
