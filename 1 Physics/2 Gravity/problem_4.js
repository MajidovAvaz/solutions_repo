// Task 4: Payload Motion Simulation

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

// Constants
const G = 6.67430e-11; // Gravitational constant (m^3/kg/s^2)
const EarthMass = 5.972e24; // Mass of Earth (kg)
const EarthRadius = 6371000; // Radius of Earth (m)
const scale = 1e-6; // Scale factor for visualization

// Payload object
let payload = {
    x: canvas.width / 2,
    y: canvas.height / 2 - 100, // Start above Earth
    vx: 7500, // Initial velocity in m/s (adjustable)
    vy: 0,
    ax: 0,
    ay: 0,
    mass: 500 // Payload mass (kg)
};

// Simulation loop
function updatePhysics() {
    let dx = payload.x - canvas.width / 2;
    let dy = payload.y - canvas.height / 2;
    let distance = Math.sqrt(dx * dx + dy * dy) / scale;

    if (distance < EarthRadius) {
        alert("Payload has crashed into Earth!");
        return;
    }

    let force = (G * EarthMass * payload.mass) / (distance * distance);
    let angle = Math.atan2(dy, dx);
    payload.ax = -force * Math.cos(angle) / payload.mass;
    payload.ay = -force * Math.sin(angle) / payload.mass;

    payload.vx += payload.ax;
    payload.vy += payload.ay;
    payload.x += payload.vx * scale;
    payload.y += payload.vy * scale;
}

// Drawing function
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Earth
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, EarthRadius * scale, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    
    // Draw Payload
    ctx.beginPath();
    ctx.arc(payload.x, payload.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
}

// Animation loop
function animate() {
    updatePhysics();
    draw();
    requestAnimationFrame(animate);
}

animate();
