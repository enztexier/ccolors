import React from 'react';
import './home.css';
import { useEffect, useState } from 'react';

const Home = () => {

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);


        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    //console.log(mousePos.x)

    let ww = window.innerWidth,
        wh = window.innerHeight,
        posX,
        posY,
        percX,
        percY,
        hslX,
        hslY,
        bg,
        rgb,
        hex,
        rbgforhex;

    posX = mousePos.x;
    posY = mousePos.y;

    percX = Math.floor(posX / ww * 100);
    percY = Math.floor(posY / wh * 100);

    hslX = Math.floor((percX / 100) * 360);
    hslY = percY;

    bg = `hsl(${hslX}, 50%, ${hslY}%)`;

    const HSLToRGB = (h, s, l) => {
        s /= 100;
        l /= 100;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs((h / 60) % 2 - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;
        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return "rgb(" + r + "," + g + "," + b + ")";
    };

    rgb = HSLToRGB(hslX, 50, hslY)
    //console.log(rgb)

    const doubleDigit = (num) => {
        let strNum = String(num),
            newNum;
        
        if (strNum.length < 2) {
          newNum = '0' + strNum;
        } else {
          newNum = strNum;
        }
        
        return newNum;
      }

    const RGBToHex = (rgb) => {
        let r;
        let g;
        let b;

        r = parseInt(rgb[0], 10).toString(16);
        g = parseInt(rgb[1], 10).toString(16);
        b = parseInt(rgb[2], 10).toString(16);
        
        r = doubleDigit(r);
        g = doubleDigit(g);
        b = doubleDigit(b);
        
        return `#${r}${g}${b}`;
    }

    rbgforhex = rgb.replace('rgb(', '').replace(')', '').split(',')
    console.log(rbgforhex)
    hex = RGBToHex(rbgforhex)
    console.log(hex)

    return (
        <div className='container' style={{ backgroundColor: `hsl(${hslX}, 50%, ${hslY}%)` }}>
            <h1>CCOLORS</h1>

            <div className=''>
            <p>hsl({hslX}, 50%, {hslY}%)</p>
            <p>{rgb}</p>
            <p>{hex}</p>
            </div>

        </div>
    );
};

export default Home;



/*


            <div id='container'>
                <span id='directions'>click</span>
                <div id='results'>#ffffff</div>
            </div>


*/