class Node {
    constructor(data) {  
        this.data = data;
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

  // Add methods for LinkedList operations
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode; // If the list is empty, set head to new node
        } 
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.length++;
    }

    search(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return true; // Return true if data matches
            }
            current = current.next; // Move to the next node
        }

        return false; // Return false if data not found
    }

    // There can be many different situations that may arise while inserting a node in a linked list. Three most frequent situations are:
    // Inserting a node at the start of the list.
    // Inserting a node after any given node in the list.
    // Inserting a node at the end of the list.

    insertAt(data, position) {
        if (position < 0 || position > this.length) {
            throw new Error("Invalid position");
        }

        const newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous;

            for (let i = 0; i < position; i++) {
                previous = current;
                current = current.next;
            }

            previous.next = newNode;
            newNode.next = current;
        }

        this.length++;
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data;
            current = current.next;
            if (current) {
                result += " -> ";
            }
        }
        console.log(result);
    }
}

module.exports = LinkedList;
// Example usage
// const lList = new LinkedList();