class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {

        let heap = new MaxHeap(stones);
        
        while (heap.size > 1) {
            let el1 = heap.pop();
            let el2 = heap.pop();

            if (el1 == el2) {
                continue;
            } else {
                heap.push((el1-el2));
            }
        }

        return heap.pop() || 0;
    }
}

class MaxHeap {
    list: number[]

    constructor(arr: number[]) {
        this.list = arr;
        this.heapify();
    } 
    
    heapify() {
        this.list.sort((a,b) => b-a);
    }

    push(el: number) {
        this.list.push(el);
        this.heapify();
    }

    pop(): number {
        let el = this.list.shift();
        this.heapify();
        return el;
    }

    get size(): number {
        return this.list.length;
    }
 }
