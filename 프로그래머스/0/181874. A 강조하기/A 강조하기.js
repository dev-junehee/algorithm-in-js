// function solution(myString) {
//     return [...myString]
//         .map(alp => alp === 'A' || alp === 'a' ? alp.toUpperCase() : alp.toLowerCase())
//         .join('');
// }

function solution(myString) {
    return myString.toLowerCase().replaceAll('a', 'A');
}