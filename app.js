// CHAPTER 9-11

// Q1
// var city=prompt("Enter city name")
// if(city=="Karachi"){
//     alert("Welcome to the city of lights")
// }

// Q2
// var gender=prompt("Enter you gender(Male/Female): ")
// if (gender=="Male"){
//     alert("Good Morning Sir!")
// }
// else{
//     alert("Good Morning Ma'am!")
// }

// Q3
// var color=prompt("Enter the color of traffic signal: ")
// if(color==red){
//     alert("Must Stop!")
// }
// else if(color==yellow){
//     alert("Ready to Move!")
// }
// else{
//     alert("Move Now!")
// }

// Q4

// var fuel=prompt("Enter the remaning fuel in car (in litres): ")
// if (fuel<0.25){
//     alert("Please refill the fuel in yur car")
// }

// Q5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");}
//   YES ALERT STATEMENT WORKS

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");}
// // NO ALERT STATEMENT DONOT WORK

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//   YES ALERT STATEMENT WORKS


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//   YES ALERT STATEMENT WORKS



// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//   YES ALERT STATEMENT WORKS



// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }  
//   YES ALERT STATEMENT WORKS      

// Q6
// document.write("MarkSheet: <br>" )
// var English=+prompt("Enter english marks: ")
// var Maths=+prompt("Enter math marks: ")
// var Urdu=+prompt("Enter urdu marks: ")
// var marks=English+Urdu+Maths
// var total=300
// var percentage=(marks/300)*100
// document.write("Total =", total,"<br>","Marks Obtained= ",marks,"<br>","Percentage=",percentage,"<br>" )

// if(percentage>=80){
//     document.write("Grade:A-one <br> Remarks:Excellent")
// }
// else if(percentage>=70&&percentage<=80){
//     document.write("Grade:A <br> Remarks:Good")
// }
// else if(percentage>=60&&percentage<=70){
//     document.write("Grade:B <br> Remarks:You need to improve")
// }
// else if(percentage<60){
//     document.write("Grade:Fail <br> Remarks:Sorry")
// }

// Q7
// var num=5
// var guess=prompt("Guess a number 0-10")
// if(num==guess){
//     document.write("Bingo! Correct answer.")
// }
// else if(num==++guess){
//     document.write("Close enough to the coreect answer")
// }

// Q8
// var num=prompt("enter a number")
// if(num%3==0){
//     document.write("Number is divisible by 3")
// }
// else{
//     document.write("Not divisible")
// }

// Q9
// var num=prompt("Enter a number:")
// if (num%2==0){
//     document.write("It is an even number")
// }
// else{
//     document.write("It is an odd number")
// }

// Q10
// var temp=prompt("Enter temperature: ")
// if(temp>40){
//     document.write("Its hot outside")
// }
// else if(temp>30&&temp<40){
//     document.write("The weather today is normal")
// }
// else if(temp>20&&temp<30){
//     document.write("Today’s Weather is cool.")
// }
// else if(temp>10&&temp<20){
//     document.write("OMG! Today’s weather is so Cool.")
// }

// Q11
// var num1=+prompt("Enter first number:")
// var num2=+prompt("Enter second number:")
// var opr=prompt("Enter operator(+ - * / %)")
// if(opr=="+"){
//     document.write(num1+num2)
// }
// else if(opr=="-"){
//     document.write(num1-num2)
// }
// else if(opr=="*"){
//     document.write(num1*num2)
// }
// else if(opr=="/"){
//     document.write(num1/num2)
// }
// if(opr=="%"){
//     document.write(num1%num2)
// }

// CHAPTER 10
// Q1
var city = "Karachi";
 if (city == "Karachi") 
 { console.log("The City OF Lights")}

//  Q2
if (x === y) {
    var z=alert("z =")
    console.log("a =",z)
}

// Q3
var Zipcode=prompt("enter zipcode")
if (Zipcode=="10010"){
    alert("Karachi")
}
else{
    alert("Please write correct city")
}

// CHAPTER 11
// Q1
if(x!=y){}

// Q2
var a=4
var b=6
if(a>=b){
    alert("a is greater or equal to b")
}

// Q3
var a=5
var b=4
if(a!=b){
    var b=5
    console.log(b)
}

// Q4
var a=6
var b=7
if(a!=b){
    alert("congratulations ")
}

// Q5
var name1=prompt("enter your first name ")
var name2="aliza"
if(name1!=name2){
    alert("No match")
}

// CHAPTER 12
// Q1
var a=4
var b=6
if(a>=b){
    alert("a is greater or equal to b")
}
else{
    alert("it is not")
}

// Q2
 document.write("MarkSheet: <br>" )
 var English=+prompt("Enter english marks: ")
 var Maths=+prompt("Enter math marks: ")
 var Urdu=+prompt("Enter urdu marks: ")
 var marks=English+Urdu+Maths
 var total=300
 var percentage=(marks/300)*100
 document.write("Total =", total,"<br>","Marks Obtained= ",marks,"<br>","Percentage=",percentage,"<br>" )

 if(percentage>=80){
     document.write("Grade:A-one <br> Remarks:Excellent")
 }
 else if(percentage>=70&&percentage<=80){
     document.write("Grade:A <br> Remarks:Good")
 }
else if(percentage>=60&&percentage<=70){
      document.write("Grade:B <br> Remarks:You need to improve")
 }

//  Q3
if (a === 10) {
    alert("a is 10");
    }
else{
    alert("value of a is 10")
}  

// Q4
var city=prompt("enter city")
if(city=="Karachi"){
    alert("Its karachi")
}
else if(city=="Lahore"){
    alert("Its Lahore")
}
else{
    alert("no match")
}

// CHAPTER 13
// Q1
if(a==b&&c==d){}

// Q2
if(a==b||c!=d){}

// Q3
if(Name=="hamza"||name=="arsalan"){}
if(age<60){}

// Q4
var first="aliza"
var last="khan"
var name1=prompt("enter your first name ")
var name2=prompt("enter your last name ")
if(first==name1&&last==name2){
    alert("perfect")
}

// CHAPTER 14
// Q2
if (a === 1) { if (c ==="Max") {
    alert("OK");
    }
    }

// Q3
if(a==="1"&&c==="Max"){} 

// Q4
var a=1
var b=1
if(a==b){
   if (a<=b){
    alert("done")
   }
}

// CHAPTER 12-13
// Q2
var a=prompt("enter value")
var b=prompt("enter value")
if(a>b){
    alert("a is greater than b")
}
else if(a<b){
    alert("a is less than b")
}
else{
    alert("a is equal to b")
}

// Q3
var num=prompt("enter a number")
if(num>0){
    alert("positive number")
}
else if(num<0){
    alert("negative number")
}
else{
    alert("number equal to zero")
}

// Q4
var correct="alize135"
var password=prompt("enter your password")
if(password==""){
    alert("enter you password") 

    if (password==correct){
    alert("Password you enter is correct")
}}
else{
    alert("Incorrect password")
}

// Q5
var greeting;
var hour = 13;
if (hour < 18) {
greeting == "Good day";}
else{
greeting == "Good evening";
}

// Q6
var time=prompt("enter time in 24 hour clock")
time=time-12
alert("time is", time,"pm")








