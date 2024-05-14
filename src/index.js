import './style.css'
import { createProjectInterface } from './userinterface'
import ProjectManager from './projectmanager';
import Project from './project';

let newProjectManager = new ProjectManager();
let newProject = new Project("NO way")
createProjectInterface(newProject, newProjectManager)
createProjectInterface(newProject, newProjectManager)
createProjectInterface(newProject, newProjectManager)
createProjectInterface(newProject, newProjectManager)
createProjectInterface(newProject, newProjectManager)
console.log(newProjectManager);