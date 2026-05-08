//Fonctionnalité d'affichage dynamique du contenu de la fiche projet
const showDataInModal = (img, title, subtitle, stack, taskList, objective, infos) => {
    const modalProjectImage = document.querySelector('.js-modalProjectImage')
    const modalProjectTitle = document.querySelector('.js-modalProjectTitle')
    const modalProjectSubtitle = document.querySelector('.js-modalProjectSubtitle')
    const modalProjectStackList = document.querySelector('.js-modalProjectStack')
    const modalProjectTaskList = document.querySelector('.js-modalProjectTask')
    const modalProjectObjective = document.querySelector('.js-modalProjectObjective')
    const modalProjectInfos = document.querySelector('.js-modalProjectInfos')

    modalProjectImage.src = img
    modalProjectTitle.textContent = title
    modalProjectSubtitle.textContent = subtitle
    modalProjectStackList.innerHTML = ''  // Réinitialisation de la liste avant d'ajouter les nouvelles technologies 
    modalProjectTaskList.innerHTML = '' 
    stack.forEach(techno => {
        const listItem = document.createElement('li')
        listItem.textContent = techno
        modalProjectStackList.appendChild(listItem)
    })
    taskList.forEach(task => {
        const listItem = document.createElement('li')
        listItem.textContent = task
        modalProjectTaskList.appendChild(listItem)
    })
    modalProjectObjective.textContent = objective
    modalProjectInfos.textContent = infos

}