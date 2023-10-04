function show(e) {
    var element = e.nextElementSibling;
    element.style.transition = ("0.5s");
    element.style.opacity = ("0");
}
function hide(e) {
    var element = e.nextElementSibling;
    element.style.transition = ("0.5s");
    element.style.opacity = ("1");
}
function popup(e) {
    var element = e.nextElementSibling;
    element.style.display = ("block");
    document.getElementById("rating").style.display = ("block");
}
function closeThis() {
    document.getElementById('rating').style.display = ("none");
    alert('Merci pour votre opinion');
}
