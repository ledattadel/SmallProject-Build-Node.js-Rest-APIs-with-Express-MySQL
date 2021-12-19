const sql = require('./db.js');
// constructor 

const Tutorial = (tutorial) =>{
    this.title = tutorial.title;
    this.description = tutorial.description;
    this.published = tutorial.published;
}
