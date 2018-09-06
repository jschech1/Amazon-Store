var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // afterConnection();
    queryAllProducts();
});


function queryAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].id + " | " + res[i].product + " | " + "$" + res[i].price);
        }
        console.log("-----------------------------------");
        userChoice(res);
    });
}


function userChoice(res) {
    inquirer
        .prompt([
            {
                name: "productId",
                type: "input",
                message: "What is the ID of the product you would like to purchase?"
            },
            {
                name: "numPurchase",
                type: "input",
                message: "How many units of this product would you like to purchase?"
            }
        ])
        .then(function(answer){
            var chosenItem;

            for (var i = 0; i < res.length; i++) {
                if (res[i].id == answer.productId) {
                  chosenItem = res[i];
                }
              }

              if (chosenItem.numLeft >= answer.numPurchase){
                  var currentStock = chosenItem.numLeft - answer.numPurchase;
                  connection.query("UPDATE products SET ? WHERE ?",
                [
                    {
                        numLeft: currentStock
                    },
                    {
                        id: chosenItem.id
                    }
                ],
                function(error){
                    if (error)
                    throw err;
                    console.log("Your item has been purchased!!!")
                }
            )
              } else {
                  console.log("We do not have enough units at the moment to fulfill your purchase order. We apologize for the inconveince.")
              }
        })
}












