function Scroll() {
    var top = document.getElementById('header');
    var ypos = window.pageYOffset;
    if (ypos > 300) {
        top.style.height = "70px";
        textContent.height = "10px";
    } 
    else {
                top.style.height="100px";
                
            }  
}
window.addEventListener("scroll",Scroll);

