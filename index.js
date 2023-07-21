// Code your solution here

function findMatching(arr, str) {
    return arr.filter(s => s.toUpperCase() === str.toUpperCase())
}


function fuzzyMatch(arr, str) {
    return arr.filter(s => s.startsWith(str))
}

function matchName(arr, str) {
    return arr.filter(item => item.name === str)
}