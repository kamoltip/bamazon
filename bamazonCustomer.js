var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
	port:3306,
	host:'localhost',
	user:'root',
	password:'aair3830',
	database:'bamazon'
});

// connection.connect(function(err){
// 	if(err) throw err;
// 	console.log('connected id : ', connection.threadId,'\n');
// 	console.log('\n/////WELCOME TO BAMAZON STORE FRONT/////\n');
	
// });

//  	connection.query('SELECT * FROM products',function(err,res){
// 		if (err) throw err;
// 		for (var i = 0 ; i < res.length ; i++) {
				
// 		console.log('\nID ' + res[i].item_id + '\n' + 'Products\'name : ' + res[i].product_name + '\n' + 'Price : ' + '$'+res[i].price + '\n');
// }
// });

 	var questions = [
 	{
 		type:'input',
 		name:'id',
		message: '\nwhich Product\'s ID would you like to order?'
 	},
 	{
 		type: 'input',
 		name: 'product',
		message: 'How many order would you like to place?'
 	}

];

var collection;
var showProduct = function(){
	connection.query('SELECT * FROM products',function(err,res){
		if(err) throw err;

		collection = res;
		res.map(function(el){
			console.log('\nItem ID: '+ el.item_id + ' || ProductName: ' + el.product_name + ' || Price: ' + '$' + el.price) + '\n';
		});

		// for (var i = 0 ; i < res.length ; i++) {
				
		// console.log('\nID ' + res[i].item_id + '\n' + 'Products\'name : ' + res[i].product_name + '\n' + 'Price : ' + '$'+res[i].price + '\n');
		// }
	});
};
showProduct();

var updateInventory = function(quantity,id){
	connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?',[quantity,id], function(err,res){
		if(err) throw err;
		// console.log(res);
		// return updateInventory.sql;
	});
	
};
// updateInventory();

setTimeout(function(){

	inquirer.prompt(questions)
	.then(function(res){

		var msg = {};
		collection.map(function(val){
			

		if (Number(res.id) === val.item_id){

			if(Number(res.product) > val.stock_quantity){
			msg.result = 'Sorry, Insufficient quantity';
			// return 'Insufficient quantity';
		}
		else{
			
			msg.price = val.price * Number(res.product); 
			msg.inventory = val.stock_quantity - Number(res.product);
			updateInventory(msg.inventory,res.id);
			console.log('\nYour order has successfully placed,\nThanks for your business!\n');
		}

	}
	});
		return msg;
	}).then(function(res){
		console.log(res);
	
		connection.end();
	
	}).catch(function(err){
		console.log(err);

		connection.end();
	});
		
}, 1000);










// function start(){
// 	var start = connection.query('SELECT * FROM products',function(err,res){
// 		if (err) throw err;
// 		for (var i = 0 ; i < res.length ; i++) {
				
// 		console.log('\nID ' + res[i].item_id + '\n' + 'Products\'name : ' + res[i].product_name + '\n' + 'Price : ' + '$'+res[i].price + '\n');
// }
// });
// 		console.log(start.sql);
// }

// }
// 	inquirer.prompt
// 	([
// 		{
// 			name:'productChoice',
// 			type:'list',
// 			message: 'which Products\'s ID would you like to order?',
// 			choice: [res[i].item_id]
							
// 	}
// 			}
// 		},{
// 			name: 'orderQuantity',
// 			type: 'input',
// 			message: 'How many order would you like to place?'
// 		}
// 	]).then(function(answer){
			
// 	}
// });
// });	

