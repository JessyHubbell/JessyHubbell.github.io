window.onload = function () {
    const canvas = document.getElementById('myCanvas');
    if (!canvas.getContext) {
        alert("Canvas not supported");
        return;
    }

    const context = canvas.getContext('2d');
    const particles = [];
    const particleCount = 60;
    const maxVelocityX = 0.5;
    const minVelocityY = -2;
    const maxVelocityY = -1;
    const targetFPS = 33;

    let smokeScale = 1.0;

    const imageObj = new Image();
    imageObj.onload = function () {
        particles.forEach(p => p.setImage(imageObj));
    };
    imageObj.src = "img/Smoke10.png"; // Replace with your local image path

    const steamSources = [
        { xRatio: 0.35, yRatio: 0.75, density: 0.2, spread: 1 },
        { xRatio: 0.45, yRatio: 0.70, density: 0.4, spread: 20 },
        { xRatio: 0.70, yRatio: 0.78, density: 0.2, spread: 1 }
    ];

    let mouseX = null;
    let mouseY = null;

    canvas.addEventListener('mousemove', function (e) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', function () {
        mouseX = null;
        mouseY = null;
    });

    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        if (window.innerWidth < 800) {
            smokeScale = 0.4;
        } else if (window.innerWidth < 1200) {
            smokeScale = 0.6;
        } else {
            smokeScale = 1.0;
        }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function Particle(context) {
        this.x = 0;
        this.y = 0;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.radius = 5;
        this.context = context;
        this.life = 1;
        this.fade = Math.random() * 0.01 + 0.003;
        this.personalScale = generateRandom(0.85, 1.15); // slight variation

        this.draw = function () {
            const growth = (1 - this.life); // gets larger as it fades
            const size = 128 * smokeScale * this.personalScale * growth;

            if (this.image) {
                this.context.globalAlpha = this.life;
                this.context.drawImage(this.image, this.x - size / 2, this.y - size / 2, size, size);
                this.context.globalAlpha = 1;
                return;
            }

            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius * smokeScale * this.personalScale * growth, 0, 2 * Math.PI);
            this.context.fillStyle = `rgba(255, 255, 255, ${this.life})`;
            this.context.fill();
        };

        this.update = function () {
            this.x += this.xVelocity;
            this.y += this.yVelocity;
            this.life -= this.fade;

            // Cursor interaction
            if (mouseX !== null && mouseY !== null) {
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const influenceRadius = 100;

                if (dist < influenceRadius) {
                    const force = (influenceRadius - dist) / influenceRadius;
                    this.xVelocity += (dx / dist) * force * 0.5;
                    this.yVelocity += (dy / dist) * force * 0.5;
                }
            }

            if (this.life <= 0) {
                const origin = getStreamOrigin();
                this.setPosition(origin.x, origin.y);
                this.setVelocity(generateRandom(-maxVelocityX, maxVelocityX), generateRandom(minVelocityY, maxVelocityY));
                this.life = 1;
            }
        };

        this.setPosition = (x, y) => { this.x = x; this.y = y; };
        this.setVelocity = (x, y) => { this.xVelocity = x; this.yVelocity = y; };
        this.setImage = image => { this.image = image; };
    }

    function generateRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function weightedRandomSource() {
        const total = steamSources.reduce((sum, src) => sum + src.density, 0);
        let r = Math.random() * total;
        for (const src of steamSources) {
            if (r < src.density) return src;
            r -= src.density;
        }
        return steamSources[0]; // fallback
    }

    function getStreamOrigin() {
        const source = weightedRandomSource();
        return {
            x: canvas.width * source.xRatio + generateRandom(-source.spread, source.spread),
            y: canvas.height * source.yRatio + generateRandom(-5, 5)
        };
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const p = new Particle(context);
        const origin = getStreamOrigin();
        p.setPosition(origin.x, origin.y);
        p.setVelocity(generateRandom(-maxVelocityX, maxVelocityX), generateRandom(minVelocityY, maxVelocityY));
        particles.push(p);
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => p.draw());
    }

    function update() {
        particles.forEach(p => p.update());
    }

    setInterval(() => {
        update();
        draw();
    }, 1000 / targetFPS);
};
