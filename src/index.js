import './style.css'
import { createProjectInterface } from './userinterface'
import ProjectManager from './projectmanager';
import Project from './project';
import Todo from './todo';
import { createTodoInterface } from './userinterface';
import Controller from './controller';

let aController = new Controller();
aController.setAddProjectButtion();
aController.setAddTodoButton();