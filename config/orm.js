const connection = require('./connection');

//create an ORM to selectAll(), insertOne(), and updateOne()

const orm = {

    selectAll(table) {

        return new Promise((resolve, reject) => {
            let query = "SELECT * from ??";
            connection.query(query, [table], (err, res) => {
                if (err) reject(err);
                console.log(res);
                resolve(res);
            });
        });

    },

    insertOne(table, data) {
        //data is an object with column name/value pairs
        return new Promise((resolve, reject) => {
            let query = "INSERT INTO ?? SET ?";
            connection.query(query,
                [table, data],
                (err, res) => {
                    if (err) reject(err);
                    console.log(res);
                    resolve(res);
                });
        });
    },

    updateOne(table, setData, whereData) {
        return new Promise((resolve, reject) => {
            let query = "UPDATE ?? SET ? WHERE ?";
            connection.query(query,
                [table, setData, whereData],
                (err, res) => {
                    if (err) reject(err);
                    console.log(res);
                    resolve(res);
                });
        });
        
    }

}

////////////////////
// USAGE
////////////////////

//orm.selectAll('burgers');
//orm.insertOne('burgers', {burger_name: "Chipotle Off the Old Block Burger"});
//orm.updateOne('burgers', {devoured: true}, {id: 1});

module.exports = orm;