// var myStudents = {
// 	name:'Thành',
// 	age: 20,
// };
// var myStudent2 = {
// 	name:'Hà',
// 	age: 20,
// };
// var myStudent3 = {
// 	name:'ú',
// 	age: 20,
// };
// var myStudent4 = {
// 	name:'Hòa',
// 	age: 20,
// };
// var KindOfStudents=[myStudents, myStudent2, myStudent3, myStudent4]
// console.log(KindOfStudents[3].name);
//Tạo danh sách lớp của mình dạng array
var listClassmates = [
	{name: 'Thành', age: 20, IsAlive:true, gender:'Male'},
	{name: 'Hòa', age: 20, IsAlive:true, gender:'Male'},
	{name: 'Hảo', age: 20, IsAlive:true, gender:'Male'},
	{name: 'Trọng', age: 20, IsAlive:true, gender:'Male'},
	{name: 'Hà', age: 20, IsAlive:true, gender:'Male'},
];
console.log(listClassmates[2].name);





// ++ , --
var a=5;
var b=5;
 // var result;

// result=a%b;

++a * ++b ;
console.log(a,b);

// function
function calculateTriangleQuare(a, h){
	var calculate=a*h/2;
  console.log (calculate);
}
calculateTriangleQuare(10, 5);

//
function calculateDiscQuare(r){
	var calculateDisc=r*r*3.14;
	console.log(calculateDisc);
}
calculateDiscQuare(4);
//
// Object Methods
var myDog = {
	weight: 5,
	name: 'Đần',
	bark: function(){
		console.log(' my name is', this.name);
	},
	eat: function(bone){
		console.log(this.weight = this.weight+bone.weight);
		return this;
	}


};
var bone = {
	weight: 0.5,
	color: 'white',
};
console.log('before eating', myDog.weight);
myDog.eat(bone);
console.log('before eating', myDog.weight);

// difficult ++ --
// var i=0;
function buttonClick(){
	document.getElementById('plus').value++;
}

function buttonClick2(){
	document.getElementById('plus').value--;
}

// difficult search
var string  = document.getElementById("str").innerHTML;
var elDemo  = document.getElementById("demo"); 

function getPortions(queryString, string) {
  var results = [];
  if(queryString.length > 0){
    var rgxp = new RegExp("(\\S*)?("+ queryString +")(\\S*)?", "ig");
    string.replace(rgxp, function(match, $1, $2, $3){
      results.push( ($1||"") +"<b>"+ $2 +"</b>"+ ($3||"") );
    });
  }
  return results;
}

document.getElementById("txt1").addEventListener("input", function(){
  var result = getPortions(this.value, string);
  elDemo.innerHTML = "Found "+ result.length +" results<br>"+ result.join("<br>"); 
});


// for loop
var employees = [
	{name:'Thành', age: 20, IsAlive:true},
	{name:'Hảo', age: 20, IsAlive:true},
	{name:'Hà', age: 20, IsAlive:true},
	{name:'Trọng', age: 20, IsAlive:true},
	{name:'Hòa', age: 20, IsAlive:true},
];
for (var i = 0; i < 5; i++) {
	console.log(employees[i]);
}

// array.filter
var Numbers=[1, 2, 3, 4];
var EvenNumbers= Numbers.filter(function(number){
	return number  % 2 === 0;
	
});
console.log(EvenNumbers);