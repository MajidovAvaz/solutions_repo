# Problem 2
# **Task 1. Cosmic Velocities: Definitions and Meanings**

## **1. First Cosmic Velocity (Orbital Velocity)**

The **first cosmic velocity** is the **minimum velocity** required for an object to stay in a **stable circular orbit** around a celestial body. It is given by:

$$
v_1 = \sqrt{\frac{G M}{R}}
$$

- **$G$**: Gravitational constant ($6.674 \times 10^{-11} \, \text{m}^3 \text{kg}^{-1} \text{s}^{-2}$)
- **$M$**: Mass of the celestial body
- **$R$**: Radius from the center of the celestial body

🔹 **Example**: A satellite in **low Earth orbit** (~300 km altitude) moves at **~7.9 km/s**.

---

## **2. Second Cosmic Velocity (Escape Velocity)**
The **second cosmic velocity** is the **minimum velocity** needed to **break free** from a planet's gravity **without further propulsion**. It is derived from energy conservation:

$$
v_2 = \sqrt{\frac{2 G M}{R}}
$$

🔹 **Example**: Earth’s **escape velocity** is **~11.2 km/s**.

- **If $v < v_2$**: The object falls back.
- **If $v = v_2$**: The object reaches infinity but with zero velocity.
- **If $v > v_2$**: The object moves into **hyperbolic orbit**.

---

## **3. Third Cosmic Velocity (Solar System Escape Velocity)**
The **third cosmic velocity** is the **minimum speed** needed to escape the **Sun’s gravitational field** from Earth’s orbit. It is given by:

$$
v_3 = \sqrt{v_2^2 + v_{\text{orb}}^2}
$$

where:
- **$v_2$** is Earth’s escape velocity **(11.2 km/s)**.
- **$v_{\text{orb}}$** is Earth's orbital speed **(29.8 km/s)**.

🔹 **Example**: The **third cosmic velocity** from Earth is **~42.1 km/s**, used by interstellar missions like **Voyager 1 & 2**.

---

## **4. Summary of Cosmic Velocities**
| Cosmic Velocity | Meaning | Formula | Example (Earth) |
|-----------------|---------|---------|----------------|
| **First ($v_1$)** | Orbiting velocity | $\sqrt{G M / R}$ | **7.9 km/s** |
| **Second ($v_2$)** | Escape velocity | $\sqrt{2 G M / R}$ | **11.2 km/s** |
| **Third ($v_3$)** | Solar escape velocity | $\sqrt{v_2^2 + v_{\text{orb}}^2}$ | **42.1 km/s** |




# **Task 2. Mathematical Analysis of Cosmic Velocities**

## **1. First Cosmic Velocity ($v_1$) – Orbital Velocity**
The first cosmic velocity is derived from the **centripetal force equation**:

$$
F_c = \frac{m v_1^2}{R}
$$

which must balance the **gravitational force**:

$$
F_g = \frac{G M m}{R^2}
$$

Setting $F_c = F_g$:

$$
\frac{m v_1^2}{R} = \frac{G M m}{R^2}
$$

Canceling **$m$** and solving for $v_1$:

$$
v_1 = \sqrt{\frac{G M}{R}}
$$

### **Parameters Affecting $v_1$**
- **Mass ($M$) of the celestial body**: Higher mass increases velocity.
- **Radius ($R$) of orbit**: Higher altitude lowers velocity.

🔹 **Example**: A satellite in **low Earth orbit (~300 km)** moves at **7.9 km/s**.

---

## **2. Second Cosmic Velocity ($v_2$) – Escape Velocity**
Derived from **energy conservation**:

- **Kinetic Energy at launch**:  
  $$
  KE = \frac{1}{2} m v_2^2
  $$
- **Gravitational Potential Energy**:  
  $$
  PE = -\frac{G M m}{R}
  $$

For escape, total energy must be **zero**:

$$
\frac{1}{2} m v_2^2 - \frac{G M m}{R} = 0
$$

Solving for $v_2$:

$$
v_2 = \sqrt{\frac{2 G M}{R}}
$$

### **Parameters Affecting $v_2$**
- **Mass ($M$)**: Higher mass increases escape velocity.
- **Radius ($R$)**: A larger radius decreases escape velocity.

🔹 **Example**: **Earth’s escape velocity** = **11.2 km/s**.

---

## **3. Third Cosmic Velocity ($v_3$) – Solar System Escape Velocity**
To **leave the Solar System**, an object must escape **both Earth's gravity and the Sun's gravity**. The total velocity required is:

$$
v_3 = \sqrt{v_2^2 + v_{\text{orb}}^2}
$$

where:
- $v_2$ = **Earth’s escape velocity (11.2 km/s)**
- $v_{\text{orb}}$ = **Earth’s orbital speed (29.8 km/s)**

### **Parameters Affecting $v_3$**
- **Sun’s gravity**: A stronger gravitational pull increases $v_3$.
- **Initial position**: The farther from the Sun, the lower the required $v_3$.

🔹 **Example**: **Voyager 1** achieved **~42.1 km/s** to escape the Solar System.

---

## **4. Summary of Velocity Dependence**
| Velocity | Formula | Mass ($M$) | Radius ($R$) | Orbital Speed ($v_{\text{orb}}$) |
|----------|---------|------------|--------------|-----------------|
| **First ($v_1$)** | $\sqrt{G M / R}$ | 🔼 Increases | 🔽 Decreases | ❌ Not required |
| **Second ($v_2$)** | $\sqrt{2 G M / R}$ | 🔼 Increases | 🔽 Decreases | ❌ Not required |
| **Third ($v_3$)** | $\sqrt{v_2^2 + v_{\text{orb}}^2}$ | 🔼 Increases | 🔽 Decreases | 🔼 Increases |

---





