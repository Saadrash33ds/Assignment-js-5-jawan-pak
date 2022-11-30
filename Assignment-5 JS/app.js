// ▬▬▬▬▬▬▬▬▬ CHAPTER NO: 31-34 ▬▬▬▬▬▬▬▬▬▬▬▬▬//

// Task  : 1.
// document.write(Date())


// Task  : 2.
// var months=["January" , "February" , "March" , "April", "May","June", "July", "August", "September", "October","November", "December"]
// var month=new Date()
// month=month.getMonth()
// month_word=months[month]
// alert("Current month is: "+month_word)


// Task  : 3.
// var day=Date()
// var day=day.slice(0,3)
// alert("Today is "+day)


// Task  : 4.
// var day=new Date()
// day= day.getDay()
// if(day==0 || day==6)
// {
// document.write("It's Fun Day ")    
// }
// else{
// document.write("Today is Not Sat or Sun")    
// }


// Task  : 5.
// var date= new  Date()
// date=date.getDate()
// if(date < 16){
// document.write("First fifteen days of the month "+date)
// }
// else{
// document.write("Last days of the month "+date)
// }


// Task  : 6.
// var date=new Date()
// document.write("Current Datte: "+date)
// document.write("<br>Elapsed milliseconds since January 1, 1970 :  "+date.getTime())
// document.write("<br>Elapsed minutes since January 1,1970 :  "+date.getTime() / (1000*60))


// Task  : 7.
// var date=new Date()
// hour=date.getHours()
// if(hour>0  &&  hour<=12){
// document.write("Its AM ")
// }
// else{
// document.write("Its PM ")
// }


// Task  : 8.
// var date=new Date("Dec 31, 2020")
// document.write("Later date: "+ date)


// Task  : 9.
// var start=new Date("June 18, 2015")
// start=start.getTime()
// var end=new Date()
// end=end.getTime()
// var diff=end-start
// document.write( Math.floor( diff/(1000*60*60*24) ) +" days have passed since 1st Ramadan, 2015")


// Task  : 10.
// var start=new Date("Jan 1, 2015")
// start=start.getTime()
// var end=new Date("Dec 5, 2015")
// end_ref_date=end.getTime()
// var diff=end_ref_date-start
// document.write("On reference date "+ end +", "+ Math.floor( diff/1000 ) +" seconds had passed since beginning of 2015")


// Task  :11.
// var date=new Date()
// document.write("Current date: "+ date)
// var get_hour=date.getHours()
// date.setHours(get_hour-10)
// document.write("<br>One hour ago, it was: " +date)


// Task  : 12.
// var date=new Date()
// document.write("Current date: "+ date)
// var year=date.getFullYear()
// date.setFullYear(year-100)
// document.write("<br>100 years back, it was: " +date)



// Task  : 13.
// var age=prompt("Enter Your Age")
// document.write("Your age is: "+ age)
// var date=new Date()
// var year=date.getFullYear()
// document.write("<br>Your birth year is: " +(year-age))


// Task  : 14.
// document.write(" <h1> K-Electric Bill </h1>  ")
// document.write("Customer Name: <b> ABC Customer </b>")
// document.write("<br> Month: <b> February </b>")
// var units = 410
// var charges = 16
// var surcharges = 350
// document.write(`<br>  Number of units: <b>  ${units} </b> `)
// document.write(`<br>  Charges per unit: <b>  ${charges} </b> `)
// document.write(`<br><br>  Net Amount Payable (within Due Date): <b>  ${(charges * units).toFixed(2)} </b> `)
// document.write(`<br> Late Payment Surcharge: <b>  ${surcharges} </b> `)
// document.write(`<br> Gross Amount Payable (after Due Date): <b>  ${((charges * units) + surcharges).toFixed(2)} </b>`)







// ▬▬▬▬▬▬▬ CHAPTER NO: 35-38 ▬▬▬▬▬▬▬//

// Task  : 1.
// function dateTime(){
// document.write(Date())
// }
// dateTime()


// Task  : 2.
// function greets(){
// var first_name=prompt("Enter Your First Name")
// var last_name=prompt("Enter Your Last Name")
// alert("Hello! "+first_name+" "+last_name)
// }
// greets()


// Task  : 3.
// function add(){
// var num1=Number(prompt("Enter First Number"))
// var num2=Number(prompt("Enter Second Number"))
// alert(num1+num2)
// }
// add()


// Task  : 4. 
// function calculator(num1,num2,operator) {
//     if (operator == "+") {
//         alert(num1 + num2)
//     }
//     else if (operator == "-") {
//         alert(num1 - num2)
//     }
//     else if (operator == "*") {
//         alert(num1 * num2)
//     }
//     else if (operator == "/") {
//         alert(num1 / num2)
//     }
// }
// calculator(4,2,"+")


// Task  : 5.
// function square(arg){
//     document.write("Square of "+arg+" is "+arg**2)
// }
// square(5)


// Task  : 6.
// function factorial(num) {
//     var flag = 1
//     for (var i = 1; i <= num; i++) {
//         flag = flag * i
//     }
//     return flag
// }
// num = 5
// document.write("Factorial of " + num + " is " + factorial(num))


// Task  : 7.
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>")
//     }
// }
// counting(1, 100)


// Task  : 8.
// function calculateHypotenuse(base, per) {
//   var hypotenuse= calculateSquare(base) + calculateSquare(per) 
//    hypotenuse=Math.sqrt(hypotenuse)
//    return hypotenuse.toFixed(2)

//    function calculateSquare(number) {
//     return number**2 }
// }
// var base = Number(prompt("Enter Base Value Of Triangle: "))
// var per  = Number(prompt("Enter Perpendicular Value Of Triangle: "))
// document.write("Base value: " + base)
// document.write("<br> Perpendicular value: " + per)
// document.write("<br> Hypotenuse is: "+ calculateHypotenuse(base, per))


// Task  : 9.
// function area(width, height){
//    var Area=width*height
//     document.write("Width: "+ width)
//     document.write("<br> Height: "+ height)
//     document.write("<br> Area: "+Area)
// }
// var height=10
// area(10,height)


// Task  : 10.
// function palindrome(p) {
//     for (var a=0; a < p.length; a+=1) {
//         if (p[a] !==p[p.length - 1 - a]) {
//             document.write("No")
//             break }
//         else {
//             document.write("Yes")
//             break }
//     }
// }
// palindrome("madam")


// Task  :11.
// function titlecase(arg) {
//     var words = arg.split(" ")
//     var title = ""
//     for (var key of words) {
//         var start = key[0].toUpperCase()
//         var end = key.slice(1)
//         title = title + start + end + " "
//     }
//     document.write("EXAMPLE STRING: " +arg)
//     document.write("<br>EXPECTED OUTPUT : "+title)
// }
// titlecase("the quick brown fox")


// Task  : 12.
// function longestword(arg) {
//     var words = arg.split(" ")
//     var word = words[0]
//     for (var key of words) {
//         if (key.length > word.length) {
//             word = key }
//     }
//     document.write("EXAMPLE STRING: " +arg)
//     document.write("<br>EXPECTED OUTPUT: " + word)
// }
// longestword("Web Development Course")


// Task  : 13.
// function stringoccurance(arg1, arg2) {
//     var flag = 0
//     arg1 = arg1.toLowerCase()
//     arg2 = arg2.toLowerCase()
//     var occure = arg1.split("")
//     for (var key of occure) {
//         if (arg2 === key) {
//             flag++  }
//     }
//     document.write("EXAMPLE STRING: " + arg1)
//     document.write("<br>OUTPUT: " + arg2 + " occurrences: "+ flag +" time")
// }
// stringoccurance("JSResourceS.com", "o")


// Task  : 14.
// document.write("<h1>The Geometrizer</h1>")
// function calcCircumference(radius) {
//     var circumference =Math.PI * radius * 2
//     document.write("Circumference of circle is: "+ circumference.toFixed(2) )
// }
// function calcArea(radius) {
//     var area =Math.PI * (radius**2)
//     document.write("<br> Area of circle is: "+ area.toFixed(2) )
// }
// var radius = Number(prompt("Enter The Radius of Circle"))
// calcCircumference(radius)
// calcArea(radius)