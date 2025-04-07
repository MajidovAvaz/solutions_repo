# Problem 1
# **1. Simulating Sampling Distributions**

## **Selected Population Distributions**

We'll use the following types:

- **Uniform Distribution** (e.g., between 0 and 1)
- **Exponential Distribution** (e.g., scale = 1.0)
- **Binomial Distribution** (e.g., $n = 10$, $p = 0.5$)

---

## **Python Code to Generate Populations**

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set random seed for reproducibility
np.random.seed(42)

# Population sizes
pop_size = 100000

# Generate populations
uniform_pop = np.random.uniform(0, 1, pop_size)
exponential_pop = np.random.exponential(scale=1.0, size=pop_size)
binomial_pop = np.random.binomial(n=10, p=0.5, size=pop_size)

# Plot each distribution
plt.figure(figsize=(15, 4))

# Uniform
plt.subplot(1, 3, 1)
sns.histplot(uniform_pop, kde=True, bins=50, color='skyblue')
plt.title("Uniform Distribution")

# Exponential
plt.subplot(1, 3, 2)
sns.histplot(exponential_pop, kde=True, bins=50, color='orange')
plt.title("Exponential Distribution")

# Binomial
plt.subplot(1, 3, 3)
sns.histplot(binomial_pop, kde=True, bins=50, color='green')
plt.title("Binomial Distribution")

plt.tight_layout()
plt.show()
```
![alt text](image.png)




# **2. Sampling and Visualization**

## **Sampling Strategy**

- Choose different sample sizes: **5, 10, 30, 50**
- Draw many random samples (e.g., 1000 samples per size)
- Calculate the **sample mean** for each sample
- Plot the distribution of sample means

---

## **Python Code for Sampling and Plotting**

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Define population (you can change this to uniform_pop, exponential_pop, etc.)
population = np.random.exponential(scale=1.0, size=100000)

# Sample sizes to test
sample_sizes = [5, 10, 30, 50]
num_samples = 1000  # Repetitions per sample size

# Set up plot
plt.figure(figsize=(15, 8))

for i, n in enumerate(sample_sizes):
    sample_means = []
    for _ in range(num_samples):
        sample = np.random.choice(population, size=n)
        sample_means.append(np.mean(sample))
    
    # Plot histogram of sample means
    plt.subplot(2, 2, i+1)
    sns.histplot(sample_means, kde=True, bins=30, color='purple')
    plt.title(f'Sample Size = {n}')
    plt.xlabel('Sample Mean')
    plt.ylabel('Frequency')

plt.tight_layout()
plt.suptitle("Sampling Distributions of the Mean", y=1.02, fontsize=16)
plt.show()
```
![alt text](image-1.png)