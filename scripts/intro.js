// Site intro
// Shows static logo during window load, then plays after

const wrapper = document.getElementById("logo-wrapper");
const logo = document.getElementById("logo-inner");
const text = document.getElementById("logo-text");

console.log("starting intro...")

window.scrollTo(0,0);
document.body.style.overflow = "hidden";
wrapper.style.height = window.innerHeight-60 + "px";
logo.style.position = "absolute";
text.style.position = "absolute";
text.style.opacity = "0";
text.style.fontSize = "120px";
logo.style.height = "192px";

window.onload = function() {
    setTimeout(function(){
        text.style.display = "initial";

        logo.style.left = "50%";
        logo.style.transform = "translateX(-50%)";
        logo.style.transition = "padding-right 0.5s";

        text.style.right = "50%";
        text.style.transform = "translateX(50%)";
        text.style.transition = "padding-left 0.5s, opacity 0.5s";
        text.style.opacity = "1";

        totalWidth = text.offsetWidth + logo.offsetWidth + 50;

        logo.style.paddingRight = totalWidth/2+120 + "px";
        text.style.paddingLeft = totalWidth/2-120 + "px";

        setTimeout(function(){
            text.style.transition = "font-size 0.5s";
            logo.style.transition = "height 0.5s";

            logo.style.position = "initial";
            logo.style.paddingRight = "initial";
            logo.style.transform = "initial";
            logo.style.left = "initial";

            text.style.position = "initial";
            text.style.paddingLeft = "initial";
            text.style.transform = "initial";
            text.style.right = "initial";

            text.style.fontSize = "60px";
            logo.style.height = "96px";

            wrapper.style.transition = "height 0.5s";
            wrapper.style.height = "96px";
            
            setTimeout(function(){
                document.body.style.overflow = "auto";
            }, 500);
        }, 1000);
    }, 500);
}