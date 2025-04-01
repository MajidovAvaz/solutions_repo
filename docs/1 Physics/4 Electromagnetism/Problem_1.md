# Problem 1
# **Equivalent Resistance Calculation Using Graph Theory**

## **1. Introduction**
Calculating the equivalent resistance of an electrical circuit is crucial for circuit analysis. Traditional methods rely on identifying **series** and **parallel** resistor combinations, but these can become inefficient for complex circuits. **Graph theory** provides a structured approach by modeling the circuit as a graph where:
- **Nodes** represent junctions in the circuit.
- **Edges** represent resistors with weights corresponding to their resistance values.

The algorithm iteratively simplifies the graph until a single equivalent resistance is obtained.

---

## **2. Algorithm Description**
The algorithm follows these steps:

1. **Model the Circuit as a Graph:**
   - Represent each junction as a node.
   - Represent each resistor as a weighted edge.

2. **Detect Series Connections:**
   - If a node has exactly **two connections**, the resistors are in **series**.
   - Replace the two resistors with an equivalent resistance:
     $$ R_{eq} = R_1 + R_2 $$
   - Remove the intermediate node.

3. **Detect Parallel Connections:**
   - If multiple resistors connect the **same two nodes**, they are in **parallel**.
   - Replace them with an equivalent resistance:
     $$ \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ... + \frac{1}{R_n} $$

4. **Iterate Until a Single Equivalent Resistance Remains:**
   - Repeat the above steps until the graph is reduced to a **single equivalent resistor**.
   
5. **Handle Nested Combinations:**
   - The algorithm processes simpler series/parallel groups first.
   - Uses **recursive** or **iterative graph traversal** (e.g., Depth-First Search) to identify and reduce nested configurations.

---

## **3. Pseudocode**
```python
function calculate_equivalent_resistance(graph):
    while graph has more than one node:
        for each node in graph:
            if node has exactly two connections:
                # Series Reduction
                R_eq = sum of series resistances
                merge nodes and update graph
            
        for each pair of nodes with multiple connections:
            # Parallel Reduction
            R_eq = (1 / sum of (1 / resistances))
            replace parallel resistors with R_eq
    
    return final equivalent resistance
```

---



