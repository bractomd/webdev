document.getElementById("greeting").addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "goodbye";
});


document.getElementById("greeting").addEventListener("dblclick", function () {
    document.getElementById("greeting").innerHTML = "i said goodbye";
});


document.getElementById("greeting").addEventListener("contextmenu", function () {
    document.getElementById("greeting").innerHTML = "goofer";

});



document.getElementById("greeting").addEventListener("mousemove", function () {
    document.getElementById("greeting").style.opacity = "30%";
});





document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.height = "500px";
    document.getElementById("color").style.width = "500px";
    document.getElementById("color").style.borderRadius = "50%";
    document.getElementById("color").style.opacity = "50%";
});



document.getElementById("color").addEventListener("mouseout", function () {
    document.getElementById("color").style.backgroundColor = "green";
    document.getElementById("color").style.height = "200px";
    document.getElementById("color").style.width = "200px";
    document.getElementById("color").style.borderRadius = "0%";
    document.getElementById("color").style.opacity = "100%";
});


document.getElementById("color").addEventListener("wheel", function () {
    document.getElementById("color").style.borderRadius = "10px";
    document.getElementById("color").style.borderColor = "black";
    document.getElementById("color").style.borderWidth = "25px";

 
});

document.getElementById("sss").addEventListener("copy", function () {
    document.getElementById("sss").innerHTML = "how dare you";
});


document.getElementById("sss").addEventListener("mousedown", function () {
    document.getElementById("sss").innerHTML = "hold";
});


document.getElementById("sss").addEventListener("mouseup", function () {
    document.getElementById("sss").innerHTML = "Copy me if you dare";
});