class ListNode {
    prev: ListNode; 
    next: ListNode; 
    key: number; 
    value: number
    
    constructor(key: number = null, value: number = null) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity: number;
    cache: Map<number, ListNode>;
    head: ListNode; 
    tail: ListNode; 
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        //dummy nodes (head.tail)
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node: ListNode) {
        const prev = node.prev;
        const next = node.next;
        next.prev = prev;
        prev.next = next;
    }

    insert(node: ListNode) {
        let prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev= node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new ListNode(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
