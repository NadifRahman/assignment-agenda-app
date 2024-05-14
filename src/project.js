export default class Project {
    title;//String 
    todoList; //array of Todo objects

    constructor(title) {
        this.title = title; //sets title of project 
        this.todoList = []; //initalize as empty array
    }

    /**
     *  Adds todo object to the instance's todoList array
     * @param {A Todo object} todoObject 
     */
    addTodo(todoObject) {
        this.todoList.push(todoObject); 
    }

    /**
     * deletes a todo object in the instance's todolist given an index
     * @param {integer number > -1 and < todoList.length} index 
     */

    deleteTodo(index) {
        this.todoList.splice(index, 1);
    }
    /**
     * returns a todo object from the instance's todolist given an index
     * @param {integer number > -1 and < todoList.length} index 
     */
    getTodo(index){
        return this.todoList[index];
    }

    getNumberOfTodos() {
        return this.todoList.length;
    }
}