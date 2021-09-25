# Static Method

1. Create an Array  with a length of 10 spots
2. Then fill it with the content of `return`
3. Within the callback function set the arguments to the `undefined` items and index
4. 
 ```js
        const range = Array.from({ length: 10}, function (item, index) {
        return index;
    });

    /* Output:
         
        Array(10) [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
        ​
            0: 0
            ​
            1: 1
            ​
            2: 2
            ​
            3: 3
            ​
            4: 4
            ​
            5: 5
            ​
            6: 6
            ​
            7: 7
            ​
            8: 8
            ​
            9: 9
            ​
            length: 10
    */
 ```


To expand on this function wrap constant `range` within a function that has parameters of start and end. 

In the the original function the array has a set length of 10. So if the user inputs a range that is less than 10 in length then it will continue the count ignoring the original end parameter. 

```js
    
    function createRange(start, end){
        const range = Array.from({ length: 10 }, function (item, index) {
            return index;
        });
        return range;
    }    


/* Output
            createRange(1, 5)
            Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
*/
```

To correct this, figure out how many slots will be needed based from the starting point and the ending point. 

```js
        function createRange(start, end){
        const range = Array.from({ length: end - start  }, function (item, index) {
            return index + start;
        });
        return range;
    }    

/* Output
            createRange(1, 5)
            Array(4) [ 1, 2, 3, 4 ]
            
            createRange(1, 10)
            Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
​
*/
```
 NOTE: `{ length: end - start + 1  }` will add the ending item to the array if you want 


    


