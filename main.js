const coffeeShop = {
  money:100,
  beans: 40,

  drinkRequirements: {
    latte: {beanRequirement:10, price:5} ,
    americano: {beanRequirement:5, price:2},
    doubleShot:{beanRequirement:15, price:7},
    frenchPress: {beanRequirement:12, price:6}
  },
  
  
  buyBeans: function(numBeans){
    this.money-=numBeans
    this.beans+=numBeans
  },
  buyDrink:function(drinkType){
   this.money+=this.drinkRequirements[drinkType].price
  },
  makeDrink: function (drinkType) {
      if (!this.drinkRequirements[drinkType]){
        alert (`Sorry, we do not make ${drinkType}`)
      }
      else if (this.beans >= this.drinkRequirements[drinkType].beanRequirement){
        this.beans-=this.drinkRequirements[drinkType].beanRequirement
        this.buyDrink(drinkType)
        alert (`Here is your ${drinkType} we are left with ${this.beans} amount of beans current money are ${this.money}`)
      }
      else alert ("Sorry we are out of beans")
  }
    // TODO: Finish this method
} 

coffeeShop.makeDrink("americano")
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"



// EXTENSION 1
// Now give the coffeeShop a money property and the ability to buy more beans with a buyBeans method. 
// The method should take one parameter - numBeans, and should reduce the amount of money depending on numBeans. 
// You decide how much the beans cost ~

// EXTENSION 2
// This is a business! We need more money to buy more beans!

// Change the drinkRequirements object so that instead of latte: 10, it looks like this
// latte: {beanRequirement: 10, price: 5} - for each drink
// Create a buyDrink method that accepts 1 parameter: drinkType. The method should:
// Increase money depending on the price of drinkType
// Call the makeDrink method