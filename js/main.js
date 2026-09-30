document.addEventListener('DOMContentLoaded',function(){
  var t=document.getElementById('menuToggle'),n=document.getElementById('mainNav');
  if(t&&n){
    t.addEventListener('click',function(){
      n.classList.toggle('open');
      t.textContent=n.classList.contains('open')?'✕':'☰';
    });
  }
  document.querySelectorAll('.nav-item > a.dd-toggle').forEach(function(a){
    a.addEventListener('click',function(e){
      if(window.innerWidth<=768){
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });
});
function handleForm(e){
  e.preventDefault();
  var name=document.getElementById('name'),phone=document.getElementById('phone');
  if(!name||!phone||!name.value||!phone.value){alert('Please enter your name and phone number.');return false;}
  alert('Thank you, '+name.value+'. We received your request and will call you shortly at '+phone.value+'.\n\nFor immediate help, call (245) 678-2882 now.');
  e.target.reset();return false;
}
