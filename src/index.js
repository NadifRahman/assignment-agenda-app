import './style.css'
import { createProjectInterface } from './userinterface'
import ProjectManager from './projectmanager';
import Project from './project';
import Todo from './todo';
import { createTodoInterface } from './userinterface';
let newProjectManager = new ProjectManager();
let newProject = new Project("NO way")
let newProject2 = new Project("Hey dude");
let newProject3 = new Project("Hehe");
createProjectInterface(newProject, newProjectManager)
createProjectInterface(newProject2, newProjectManager)
createProjectInterface(newProject3, newProjectManager)

let aTodo = new Todo("Title", "Here is a crazy description", "2004/04/23", "high");
let aTodo2 = new Todo("2nd todo", "Here is a crazy description", "2004/04/23", "high");
createTodoInterface(aTodo, 0, newProjectManager);
createTodoInterface(aTodo2, 0, newProjectManager);
createTodoInterface(aTodo, 0, newProjectManager);
createTodoInterface(aTodo2, 0, newProjectManager);
createTodoInterface(aTodo, 1, newProjectManager);
createTodoInterface(aTodo, 1, newProjectManager);
createTodoInterface(aTodo, 2, newProjectManager);



