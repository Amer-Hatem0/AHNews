document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const searchIcon = document.querySelector("#searchIcon");
    const navOpenBtn = document.querySelector(".navOpenBtn");
    const navCloseBtn = document.querySelector(".navCloseBtn");

    searchIcon.addEventListener("click", () => {
        nav.classList.toggle("openSearch");
        nav.classList.remove("openNav");
        if (nav.classList.contains("openSearch")) {
            searchIcon.classList.replace("uil-search", "uil-times");
        } else {
            searchIcon.classList.replace("uil-times", "uil-search");
        }
    });
    const liElements = nav.querySelectorAll("li");
    navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        nav.classList.remove("openSearch");


        searchIcon.classList.replace("uil-times", "uil-search");
    });

    navCloseBtn.addEventListener("click", () => {
        nav.classList.remove("openNav");
    });
});





// //////////////////


document.addEventListener('DOMContentLoaded', function () {
    const num = document.querySelector('.number');
    if (num) {
        const windowHeight = window.innerHeight;

        function updateNumber() {
            const scrollPosition = window.pageYOffset + 0;
            const documentHeight = document.documentElement.scrollHeight;
            const progress = Math.min(((scrollPosition * 2) / (documentHeight)) * 100, 100);
            num.innerHTML = `${Math.round(progress)}%`;
        }

        window.addEventListener('scroll', updateNumber);
    }
});

//////////////////////////////

