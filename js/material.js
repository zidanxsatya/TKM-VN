// Layar Materi: slide dari data/materials.js
const Material={i:0,a:0,b:0,S:()=>MATERIALS.and,
 enter(){Material.i=0;Material.a=Material.b=0;Dialogue.say('materi','enter_'+Knowledge.tier());Material.draw(true)},
 draw(first){const S=Material.S(),s=Material.i,m=S[s],{a,b}=Material;
  const vis=m.visual==='widget'?Sim.widget(a,b,{labels:m.labels}):m.visual==='table'?Sim.widget(a,b,{table:true}):'';
  $('#board').innerHTML=`<h2>${m.title}</h2><p>${m.text}</p>${vis}`;
  const last=s===S.length-1;
  $('#mnav').innerHTML=`<button class="pbtn" data-m="-1" style="--c:#3a4468" ${s?'':'disabled'}>◀</button><span>${s+1} / ${S.length}</span><button class="pbtn" data-m="1" style="--c:#2b6fd1">${last?'Selesai ✓':'▶'}</button>`;
  if(m.reward)Knowledge.add(m.reward,'m:'+s);
  if(first)Dialogue.say('materi','slide0',{},true);else if(!Material.keep)Dialogue.say('materi','slide'+s)},
 go(d){const n=Material.i+d,S=Material.S();
  if(n>=S.length){Knowledge.add(CONFIG.rewards.materiFinish,'m:finish');Dialogue.say('materi','done');return}
  if(n<0)return;Material.i=n;Sound.sfx('transition');Material.draw()},
 set(k,v){Material[k]=v;if(k==='a'||k==='b'){Sound.sfx('toggle');Knowledge.add(CONFIG.rewards.play,'m:play');
  Material.keep=true;Material.draw();Material.keep=false;Dialogue.say('materi',Material.a&Material.b?'play_on':'play_off')}}
};
