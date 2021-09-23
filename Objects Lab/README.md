Scope: Refers to the range of a variable

1. Global Scope- Has access to the variable anywhere in the document 
2. Functional Scope- Has acces to the variable only within the 
		     function it resides in.
3. Block Scope- {} think of the curly brackets as gates and variables
		can only be accessed withing thoses gates.


Hoisting: 
Can I call a function before it exist on the document?

Answer:
 JS automatically hoists function access to the top of the doc
	so you can access the function anywhere on the page but it is 
	best practice to arrange functions towards the top.

Can I call a variable, yes but the value will not be included 
	the variable name will be able to be accessed but will update 
	the value late down the stylesheet.

Closure:
	Usually the rule for scope is that when the contents inside a
	function is run and returned it can no longer be accessed.

	Closure allows a function to be nested within another function
	and the parent function can be called within the child function.

	I can also contain a function within a variable even after it 
	has been returnd and call it from memmory after its use.	
	
	const innerFn = outer();
	innerFn();

 	Closure are the ability for a child function can call variables
	of a higher level scope even after the function has be ran/closed


Reference vs Value:

    When a string element references another elements value 
    it will take on that value. If the other element that was 
    referenced value changes only that variable will change. 

    When an object is copied and shares the same properties it 
    is still considered its own object and not a copy of the other. 
    for example  
        ```js
                    const person1 = {
                    first: 'ina nis',
                    last: 'nino mae',
                    }
                    const person2 = {
                    first: 'ina nis',
                    last: 'nino mae',
                    }
        ```
        The two object share similar properties but this is just a coincidence
        if we were to check with the values are equall the output would be `false`

        If I were to `reference` and object to another object it will take on the other 
        object property values but itself if not a copy of the reference. If the referenced
        objects values were to change then the other object's value will change as well.

        ```js
                    const person3 = person1;
                    person3.first = 'larry';
        
        ```

        1. I reference person3 to person1 so now person3 shares the same values
        2. Change person3 property 'first' value to string 'larry'
        3. BOTH person3 and person1 property 'first' value is now 'larry'


        How do you copy and Object?

        ```js
            const person3 = { ...person1 };
        
        ```
    This will create a 'shallow' copy of the selected object meaning that if the    
    property values of the object changes only the base properties will be copied.
    If I were to change the function properties within the object BOTH objects will 
    see the change.

    There are ways to create a 'deep clone'. (LoDash Libary)

    
    How do I combine two objects together?

    Spread Operators : ...objectName
        ```js 
                        const meatInventory = {
                            bacon: 2,
                            sausage: 3,
                            oyster: 10,
                        };

                        const veggieInventory = {
                            lettuce: 5,
                            tomatoes: 3,
                            oyster: 20,
                        };

                        const duengonChest = {
                            potion: 5,
                            hipotion: 3,
                            ether: 5,
                            hiether: 3,
                            phoenixdown: 3,
                        }

                        const Inventory = {
                            ...meatInventory, 
                            ...veggieInventory,
                            ...duengonChest,
                            teleportscrolls: 100,
                        };
            
        ```
        Output: 'Inventory' object will combine other object that include the spread Operators
                (...), as well as update its own properties.
                
                *Noitce that some properties have the same name but different values. They will
                    NOT combine together rathher the value further down the document will be the 
                    update.

**ALERT:** If you update the values of an object within a function, you are also changing the value of the object if it is reference anywhere outside the function as well. 

##Maps
