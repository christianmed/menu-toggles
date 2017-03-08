(function(d){
  'use strict';
  var menu = d.getElementById('menu');
  menu.addEventListener('click',function(){
    if(menu.classList.contains('active')){
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  });
  
})(document);