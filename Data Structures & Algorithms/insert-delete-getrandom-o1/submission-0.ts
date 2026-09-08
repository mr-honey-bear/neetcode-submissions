class RandomizedSet {
    size: number
    numMap:Map<number,number>;
    constructor() {
        this.numMap = new Map();
        this.size = 0;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.numMap.has(val)) return false;
        this.numMap.set(val, 1);
        this.size++;
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.numMap.has(val)) return false;
        this.numMap.delete(val);
        this.size--;
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const keys = Array.from(this.numMap.keys());
        const idx = Math.floor(Math.random() * this.size);
        return keys[idx];
    }
}