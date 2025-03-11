# Problem 2
# Theoretical Foundation: Forced Damped Pendulum

## Governing Equation

The motion of a **forced damped pendulum** is described by:

$$
\frac{d^2\theta}{dt^2} + b \frac{d\theta}{dt} + \frac{g}{L} \sin\theta = A \cos(\omega t)
$$

where:
- $b$ is the damping coefficient,
- $g/L$ represents the natural oscillation frequency,
- $A \cos(\omega t)$ is the external periodic force.

## Small-Angle Approximation

For small angles ($\theta \approx 0$), we use the approximation $\sin\theta \approx \theta$, simplifying the equation to:

$$
\frac{d^2\theta}{dt^2} + b \frac{d\theta}{dt} + \frac{g}{L} \theta = A \cos(\omega t)
$$

This reduces the system to a **linear differential equation**, which can be solved analytically.

## Resonance and Energy Implications

- **Natural Frequency:**  
  $$
  \omega_0 = \sqrt{g/L}
  $$
- **Resonance Condition:**  
  When the driving frequency $\omega$ matches $\omega_0$, the system experiences **resonance**, leading to **large oscillations**.
- **Damping Effects:**  
  Higher damping ($b$) reduces oscillation amplitude and prevents unbounded energy growth.

This provides the foundation for further numerical simulations, where we analyze behavior beyond the small-angle approximation.




# Analysis of Dynamics

## Influence of Parameters on Motion

The behavior of the **forced damped pendulum** depends on key parameters:

1. **Damping Coefficient ($b$)**  
   - Higher damping reduces oscillations and eventually brings the pendulum to rest.  
   - Lower damping allows sustained motion and can lead to resonance effects.  

2. **Driving Amplitude ($A$)**  
   - Small $A$ results in steady periodic motion.  
   - Large $A$ can induce irregular motion, leading to chaotic behavior.  

3. **Driving Frequency ($\omega$)**  
   - When $\omega \approx \omega_0$ (natural frequency), resonance occurs, amplifying oscillations.  
   - At non-resonant frequencies, motion remains stable but varies in amplitude.  

## Transition from Regular to Chaotic Motion

- At **low driving forces**, the pendulum follows predictable periodic motion.  
- Increasing $A$ or adjusting $\omega$ can introduce **nonlinear effects**, where motion becomes **quasi-periodic** or **chaotic**.  
- **Chaotic motion** means small differences in initial conditions lead to drastically different trajectories, making long-term prediction impossible.  

### **Physical Interpretation**
- **Regular motion** is seen in **clocks and metronomes** where precise oscillations are required.  
- **Chaotic behavior** appears in **weather systems, electrical circuits, and biological rhythms**, where nonlinearity dominates.  

Next, we simulate these behaviors numerically to visualize the transition between order and chaos. 🚀
