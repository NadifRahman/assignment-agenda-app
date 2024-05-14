
/**
 * Create a project user interface and inserts into the DOM with the given data-index
 * Contains a delete button which deletes the project interface and resets all other project indices
 * @param {a Project object} projectObj 
 * @param {projectManager} the ProjectManager object dependency
 */


export function createProjectInterface(projectObj, projectManager) {
    projectManager.addProject(projectObj); 

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
        updateProjectIndices(); //update the indexes
    }) 

    projectTitle.appendChild(deleteIcon);
    project.appendChild(projectTitle);
    project.appendChild(cardContainer);
    projectContainer.appendChild(project);
}

/**
 * Helper function: Update the data-index of each project dom element from 0 to # of projects - 1
 */
function updateProjectIndices() {
    let i = 0;
    let projectList = document.querySelectorAll(".project");
    projectList.forEach((project) => {
        project.setAttribute("data-index", i);
        i++;
    })
}



