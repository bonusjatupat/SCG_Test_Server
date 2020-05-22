exports.findPattern = async (body) => {
    var input = "X, Y, 5, 9, 15, 23, Z"
        input = input.replace(/ /g, "")
        input = input.split(",")

    //Arrays of differences
    var result = []
    while (result.length < 3) {
        if (result.length < 1) {
            result.push(input)
        } else {
            result.push(await calDifferent(result[result.length-1]))
        }
    }

    //Find X, Y, Z, backward
    var answer = new Map()
    var i = result.length-1
    while (i>0) {
        var numCount = 0
        for (var k=0; k<result[i-1].length; k++){
            for (var j=0; j<result[i-1].length; j++) {
                if (isNaN(result[i-1][j]) && !isNaN(result[i-1][j+1]) && numCount <= 0) {
                    var temp = result[i-1][j]
                    result[i-1][j] = parseInt(result[i-1][j+1]) - parseInt(result[i][j])
                    answer.set(temp, result[i-1][j])
                    numCount = 0
                } else if (isNaN(result[i-1][j]) && !isNaN(result[i-1][j-1]) && numCount > 0) {
                    var temp = result[i-1][j]
                    result[i-1][j] = parseInt(result[i-1][j-1]) + parseInt(result[i][j-1])
                    answer.set(temp, result[i-1][j])
                    numCount = 0
                } else if (!isNaN(result[i-1][j])) {
                    result[i-1][j] = parseInt(result[i-1][j])
                    numCount++
                }
            }
        }
        i--;
    }

    var finalAnswer = {
        X: answer.get('X'),
        Y: answer.get('Y'),
        Z: answer.get('Z')
    }
    return finalAnswer
}

const calDifferent = async (arr) => {
    //find the different of the given array
    var difArr = []
    for (var i=1; i<arr.length; i++) {
        if (!isNaN(arr[i-1]) && !isNaN(arr[i])) difArr.push(arr[i] - arr[i-1])
        else if (isNaN(arr[i-1]) && !isNaN(arr[i])) difArr.push(arr[i-1])
        else if (isNaN(arr[i])) difArr.push(arr[i])
    }
    
    //check if the differences are all equals. 
    //if they are equals filled in for the NaN elements.
    var temp = []
    for (var i=1; i<difArr.length; i++) {
        if ((!isNaN(difArr[i-1]) && !isNaN(difArr[i])) && (difArr[i-1] == difArr[i])) {
            for(var j=0; j<difArr.length; j++) temp.push(difArr[i])
            break;
        }
    }

    if (temp.length >= 1) return temp
    return difArr
}

exports.findValue = async (body) => {
    var A = 21
    var input1 = "A+B=23"
    var input2 = "A+C=-21"

    var B = await calEquation(A, input1)
    var C = await calEquation(A, input2)
    
    var answer = {
        A: A,
        B: B,
        C: C
    }
    return answer
}

const calEquation = async (A, equation) => {
    var split = equation
        split = split.replace(/ /g, "")
        split = split.replace("A", A)
        split = split.split("=")

    var left = split[0]
        left = left.replace(/ /g, "")
        left = left.split("+")
    var right = split[1]

    var answer = 0
    for (var i=0; i<left.length; i++) {
        if (isNaN(left[i]) && i == 0) answer = right - left[i+1]
        else if (isNaN(left[i]) && i > 0) answer = right - left[i-1]
    }
    return answer
}
