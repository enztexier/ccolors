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
        rgb;

    posX = mousePos.x;
    posY = mousePos.y;

    percX = Math.floor(posX / ww * 100);
    percY = Math.floor(posY / wh * 100);

    hslX = Math.floor((percX / 100) * 360);
    hslY = percY;


    bg = `hsl(${hslX}, 50%, ${hslY}%)`;

    rgb = bg.replace('rgb(', '').replace(')', '').split(', ')
    //console.log(window.getComputedStyle(element).backgroundColor)
    assignRef = element => {
        this.container = element;
      }

    const styles = this.container.style;
    console.log(styles);
    const computed = window.getComputedStyle(element.style).getPropertyValue("background-color");
    console.log(computed);



    return (
        <div className='container' style={{ backgroundColor: `hsl(${hslX}, 50%, ${hslY}%)` }}>
            <h1>CCOLORS</h1>

            <p>HSL :{' '}
                <b>
                    ({hslX}, 50%, {hslY}%)
                </b>
            </p>


        </div>
    );
};

export default Home;



/*


            <div id='container'>
                <span id='directions'>Click anywhere to copy hex code.</span>
                <div id='results'>#ffffff</div>
            </div>


*/