/*
Is Unique: Implement an algorithm to determine if a string has all unique
characters. What if you cannot user additional data structures
*/

/*
The strings length must be less than the standard 128 ASCII characters for it to
 be unique, if there is more than it cannot be unique.

 Store string in hash, hash keys cannot be duplicated or it will throw an undefined
 so if the length of the keys are shorter than the length of the string then there
 must be duplicates.
*/

var isUnique = function(str) {
    if (str.length > 128) {
        return false;
    }
    hash = {};
    for (var i = 0; i < str.length; i++) {
        hash[str[i]] = i
    }
    var objLength = (Object.keys(hash).length)
    if (objLength < str.length) {
        return false
    } else {
        return true
    }

}
