# Practicing-algorithms
Differents algorithms in differents languages to learn better. (Main languages are going to be JS, C and Zig)

LEVEL 0 — Foundations (How the machine “thinks”)

These map directly to CPU operations and memory access.

1. Linear Search
2. Sum / Max / Min in array
3. Reverse array/string
4. Frequency counter (count characters)
5. Two pointers (palindrome check)

Why first:

Loops

Sequential memory access

Time complexity intuition

Branching

This is how CPUs naturally process memory: sequential scans.

LEVEL 1 — Arrays & Indexing (Memory model awareness)
6. Binary Search
7. Lower bound / Upper bound
8. Prefix sums
9. Sliding window
10. Rotate array

Why this matters:

Teaches cache-friendly access

Logarithmic thinking

Off-by-one control

Index math (critical for C/Zig later)

LEVEL 2 — Stacks & Queues (Control flow modeling)
11. Valid parentheses
12. Min stack
13. Next greater element
14. Implement stack using array
15. Implement queue using array

Why this matters:
Stacks model:

function calls

recursion

memory frames

expression parsing

Queues model:

task scheduling

buffering

async systems

LEVEL 3 — Hashing (How computers trade memory for speed)
16. Two sum (hashmap)
17. Duplicate detection
18. Anagram check
19. Group anagrams
20. Simple hash table implementation

Why important:

Hash tables are everywhere:

databases

caches

symbol tables

compilers

This level teaches:

collision logic

average vs worst case

memory vs speed tradeoffs

LEVEL 4 — Sorting (CPU + cache + algorithmic complexity)
21. Bubble sort (for learning only)
22. Insertion sort
23. Merge sort
24. Quick sort
25. Heap sort

Why sorting is critical:

Sorting teaches:

recursion

divide-and-conquer

memory allocation patterns

branch prediction behavior

cache locality

Merge sort vs Quick sort is a real-world systems topic.

LEVEL 5 — Linked Structures (Pointer thinking)
26. Singly linked list
27. Reverse linked list
28. Detect cycle (Floyd’s algorithm)
29. Merge two lists
30. Implement linked list from scratch

Why this matters:

This prepares you for:

pointer arithmetic in C

heap allocation

fragmentation concepts

memory safety issues

LEVEL 6 — Trees (Hierarchical memory models)
31. Binary tree traversal (DFS)
32. BFS traversal
33. Height of tree
34. Lowest common ancestor
35. Binary Search Tree insert/search

Why trees matter:

Trees appear in:

file systems

DOM

compilers

databases

indexes

LEVEL 7 — Graphs (Real systems modeling)
36. BFS
37. DFS
38. Shortest path (Dijkstra)
39. Topological sort
40. Cycle detection

Why this is huge:

Graphs model:

networks

dependencies

routing

social networks

OS scheduling

LEVEL 8 — Recursion & Backtracking (Stack mastery)
41. Permutations
42. Subsets
43. N-Queens
44. Maze solver
45. Sudoku solver

Why this matters:

Teaches:

call stack behavior

exponential growth

pruning techniques

This is directly tied to stack frames in assembly.

LEVEL 9 — Dynamic Programming (Memory optimization)
46. Fibonacci (memoized)
47. Knapsack
48. Longest common subsequence
49. Coin change
50. Edit distance

Why this is advanced:

DP teaches:

caching subproblems

space/time tradeoffs

table memory layouts

optimization strategies used in compilers and AI

LEVEL 10 — Systems-flavored algorithms (Optional elite tier)

Only after C/Zig:

51. Memory allocator (free list)
52. Ring buffer
53. LRU cache
54. Bloom filter
55. Thread-safe queue (later)
