//Leetcode 2. Add Two Numbers - Javascript (https://leetcode.com/problems/add-two-numbers/)


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

//OK! 
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. OOOOH IT is L 1 and L 2, not 11 and 12!!!  question: how are the lists linked? because they are in the same line?
// l1 = [2,4,3], l2 = [5,6,4];
//a quick console log to proove that the above line is cool.
// console.log(l1);
//ok, so I need to add the two numbers and return the sum as a "linked list" - here's that linked list thing again, time to googl: ". A linked list is a linear data structure that represents a collection of elements, where each element points to the next one. The first element in the linked list is the head and the last element is the tail."  ok, I see.  the linked list means that they point to the next one- the order is important here because it's numbers yo: l1 is 342 and l2 is 465. to me, they just look like arrays; I'm being TOLD it's a linked list because I'm being TOLD they are numbers backwards... is there something CODE related that explains it's a linked list? OH the provided comments show the definition!!
// function ListNode(val, next){
//     this.val= (val === undefined ? 0 : next)
//     this.next = (next === undefined ? null :next)
// }
// I started playing around with listnode thinking 1. asking if listnode is a native method available, or do I need to create teh listnode functionality before I can use arrays that behave like listnodes.  This was because I guessed that them being list nodes is important to solvint the problem - or at lease solving it efficiently.  BUT how much time do I need to spend putting all of that together before I try and solve it with the code that I know.
// function linkedList(arr){
//     let l1 = new ListNode(arr[2,4,3]);
//     let l2 = new ListNode(arr[5,6,4]);
//     return [l1, l2]
// }
// console.log(l1, l2);

// linkedList(); 


console.log(`hey this is a thing ${l1.head}`)

 var addTwoNumbers = function(l1, l2) {
    
};