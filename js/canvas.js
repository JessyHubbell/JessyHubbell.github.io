window.onload = function () {
    const canvas = document.getElementById('smokeCanvas');
    if (!canvas) {
        console.error('Canvas not found!');
        return;
    }

    const ctx = canvas.getContext('2d');

    let emitters = [];
    let absoluteEmitters = [];

    // 🟢 Return different emitter positions based on screen width
    function getEmittersForScreenWidth() {
        const width = window.innerWidth;

        if (width < 600) {
            return [
                { relX: 0.3, relY: 0.75 },
                { relX: 0.5, relY: 0.7 }
            ];
        } else if (width < 1024) {
            return [
                { relX: 0.35, relY: 0.73 },
                { relX: 0.45, relY: 0.68 },
                { relX: 0.7, relY: 0.75 }
            ];
        } else {
            return [
                { relX: 0.38, relY: 0.72 },
                { relX: 0.5, relY: 0.66 },
                { relX: 0.68, relY: 0.74 }
            ];
        }
    }

    // 🔧 Converts relative % emitters to absolute canvas positions
    function updateAbsoluteEmitters() {
        absoluteEmitters = emitters.map(e => ({
            x: canvas.width * e.relX,
            y: canvas.height * e.relY
        }));
    }

    // 🎯 Resizes the canvas and updates emitter positions
    function resizeCanvas() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        emitters = getEmittersForScreenWidth(); // dynamically chosen
        updateAbsoluteEmitters();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 🔥 Particle System
    let particles = [];

    function createParticle(emitter) {
        const x = emitter.x + (Math.random() - 0.5) * 20;
        const y = emitter.y;
        const size = Math.random() * 10 + 5;
        const speedY = Math.random() * -0.8 - 0.2;
        const speedX = (Math.random() - 0.5) * 0.5;
        const opacity = Math.random() * 0.3 + 0.4;
        const angle = 0;
        const angleSpeed = (Math.random() - 0.5) * 0.02;
        return { x, y, size, speedX, speedY, opacity, angle, angleSpeed };
    }

    function updateParticles() {
        particles.forEach(p => {
            p.x += p.speedX + Math.sin(p.angle) * 0.3;
            p.y += p.speedY;
            p.angle += p.angleSpeed;
            p.opacity -= 0.0015;
        });
        particles = particles.filter(p => p.opacity > 0);
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
            ctx.fill();
        });
    }

    function animate() {
        absoluteEmitters.forEach(emitter => {
            if (particles.length < 600) {
                particles.push(createParticle(emitter));
            }
        });
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    animate();
};
