import projectDetails from './projectDetails.js'
import projectDetailsEn from './projectDetailsEn.js'

// Sélection du Dark Mode
const radiobuttons = document.querySelectorAll('.js-dark-mode');
const projectCards = document.querySelectorAll('.js-projectCard')
const contactIcons = document.querySelectorAll('.js-svgContact')
const projectNames = document.querySelectorAll('.js-projectName')
const projectTechnos = document.querySelectorAll('.js-projectTechno')

radiobuttons.forEach(radiobutton => {
    radiobutton.addEventListener('change', () => {
        if (radiobutton.id === 'darkMode__on') {
            document.body.classList.add('dark-mode')
           
        } else {
            document.body.classList.remove('dark-mode')
        }
    })
})

// Sélection de la langue
const selectLanguage = document.querySelector('.js-selectLanguage');
let selectedLanguage = loadLanguage('fr'); // langue par défaut
selectLanguage.addEventListener('click', () => {
    selectedLanguage = selectLanguage.value;
    loadLanguage(selectedLanguage);
})

// fonction affichant le texte dans la langue choisie
async function loadLanguage(lang) {
    const response = await fetch(`../i18n/${lang}.json`);
    const translations = await response.json(); 
    document.querySelectorAll('[data-i18]').forEach(element => {
        const key = element.getAttribute('data-i18');   
        if (translations[key]) {
            element.innerHTML = translations[key]; 
        }
    });
}

//affichage du menu burger
const burger = document.querySelector('.js-burger')
burger.addEventListener('click', () => {
    const navItems = document.querySelectorAll('.js-navItems')
    navItems.forEach(item => {
        item.classList.toggle('js-navItems-hidden')
    })
})

// Affichage du hover sur les projets
const projectImageContainers = document.querySelectorAll('.js-projectCard')
const canHover = window.matchMedia('(hover: hover)').matches;
const projectInfos = document.querySelectorAll('.project__linkInfos')

projectImageContainers.forEach(container => {
    const imageHover = container.querySelector('.js-project__imageHover');
    container.addEventListener('mouseenter', () => {
        imageHover.classList.remove('js-hidden')
    });
    container.addEventListener('mouseleave', () => {
        imageHover.classList.add('js-hidden')
    });
})

// Ouverture de la fiche projet sur grand écran
const projectLinks = document.querySelectorAll('.js-project__linkFile')
const projectDialog = document.getElementById('js-modalProject')

projectLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        // Récupération de l'index du projet à afficher à partir du lien cliqué
        const projectIndex = Array.from(projectLinks).indexOf(link)
        //récupération du texte en fonction de la langue sélectionnée
        let projectData = projectDetails[projectIndex]
        if (selectLanguage.value === 'en') {
            projectData = projectDetailsEn[projectIndex]
        }
        // Affichage dynamique du contenu de la fiche projet en fonction de l'index
        
        showDataInModal(projectData.image, projectData.title, projectData.description, projectData.stack, projectData.technologies, projectData.objective, projectData.info)
        console.log(projectData)
        projectDialog.showModal()
    })
})

//Ouverture de la fiche projet sur petit écran
const projectsLinksSmall = document.querySelectorAll('.project__linkInfos')

projectsLinksSmall.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        projectDialog.showModal()
    })
})

// Fermeture de la fiche projet
const closeModalBtn = document.querySelectorAll('.js-closeModal')
closeModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('close modal')
        projectDialog.close()
    })
})

//Ouverture du formulaire de contact
const contactButtons = document.querySelectorAll('.js-contactBtn')
const contactDialog = document.getElementById('js-modalContact')
contactButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        contactDialog.showModal()
    })  
})

// Fermeture du formulaire de contact
const closeContactBtn = document.querySelectorAll('.js-closeContact')
closeContactBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        contactDialog.close()
    })
})




