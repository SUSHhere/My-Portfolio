ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:100
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-image,.services-container, .projects,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-image' ,{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content' ,{origin:'right'});

/*==================== typed js ====================*/
const typed= new Typed('.multiple-text',{
    strings:['Student','Web Developer','Graphic Designer','Photographer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});