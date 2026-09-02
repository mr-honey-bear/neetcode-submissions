class Solution {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        let graph: { [key: number]: number[] } = {};

        for (let course = 0; course < numCourses; course++) {
            graph[course] = [];
        }

        for (let [course, pre] of prerequisites) {
            graph[course].push(pre);
        }

        // Tracks courses in the CURRENT path to detect real cycles
        let visiting = new Set<number>();

        let dfs = (course: number): boolean => {
            // If the course is in the current active path, we found a cycle
            if (visiting.has(course)) {
                return false;
            }
            
            // If the course has no prerequisites, it's safe to take
            if (graph[course].length === 0) {
                return true;
            }

            visiting.add(course); // Add to active path

            for (let pre of graph[course]) {
                if (!dfs(pre)) {
                    return false; // Cycle detected deeper in the recursion
                }
            }

            visiting.delete(course); // Remove from active path as we backtrack

            // Optimization: clear prerequisites so we don't re-process this course
            graph[course] = [];
            
            return true;
        }

        for (let course = 0; course < numCourses; course++) {
            if (!dfs(course)) {
                return false;
            }
        }

        return true;
    }
}
