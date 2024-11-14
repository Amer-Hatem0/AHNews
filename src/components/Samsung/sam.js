window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.rev');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll', reveal2);

function reveal2() {
    var reveals2 = document.querySelectorAll('.rev2');

    for (var i = 0; i < reveals2.length; i++) {

        var windowheight2 = window.innerHeight;
        var revealtop2 = reveals2[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop2 < windowheight2 - revealpoint) {
            reveals2[i].classList.add('active2');
        }
        else {
            reveals2[i].classList.remove('active2');
        }
    }
}