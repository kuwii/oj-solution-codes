/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visited = [];
    for (var it of wordList) {
        visited.push(0);
    }
    var curStep = [beginWord], step = 1;
    while (curStep.length != 0) {
        var newStep = [];
        for (var curWord of curStep) {
            if (curWord == endWord) {
                return step;
            }
            
            for (var i = 0; i != wordList.length; ++i) {
                if (visited[i]) { continue; }
                
                var numDiff = 0;
                for (var j = 0; j != beginWord.length; ++j) {
                    if (wordList[i][j] != curWord[j]) { ++numDiff; }
                    if (numDiff > 1) { break; }
                }
                if (numDiff == 1) {
                    newStep.push(wordList[i]);
                    visited[i] = 1;
                }
            }
        }
        curStep = newStep;
        ++step;
    }
    
    return 0;
};