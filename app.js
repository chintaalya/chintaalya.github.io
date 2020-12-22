const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-menu')
    const navMenu = document.querySelectorAll('.nav-menu li')

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navMenu.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //burger animation
        burger.classList.toggle('togle')
    });

}

navSlide();