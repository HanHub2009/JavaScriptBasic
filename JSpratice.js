//VARIABLES


//Number
let price = 100;
let umur = 16;

//String
let name = `Paan`;

//Bollean
let online = false;
let lovePowerRanger = true;
let hatePowerRanger = false;

document.getElementById(`myh1`).textContent = `$${price}`;
document.getElementById(`myh2`).textContent = `my name is ${name}`;

document.getElementById(`p1`).textContent = `My name is ${name}`;
document.getElementById(`p2`).textContent = `I am ${umur} years old`;
document.getElementById(`p3`).textContent = `I am a Power Ranger Fans [${lovePowerRanger}]`;
document.getElementById(`p4`).textContent = `My friend is a Power Ranger Fans [${hatePowerRanger}]`;


//ARITHMETIC MATH

//Current Value
let classmate = 20;

//One new student
//classmate = classmate + 1;

//One student left
//classmate = classmate - 1;

//Two class combine
//classmate = classmate * 2;

//Spit the classmate
//classmate = classmate / 2;

//Power of Two
//classmate = classmate ** 2;

//Combie two Operation (Augmented Assignment Operators)
//classmate += 2;
//classmate -= 2;
//classmate *= 2;
//classmate /= 2;

document.getElementById(`p5`).textContent = `classmate total: ${classmate}`


/*LET AND CONST
Let = Sesuatu yang bertukar-tukar
Const = Sesuatu yang x boleh bertukar
*/


const pi = Math.PI; //Tidak boleh diubah
let radius;
let circumference;

document.getElementById('CircleSubmit').onclick = function () {
  radius = document.getElementById(`radiusBox`).value;
  radius = Number(radius);
  document.getElementById(`answer`).textContent = circumference = 2 * pi * radius;
};

let slot1;
let slot2;

document.getElementById(`KiraSubmit`).onclick = function () {
  slot1 = document.getElementById(`t1`).value;
  slot2 = document.getElementById(`t2`).value;
  slot1 = Number(slot1);
  slot2 = Number(slot2);
  document.getElementById(`answer2`).textContent = hasilkira = slot1 + slot2;
}


//MATH IN JAVASCRIPT


Math.PI
document.getElementById(`math1`).textContent = Math.PI;

Math.E
document.getElementById(`math2`).textContent = Math.E;

let x = 10.5;
let y = 2;
let z = 0;

//Math umum
//z = Math.round(x); Bundarkan nombor ke nombor bulat terdekat
//z = Math.floor(x); Membundarkan nombor ke bawah (ke nombor bulat terendah)
//z = Math.ceil(x); Membundarkan nombor ke atas (ke nombor bulat tertinggi)
//z = Math.trunc(x); Membundarkan nombor ke atas (ke nombor bulat tertinggi)

//Kuasa dan punca kuasa
//z = Math.pow(x, y); x dengan punca kuasa y
//z = Math.sqrt(x); Mengira punca kuasa nombor
//z = Math.log(x); Mengira logaritma natural (log base e) bagi nombor

//Trigonometri
//z = Math.sin(x); 
//z = Math.cos(x);
//z = Math.tan(x);

//Operasi Mutlak 
//z = Math.abs(x); Menghilangkan negatif
//z = Math.sign(x); Menentukan tanda nombor (-1, 0, 1 )

//let max = Math.max(x, y, z) biggest number
//let max = Math.min(x, y, z) smallest number

document.getElementById(`math3`).textContent = `z = ${z}`;
document.getElementById(`max`).textContent = `max = ${max}`


//DICE
let maxNum = 6;
let midNum = 1;
let randomNum1;
let randomNum2;
let randomNum3;

document.getElementById(`rollbtn`).onclick = function () {
  randomNum1 = Math.floor(Math.random() * maxNum) + midNum;
  randomNum2 = Math.floor(Math.random() * maxNum) + midNum;
  randomNum3 = Math.floor(Math.random() * maxNum) + midNum;

  document.getElementById(`rollNum1`).textContent = randomNum1;
  document.getElementById(`rollNum2`).textContent = randomNum2;
  document.getElementById(`rollNum3`).textContent = randomNum3;
}

//IF , ELSE AND ELSE IF  STATEMENT

/*
document.getElementById(`ageCheck`).onclick = function () {
  let age = document.getElementById(`ageBox`).value;
  age = Number(age);

  if (age >= 18) {
    document.getElementById(`ageNote`).textContent = (`You are old enough to enter this website`);
  } else {
    document.getElementById(`ageNote`).textContent = (`You are not old enough to enter this website`);
  }
}

let isStudent = true;

if(isStudent) {
  document.getElementById(`studentCheck`).textContent = (`Your are a student`);
} else{
  document.getElementById(`studentCheck`).textContent = (`Your are not a student`);
}
*/

//Combine

document.getElementById(`ageCheck`).onclick = function () {
  let age = document.getElementById(`ageBox`).value;
  age = Number(age);
  let isStudent = document.getElementById(`studentTrue`).checked;
  isStudent = Boolean(isStudent);

  if (age >= 100) {
    document.getElementById(`ageNote`).textContent = (`You are too old`);
  }

  else if (age >= 18) {
    if (isStudent) {
      document.getElementById(`ageNote`).textContent = (`You're old enough and a student`);
    }
    else {
      document.getElementById(`ageNote`).textContent = (`You're old enough and NOT a student`);
    }
  }

  else if (age <= 0) {
    document.getElementById(`ageNote`).textContent = (`Your age cant be below zero`);
  }

  else {
    if (isStudent) {
      document.getElementById(`ageNote`).textContent = (`You're NOT old enough and a student`);
    }
    else {
      document.getElementById(`ageNote`).textContent = (`You're NOT old enough and NOT a student`);

    }
  }
}


//SWITCH STATEMENT (Efficient replacement to many else if statements)


let day = document.getElementById(`dayInput`);
let dayLabel = document.getElementById(`dayLabel`);


//Problem: too many else if statement
document.getElementById(`dayBtn`).onclick = function () {
  day = dayInput.value;

  if (day == 1) {
    dayLabel.textContent = `Monday`;
  }

  else if (day == 2) {
    dayLabel.textContent = `Tuesday`;
  }

  else if (day == 3) {
    dayLabel.textContent = `Wednesday`;
  }

  else if (day == 4) {
    dayLabel.textContent = `Thursday`;
  }

  else if (day == 5) {
    dayLabel.textContent = `Friday`;
  }

  else if (day == 6) {
    dayLabel.textContent = `Saturday`;
  }

  else if (day == 7) {
    dayLabel.textContent = `Sunday`;
  }

  else if (day > 7) {
    dayLabel.textContent = `unknown`;
  }

  else if (day < 1) {
    dayLabel.textContent = `unknown`;
  }
}


let days = 1;

switch (days) {
  case 1:
    dayLabel2.textContent = `Monday`;
    break;

  case 2:
    dayLabel2.textContent = `Tuesday`;
    break;

  case 3:
    dayLabel2.textContent = `Wednesday`;
    break;

  case 4:
    dayLabel2.textContent = `Thursday`;
    break;

  case 5:
    dayLabel2.textContent = `Friday`;
    break;

  case 6:
    dayLabel2.textContent = `Saturday`;
    break;

  case 7:
    dayLabel2.textContent = `Sunday`;
    break;

  default:
    dayLabel2.textContent = `-Not a date-`;
    break;
}

document.getElementById(`scoreBtn`).onclick = function () {
  let testScore = document.getElementById(`scoreInput`).value;
  let testResult = document.getElementById(`scoreResult`);
  let testGrade;
  testScore = Number(testScore);
  
  switch (true) {
    case testScore > 100:
      testResult.textContent = `Your mark can't be more than 100`;
      break;

    case testScore >= 85:
      testGrade = 'A';
      testResult.textContent = `You got ${testGrade}`;
      break;

    case testScore >= 70:
      testGrade = 'B';
      testResult.textContent = `You got ${testGrade}`;
      break;

    case testScore >= 50:
      testGrade = 'C';
      testResult.textContent = `You got ${testGrade}`;
      break;

    case testScore >= 40:
      testGrade = 'D';
      testResult.textContent = `You got ${testGrade}`;
      break;

    default:
      testResult.textContent = `FAIL DUMBASS`;
  }
}


//Counter


let numTotal = 0;
let numShow = document.getElementById(`numShow`);

document.getElementById(`addBtn`).onclick = function () {
  numTotal++;
  numShow.textContent = `${numTotal}`;
}

document.getElementById(`minusBtn`).onclick = function () {
  numTotal--;
  numShow.textContent = `${numTotal}`;
}

document.getElementById(`resetBtn`).onclick = function () {
  numShow.textContent = 0;
}

//STRING METHODS - Allow you to manipulate and work with text (string)


document.getElementById(`usernameSubmit`).onclick = function () {
  let username = document.getElementById(`usernameInput`).value;
  let usernameStart = username.startsWith(`F`);

  usernameResult1.textContent = username.charAt(0);
  usernameResult2.textContent = username.charAt(1);
  usernameResult3.textContent = username.charAt(2);

  usernameResult4.textContent = username.indexOf(`a`);
  usernameResult5.textContent = username.lastIndexOf(`a`);

  usernameResult6.textContent = username.length;
  usernameResult7.textContent = username.trim();

  usernameResult8.textContent = username.toUpperCase();
  usernameResult9.textContent = username.toLowerCase();

  usernameResult10.textContent = username.repeat(3);
  usernameResult11.textContent = usernameStart;
  usernameResult12.textContent = usernameStart;

  usernameResult13.textContent = username.replaceAll(" ", "");
  usernameResult14.textContent = username.padStart(10, "0");
  usernameResult15.textContent = username.padEnd(10, "0");
}


//LOGICAL OPERATORS - used to combine or manipulate Boolean values (true or false)

/* AND = &&
   OR = ||
   NOT = !
*/

document.getElementById(`tempBtn`).onclick = function () {
  const temp = document.getElementById(`tempInput`).value;
  if (temp > 0 && temp <= 30) { // Both condition need to be true
    tempResult.textContent = `Your tempeture is good`;
  }
  else {
    tempResult.textContent = `Your tempeture is bad`;
  }
}

sunnyBtn.onclick = function () {
  const itSunny = document.getElementById(`sunnyCheck`).checked;

  if (itSunny) {
    sunnyResult.textContent = `Yes`;
  } else {
    sunnyResult.textContent = `No`;
  }
}   
