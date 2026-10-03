// Knowledge: disimpan di localStorage. add(jumlah, kunciSekali) -> kunci mencegah farming.
const Knowledge=(()=>{
 const KEY='tkm_save_v1';let s={k:0,done:{}};
 try{Object.assign(s,JSON.parse(localStorage.getItem(KEY)))}catch(e){}
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){}};
 function ui(){const m=CONFIG.knowledge.max;document.querySelector('#kbar i').style.width=(s.k/m*100)+'%';document.querySelector('#kval').textContent=s.k+' / '+m}
 return{ui,
  get:()=>s.k,
  tier(){const t=CONFIG.knowledge.tiers;return s.k>=t.high?'high':s.k>=t.mid?'mid':'low'},
  add(n,key){if(key){if(s.done[key])return false;s.done[key]=1}
   s.k=Math.min(CONFIG.knowledge.max,s.k+n);save();ui();
   const t=document.querySelector('#toast');t.textContent='+'+n+' Knowledge';t.classList.remove('show');void t.offsetWidth;t.classList.add('show');return true},
  reset(){s={k:0,done:{}};save();ui()}};
})();
