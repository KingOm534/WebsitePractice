 //following line mainly used for printing statements
//  console.log('mashaallah!!');
 
//  //Object
//  let rectangle={
//     length: 1,
//     breadth: 2,
// //method (Function in a object)   
//     draw:   function() {
//         console.log('draw');
//     }
//  }; 

// //  Factory function
// function createRectangle() {

//     return rectangle ={
//         length: 2,
//         breadth: 4,

//         draw() {
//             console.log('Creating reactangle');
//         }
//     };

// }



// //Factory call
// let rectObj1= createRectangle();

// //called
// rectObj1.length;
// rectObj1.breadth;
// rectObj1.draw();

//Constructor Function
// function Rectangles(){
//     this.length=2;
//     this.breadth=3;
//     this.draw= function(){
//         console.log('Drawing');
//     }
// }
// let rectObj2 = new Rectangles();

// rectObj2.color ='RED';
// console.log(rectObj2);

// delete rectObj2.color;
// console.log(rectObj2);

// let Rectangle1  = new Function('len', 'breadth',
//         ` this.length = len;
//           this.breadth = breadth;
//           this.draw= function() {
//             console.log('Drawing');
//           }`);
        
// //Object creation using Rectangle1

// let rec= new Rectangle1(2,4);

// console.log(rec);

//Object clonning
    //iteration
// let src={a:12,b:11,c:45};

// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);

    //assign
// let dest=Object.assign({},src);

// console.log(dest);

    //spread
// let dest = {...src};

// console.log(dest);

//Arrays

// let num=[2,3,6,8];
// console.log(num);

// Searching

    //#1
// console.log (num) ;
// console.log (num.indexOf(8));

    //we want to check if a number exist in an array

// 

// let array=[2,1,4,5,6,7];

//for-of
// for(let value of array){
//     console.log(value);
// }

//for-each
// array.forEach(function(num){
//     console.log(num);
// });

//using arrow function
// array.forEach(num => console.log(num));

//Functions
function run(){
    console.log("Running");
}

//Function call
run();
