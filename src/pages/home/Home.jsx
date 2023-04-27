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
        rgb;

    posX = mousePos.x;
    posY = mousePos.y;

    percX = Math.floor(posX / ww * 100);
    percY = Math.floor(posY / wh * 100);

    hslX = Math.floor((percX / 100) * 360);
    hslY = percY;

    console.log(hslX)
    console.log(hslY)


    return (
        <div className='container' style={{ backgroundColor: `hsl(${hslX}, 50%, ${hslY}%)` }}>
            <h1>CCOLORS</h1>

            <p>your color 
                <b>
                    ({hslX}, {hslY})
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