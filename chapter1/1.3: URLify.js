/*
Write a method to replace all spaces in a string with '%20'. You may assume
that string has sufficient space at the end to hold the additional characters,
and that you are given the 'true' length of the string

Example:
Input: "Mr John Smith     ", 13
Output: "Mr%20John%20Smith"
*/

'use strict'

function urlify(string){
	newString = string.replace(/\s/g, '%20')
	return newString
}
