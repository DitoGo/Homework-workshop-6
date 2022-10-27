/*
დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .

function palindrom(txt) {

}
*/


function palindrom(txt) {
  let teqsti = txt.split("")

  let reverseTeqsti = teqsti.reverse()

  let reverseString = reverseTeqsti.join('')
  if(txt == reverseString) {
    console.log("Its palindrome")

  } else {
    console.log("it is not palindrome")
  }
}
palindrom("madam")
//Task 2

/*
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
'cbcbdde' -> 'e'
'worsdorw' -> 's' 
'worsdorws'-> 'd'
*/

// let myArr ="HelloWorld"

// let splitted = myArr.split('')
// console.log(splitted)

function nonRepeated(someString) {
  for(let i = 0; i < someString.length; i++){
    if(someString.indexOf(someString.charAt(i)) == someString.lastIndexOf(someString.charAt(i))){
      console.log(someString.charAt(i))
      break
    }
   }
}

// 'cbcbdde' -> 'e'
// 'worsdorw' -> 's' 
// 'worsdorws'-> 'd'

let firstOption = nonRepeated('cbcbdde')
let secondOption = nonRepeated('worsdorw')
let lastOption = nonRepeated('worsdorws')




/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"
*/
let sentence = "sad midis matarebeli"
function camelize(argument) {
    let sentenceArr = argument.split(" ")
    console.log(sentenceArr)
   
   
}
console.log(camelize(sentence))


/*
Task 4: 
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს რიცხვს სწორი სუფიქსით , როგორიცაა 1st, 2nd, 3rd or 4th და ა.შ

მაგ . normilize(121) -> '121st' 
normilize(124) -> '124th' 
normilize(33) -> '33rd' 
*/
function sufix(number)  {
  if(number % 10 == 1) {
    return number + "st"
  } else if (number % 10 == 2){
      return number + "nd"
  } else if (number % 10 == 3) {
    return number+ "rd"
  }else {
    return number+ "th"
  }
}

console.log(sufix("121"))
console.log(sufix("122"))
console.log(sufix(123))
console.log(sufix(124))
//Task 5

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი
*/
let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,];
function pairs(obj){
  let arrValue = Object.values(obj);
  let maxValue = Math.max(...arrValue);
  let result = {};
    for(let el in obj){
      if(obj[el]===maxValue){
        result[el] = maxValue
      } 
    }return result
}

function gameoreba(arr){
  let occuranceObj = arr.reduce((acc, curr) =>{
    if(acc[curr]){
        acc[curr]=acc[curr] + 1
    } else {
      acc[curr] = 1 
    } 
    return acc
  }, {})
  return pairs(occuranceObj)
}
console.log(gameoreba(arr1))



/*
Task 6 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,1,2,2,3,30]

*/
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let mergedArr = array1.concat(array2)

function unikaluri(){
  let carieli = []
  for(let i = 0; i < mergedArr.length; i++){
    if(!carieli.includes(mergedArr[i])) {
        carieli.push(mergedArr[i])
    } 
  }  return carieli
}
const shedegi = unikaluri()

console.log(shedegi)

/*
Task 7 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/

function readyToPutInTheDOM(arr) {
    return arr.map((el) =>{
        return `<h1>${el.name}</h1><h2>${el.age}</h2>`
    })
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
 
/* Task 8 */ ///Optional

/* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .



  */
