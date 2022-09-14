// Search the query-String in given String-Array
// and return the number of each query-String

// Sample input -   Stirngs[13] = ['abcde','sdaklfj','asdjf','na','basdn','sdaklfj','asdjf','na','asdjf','na','basdn','sdaklfj','asdjf'];
//                  Queries[5] = ['abcde','sdaklfj','asdjf','na','basdn'];
// Sample output -  [1,3,4,3,2]

// check for-each function

function matchingStrings(strings, queries) {
    var output = [queries.length];
    var count = 0;

    for(let i=0;i<queries.length;i++){
        count = 0;
        for(let j=0; j<strings.length; j++){
            if(queries[i] == strings [j]){
                count += 1;
            }
        }
        output[i] = count;
    }
    
    return output;
}

var strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
var queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];

console.log(matchingStrings(strings,queries));
