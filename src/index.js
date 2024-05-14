import './style.css'
import { createProjectInterface } from './userinterface'
import Project from './project'

let newProject = new Project("hey");
createProjectInterface(newProject, 4);
createProjectInterface(newProject, 10);