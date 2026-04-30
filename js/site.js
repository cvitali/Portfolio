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
            projectCards.forEach(card => {
                card.classList.remove('js-projectCard-light')
                card.classList.add('js-projectCard-dark')
            })
            contactIcons.forEach(icon => {
                icon.classList.remove('js-contactIcon-light')
                icon.classList.add('js-contactIcon-dark')
            })
            projectNames.forEach(name => {
                name.classList.remove('js-projectName-light')
                name.classList.add('js-projectName-dark')
            })
                projectTechnos.forEach(techno => {
                techno.classList.remove('js-projectTechno-light')
                techno.classList.add('js-projectTechno-dark')
            })
        } else {
            document.body.classList.remove('dark-mode')
            projectCards.forEach(card => {
                card.classList.remove('js-projectCard-dark')
                card.classList.add('js-projectCard-light')
            })
            contactIcons.forEach(icon => {
                icon.classList.remove('js-contactIcon-dark')
                icon.classList.add('js-contactIcon-light')
            })
            projectNames.forEach(name => { 
                name.classList.remove('js-projectName-dark')
                name.classList.add('js-projectName-light')      
            })
            projectTechnos.forEach(techno => {
                techno.classList.remove('js-projectTechno-dark')
                techno.classList.add('js-projectTechno-light')
             })
        }
    })
})

// Sélection de la langue
const selectLanguage = document.querySelector('.js-selectLanguage');
let currentLanguage = loadLanguage('fr'); // langue par défaut
selectLanguage.addEventListener('click', () => {
    const selectedLanguage = selectLanguage.value;
    console.log('Selected language:', selectedLanguage);
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
const projectImageContainers = document.querySelectorAll('.project__imageContainer')

projectImageContainers.forEach(container => {
    const imageHover = container.querySelector('.js-project__imageHover');
    container.addEventListener('mouseenter', () => {
        imageHover.classList.remove('js-hidden');
    });
    container.addEventListener('mouseleave', () => {
        imageHover.classList.add('js-hidden');
    });
});