
//creates a project interface given an obj and dataindex
/**
 * Creates a 
 */
export function createProjectInterface(projectObj, dataindex) {
    let projectContainer = document.querySelector("#project-container"); 
    let project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("data-index", dataindex);
    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    console.log(projectObj.title);
    projectTitle.textContent = projectObj.title;
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute('class', 'fa-solid fa-trash project-delete');
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("todo-card-container");

    deleteIcon.addEventListener('click', () => {
        project.remove(); //remove the project from the dom 
        updateProjectIndices();         //update the indexes
    })

    projectTitle.appendChild(deleteIcon);
    project.appendChild(projectTitle);
    project.appendChild(cardContainer);
    projectContainer.appendChild(project);
}

/**
 * Update the data-index of each project dom element from 0 to # of projects - 1
 */
function updateProjectIndices() {
    let i = 0;
    let projectList = document.querySelectorAll(".project");
    projectList.forEach((project) => {
        project.setAttribute("data-index", i);
        i++;
    })
}