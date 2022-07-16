//Leetcode 2. Add Two Numbers - Javascript (https://leetcode.com/problems/add-two-numbers/)
//note for reference: https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/


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

// fuction to implement a list node. What this means is that we are defining how the NODE in the list behaves.  if the node has data it equals that data and the next one will be null.  I think what it means is that if there is something defined as .next the response will return null
class ListNode{
        constructor (data){
            this.data = data
            this.next = null
        }
}

// implementing a linked list; remember, a constructor is a special function in javascript that Creates and Initalizes an object instance of a class - we are defining the functionality to create and set values for this new class. In this LinkedList class, the constructs is saying if the head node is not passed, the head is intalized as null.  SO I think that when we create a new list we have to define the head?
class LinkedList{
    constructor(head = null){
        this.head = head
    }
}

//time to create new list nodes (remember, these are just nodes at this point - they aren't in a linkedlist yet). I"m going to go ahead and make three of them to reflect the first of the two lists in the l33tcode challenge

let node1 = new ListNode(2)
let node2 = new ListNode(4)
let node3 = new ListNode(3)

//defining next node
node1.next= node2
node2.next = node3


//create the linked list
let l1 = new LinkedList(node1)

// console log the nodes in the list we just made
console.log(`${l1.head.data} is the first node, ${l1.head.next.data} is the second, ${l1.head.next.next.data} should be the third.`)

// this shows 2 and 4, respectively... let's see if we can look at the entire list and if the third number (3) is there
console.log(l1);
// RETURNED:LinkedList {
//   head: ListNode { data: 2, next: ListNode { data: 4, next: [ListNode] } }
// }
//out of curiosity, let's try 4 - i am curious if it will display the data for the third node; nope -t returned the same response for 'list'; probably because we made a new linked list with node 1, NOT with node 2 - hmm ANYWAY...

// size() returns the number of nodes present in the linked list
// clear() empties out the list
//getLast() returnes the last node - or tail- of the linkes list
//getFirst() returnes the head




 var addTwoNumbers = function(l1, l2) {
    
};



//----------------------COMMENTS BELOW CAN BE IGNORED -----------

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
