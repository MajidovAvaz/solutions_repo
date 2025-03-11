# Problem 1
# Investigating the Range as a Function of the Angle of Projection

## Theoretical Foundation: Equations of Motion

### 1. Governing Equations of Motion
The motion of a projectile follows the fundamental kinematic equations under uniform gravitational acceleration. Assuming no air resistance, the equations for horizontal and vertical motion are:

$$
 x(t) = v_0 \cos(\theta) t
$$

$$
 y(t) = v_0 \sin(\theta) t - \frac{1}{2} g t^2
$$
 
where:
- $v_0$ is the initial velocity,
- $\theta$ is the launch angle,
- $g$ is the acceleration due to gravity,
- $t$ is the time.

### 2. Time of Flight and Range
The total time of flight $T$ is obtained by setting $y(T) = 0$:

$$
 T = \frac{2 v_0 \sin(\theta)}{g}
$$

The range $R$ is the horizontal distance covered:

$$
 R = v_0 \cos(\theta) T = \frac{v_0^2 \sin(2\theta)}{g}
$$

### 3. Family of Solutions
- The range depends on $\sin(2\theta)$, which is maximized at $45^\circ$.
- Different initial velocities $v_0$ and angles lead to a family of possible trajectories.
- Symmetry: The same range is achieved for $\theta$ and $90^\circ - \theta$.

This provides the foundation for analyzing the range as a function of projection angle in simulations.



## Analysis of the Range

### 1. Dependence on Angle of Projection
- The horizontal range $R$ follows the relation:

  $$
  R = \frac{v_0^2 \sin(2\theta)}{g}
  $$

- The range is maximum at $45^\circ$, where $\sin(90^\circ) = 1$.
- Angles $\theta$ and $90^\circ - \theta$ produce the same range due to symmetry.

### 2. Influence of Other Parameters
- **Initial Velocity ($v_0$):**
  - Range increases quadratically with $v_0$, meaning doubling $v_0$ quadruples the range.
- **Gravitational Acceleration ($g$):**
  - Higher gravity reduces range since it shortens time of flight.
  - On the Moon (lower $g$), projectiles travel much farther.

This analysis shows how range depends on key parameters and guides real-world applications such as sports and engineering.



## Practical Applications

### 1. Uneven Terrain
- In real-world scenarios, projectiles often land on slopes or rough surfaces.
- The governing equations can be modified to account for variable ground height $h(x)$.
- Applications include military ballistics and sports science.

### 2. Air Resistance
- The idealized model assumes no drag, but in reality, air resistance significantly affects motion.
- A more realistic equation includes a drag force proportional to velocity:
  $$
  F_d = -kv
  $$
  where $k$ is the drag coefficient.
- This leads to complex differential equations that require numerical solutions.
- Relevant in aerodynamics, meteorology, and spacecraft re-entry calculations.

### 3. Engineering and Astrophysics
- Understanding projectile motion is crucial in designing bridges, launch vehicles, and satellite trajectories.
- Low-gravity environments, such as Mars, influence rover landing dynamics.

These adaptations help bridge theoretical models with real-world applications, making them more accurate and practical.



## Implementation

### 1. Simulation of Projectile Motion
Below is a Python script to simulate projectile motion and visualize the range as a function of projection angle:

```python
import numpy as np
import matplotlib.pyplot as plt

def projectile_range(v0, g=9.81):
    angles = np.linspace(0, 90, 100)  # Angles from 0 to 90 degrees
    ranges = (v0**2 * np.sin(2 * np.radians(angles))) / g
    
    plt.figure(figsize=(8, 5))
    plt.plot(angles, ranges, label=f'v0 = {v0} m/s')
    plt.xlabel("Angle (degrees)")
    plt.ylabel("Range (m)")
    plt.title("Projectile Range vs. Angle of Projection")
    plt.legend()
    plt.grid()
    plt.show()

# Example usage:
projectile_range(v0=20)
```

### 2. Visualization
- The plot generated shows how the range varies with the launch angle.
- The maximum range occurs at $45^\circ$.
- Changing initial velocity $v_0$ shifts the curve but maintains the same pattern.

This computational tool helps visualize how projectile range behaves under different conditions, offering insights for engineering and physics applications.