var a = 2;
var flag = true;
if(a<=1) flag = false;

else {
    for (let i=2; i<a/2; i++){
        if(a%i == 0){
            flag = false;
            break;
        }
    }
}
console.loglog(flag===true ? "Prime" : "Not prime");


//palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false 
