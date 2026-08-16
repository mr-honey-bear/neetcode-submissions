class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a,b)=> a-b);

        let p1=0;
        let p2=people.length -1;
        let boats = 0;
        while(p1 < p2) {
            if (people[p1] == limit) {
                p1++;
            } else if (people[p2] == limit) {
                p2--;
            } else if ((people[p1]+people[p2]) <= limit) {
                p1++;
                p2--;
            } else if ((people[p1]+people[p2]) > limit) {
                p2--;
            } 

            boats++;
        }

        if (p1==p2) {
            boats++;
        }

        return boats;
    }
}
