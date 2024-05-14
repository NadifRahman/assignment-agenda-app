
/**
 * Creates a project interface given a project object and inserts into a given ProjectManager object
 * @param {a Project object} projectObj 
 * @param {projectManager} the ProjectManager object dependency
 */
export function createProjectInterface(projectObj, projectManager) {
    projectManager.addProject(projectObj); 
    createProjectOption(projectObj, projectManager.getNumberOfProjects() - 1)
    let projectContainer = document.querySelector("#project-container"); 
    let project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("data-index", projectManager.getNumberOfProjects() - 1);
    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    console.log(projectObj.title);
    projectTitle.textContent = projectObj.title;
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute('class', 'fa-solid fa-trash project-delete');
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("todo-card-container");

     deleteIcon.addEventListener('click', () => { //Delete feature
        project.remove(); //remove the project from the dom 
        projectManager.deleteProject(Number(project.getAttribute("data-index")));
        deleteProjectOption(project.getAttribute("data-index"));
        updateProjectIndices(); //update the indexes
    });

    projectTitle.appendChild(deleteIcon);
    project.appendChild(projectTitle);
    project.appendChild(cardContainer);
    projectContainer.appendChild(project);
};

/**
 * Helper function: Update the data-index of each project dom element and option element from 0 to # of projects - 1
 */
function updateProjectIndices() {
    let projectList = document.querySelectorAll(".project");
    let projectOptionList = document.querySelectorAll("option");
    for(let i = 0; i < projectList.length; i++) {
        projectList[i].setAttribute("data-index", i);
        projectOptionList[i].setAttribute("data-index", i);
    }
};
/**
 * Helper function which creates an option dom element from a project obj
 * @param {*} projectObj 
 * @param {*} projectManager 
 */
function createProjectOption(projectObj, dataindex) {
    let projectSelector = document.querySelector("#projects");
    let newOption = document.createElement("option");
    newOption.setAttribute("value", projectObj.title)
    newOption.setAttribute("data-index", dataindex);
    newOption.textContent = projectObj.title;
    projectSelector.appendChild(newOption);
};

/**
 * Helper function that deletes an option dom element given a dataindex
 * @param {} dataindex
 */
function deleteProjectOption(dataindex) {
    let optionToDelete = document.querySelector(`option[data-index="${dataindex}"]`);
    console.log(optionToDelete);
    optionToDelete.remove();
};