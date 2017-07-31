# bamazon

# OVERVIEW
***

	The Bamazon Customer Portal is an Amazon-like storefront using MySQL & Node.JS allowing users to preview the exist products and will be prompted to purchase the available products.The app then will take in orders from customers and deplete stock from the store's inventory. The system  will then evaluate the total amount of their purchase and update the current product's quantity available in stock after purchasing in real time.


## USAGE
***
##### Firstly, run this command '<node bamazonCustomer.js>'


![Run Node Command](/images/nodeCommand.png)

##### It will show all the exist product in the system then prompt the users to choose the product in their interest.

![Preview Products](/images/previewProducts.png)

![Preview Products](/images/prompt.png)

##### After purchasing, the system will evaluate the total price and also show the current inventory after purchase.

![Purchase](/images/purchase.png)
***

lastly, Update inventory in real titme.

### MYSQL inventory BRFORE purchase.
![sqlMark](/images/sqlMark.png)


### MYSQL inventory UPDATE after purchase.
![sqlMark](/images/sqlMark2.png)



#### Contributors:
***

##### Kamoltip Cardenas [GitHub](https://github.com/kamoltip)




#### Technologies Used:
***

* Javascript
* nodeJS
* MySQL
* npm packages:
	- [mysql](https://www.npmjs.com/package/mysql)
	- [inquirer](https://www.npmjs.com/package/inquirer)
	- [cli-table](https://www.npmjs.com/package/cli-table)



