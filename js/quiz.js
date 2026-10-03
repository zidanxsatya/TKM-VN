// Layar Latihan: soal dari data/questions.js
const Quiz={i:0,tries:0,score:0,locked:false,
 enter(){Quiz.i=0;Quiz.score=0;Dialogue.say('quiz','enter_'+Knowledge.tier());Quiz.draw()},
 draw(){const Q=QUESTIONS[Quiz.i];Quiz.tries=0;Quiz.locked=false;
  $('#qbox').innerHTML=`<small>Soal ${Quiz.i+1} / ${QUESTIONS.length}</small><p class="qt">${Q.q}</p>${Q.circuit?`<div class="qc">${Sim.svg(Q.circuit.a,Q.circuit.b)}</div>`:''}
  <div class="opts">${Q.options.map((o,n)=>`<button class="opt" data-n="${n}">${'ABCD'[n]}. ${o}</button>`).join('')}</div><div id="qfoot"></div>`},
 pick(n){if(Quiz.locked)return;const Q=QUESTIONS[Quiz.i],b=$$('.opt')[n];
  if(n===Q.answer){Quiz.locked=true;b.classList.add('ok');Sound.sfx('correct');if(!Quiz.tries)Quiz.score++;
   Knowledge.add(Quiz.tries?Math.ceil(Q.reward/2):Q.reward,'q:'+Quiz.i);Dialogue.say('quiz','correct',{explain:Q.explain});
   $('#qfoot').innerHTML=`<button class="pbtn" id="qnext" style="--c:#1f8a7a">${Quiz.i===QUESTIONS.length-1?'Selesai':'Lanjut ▶'}</button>`}
  else{Quiz.tries++;b.classList.add('bad');b.disabled=true;Sound.sfx('wrong');Dialogue.say('quiz','wrong',{hint:Q.hint})}},
 next(){if(++Quiz.i>=QUESTIONS.length)Quiz.finish();else Quiz.draw()},
 finish(){const n=QUESTIONS.length,s=Quiz.score;
  $('#qbox').innerHTML=`<p class="qt">Latihan selesai!</p><p class="qt">Benar di percobaan pertama: ${s} / ${n}</p><div id="qfoot"><button class="pbtn" id="qretry" style="--c:#1f8a7a">↻ Ulangi</button> <button class="pbtn" data-go="menu" style="--c:#3a4468">Menu</button></div>`;
  Dialogue.say('quiz','finish_'+(s>=4?'high':s>=2?'mid':'low'),{score:s+'/'+n})}
};
