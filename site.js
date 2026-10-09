(function(){
 const header=document.querySelector('.topbar'); const menu=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');
 function update(){header?.classList.toggle('is-solid',window.scrollY>45)}update();window.addEventListener('scroll',update,{passive:true});
 menu?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';});
 document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu'}));
 const f=document.querySelector('#guest-enquiry');const dlg=document.querySelector('#demo-dialog');
 f?.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;dlg.hidden=false;dlg.querySelector('button')?.focus();});
 document.querySelectorAll('[data-close-dialog]').forEach(b=>b.addEventListener('click',()=>{dlg.hidden=true}));dlg?.addEventListener('click',e=>{if(e.target===dlg)dlg.hidden=true});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&dlg&&!dlg.hidden)dlg.hidden=true});
})();
