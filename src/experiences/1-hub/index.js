import gsap from "gsap";
import shuffleTextAnimation from "./utils/ShuffleText";
import { Modal } from "../../commons/components/Modal";

// Sélection des éléments de la page d'accueil (home)
const projectTitle = document.querySelector(".project-title");
const homeNav = document.querySelector(".home .nav");
const homeNavItems = document.querySelectorAll(".home .nav li");
const activeNavItem = document.querySelector(".home .nav .active");
const backHome = document.querySelector(".back-home");
const homePersonnageContainers = document.querySelectorAll(
  ".home .personnage-container"
);

// Sélection des éléments de la page d'expérience (experience-page)
const experiencePersonnageContainers = document.querySelectorAll(
  ".experience-page .personnage-container"
);
const experienceContent = document.querySelector(
  ".experience-page .experience-content"
);
const experienceIllustration = document.querySelector(
  ".experience-page .experience-illustartion"
);
const experienceModal = document.querySelector(
  ".experience-page .experience-modal"
);
const experienceModalTitle = document.querySelector(
  ".experience-page .experience-modal h3"
);
const experienceModalLine = document.querySelector(
  ".experience-page .experience-modal .line"
);
const experienceModalText = document.querySelector(
  ".experience-page .experience-modal p"
);
const experienceModalButton = document.querySelector(
  ".experience-page .experience-modal button a"
);

const experienceData = [
  {
    id: 1,
    title: "Réserve",
    description:
      "Tristan régisseur du Musba fait appel à toi, gardien des merveilles, pour tisser les fils d'une toute nouvelle exposition enchantée. Plonge dans les trésors des réserves, où chaque peinture murmure des histoires oubliées, et laisse ta créativité illuminer la salle. Ta mission : insuffler une magie unique, transformant cet espace en un royaume vibrant qui émerveillera les âmes et éveillera les rêves.",
    illustration: "/1-hub/illustrations/reserve.png",
    link: "/experiences/2-reserve/index.html",
  },
  {
    id: 2,
    title: "Sculpture",
    description:
      "Plongez dans l'univers captivant de la sculpture de bronze avec Ernest Meissonier comme guide ! Découvrez chaque étape du processus, de la modélisation en argile au coulage du bronze, et recréez le chef-d'œuvre Le Voyageur. Dans cette expérience ludique et immersive, apprenez l’art complexe de la sculpture de bronze.",
    illustration: "/1-hub/illustrations/sculpture.png",
    link: "/experiences/4-sculpture/index.html",
  },
  {
    id: 3,
    title: "Peinture",
    description:
      "Avec Polychromia, plonge dans l’univers fascinant des couleurs à travers divers mouvements artistiques ! Découvre comment la palette choisie par l’artiste influence la signification de l’œuvre, et recolorise certaines parties clés du tableau pour comprendre l’importance des couleurs dans une œuvre. Grâce à des choix interactifs et guidés, tu apprendras à décoder l’art de manière ludique et captivante !",
    illustration: "/1-hub/illustrations/peinture.png",
    link: "/experiences/5-peintures/index.html",
  },
  {
    id: 4,
    title: "Arts Graphiques",
    description:
      "Mesdames et Messieurs, vous avez été sélectionnés pour participer au célèbre quiz CARTES & CARTELS ! Que vous veniez seul ou à plusieurs, préparez-vous à affronter une succession de questions sur ces petits écriteaux descriptifs des œuvres : les cartels. Déduction et connaissances seront vos meilleures armes pour parvenir à vous sortir de cette aventure périlleuse.",
    illustration: "/1-hub/illustrations/art-graphiques.png",
    link: "/experiences/3-techniques/index.html",
  },
  {
    id: 5,
    title: "Restauration",
    description:
      "Prenez les commandes d’une restauration de tableau et découvrez la beauté de ce métier qui transmet le passé aux générations futures. À travers cette expérience, suivez les conseils du formateur et formez vous avant tout à ce noble métier requérant des notions scientifiques surprenantes. Un métier magique et bien plus exercer que vous ne le pensez.",
    illustration: "/1-hub/illustrations/restauration.png",
    link: "/experiences/6-restaurations/index.html",
  },
];

let experienceID;
let previousExperienceID;
let isInExperiencePage = false;

// Fonction pour mettre à jour les styles de l'élément actif
const updateActiveNavItem = (item) => {
  console.log(item);

  const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = item;
  gsap.to(activeNavItem, {
    width: offsetWidth,
    height: offsetHeight,
    x: offsetLeft,
    y: offsetTop,
    duration: 0.3,
    ease: "power2.out",
  });
};

// Fonction pour mettre à jour le contenu de la modal
const updateModalContent = (data, isLong) => {
  experienceModalTitle.innerText = data.title;
  experienceModalText.innerText = data.description;
  experienceModalButton.href = data.link;
  experienceIllustration.querySelector("img").src = data.illustration;

  shuffleTextAnimation(experienceModalTitle, data.title, {
    duration: 0.2,
    delay: isLong ? 0.65 : 0.15,
    steps: 10,
  });
};

// Fonction pour entrer dans une expérience
const enterExperience = (experienceID) => {
  const targetPerso = document.querySelector(
    `.experience-page .personnage-container[experience-id="${experienceID}"]`
  );
  activeNavItem.style.opacity = 1;
  const targetExperienceData = experienceData.find(
    (exp) => exp.id == experienceID
  );

  if (!targetPerso || !targetExperienceData) {
    console.error(
      `No elements or data found for experience ID: ${experienceID}`
    );
    return;
  }

  updateModalContent(targetExperienceData, true);

  gsap
    .timeline()
    .set([experienceIllustration, experienceModal], { display: "flex" })
    .set(experienceIllustration, { clipPath: "inset(0 0 100% 0)" })
    .add(leaveHome.play())
    .fromTo(
      targetPerso,
      { opacity: 0, y: 1500 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      0.25
    )
    .to(
      projectTitle,
      { transform: "translate(-50%, -16vh) scale(0.7)", duration: 0.5 },
      0.15
    )
    .to(
      experienceIllustration,
      { clipPath: "inset(0 0 0% 0)", duration: 0.5, ease: "power2.inOut" },
      0.25
    )
    .fromTo(
      experienceIllustration,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      0.25
    )
    .fromTo(
      experienceModal,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      0.65
    )
    .fromTo(
      experienceModalText,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0.65
    );
};

// Fonction pour quitter une expérience
const leaveExperience = (experienceID) => {
  const targetPerso = document.querySelector(
    `.experience-page .personnage-container[experience-id="${experienceID}"]`
  );
  activeNavItem.style.opacity = 1;
  gsap
    .timeline()
    .to(targetPerso, { opacity: 0, y: 1500, duration: 0.5, ease: "power2.out" })
    .to(
      projectTitle,
      { transform: "translate(-50%, 0vh) scale(1)", duration: 0.5 },
      0.25
    )
    .to(activeNavItem, { opacity: 0, duration: 0.5, ease: "power2.out" }, 0)
    .set(activeNavItem, { x: 0 })
    .to(
      [experienceIllustration, experienceModal],
      { opacity: 0, duration: 0.5, ease: "power2.out" },
      0.15
    )
    .add(leaveHome.reverse(), 0.05)
    .set([experienceIllustration, experienceModal], { display: "none" });
};

// Fonction pour changer d'expérience
const changeExperience = (experienceID, previousExperienceID) => {
  const targetPerso = document.querySelector(
    `.experience-page .personnage-container[experience-id="${experienceID}"]`
  );
  const previousPerso = document.querySelector(
    `.experience-page .personnage-container[experience-id="${previousExperienceID}"]`
  );

  const targetExperienceData = experienceData.find(
    (exp) => exp.id == experienceID
  );

  if (!targetPerso || !previousPerso || !targetExperienceData) {
    console.error(
      `No elements or data found for experience ID: ${experienceID}`
    );
    return;
  }
  gsap.to(experienceModal, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      updateModalContent(targetExperienceData, false);
    },
  });

  const maskTimeline = gsap
    .timeline()
    .to(experienceIllustration, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.5,
      ease: "power2.inOut",
    })
    .set(experienceIllustration, { clipPath: "inset(0 0 100% 0)" })
    .to(experienceIllustration, {
      clipPath: "inset(0 0 0% 0)",
      duration: 0.5,
      ease: "power2.inOut",
    });

  gsap
    .timeline()
    .add(maskTimeline)
    .to(
      previousPerso,
      { opacity: 0, y: 1500, duration: 0.5, ease: "power2.out" },
      0
    )

    .fromTo(
      targetPerso,
      { opacity: 0, y: 1500 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.5"
    )
    .to(
      experienceModal,

      { opacity: 1, duration: 0.5, ease: "power2.out" },
      0.65
    )
    .fromTo(
      experienceModalText,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "<"
    );
};

// Gestion des événements de navigation
homeNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    const newExperienceID = item.getAttribute("experience-id");
    if (newExperienceID === experienceID) return;

    previousExperienceID = experienceID;
    experienceID = newExperienceID;
    updateActiveNavItem(item);

    if (!isInExperiencePage) {
      enterExperience(experienceID);
      isInExperiencePage = true;
    } else {
      changeExperience(experienceID, previousExperienceID);
    }
  });
});

// Animation pour quitter la page d'accueil
const leaveHome = gsap.timeline({ paused: true }).to(homePersonnageContainers, {
  y: 1500,
  opacity: 0,
  duration: 0.5,
  stagger: 0.05,
});

// Gestion de l'événement pour revenir à la page d'accueil
backHome.addEventListener("click", () => {
  leaveExperience(experienceID);
  isInExperiencePage = false;
  experienceID = null;
  previousExperienceID = null;
});
