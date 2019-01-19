// furst rule :everything is binded to window agar kuch na diya ho to defualt lelo
//default binding
function hi(){
    this.name = 'ketan';
    var a ='aa';
 
    add();
    // // prints window because context is window
    // variables defined here with this  would have global scipe and any func can access it ,because this refers to window and this.name binds it to window
}
function add(){
    console.log(this);
}
// hi();
// console.log(name);
// console.log(a);//no output since a local tha
// implicit binding
function hello(){
    console.log(this);
    var obj = {
        name : 'mango',
        fruit: function(){
            console.log(this);
        }
    }
    obj.fruit();
    // agar function call ke left kuch bhi ho to vo uska scope hai
}
// hello();
//Explicit binding
function hello(){
    console.log(this);
}
var obj1 = {
    name : 'mango',
    fruit : function(){
        console.log(this.name);
    }
}
var obj2 = {
    name : 'apple',
    fruit : function(){
        console.log(this.name);
    }
}
function getFunction(a,b){
    console.log(a,b);
    console.log(this.name)
}
getFunction();//defined this.name as ketan above
getFunction.call(obj1);
// basically getFunctio obj1 class ka variable ban jayega
getFunction.call(obj2);
// to pass parameters:
getFunction.apply(obj1,['apple','lichi']);
//constructive binding
function greet(){
    this.name ='shyam'
    this.category = 'player';
}
var player1 = new greet();
console.log(player1);
function greet1(name,category){
   /* var obj  = Object.create({});
    //object create hoga blank
     this = obj;
    //object os assigned to 
    //above 2 steps are by default but age ke do step of assigning value nahin honge to onjecg ko asign nahin honge
    // in default constructor following two steps are absent which we add with custom
    */
    this.name = name;
    this.category = category;
    /*return this;*/
    //return this is also default so agar upar ke do steps mein values nahin denge return ki to vo by default blank jayega
}
var p1 = new greet1('k','a');
console.log(p1);
// basically yaha functions are like class because yaha class keyword was introduced later
// function ka prototype of the function
function fun1(){
    
}