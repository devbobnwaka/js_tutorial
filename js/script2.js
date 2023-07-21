var person1 = {
    first_name: "John",
    last_name:"Smith",
    mass:50,
    height:5.7,
    calBMI:function(){
        this.mass / (this.height * this.height)
    }
}
var person2 = {
    first_name: "John",
    last_name:"Smith",
    mass:50,
    height:5.7,
    calBMI:function(){
        this.bmi = this.mass / (this.height * this.height);        
        return this.bmi;
    }
}
console.log(person2.calBMI());


// var bills = [124, 48, 268];
// var tip = []
// var amount_paid = []
// //function expression
// var tipCalculator = function(bill){

//     if(bill < 50){
//         var tip = (20/100) * bill;
//     } else if ( bill > 50 && bill < 200) {
//         var tip = (15/100) * bill;
//     } else {
//         var tip = (10/100) * bill;
//     }
// }


// var john_team_score = 89 + 120 + 103
// var mark_team_score = 116 + 94 + 123
// var mary_team_score = 116 + 94 + 123

// var john_team_average = john_team_score / 3
// var mark_team_average = mark_team_score / 3

// if (john_team_average > mark_team_average){
//     console.log("John team won with", john_team_average);
//     console.log("mark team loss with", mark_team_average);
// } else {
//     console.log("mark team won with", mark_team_average);
//     console.log("John team loss with", john_team_average);
// }