/**
 * dfsTraversal(graph, start)
 * Returns array of nodes visited in DFS order.
 *
 * Time: O(V + E)
 * Space: O(V) (visited + recursion stack)
 */
function dfsTraversal(graph, start) {
  if (!graph || typeof graph !== "object") throw new TypeError("graph must be an object");
  if (!(start in graph)) return [];

  const visited = new Set();
  const out = [];

  function dfs(node) {
    visited.add(node);
    out.push(node);
    for (const nei of graph[node]) {
      if (!visited.has(nei)) dfs(nei);
    }
  }

  dfs(start);
  return out;
}

module.exports = { dfsTraversal };