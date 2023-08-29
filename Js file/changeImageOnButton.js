var img = document.getElementById("img");
var imgs = ['img1.jfif','img2.jfif','img3.jfif','img4.jfif','img5.jfif'];
var i ="";
function funShowImg(){
    img.src = imgs[i];
    i++;
    if (i == imgs.length) {
        i = 0;
    }
}
function funStart(){
    sI = window.setInterval("funShowImg()",500);
}
function funFast(){
    sI = window.setInterval("funShowImg()",100);
}
function funSlow(){
    sI = window.setInterval("funShowImg()",2000);
}
function funStop(){
    window.clearInterval(sI);
}