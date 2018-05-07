let Base = require("./base");

class Queue extends Base {
    constructor(dirname) {
        super(dirname);
        this.backlogs = [];
    }

    enqueue(message) {

    }

    dequeue() {

    }
}

module.exports = Queue;