function solution(myString) {
    return myString.split('x').filter(char => char.length).sort();
}