import React, { Component } from 'react'

export class index extends Component {
    componentDidMount() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let cw = canvas.width = window.innerWidth;
        let ch = canvas.height = window.innerHeight;
        const rand = (min, max) => (min + Math.random() * (max - min));
        class SpeedLine {
            constructor(x, y) {
                this.x = x;
                this.y = y;

                this.speed = rand(1, 2);
                this.life = this.curLife = rand(500, 900);
                this.alpha = rand(0.25, 0.3);
                this.angle = Math.PI * rand(0, 2);
                this.size = rand(2, 4);
                this.inRadius = rand(50, 300);
                this.outRadius = cw;
            }

            update() {
                this.curLife -= this.speed;
                this.inRadius += this.speed * 4;

                this.alpha *= (this.curLife / this.life);
                this.size *= (this.curLife / this.life);

                this.draw();
            }

            draw() {
                const { x, y, size, angle, alpha } = this,
                    { inRadius, outRadius } = this;

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);

                ctx.beginPath();
                ctx.moveTo(0, inRadius);
                ctx.lineTo(size, outRadius);
                ctx.lineTo(-size, outRadius);
                ctx.closePath();

                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
                ctx.restore();
            }
        }
        // Animation
        const lines = [];
        const MAX_LINES = 300;
        function updateLines() {
            lines.forEach((line, i) => {
                if (!line || line.curLife < 0) lines[i] = new SpeedLine(cw / 2, ch / 2);
                lines[i].update();
            });
        }
        for (let i = 0; i < MAX_LINES; i++) {
            lines[i] = new SpeedLine(cw / 2, ch / 2);
        }
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, cw, ch);
            updateLines();
        }
        animate();
        // Resize
        window.addEventListener('resize', () => {
            cw = canvas.width = window.innerWidth;
            ch = canvas.height = window.innerHeight;
            updateLines();
        });
    }
    render() {
        return (
            <div>
                <canvas id='canvas' />
            </div>
        )
    }
}

export default index
