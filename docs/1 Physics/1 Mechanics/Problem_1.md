# Problem 1
# Investigating the Range as a Function of the Angle of Projection


Task 1. Theoretical Foundation:
## 1. Theoretical Foundation
Projectile motion equations:
- Horizontal: 
$$ x = v_0 \cos(\theta) t $$
- Vertical: 
$$ y = v_0 \sin(\theta) t - \frac{1}{2} g t^2 $$

Range formula:
\[ R = \frac{v_0^2 \sin(2\theta)}{g} \]

## 2. Python Simulation
```python
import numpy as np
import matplotlib.pyplot as plt

g = 9.81  # gravity (m/s^2)
v0 = 20   # velocity (m/s)
angles = np.linspace(0, 90, 100)
ranges = (v0**2 * np.sin(2 * np.radians(angles))) / g

plt.plot(angles, ranges)
plt.xlabel('Angle (°)')
plt.ylabel('Range (m)')
plt.title('Range vs. Angle')
plt.grid()
plt.show()
```




Task 2. Analysis of the Range:
## 1. Theoretical Foundation
Projectile motion equations:
- Horizontal: \( x = v_0 \cos(\theta) t \)
- Vertical: \( y = v_0 \sin(\theta) t - \frac{1}{2} g t^2 \)

Range formula:
\[ R = \frac{v_0^2 \sin(2\theta)}{g} \]

## 2. Python Simulation
```python
import numpy as np
import matplotlib.pyplot as plt

def compute_range(v0, g, angles):
    return (v0**2 * np.sin(2 * np.radians(angles))) / g

g = 9.81  # gravity (m/s^2)
v0_values = [10, 20, 30]  # Different initial velocities
angles = np.linspace(0, 90, 100)

g_values = [1.62, 9.81, 24.79]  # Moon, Earth, Jupiter
labels = ['Moon', 'Earth', 'Jupiter']

plt.figure(figsize=(8, 5))
for v0 in v0_values:
    ranges = compute_range(v0, g, angles)
    plt.plot(angles, ranges, label=f'v0 = {v0} m/s')
plt.xlabel('Angle (°)')
plt.ylabel('Range (m)')
plt.title('Range vs. Angle for Different Initial Velocities')
plt.legend()
plt.grid()
plt.show()

plt.figure(figsize=(8, 5))
for g_val, label in zip(g_values, labels):
    ranges = compute_range(20, g_val, angles)
    plt.plot(angles, ranges, label=f'g = {label}')
plt.xlabel('Angle (°)')
plt.ylabel('Range (m)')
plt.title('Range vs. Angle for Different Gravitational Accelerations')
plt.legend()
plt.grid()
plt.show()
```




Task 3. Practical Applications:
## 1. Theoretical Foundation
Projectile motion equations:
- Horizontal: \( x = v_0 \cos(\theta) t \)
- Vertical: \( y = v_0 \sin(\theta) t - \frac{1}{2} g t^2 \)

Range formula:
\[ R = \frac{v_0^2 \sin(2\theta)}{g} \]

## 2. Python Simulation
```python
import numpy as np
import matplotlib.pyplot as plt

def compute_range(v0, g, angles):
    return (v0**2 * np.sin(2 * np.radians(angles))) / g

g = 9.81  # gravity (m/s^2)
v0_values = [10, 20, 30]  # Different initial velocities
angles = np.linspace(0, 90, 100)

g_values = [1.62, 9.81, 24.79]  # Moon, Earth, Jupiter
labels = ['Moon', 'Earth', 'Jupiter']

plt.figure(figsize=(8, 5))
for v0 in v0_values:
    ranges = compute_range(v0, g, angles)
    plt.plot(angles, ranges, label=f'v0 = {v0} m/s')
plt.xlabel('Angle (°)')
plt.ylabel('Range (m)')
plt.title('Range vs. Angle for Different Initial Velocities')
plt.legend()
plt.grid()
plt.show()

plt.figure(figsize=(8, 5))
for g_val, label in zip(g_values, labels):
    ranges = compute_range(20, g_val, angles)
    plt.plot(angles, ranges, label=f'g = {label}')
plt.xlabel('Angle (°)')
plt.ylabel('Range (m)')
plt.title('Range vs. Angle for Different Gravitational Accelerations')
plt.legend()
plt.grid()
plt.show()
```

## 3. Analysis of the Range
- **Effect of Angle**: The range peaks at \( 45^\circ \) and is symmetric about this point.
- **Effect of Initial Velocity**: Higher velocity \( v_0 \) increases the range as \( R \propto v_0^2 \).
- **Effect of Gravity**: Lower gravity (e.g., Moon) results in a longer range, while higher gravity (e.g., Jupiter) shortens it.




Task 4. Implementation:
# Simulating projectile motion with air resistance
```python
def projectile_motion(v0, angle, g, drag_coefficient=0):
    from scipy.integrate import solve_ivp
    
    angle_rad = np.radians(angle)
    vx0, vy0 = v0 * np.cos(angle_rad), v0 * np.sin(angle_rad)
    
    def equations(t, y):
        vx, vy = y[2], y[3]
        speed = np.sqrt(vx**2 + vy**2)
        drag = drag_coefficient * speed
        return [vx, vy, -drag * vx, -g - drag * vy]
    
    sol = solve_ivp(equations, [0, 5], [0, 0, vx0, vy0], dense_output=True)
    t = np.linspace(0, sol.t_events[0] if sol.t_events else 5, num=100)
    x, y = sol.sol(t)[0], sol.sol(t)[1]
    return x, y

angles = [30, 45, 60]
plt.figure(figsize=(8, 5))
for angle in angles:
    x, y = projectile_motion(20, angle, 9.81, drag_coefficient=0.01)
    plt.plot(x, y, label=f'Angle = {angle}°')
plt.xlabel('Horizontal Distance (m)')
plt.ylabel('Vertical Distance (m)')
plt.title('Projectile Motion with Air Resistance')
plt.legend()
plt.grid()
plt.show()
```
