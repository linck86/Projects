function arrayManipulation(n, queries) {
    var arr = [],
    s = []

    for (let i = 0; i < n; i++) {
        arr.push(0)
    }

    for (let i = 0; i < queries.length; i++) {
        s[i] = queries[i].pop()
        var start = queries[i][0]
        var end = queries[i][1]
        for (let j = start-1; j < end; j++) {
            arr[j] += s[i]
        }
    }
    
    // var maxValue = arr.reduce(function(prev, current) { 
    //     return prev > current ? prev : current; 
    // });

    var aa = Math.max(...arr);
    console.log(aa)
    return 
}

var qrs = [[1,5,100],[2,5,100],[3,4,100]]
var n = 10000000

console.log(arrayManipulation(n,qrs))