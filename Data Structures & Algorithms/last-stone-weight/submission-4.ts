class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let heap = new MaxHeap(stones);

        while(heap.size > 1) {
            let stone1 = heap.pop();
            let stone2 = heap.pop();

            if (stone1 == stone2) {
                continue;
            }
            else if (stone1 > stone2) {
                heap.push((stone1-stone2));
            }
        }

        return heap.pop() || 0;

    }
}

class MaxHeap {
    list: number[];

    constructor(list) {
        this.list = list;
        this.heapify();
    }

    heapify(): void {
        this.list = this.list.sort((a,b) => b-a);
    }

    pop(): number {
        return this.list.shift();
    }

    push(el): void {
        this.list.push(el);
        this.heapify();
    }

    get size(): number {
        return this.list.length;
    }
}
