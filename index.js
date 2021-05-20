console.log(true);
console.log(typeof true);
console.log(typeof false);

//The values true and false are not strings. If you use quotes to surround booleans ("true" and "false"), those values become strings.
console.log("\n")
console.log(typeof true);
console.log(typeof "true");

//The values true and false are not strings. If you use quotes to surround booleans ("true" and "false"), those values become strings.

//As with the number and string data types, the boolean type also has a conversion function, Boolean. It works similarly to the Number and String functions, attempting to convert a non-boolean value to a boolean.

console.log("\n")
console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0)); // 0 = false
console.log(Boolean(1)); // 1 = true
console.log(Boolean('')); // Space means false
console.log(Boolean('LaunchCode')); // word means true because not empty


//A boolean expression is an expression that evaluates to either true or false. The equality operator, ==, compares two values and returns true or false depending on whether the values are equal.

console.log("\n")
console.log(5 == 5);
console.log(5 == 6);

//In the first statement, the two operands are equal, so the expression evaluates to true. In the second statement, 5 is not equal to 6, so we get false. We can also use == to see that true and "true" are not equal.
console.log("\n")
console.log(true == "true");

//In the section Booleans, we learned about the comparison operators == and !=, which test whether two values are equal or not equal, respectively. However, there are some quirks with using the == operator, which occur when we use == to compare different data types.

console.log("\n")
console.log(7 == "7"); // true
console.log(0 == false); // true
console.log(0 == ''); // true

/* In order to properly make a comparison, the two operands must be the same type. If the two operands to == are of different data types, JavaScript will implicitly convert the operands so that the values are of the same data type before comparing the two. For this reason, the == operator is often said to measure loose equality.

Type conversions with == are carried out according to a complex set of rules, and while many of these conversions make some sense, others do not.

For example, Number("7") returns 7, so it makes some sense that 7 == "7" returns true. However, the following example leaves us scratching our heads. */
console.log("\n")
console.log('0' == 0); // true 
console.log(0 == ''); // true
console.log('0' == ''); // false

//The == operator is non-transitive. We think of equality as being transitive; for example, if A and B are equal and B and C are equal, then A and C are also equal. However, the example above demonstrates that that is not the case for the == operator.

// Since == does not follow rules that we typically associate with equality, unexpected results may occur if == is used in a program. Thankfully, JavaScript provides another operator that returns more predictable results

console.log("\n")

//The operator === compares two operands without converting their data types. In other words, if a and b are of different data types (say, a is a string and b is a number) then a === b will always be false.


console.log(7 === "7"); // false
console.log(0 === false); // false
console.log(0 === ''); // false - because comapres two operands WITHOUT converting their data types. a is string b is number  a ===b will always be false

// For this reason, the === operator is often said to measure strict equality. just as equality operator == has the inequality operator !=, there is also a strict inequality operator, !==. The boolean expression a !== b returns true when the two operands are of different types, or if they are of the same type and have different values.

console.log(typeof( 4 == "4")); // true

console.log("\n")

/*Recall that an operator is one or more characters that carries out an action on its operand(s). In Data and Variables we learned about three types of operators:

Arithmetic operators, such as +, -, *, /, and %.
The string operator +.
Compound assignment operators, such as += and -=.
Arithmetic and string operators take number and string operands, respectively, returning values of the same type. Compound assignment operators work similarly with numbers or strings while also reassigning the value of the first, variable operand */


// AND && OPERATOR - both have to be correct or it's false
console.log(7 > 5 && 5 > 3); // true
console.log(7 > 5 && 2 > 3); //false
console.log(2 > 3 && 'dog' === 'cat'); //false

console.log("\n")

// Logical OR || - if either operand is true, then it returns true

console.log(7 > 5 || 5 > 3); //t
console.log(7 > 5 || 2 > 3); //t
console.log(2 > 3 || 'dog' === 'cat'); //FAlSE

console.log("\n")

// Logical NOT - ! - if not true

console.log(! true); // FALSE
console.log(! false); // TRUE

console.log( !(5 > 7) ); // TRUE
console.log( !('dog' === 'cat') ); // TRUE

console.log("\n")

console.log("Operator Precedence" + "\n" + "JavaScript will always apply the logical NOT operator, !, first. Next, it applies the arithmetic operators, followed by the comparison operators. The logical AND and OR are applied last " );

// This means that the expression x * 5 >= 10 && y - 6 <= 20 will be evaluated so as to first perform the arithmetic and then check the relationships. The && evaluation will be done last. The order of evaluation is the same as if we were to use parentheses to group, as follow

// ((x * 5) >= 10) && ((y - 6) <= 20)

/* 
Operator Precedence

Precedence	      Category	                         Operators
(highest)	        Logical NOT	                           !
 	                Exponentiation	                      **
 	                Multiplication and division	        *, /, %
 	                Addition and subtraction	            +, -
 	                Comparison	                      <=, >=, >, <
 	                Equality	                      ===, !==, ==, !=
 	                Logical                             AND	&&
(lowest)	        Logical                             OR	||

*/

console.log(4 < 3 || 2 < 3); // true

console.log("\n")

//  5.4.1. if Statements

let billHasBeenPaid2 = false;

if (!billHasBeenPaid2) // () is our conditionall {} is our code 
{
   console.log("Your bill is due soon!");
}

console.log("\n")

let num2 = 4;

if (num2 % 2 === 0 && num2 > 3) {
   console.log(num2, "is even");
   console.log(num2, "is greater than 3");
}

// 5.4.2. else Clauses


console.log("\n")

let billHasBeenPaid = true;

if (!billHasBeenPaid) {
  console.log("Your Bill Is Due Soon!")
} else {
  console.log("Your payments are up to date!");
}



console.log("\n")

//  5.4.3. else if Statement

//If-else statements allow us to construct two alternative paths. A single condition determines which path will be followed. We can build more complex conditionals using an else if clause. These allow us to add additional conditions and code blocks, which facilitate more complex branching.

let x1 = 10;
let y1 = 20;

if ( x1 > y1) {
  console.log("X is greater than Y");
} else if ( x1 < y1){
  console.log("X is less than Y");
} else {
  console.log("X and Y are equal");
}

console.log("\n")

/* 
We can construct conditionals using if, else if, and else with a lot of flexibility. The only rules are:

1.We may not use else or else if without a preceding if statement.
2.else and else if clauses are optional.
3.Multiple else if statements may follow the if statement, but they must precede the else clause, if one is present.
4.Only one else clause may be used.
Regardless of the complexity of a conditional, no more than one of the code blocks will be executed. 
*/

let x = 10;
let y = 20;

if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else if (x % 5 === 0){
  console.log("x is divisible by 5");
} else if (x % 2 === 0){
  console.log("x is even");
}

// Even though both of the conditions x % 5 === 0 and x % 2 === 0 evaluate to true, neither of the associated code blocks is executed. When a condition is satisfied, the rest of the conditional is skipped.

let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}


//Write code that prints different messages based on the value of a number variable. If the number is odd, print nothing. If it is even, print "EVEN". If it is also positive print "POSITIVE".

let num = 7;

if (num % 2 === 0){
  console.log("EVEN");

  if (num > 0){
    console.log("POSITIVE");
  }
} 

