import Project from "./project";
import ProjectManager from "./projectmanager";
import { createProjectInterface } from "./userinterface";
import Todo from "./todo";
import { createTodoInterface } from "./userinterface";

export default class Controller {

        constructor() {
            this.projectManager = new ProjectManager();
        }

        /**
         * Sets up the add project button
         */
        setAddProjectButtion() {
            let addProjectForm = document.querySelector(".project-form");
            let projectTitleInput = document.querySelector("#project-form-title");

            addProjectForm.addEventListener('submit', (event) => {
                event.preventDefault();
                let newProject = new Project(projectTitleInput.value);
                createProjectInterface(newProject, this.projectManager);
            })
        }
        /**
         * Sets up the add todo button 
         */
        setAddTodoButton() {
            let addTodoForm = document.querySelector(".todo-form");
            let todoTitleInput = document.querySelector("#todo-form-title");
            let todoDescInput = document.querySelector("#todo-form-description");
            let todoDateInput = document.querySelector("#todo-form-due-date");
            
            
            addTodoForm.addEventListener("submit", (e) => {
                e.preventDefault();
                let selectedCategory = document.querySelector("#projects option:checked");
                let projectIndex = Number(document.querySelector("#projects option:checked").getAttribute("data-index"));
                let todoPriorityRadioButton = document.querySelector(`input[type="radio"]:checked`);
                let newTodo = new Todo(todoTitleInput.value, todoDescInput.value, todoDateInput.value.replace(/-/g,"/"), todoPriorityRadioButton.value);
                createTodoInterface(newTodo, projectIndex, this.projectManager)
            })
        }
}


