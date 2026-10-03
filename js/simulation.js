// Rangkaian AND (SVG) + layar Simulasi. Output dihitung nyata: Y = A & B
const Sim={a:0,b:0,found:{},
 svg(a,b){const y=a&b,on='#46ff9c',off='#5b6a8c';
  return `<svg viewBox="0 0 320 130" class="gate" shape-rendering="crispEdges"><g fill="none" stroke-width="5" stroke-linecap="square">
  <path d="M10 40H92" stroke="${a?on:off}"/><path d="M10 90H92" stroke="${b?on:off}"/>
  <path d="M92 20H146A45 45 0 0 1 146 110H92Z" stroke="#e8f0ff" fill="#1b2a4a"/><path d="M191 65H276" stroke="${y?on:off}"/></g>
  <g font-family="Pixelify Sans,monospace" fill="#e8f0ff" font-size="16"><text x="10" y="30">A=${a}</text><text x="10" y="80">B=${b}</text><text x="108" y="72" font-size="18">AND</text><text x="280" y="38">Y=${y}</text></g>
  ${y?'<circle cx="294" cy="65" r="22" fill="#ffe45e" opacity=".3"/>':''}<circle cx="294" cy="65" r="13" fill="${y?'#ffe45e':'#2a3350'}" stroke="#e8f0ff" stroke-width="4"/></svg>`},
 table(a,b,found){return `<table class="tt"><tr><th>A</th><th>B</th><th>Y</th></tr>`+[[0,0],[0,1],[1,0],[1,1]].map(([x,z])=>{
  const hide=found&&!found[`a${x}b${z}`];return `<tr data-a="${x}" data-b="${z}" class="${x===a&&z===b?'hl':''}"><td>${x}</td><td>${z}</td><td>${hide?'?':x&z}</td></tr>`}).join('')+`</table>`},
 widget(a,b,o={}){const l=o.labels||{a:'A',b:'B',y:'Y'};
  return `<div class="wd">${Sim.svg(a,b)}<div class="tg"><button data-t="a" class="${a?'on':''}">${l.a} = ${a}</button><button data-t="b" class="${b?'on':''}">${l.b} = ${b}</button><span class="yv">${l.y} = ${a&b}</span></div>${o.table?Sim.table(a,b):''}</div>`},
 enter(){Sim.found={};Sim.a=Sim.b=0;Sim.draw();Dialogue.say('sim','enter_'+Knowledge.tier())},
 draw(){$('#sim-board').innerHTML=Sim.svg(Sim.a,Sim.b);
  ['a','b'].forEach(k=>{const e=$(`[data-s=${k}]`);e.textContent=`${k.toUpperCase()} = ${Sim[k]}`;e.style.setProperty('--c',Sim[k]?'#1f9a5a':'#2c4aa8')});
  $('#sim-tt').innerHTML=Sim.table(Sim.a,Sim.b,Sim.found)+`<small>${Object.keys(Sim.found).length}/4 kombinasi</small>`},
 toggle(k){Sim[k]^=1;Sound.sfx('toggle');const key=`a${Sim.a}b${Sim.b}`;
  if(!Sim.found[key]){Sim.found[key]=1;Knowledge.add(CONFIG.rewards.simCombo,'sim:'+key)}
  Sim.draw();Dialogue.say('sim',Object.keys(Sim.found).length===4&&key==='a1b1'&&!Sim.done?(Sim.done=1,Knowledge.add(CONFIG.rewards.simComplete,'sim:all'),'complete'):key)},
 run(){const y=Sim.a&Sim.b,b=$('#sim-board');b.classList.remove('pulse');void b.offsetWidth;b.classList.add('pulse');Sound.sfx(y?'correct':'wrong');Dialogue.say('sim',y?'run_on':'run_off')}
};
