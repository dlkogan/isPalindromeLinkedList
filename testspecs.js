const {expect} = require('chai');
const isPalindrome = require('./isPalindrome')

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(newNode) {
    if(!this.head) {
      this.head = newNode
    } else {
      let end = this.getLast();
      end.next = newNode;
    }
  }
  prepend(newNode) {
    if(!this.head) {
      this.head = newNode;
    } else {
      let oldHead = this.head;
      newNode.next = oldHead;
      this.head = newNode;
    }
  }
  getAt(index) {
    let pointer = this.head;
    let counter = 0;
    while (counter !== index) {
      pointer = pointer.next;
      counter++;
    }
    return pointer.val;
  }
  getLast() {
    let pointer = this.head;
    while(pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }
}

let notPalindrome = new LinkedList;
notPalindrome.append(new Node('h'))
notPalindrome.append(new Node('i'))

let truePalindrome = new LinkedList;
truePalindrome.append(new Node('r'))
truePalindrome.append(new Node('a'))
truePalindrome.append(new Node('a'))
truePalindrome.append(new Node('r'))

describe('isPalindrome', () => {
  it('returns false if word is not a palindrome', () => {
    expect(isPalindrome(notPalindrome)).to.eql(false)
  })
  it('returns true is it is a palindrome', () => {
    expect(isPalindrome(truePalindrome)).to.eql(true)
  })
})
