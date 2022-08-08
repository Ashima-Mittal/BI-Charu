(function () { // anonymous self-invoking function
    console.log("Hello!!");  // I will invoke myself
  })();


//fuction can be stored in a variable
  const y = function (a, b) {return a * b};

  let z= y(3,4)
  

  //fuction can be stored in a variable,anaonymous

  
 /* var x = function (a, b) {
    return a * b
  };
console.log(x(3,4));

  */


/*var x,y;


function setup(){
   
   console.log(buy(2,3))
 console.log(buy(5,5)) 

}


  function buy(x,y)
  {

   return x*y;
  }

*/
  //

  
  (
    function () { 
    // anonymous self-invoking function
    console.log("Hello!!");  // I will invoke myself
  })
  ();


  //Arrow Function

  // ES5
var x = function(x, y) {
    return x * y;
  }
  
  // ES6
  const x = (x, y) => x * y;



  const hello = () => {			
    return "Hello World!";						  	  
  }											
  