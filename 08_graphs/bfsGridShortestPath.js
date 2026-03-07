const { Queue } = require("../05_queues/Queue");

/**
 * bfsGridShortestPath(grid)
 * grid: array of strings (rows)
 * Returns number of steps from S to E, or -1 if unreachable.
 *
 * Time: O(R*C)
 * Space: O(R*C)
 */
function bfsGridShortestPath(grid) {
  if (!Array.isArray(grid) || grid.length === 0) return -1;

  const R = grid.length;
  const C = grid[0].length;

  let sr = -1, sc = -1;

  for (let r = 0; r < R; r++) {
    if (grid[r].length !== C) throw new Error("Grid must be rectangular");
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === "S") { sr = r; sc = c; }
    }
  }
  if (sr === -1) throw new Error("Missing S");

  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  visited[sr][sc] = true;

  const q = new Queue();
  q.enqueue([sr, sc, 0]);

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  while (!q.isEmpty()) {
    const [r, c, d] = q.dequeue();
    if (grid[r][c] === "E") return d;

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      if (visited[nr][nc]) continue;
      const cell = grid[nr][nc];
      if (cell === "#") continue;

      visited[nr][nc] = true;
      q.enqueue([nr, nc, d + 1]);
    }
  }

  return -1;
}

module.exports = { bfsGridShortestPath };