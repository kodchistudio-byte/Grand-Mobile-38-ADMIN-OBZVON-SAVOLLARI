const TG='https://t.me/+0qcU6rP3poRhNGYy';
const app=document.getElementById('app');
const TOP=D.filter(d=>d.c==='E'),LIKELY=D.filter(d=>d.c!=='E');
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const wrap=h=>app.innerHTML='<div class="wrap">'+h+'</div>';
const head=t=>`<div class="head"><button class="back" onclick="location.hash='#/'">← Menyu</button><h2>${t}</h2></div>`;
const qcard=(d,i,n)=>`<div class="q" style="animation-delay:${Math.min(i,14)*40}ms"><h3><span>${String(n).padStart(2,'0')}</span>${d.q}</h3><p>${d.a}</p></div>`;

function home(){
 const m=[['📚','Hamma savollar',D.length+' ta savol','#/all'],['⭐','Ko‘p uchraydigan savollar',TOP.length+' ta savol','#/top'],['🎯','Mashq','Kartochkalar bilan','#/practice'],['🔮','Ehtimoliy keyingi savollar',LIKELY.length+' ta savol','#/likely'],['🗂️','Mavzular',Object.keys(CATS).length-1+' ta bo‘lim','#/topics']];
 wrap(`<h1>ADMIN OBZVONI</h1><p class="sub">Grand Mobile · tayyorgarlik</p>
 <a class="tg-btn" href="${TG}" target="_blank" rel="noopener noreferrer">✈ TELEGRAM KANALGA OBUNA BO‘LISH</a>
 <div class="grid">${m.map((x,i)=>`<a class="card" style="animation-delay:${i*90}ms" href="${x[3]}"><span class="ic">${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></a>`).join('')}</div>`);
}
function list(title,items){
 wrap(head(title)+`<input id="s" placeholder="Qidirish…"><div class="cnt" id="cnt"></div><div id="l"></div>`);
 const r=()=>{const t=document.getElementById('s').value.trim().toLowerCase();const f=items.filter(d=>(d.q+d.a).toLowerCase().includes(t));
  document.getElementById('cnt').textContent=f.length+' ta savol';
  document.getElementById('l').innerHTML=f.length?f.map((d,i)=>qcard(d,i,i+1)).join(''):'<div class="empty">Hech narsa topilmadi</div>'};
 document.getElementById('s').oninput=r;r();
}
function topics(){
 wrap(head('Mavzular')+`<div class="grid">${Object.keys(CATS).filter(k=>k!=='E').map((k,i)=>`<a class="card" style="animation-delay:${i*70}ms" href="#/topic/${k}"><b>${CATS[k]}</b><small>${D.filter(d=>d.c===k).length} ta savol</small></a>`).join('')}</div>`);
}
function practice(){
 let deck=shuffle(D),i=0,ok=0,wrong=[];
 const show=()=>{
  if(i>=deck.length){wrap(head('Mashq natijasi')+`<div class="score">${ok}/${deck.length}</div><p class="sub">${ok===deck.length?'Ajoyib!':'Yana mashq qiling'}</p><div class="btns">${wrong.length?'<button class="btn no" id="rw">Xatolarni takrorlash ('+wrong.length+')</button>':''}<button class="btn" id="rs">Qaytadan</button></div>`);
   const rw=document.getElementById('rw');if(rw)rw.onclick=()=>{deck=shuffle(wrong);i=0;ok=0;wrong=[];show()};
   document.getElementById('rs').onclick=()=>{deck=shuffle(D);i=0;ok=0;wrong=[];show()};return}
  const d=deck[i];
  wrap(head('Mashq')+`<div class="cnt">${i+1} / ${deck.length}</div><div class="bar"><i style="width:${i/deck.length*100}%"></i></div>
  <div class="play"><div class="flash"><div class="t">${d.q}</div><div id="an"></div></div></div>
  <div class="btns" id="bt"><button class="btn" id="sh">Javobni ko‘rish</button></div>`);
  document.getElementById('sh').onclick=()=>{document.getElementById('an').innerHTML=`<div class="ans">${d.a}</div>`;
   document.getElementById('bt').innerHTML='<button class="btn ok" id="y">✔ Bilaman</button><button class="btn no" id="n">✖ Takrorlayman</button>';
   document.getElementById('y').onclick=()=>{ok++;i++;show()};document.getElementById('n').onclick=()=>{wrong.push(d);i++;show()}};
 };show();
}
function route(){
 const h=location.hash||'#/';window.scrollTo(0,0);
 if(h==='#/all')list('Hamma savollar',D);
 else if(h==='#/top')list('Ko‘p uchraydigan savollar',TOP);
 else if(h==='#/likely')list('Ehtimoliy keyingi savollar',LIKELY);
 else if(h==='#/topics')topics();
 else if(h.startsWith('#/topic/')){const k=h.split('/')[2];list(CATS[k]||'Mavzu',D.filter(d=>d.c===k))}
 else if(h==='#/practice')practice();
 else home();
}
window.addEventListener('hashchange',route);route();
