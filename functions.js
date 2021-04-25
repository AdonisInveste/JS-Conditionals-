let result

function add(q, w) {


    result = q + w
    return result


}


console.log(add(8, 9))

p = document.querySelector('#addition')

console.log(p)

p.innerHTML = result



function capital(letter) {


    result = letter.slice(0, 1)
    fragment = letter.slice(1, 6)
    return ` ${result.toUpperCase()}${fragment.toLowerCase()} `

}


let uppercase = capital('LeTtER')

console.log(uppercase)


// https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/