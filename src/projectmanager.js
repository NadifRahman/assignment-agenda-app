export default class ProjectManager {

    projectList; //array that contains only project objects

    constructor() {
        this.projectList = []; //instantiate an empty array
    }
    /**
     * 
     * @param {an instance of project} project 
     */
    addProject(project) {
        this.projectList.push(project);
    }
    /**
     * deletes a project given an index
     * @param {integer number > -1 and < projectList.length} index 
     */
    deleteProject(index) {
        this.projectList.splice(index, 1);
    }
    /**
     *  returns a project object given an index
     * @param {integer number > -1 and < projectList.length} index 
     * @returns 
     */
    getProject(index) {
        return this.projectList[index];
    }
}