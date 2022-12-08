const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
let output = document.getElementById("outputs");
let quesTitle = document.getElementById("quesTitle");
let titles = document.getElementById("titles");

// elements
var div = document.getElementById("inputs");
var br = document.createElement("br");
var num1 = document.createElement("input");
var num2 = document.createElement("input");
var button = document.createElement("button");
var outputAns = document.createElement("p");
var error = document.createElement("p");
var label = document.createElement("label");



//setting the input's properties:
button.type = "submit";
button.id = "btn";
button.textContent = "Answer";
outputAns.id = "answer";


num1.addEventListener("focus",()=>{
  num1.classList.remove("error")
}) 

num2.addEventListener("focus",()=>{
 num2.classList.remove("error")
}) 

//---------------------------------------------Compulsory---------------------------------------------

// Question : 1
function ques1() {
  titles.innerHTML = "Question 1 (Compulsory)";
  quesTitle.innerHTML = "Read two numbers and display their sum.";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  num1.placeholder = "Enter 1st Number";
  num2.type = "number";
  num2.id = "num2";
  num2.placeholder = "Enter 2nd Number";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";
  outputAns.id = "answer";

  //adding the inputs to the div
  div.appendChild(num1);
  div.appendChild(num2);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);

  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans1 = () => {
      if(num1.value=="" || num2.value==""){
        num1.classList.add("error")
        num2.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return 
    }
    outputAns.style.color="green" 
      let answer = Number(num1.value) + Number(num2.value);
      // console.log(answer);
      // console.log(typeof answer);
      document.getElementById("answer").innerHTML =
        "Sum of " + num1.value + " and " + num2.value + " is " + answer;
    })
  );
}

// Question : 2
function ques2() {
  titles.innerHTML = "Question 2 (Compulsory)";
  quesTitle.innerHTML = "Read in two numbers and display the larger number.";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  num1.placeholder = "Enter 1st Number";
  num2.type = "number";
  num2.id = "num2";
  num2.placeholder = "Enter 2nd Number";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(num1);
  div.appendChild(num2);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);

  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans2 = () => {
      if(num1.value=="" || num2.value==""){
          num1.classList.add("error")
          num2.classList.add("error")
        document.getElementById("answer").style.color="red"
        document.getElementById("answer").innerHTML ="Please Enter At least Something";
        return 
      }
      outputAns.style.color="green"      
      if (Number(num1.value) > Number(num2.value)) {
        document.getElementById("answer").innerHTML =
          num1.value + " is greater than " + num2.value;
      } else if (Number(num2.value) > Number(num1.value)) {
        document.getElementById("answer").innerHTML =
          num2.value + " is greater than " + num1.value;
      } else if (Number(num1.value) === Number(num2.value)) {
        document.getElementById("answer").innerHTML =
          num1.value + " and " + num2.value + " both are equal";
      }
    })
  );
}

// Question : 3
function ques3() {
  titles.innerHTML = "Question 3 (Compulsory)";
  quesTitle.innerHTML =
    "Read in two numbers and display them in ascending order.";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  num1.placeholder = "Enter 1st Number";
  num2.type = "number";
  num2.id = "num2";
  num2.placeholder = "Enter 2nd Number";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(num1);
  div.appendChild(num2);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);

  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans3 = () => {
      if(num1.value=="" || num2.value==""){
        num1.classList.add("error")
        num2.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return 
    }
    outputAns.style.color="green" 
      if (Number(num1.value) > Number(num2.value)) {
        document.getElementById("answer").innerHTML =
          "Ascending Order : " + num2.value + ", " + num1.value;
      } else if (Number(num1.value) < Number(num2.value)) {
        document.getElementById("answer").innerHTML =
          "Ascending Order : " + num1.value + ", " + num2.value;
      } else if (Number(num1.value) === Number(num2.value)) {
        document.getElementById("answer").innerHTML =
          num1.value + " and " + num2.value + " both are equal";
      }
    })
  );
}

// Question : 4
function ques4() {
  titles.innerHTML = "Question 4 (Compulsory)";
  quesTitle.innerHTML = "Use a loop to display the numbers 0 through 5";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  label.textContent = "Enter 1 to 5 Number : ";
  num1.placeholder = "Enter Number";
  num1.max = "5";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  div.appendChild(error);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);

  const intervalq4 = setInterval(() => {
    let n = num1.value;
    if (!Number.isInteger(Number(n))) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    } else if (n <= 5) {
      error.textContent = "";
    } else if (n <= 0 || n > 5) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    }
  }, 1000);

  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans4 = () => {
      if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
      let result = "";
      for (let i = 0; i <= Number(num1.value); i++) {
        if (i == Number(num1.value)) {
          result = result + "<span> " + i + ". " + " </span>";
        } else {
          result = result + "<span> " + i + ", " + " </span>";
        }
      }
      document.getElementById("answer").innerHTML =
        "Printing O to " + num1.value + " : " + result;
    })
  );
}

// Question : 5
function ques5() {
  titles.innerHTML = "Question 5 (Compulsory)";
  quesTitle.innerHTML =
  "Use a loop to display the integers 9 through 0 in descending order.";
  let error = document.createElement('p')
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  label.textContent = "Enter 1 to 9 Number : ";
  num1.placeholder = "Enter Number";
  num1.max = "9";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  div.appendChild(error);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const intervalq5 = setInterval(() => {
    error.style.color="green" 
    
    if (!Number.isInteger(Number(num1.value))) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    } else if (num1.value <= 9) {
      error.textContent = "";
    } else if (num1.value < 0 || num1.value > 9) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    }
  }, 1000);
  
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans5 = () => {
      if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green"
      let result = "";
      for (let i = Number(num1.value); i >= 0; i--) {
        if (i == 0) {
          result = result + "<span> " + i + ". " + " </span>";
        } else {
          result = result + "<span> " + i + ", " + " </span>";
        }
      }
      document.getElementById("answer").innerHTML =
        "Descending Order : " + result;
    })
  );
}

// Question : 6
function ques6() {
  titles.innerHTML = "Question 6 (Compulsory)";
  quesTitle.innerHTML =
    "Use a loop to display the numbers in the range 0 to 20 that are  multiples of 3.";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  label.textContent = "Enter 1 to 20 Number : ";
  num1.placeholder = "Enter Number";
  num1.max = "20";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  div.appendChild(error);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const intervalq6 = setInterval(() => {
    const num=num1.value;
    if (!Number.isInteger(Number(num))) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    } else if (num <= 20) {
      error.textContent = "";
      return
    } else if (num < 0 || num > 20) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    }
  }, 1000);


  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans6 = () => {
      if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let result = "";
      for (let i = 1; i <= Number(num1.value); i++) {
        if (i % 3 == 0) {
          result = result + "<span> " + i + " </span>";
        }
      }
      document.getElementById("answer").innerHTML =
        "In the range of 0 to " +
        num1.value +
        " Multiplies of 3 numbers are : <br>" +
        result;
    })
  );
}

// Question : 7
function ques7() {
  titles.innerHTML = "Question 7 (Compulsory)";
  quesTitle.innerHTML =
    "Use a loop to display the numbers in the range 0 to  100 that are  Prime Numbers.";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  label.textContent = "Enter 1 to 100 Number : ";
  num1.placeholder = "Enter Number";
  num1.max = "100";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  div.appendChild(error);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const intervalq7 = setInterval(() => {
    if (!Number.isInteger(Number(num1.value))) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    } else if (num1.value <= 100) {
      error.textContent = "";
      
    } else if (num1.value < 0 || num1.value > 100) {
      error.textContent = num1.value + ` is not allowed`;
      num1.value = "";
      error.style.color = "red";
    }
  }, 1000);

  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans7 = () => {
      if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let result = "";
      for (var i = 2; i <= Number(num1.value); i++) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
          if (i % j === 0) {
            isPrime = false;
          }
        }
        if (isPrime === true) {
          result = result + "<span>" + i + " " + "</span>";
        }
      }

      document.getElementById("answer").innerHTML =
        "In the range of 0 to " +
        num1.value +
        " Prime numbers are : <br><br>" +
        result;
    })
  );
}

// Question : 8
function ques8() {
  titles.innerHTML = "Question 8 (Compulsory)";
  quesTitle.innerHTML =
    "Read a name and display it in reverse format (palindrome)";
  //setting the input's properties:
  num1.type = "text";
  num1.id = "num1";
  num1.placeholder = "Enter a Name";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  output.appendChild(error);
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans8 = () => {
      if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let name = num1.value;
      var reverseName = name.split("").reverse().join("");

      document.getElementById("answer").innerHTML =
        "Reverse of " + name + " is : " + reverseName;

      if (name === reverseName) {
        error.textContent = name + " is a Palindrome";
        error.style.color = "green";
      } else {
        error.textContent = name + " is not a Palindrome";
        error.style.color = "red";
      }
    })
  );
}

// Question : 9
function ques9() {
  titles.innerHTML = "Question 9 (Compulsory)";
  quesTitle.innerHTML =
    "Read a number and convert it from Celsius to Fahrenheit.";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  label.textContent = "Enter Temprature in Celsius : ";
  num1.placeholder = "Enter Number";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);

  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans9 = () => {
 if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let celsius = Number(num1.value);
      let fahrenheit = celsius * 1.8 + 32;
      document.getElementById("answer").innerHTML =
        "Conversion of " +
        celsius +
        "&#8451; to Fahrenheit is " +
        fahrenheit +
        "&#8457;";
    })
  );
}

// Question : 10
function ques10() {
  titles.innerHTML = "Question 10 (Compulsory)";
  quesTitle.innerHTML =
    "Write a JavaScript program to display the current day and time on a button click.";
  //setting the input's properties:
  button.type = "button";
  button.id = "btn";
  button.textContent = "Display Day and Time";

  //adding the inputs to the div
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);

  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans10 = () => {
     
      var today = new Date();
      var day = today.getDay();
      var daylist = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday ",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      console.log("Today is : " + daylist[day] + ".");
      var hour = today.getHours();
      var minute = today.getMinutes();
      var second = today.getSeconds();
      var prepand = hour >= 12 ? " PM " : " AM ";
      hour = hour >= 12 ? hour - 12 : hour;
      if (hour === 0 && prepand === " PM ") {
        if (minute === 0 && second === 0) {
          hour = 12;
          prepand = " Noon";
        } else {
          hour = 12;
          prepand = " PM";
        }
      }
      if (hour === 0 && prepand === " AM ") {
        if (minute === 0 && second === 0) {
          hour = 12;
          prepand = " Midnight";
        } else {
          hour = 12;
          prepand = " AM";
        }
      }
      document.getElementById("answer").innerHTML = "Current Day and Time : <br> " + daylist[day] + ", "+hour +" : "+ minute + " : " + second + prepand ;
    })
  );
}


//----------------------------------------------------Optional---------------------------------------------

// Question : 1

function ques1Op() {
  titles.innerHTML = "Question 1 (Optional)";
  quesTitle.innerHTML =
    "Read a number and Print the Fibonacci Sequence. <br> Test data : 5 <br> Output : 0, 1, 1, 2, 3, 5";
    quesTitle.style.textAlign="left";
  //setting the input's properties:
  num1.type = "number";
  num1.id = "num1";
  num1.placeholder = "Enter a Number";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans1Op= () => {
      if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let num = Number(num1.value);
      // console.log(num)
      // console.log(typeof num)
      let fib = [0, 1];

      for (var i = 2; i <= num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
      }
      
      document.getElementById("answer").innerHTML =
        "Fibonacci Sequence of " + num + " is : " + fib;
    })
  );
}

// Question : 2
function ques2Op() {
  titles.innerHTML = "Question 2 (Optional)";
  quesTitle.innerHTML =
    'Write a JavaScript function to capitalize the first letter of a string. <br>Test data : “js string exercises” <br> Output : “Js string exercises"';
    quesTitle.style.textAlign="left";
  //setting the input's properties:
  num1.type = "text";
  num1.id = "num1";
  num1.placeholder = "Enter the String";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans2Op= () => {
 if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let string = num1.value;
      // console.log(string)
      // console.log(typeof string)
      function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
      } 
      document.getElementById("answer").innerHTML = "Capitalized First Letter : "+ capitalize(string)
    })
  );
}

// Question : 3
function ques3Op() {
  titles.innerHTML = "Question 3 (Optional)";
  quesTitle.innerHTML =
    'Read a Sentence and Reverse words in that sentence. <br>Test data : “I am the good boy” <br> Output : “I ma eht doog yob"';
    quesTitle.style.textAlign="left";
  //setting the input's properties:
  num1.type = "text";
  num1.id = "num1";
  num1.placeholder = "Enter the String";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans3Op= () => {
 if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let string = num1.value;
      // console.log(string)
      // console.log(typeof string)
      function reverseWords(str) {
        var wordsArr = str.split(' ');
        var reversedWordsArr = [];
        
        wordsArr.forEach(word => {
          var reversedWord = '';
          for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
          }
          reversedWordsArr.push(reversedWord);
        });
        
        return reversedWordsArr.join(' ');
      }
      document.getElementById("answer").innerHTML = "Reversed Words : "+reverseWords(string)
    })
  );
}

// Question : 4
function ques4Op() {
  titles.innerHTML = "Question 4 (Optional)";
  quesTitle.innerHTML =
    'Write a JavaScript function to repeat a string at a specified time. <br>Test data : “Hello”, 3 <br> Output : “Hello Hello Hello”';
    quesTitle.style.textAlign="left";
  //setting the input's properties:
  num1.type = "text";
  num1.id = "num1";
  num2.type = "number";
  num2.id = "num2";
  num1.placeholder = "Enter a String";
  num2.placeholder = "No. of repeatation";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  div.appendChild(num2);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans4Op= () => {
      if(num1.value=="" || num2.value==""){
        num1.classList.add("error")
        num2.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return 
    }
    outputAns.style.color="green"  
     
      let string = num1.value;
      let times = Number(num2.value);
      // console.log(times)
      // console.log(typeof times)
      
      function repeatString(str, num) {
        var newStr = "";
        for (var i = 0; i < num; i++) {
          newStr += str+" ";
        }
        return newStr;
      }
      document.getElementById("answer").innerHTML = "Repeating "+ string +" "+ times + " times : <br>"+ repeatString(string,times) 
    })
  );
}

// Question : 5
function ques5Op() {
  titles.innerHTML = "Question 5 (Optional)";
  quesTitle.innerHTML =
    'Write a JavaScript function to capitalize the first letter of each word in a string. <br>Test data : “js string exercises” <br>Output : “Js String Exercises”';
    quesTitle.style.textAlign="left";
  //setting the input's properties:
  num1.type = "text";
  num1.id = "num1";
  num1.placeholder = "Enter the String";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";

  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans5Op= () => {
 if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      let string = num1.value;
      // console.log(string)
      // console.log(typeof string)
      const cap = (str)=> {
        return str
        .toLowerCase()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.substr(1);
        })
        .join(" ");
      }
      
      document.getElementById("answer").innerHTML = "Capitalized First Letter : <br>"+ cap(string)
    })
  );
}

// Question : 6
function ques6Op() {
  titles.innerHTML = "Question 6 (Optional)";
  quesTitle.innerHTML = 'Write a JavaScript function to validate whether a given string is a proper Email format.<br> Test data : “test@ssdf” <br> Output : false'
  quesTitle.style.textAlign="left";

  //setting the input's properties:
  num1.type = "text";
  num1.id = "num1";
  num1.placeholder = "Enter a Email";
  button.type = "submit";
  button.id = "btn";
  button.textContent = "Answer";
  
  //adding the inputs to the div
  div.appendChild(label);
  div.appendChild(num1);
  output.appendChild(button);
  div.appendChild(br);
  div.appendChild(br);
  output.appendChild(outputAns);
  output.appendChild(error);
  const btn = document.getElementById("btn");
  btn.addEventListener(
    "click",
    (ans6Op= () => {
 if(num1.value==""){
        num1.classList.add("error")
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML ="Please Enter At least Something";
      return
    }
    outputAns.style.color="green" 
     
      
      let emailId = num1.value;
      const validEmail = (email) => {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
          outputAns.innerHTML="Output : False"
          return false;
        }
        else{
          outputAns.innerHTML="Output : True"
          return true;
        }
      
      }
      if (validEmail(emailId) === true) {
        error.textContent = emailId + " is a valid e-mail";
        error.style.color = "green";
      } else if(validEmail(emailId)===false){
        error.textContent = emailId+ " is not a valid e-mail";
        error.style.color = "red";
      }
    })
  );
}

{
  //Modal
  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    num1.focus();
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
    div.innerHTML = "";
    output.innerHTML = "";
    quesTitle.innerHTML = "";
    titles.innerHTML = "";
    outputAns.textContent = "";
    num1.value = "";
    label.innerHTML=""
    num2.value = "";
    outputAns.style.color="green"
    error.textContent = "";
    quesTitle.style.textAlign="center";
    num1.classList.remove("error")
    num2.classList.remove("error")
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }
}
