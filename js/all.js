// ===============Even and Odd Number Program============
var i;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("even numbers are:" + i);
    }
    else {
        console.log("odd numbers are:" + i);

    }
}
var j;
for (j = 1; j <= 100; j++) {
    if (j % 2 !== 0) {
        console.log("Odd numbers are:" + j);
    }
}

// ===============Palindrome NUmber Program============
function palin() {
    var a, no, b, temp = 0;

    no = Number(document.getElementById("no_input").value);

    b = no;
    while (no > 0) {
        a = no % 10;
        no = parseInt(no / 10);
        temp = temp * 10 + a;
    }
    if (temp == b) {
        alert("Palindrome number");
    }
    else {
        alert("Not Palindrome number");
    }
}

// ====================1.Add two Strings:==============================
var fName = "Sreevidya";
var lNmae = "Cherukuri";
var addNames = fName.concat(" ", lNmae);
console.log("Add two Strings:" + addNames);
//======================Add 2-Arrays:========================================
var arr1 = [2, 4, 5, 6];
var arr2 = [4, 5, 6, 7];
var add = arr1.concat(arr2);
console.log("add 2-Arrays:" + add);

// ===========================2.Reverse a String:===========================
const str = "Sreevidya Reddy Cherukuri";
const y = str.split('').reverse().join('');
console.log("reverse a String:" + y);
                    // (OR)
// console.log(["z", "e", "t"].reverse());
                    // (OR)
function reverseString() {
    var revString = "";
    var inputString = document.getElementById("text").value;
    var i = inputString.length;
    for (var j = i; j >= 0; j--) {
        revString = revString + inputString.charAt(j);
        document.write(revString + "<br>");
    }
}
//====================================Reverse an Array:========================
var ar = [5, 9, 7, 6, 3, 1];
var z = ar.reverse();
console.log("reverse an Array:" + z);


//======================3.Removes Duplicate elememnts in Strings:====================
const name = "SreevidyaReddy";
console.log([...new Set(name)]);

//================Remove Duplicates numbers in an array :=================
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32];
console.log([...new Set(numbers)]);


//======================4.add 2-names in between:===================
function test() {
    var names1 = ["Raj", "Vijay", "Antony", "Kiran"];
    names1.splice(3, 0, "Sundar", "Arun");
    document.getElementById("demo").innerHTML = names1;   //Raj,Vijay,Antony,Sundar,Arun,Kiran
}

//===================5.Remove last element :======================
function remove() {
    var names = ["Raj", "Vijay", "Antony", "Sundar", "Arun", "Kiran"];
    names.splice(5, 5);
    document.getElementById("remove").innerHTML = names;  //Raj,Vijay,Antony,Sundar,Arun
}

//==========================6.find length of String:========================
var names2 = ["Raj", "Vijay", "Antony", "Sundar", "Arun"];
var x = names2.length;
console.log("Length of String:" + x); ///output:5
//================================find length of an array:================
var numb = [55, 55, 44, 66, 99, 77, 88];
console.log(numb.length);   //Output:7





