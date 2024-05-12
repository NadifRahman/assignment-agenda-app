export default class Todo {

    title;  //string
    description; //string
    dueDate; //string format date
    priority; //string, can only be high, medium, low or null

    /**
     * 
     * @param {string} title - the title of the todo object
     * @param {string} description - description of the todo object
     * @param {string} dueDate - string repersentation of a date, must be in format YYYY-MM-DD
     * @param {string} priority - string value that can only be low, medium, high 
     */
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description; 
        /*const date = new Date(); (a way to enforce YYYY-MM-DD format)
        const dateString = date.toISOString().slice(0, 10); */
        this.dueDate = dueDate; //
        this.priority = priority;
    }
    toString() {
        return `Title: ${this.title}, Description: ${this.description}, Due date: ${this.dueDate}, Priority: ${this.priority}`
    }

    //setters and getters not needed, access the variables directly

}