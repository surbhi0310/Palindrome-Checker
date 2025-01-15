function checkPalindrome() {
    // Get the value of the input field
    let inputString = document.getElementById("palindromeInput").value.trim(); //trim helps to ignore spaces
    // Select the result display area
    const resultBox = document.getElementById("result");

    // Check if the input is empty
    if (inputString === "") {
        resultBox.textContent = "Please enter a string to check.";
        resultBox.style.color = "red"; // Error message in red
        return;
    }
    // Normalize the string: remove non-alphanumeric characters, convert to lowercase
    let normalizedString = inputString.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversedString = normalizedString.split("").reverse().join("");

    if (normalizedString === reversedString) {
        resultBox.textContent = `"${inputString}" is a Palindrome!`;
        resultBox.style.color = "green"; // Success message in green
    } else {
        resultBox.textContent = `"${inputString}" is not a Palindrome.`;
        resultBox.style.color = "red"; // Error message in red
    }
}





//ANOTHER WAY TO WRITE PALINDROME FUNCTION

// // function checkPalindrome(string){
// //     //dad
// //     let len = string.length;
// //     for (let i=0; i<=len/2;i++){
// //         if (string[i] == string[len-1-i]){
// //             return "It is a Palindrome."            
// //         }
// //         else{
// //             return "It is not a Palindrome."
// //         }
// //     }
// // }
// // const string = prompt("Enter your Text: ");
// // // let value = checkPalindrome(string);
// // console.log(checkPalindrome(string));


