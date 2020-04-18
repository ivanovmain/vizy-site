
 document.addEventListener("DOMContentLoaded", function(e) {
    const overlay = document.querySelector('.mobile-wrapper-overlay');
    const burger = document.querySelector('#burger-m-icon');
    const out_input = document.querySelector('#out-input');
    const c_input = document.querySelector('#c-input');
    const lupa = document.querySelector('.search-lupa');
    overlay.addEventListener('click', (e) => {
        burger.checked = false;
    })
    
    c_input.addEventListener('focus', (e) => {
      out_input.classList.add('focus-input');
      lupa.classList.add('focus-lupa');
    })
    document.addEventListener('click', (e)=>{
        if(e.target != c_input && e.target != out_input){
          out_input.classList.remove('focus-input');
          lupa.classList.remove('focus-lupa');
        }
        
    })
  });