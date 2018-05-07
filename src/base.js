let lokijs = require("lokijs");
let cache = null

class Base {
    constructor(dirname) {
        if (!cache) {
            cache = new lokijs(dirname);
        }
    }

    getCollection(name) {
        let collection = cache.getCollection(name);
        if (!collection) {
            collection = cache.addCollection(name);
        }

        return collection;
    }

    create(collection, data) {
        let collection = this.getCollection(collection);
        collection.insertOne(data);
    }
}

module.exports = Base;