// Write a function called add that takes one number and returns that number + 7.


let result

function add(q, w) {


    result = q + w
    return result


}


console.log(add(8, 9))

p = document.querySelector('#addition')

console.log(p)

p.innerHTML = result

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.


function capital(letter) {


    result = letter.slice(0, 1)
    fragment = letter.slice(1, 6)
    return ` ${result.toUpperCase()}${fragment.toLowerCase()} `

}


let uppercase = capital('LeTtER')

console.log(uppercase)


// https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/

// Write a function called lastLetter that takes a string and returns the very last letter of that string:


function lastLetter(word) {
    last = word[word.length - 1]
    return last

}


console.log(lastLetter("NYlA"))