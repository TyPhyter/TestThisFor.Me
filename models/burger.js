const orm = require('../config/orm');

//functions that call on the ORM with burger specific input

const BURG = {

    allBurgers() {
        return orm.selectAll('burgers');
    },

    addBurger(name) {
        return orm.insertOne('burgers', { burger_name: name });
    },

    eatBurger(name) {
        return orm.updateOne('burgers', { devoured: true }, { burger_name: name });
    }
};

////////////////////
// USAGE
////////////////////
//BURG.allBurgers();


module.exports = BURG;