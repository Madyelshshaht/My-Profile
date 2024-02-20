var typed = new Typed('.multiple-text', {
    strings: ['FrontEnd Develober', 'Age:19','FCIS || MU'],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 100,
    loop:true
  });

let btn_scroll= document.getElementById('scroll-btn');
function up(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth",
});

setInterval(function(){
  window.location.reload();
},1000)
};

window.onscroll=function(){
  if (scrollY >= 855){
    btn_scroll.style.display="Block";
  }
  else if (scrollY < 855){
    btn_scroll.style.display="none";
  }
}


let D_Cv =document.getElementById('D_Cv');

D_Cv.onclick=function(){
  window.alert("Download Completed 100%")
}

