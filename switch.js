var body = document.querySelector('body');
var img = document.querySelector('#hero-image');
var navlinks = document.querySelectorAll('.nav-link');
var content = document.querySelector('.content');

var changed = [body, img, content];
var changedTo = ['black', 'black-border',  'color']

function mode(btn_switch){
    var trigger = btn_switch.classList.value;
   if(trigger === 'btn'){
       toDarkMode()
       btn_switch.classList.add('light');
       btn_switch.innerText = "Light mode"
   }else{
    toDarkMode()
    btn_switch.classList.remove('light');
    btn_switch.innerText = "Dark mode"
   }
}

function toDarkMode(){
    for (var i = 0; i<3; i++){
        navlinks[i].classList.toggle('white');
       };
   for (var i = 0; i<3; i++){
    changed[i].classList.toggle(changedTo[i]);
   };
}

