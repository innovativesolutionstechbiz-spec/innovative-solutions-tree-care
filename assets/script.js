const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navlinks');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('[data-estimate-form]');
if(form){form.addEventListener('submit',function(e){
  const endpoint=form.getAttribute('action')||'';
  if(endpoint.includes('YOUR_EMAIL_HERE')){e.preventDefault();alert('Before accepting customer requests, replace YOUR_EMAIL_HERE in contact.html with the business email address that should receive inquiries.');}
});}
