// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//============================================================================================ 

var s = "anagram";
var t = "nagaram";

var s1 = "rat";
var t1 = "car";

var isAnagram = function(s, t) {
    map = {};

    if (s.length !== t.length){
        return false;
    }

    for (var i = 0; i < s.length; i++){
        if (!map[s[i]]){
            map[s[i]] = 1;
        } else {
            map[s[i]] ++
        }
    }
    
    for (var i = 0; i < t.length; i++){
        if (map[t[i]]){
            map[t[i]]--;
        } else return false;
    }
    
    console.log(map);
    return true;

};

console.log(isAnagram(s,t));
// output: true

console.log(isAnagram(s1,t1));
// output: false