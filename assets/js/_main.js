
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.classList.toggle('open',open);
  menuBtn.setAttribute('aria-expanded',open?'true':'false');
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));
// スクロールで要素をふわっと表示
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));