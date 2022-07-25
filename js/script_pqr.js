
window.addEventListener("scroll",function(){
    var aside  = this.document.querySelector("aside");
    aside.classList.toggle("abajo",window.scrollY>0)
})
