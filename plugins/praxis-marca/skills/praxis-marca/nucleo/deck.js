/* Motor de presentación animada (del deck de Redeban). Flechas/espacio/clic para avanzar, F = pantalla completa. */
(function(){
var S=[].slice.call(document.querySelectorAll('.slide')),cur=-1,stage=document.getElementById('stage');
function fit(){var k=Math.min(innerWidth/1920,innerHeight/1080);stage.style.transform='scale('+k+')'}
addEventListener('resize',fit);fit();
S.forEach(function(s){[].slice.call(s.querySelectorAll('[data-build-in]')).forEach(function(e){
  var a=e.getAttribute('data-build-in').split(/\s+/),k=a[0],n=parseInt(a[1]||'1',10);
  if(['fade','rise','pop','scale','right','left','down'].indexOf(k)<0)k='fade';
  e.setAttribute('data-bi','');e.style.animationName='bi-'+k;e.style.animationDelay=(150+(n-1)*160)+'ms';
})});
function go(i){
  i=Math.max(0,Math.min(S.length-1,i));if(i===cur)return;
  if(cur>=0)S[cur].classList.remove('on');
  cur=i;var s=S[i];s.classList.remove('on');void s.offsetWidth;s.classList.add('on');
  var ct=document.getElementById('ct');if(ct)ct.textContent=(i+1)+' / '+S.length;
  try{history.replaceState(null,'','#'+(i+1))}catch(e){}
}
window.__deck={go:go,cur:function(){return cur},n:S.length};
addEventListener('keydown',function(e){
  var k=e.key;
  if(k==='ArrowRight'||k==='ArrowDown'||k==='PageDown'||k===' '||k==='Enter'){e.preventDefault();go(cur+1)}
  else if(k==='ArrowLeft'||k==='ArrowUp'||k==='PageUp'||k==='Backspace'){e.preventDefault();go(cur-1)}
  else if(k==='Home')go(0);else if(k==='End')go(S.length-1);
  else if(k==='f'||k==='F')fsT();
});
addEventListener('click',function(e){if(e.target.closest('#hud'))return;go(e.clientX<innerWidth/3?cur-1:cur+1)});
function fsT(){if(document.fullscreenElement)document.exitFullscreen();else if(document.documentElement.requestFullscreen)document.documentElement.requestFullscreen()}
var b=function(id,f){var el=document.getElementById(id);if(el)el.onclick=f};
b('pv',function(){go(cur-1)});b('nx',function(){go(cur+1)});b('fs',fsT);
var h=parseInt((location.hash||'').slice(1),10);go(h>0?h-1:0);
})();
