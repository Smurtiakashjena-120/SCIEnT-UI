import React, { useEffect, useRef, useState } from 'react';
import bottleImageSrc from '/astro.webp';
import logoImage from '/nitt.png';
import '../App.css';

const Landing = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const astroImg = useRef(null);
    const logoImg = useRef(null);
    const startTimeRef = useRef(Date.now());
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadedLogo, setIsLoadedLogo] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        const setup = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            starsRef.current = [];
            for (let i = 0; i < 500; i++) {
                starsRef.current.push(new Star(width, height));
            }

            const img = new Image();
            img.src = bottleImageSrc;
            img.onload = () => {
                astroImg.current = img;
                setIsLoaded(true);
                draw();
            };

            const logo = new Image();
            logo.src = logoImage;
            logo.onload = () => {
                logoImg.current = logo;
                setIsLoadedLogo(true);
                draw();
            };
        };

        const drawBottle = () => {
            const bottleX = width - 550; 
            const bottleHeight = 550;
            const bottleWidth = 400;

            const time = (Date.now() - startTimeRef.current) / 1000; 
            const amplitude = 20; 
            const frequency = 0.15; 

            const bottleY = height / 2 - 275 + amplitude * Math.sin(frequency * time * 2 * Math.PI);

            ctx.drawImage(astroImg.current, bottleX, bottleY, bottleWidth, bottleHeight);
        };
        const drawLogo = () => {
            const logoX = width - 150; 
            const logoHeight = 100;
            const logoWidth = 100;
            const logoY =30



            ctx.drawImage(logoImg.current, logoX, logoY, logoWidth, logoHeight);
        };

        const draw = () => {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, width, height);

            starsRef.current.forEach((star) => {
                star.move(width);
                star.show(ctx, width, height);
            });

            if (astroImg.current) {
                drawBottle();
            }
            if (logoImg.current) {
                drawLogo();
            }

            requestAnimationFrame(draw);
        };

        const debouncedSetup = debounce(setup, 200);
        window.addEventListener('resize', debouncedSetup);
        setup();

        return () => {
            window.removeEventListener('resize', debouncedSetup);
        };
    }, []);

    return (
        <div className="landing-container">
            <canvas ref={canvasRef} id="starfield"></canvas>
            <div className="content mt-10 h-screen">
                
                <div className='m-4'>
                <h1 className=" text-primary-800 mb-4 text-8xl font-serif font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    SCIEnT
                    </h1>
                    <p> Student Centre For Innovation In Engineering & Technology</p>
                </div>
                <div className='absolute bottom-20 left-30'>
                <p className='p-4 m-2 border border-red-600 inline rounded'>A Place For Innovative Minds &#10024;</p>
                </div>

                
            </div>
        </div>
    );
};

class Star {
    constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * width;
    }

    move(width) {
        this.z -= 1;
        if (this.z <= 0) {
            this.z = width;
        }
    }

    show(ctx, width, height) {
        const x = (this.x - width / 2) * (width / this.z);
        const y = (this.y - height / 2) * (width / this.z);
        const size = width / this.z;
        ctx.beginPath();
        ctx.arc(x + width / 2, y + height / 2, size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

const debounce = (func, delay) => {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
};



export default Landing;
