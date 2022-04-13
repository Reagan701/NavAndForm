function openForm(){
    var i,  form;

    form = document.getElementsByClassName("Form");
    for(i = 0; i<form.length;i++){
        form[i].style.display = "inline-block";
    }
    document.getElementById("Button").style.display ="none";

}
var header,footer,main, li;
function setTheTimeout(){
    sleep().then(() => {onLoadComplete();});
}

function sleep(){
    return new Promise(resolve => setTimeout(resolve,1000));;
}

function onLoadComplete(){
header = document.getElementsByTagName("Header");
footer = document.getElementsByTagName("Footer");
main = document.getElementsByTagName("Main");
li = document.getElementsByTagName("li");

loader = document.getElementsByClassName("loader");

for(i = 0; i<header.length;i++){
    header[i].style.display = "flex";
}
for(i = 0; i<footer.length;i++){
    footer[i].style.display = "flex";
}
for(i = 0; i<main.length;i++){
    main[i].style.display = "block";
}
for(i = 0; i<li.length;i++){
    li[i].style.display = "inline-block";
}

for(i = 0; i<loader.length;i++){
    loader[i].style.display = "none";
}
}