Table = require('cli-table2');
var displayT = function() {

    this.table = new Table({
        head: ['Item ID', 'Product Name', 'Department Name', 'Price ($)', 'Stock Quantity'],
    });

    this.displayInventory = function(results) {
        this.results = results;
        for (var i = 0; i <this.results.length; i++) {
            this.table.push(
                [this.results[i].id, this.results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity] );
        }
        console.log('\n' + this.table);
    }
}
module.exports = displayT;