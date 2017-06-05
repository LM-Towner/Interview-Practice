/* Check Permutation: Given two strings, write a method to decide if one is a
permuation of the other*/

/* Psuedocode
The strings must must have the same length, and when sorted they must be equal
as well
*/
function isPermutation(string1, string2) {
    if ((string1.length != string2.length) &&
    (string1.split('').sort) === (string2.split('').sort)) {
        return false
    } else {
        return true
    }
}
