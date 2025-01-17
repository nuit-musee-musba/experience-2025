import gsap from "gsap";

// Sélection des éléments de la page d'accueil (home)
// Titre principal
const projectTitle = document.querySelector('.project-title');

// Navigation dans la section home
const homeNav = document.querySelector('.home .nav');
const homeNavItems = document.querySelectorAll('.home .nav li');

// Personnages dans la section home
const homePersonnages = document.querySelectorAll('.home .personnage');
const homePersonnageContainers = document.querySelectorAll('.home .personnage-container');


// Sélection des éléments de la page d'expérience (experience-page)

// Section des personnages
const experiencePersonnages = document.querySelectorAll('.experience-page .personnage');
const experiencePersonnageContainers = document.querySelectorAll('.experience-page .personnage-container');

// Contenu de l'expérience
const experienceContent = document.querySelector('.experience-page .experience-content');

// Illustration de l'expérience
const experienceIllustration = document.querySelector('.experience-page .experience-illustartion img');

// Modal d'expérience
const experienceModal = document.querySelector('.experience-page .experience-modal');
const experienceModalTitle = document.querySelector('.experience-page .experience-modal h3');
const experienceModalLine = document.querySelector('.experience-page .experience-modal .line');
const experienceModalText = document.querySelector('.experience-page .experience-modal p');
const experienceModalButton = document.querySelector('.experience-page .experience-modal button a');

// Navigation dans l'expérience
const experienceNavigation = document.querySelector('.experience-page .experience-navigation');
const experienceNavLeft = document.querySelector('.experience-page .arrow-button.left');
const experienceNavRight = document.querySelector('.experience-page .arrow-button.right');


let experienceID




homeNavItems.forEach((item, index) => {
    item.addEventListener('click',()=>{
        //Play tl of leaveHome
        leaveHome.play();

        experienceID = item.getAttribute('experience-id')


        //Play tl of experiencepage apparition

    })
});


const leaveHome = gsap.timeline({
    paused: true
})


leaveHome
    .to(projectTitle,{transform: 'translate(-50%, -15vh) scale(0.8)', duration: 0.5})
    .to(homePersonnageContainers,{y: 1500, opacity:0, duration: 0.5, stagger:0.05 },'-=0.5') 


const enterExperience = gsap.timeline({paused: true})