window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav-transparent');
    } else {
        nav.classList.remove('nav-transparent');
    }
});