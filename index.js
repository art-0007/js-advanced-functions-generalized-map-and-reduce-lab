// Add your functions here
function map(sourceArray, fn) {
    return sourceArray.map(fn);
}


function reduce(sourceArray, fn, startingPoint) {
    const keys = Object.keys(sourceArray)
    let i = 1

    if (startingPoint) {
        i = 0
    } else {
        startingPoint = sourceArray[keys[0]]
    }

    for (i; i < keys.length; i++)  {
        startingPoint = fn(startingPoint, sourceArray[keys[i]]);
    }
    return startingPoint
 }