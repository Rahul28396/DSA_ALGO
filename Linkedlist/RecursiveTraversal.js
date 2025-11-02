const LinkedList = require('./LinkedList');


const lList = new LinkedList();
lList.append(1);
lList.append(2);
lList.append(3);
lList.append(4);

function recursiveTraversal(node) {
    if (node === null) {
        return;
    }
    console.log(node.data);
    recursiveTraversal(node.next);
}

function recursiveSearch(node, value){
    if(node === null){
        return false; // Base case: if node is null, value not found
    }
    if(node.data === value){
        return true; // Base case: if node's data matches the value, return true
    }
    return recursiveSearch(node.next, value); // Recursive case: search in the next node
}

// Start the recursive traversal from the head of the linked list
recursiveTraversal(lList.head);

// Search for a value in the linked list
const searchValue = 4;
const found = lList.search(searchValue);
console.log(`Value ${searchValue} found: ${found}`);

// Search using recursive function
const recursiveFound = recursiveSearch(lList.head, searchValue);
console.log(`Value ${searchValue} found (recursive): ${recursiveFound}`);
