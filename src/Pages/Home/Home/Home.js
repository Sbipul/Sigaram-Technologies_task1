import React from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';

const Home = () => {

    const [isRed,setIsRed] = useState(false)

    const toggleDiv = e => {
        if (!isRed) {
            e.target.classList.remove('bg-primary')
            e.target.style.background = 'red'
            setIsRed(true)
        }else{
            e.target.classList.add('bg-primary')
            e.target.style.background = ''
            setIsRed(false)
        }
    }
    return (
        <Row onClick={toggleDiv} xs={1} md={4} className="">
            <div className="bg-primary border border-1 p-5">1</div>
            <div className="bg-primary border border-1 p-5">2</div>
            <div className="bg-primary border border-1 p-5">3</div>
            <div className="bg-primary border border-1 p-5">4</div>
            <div className="bg-primary border border-1 p-5">5</div>
            <div className="bg-primary border border-1 p-5">6</div>
            <div className="bg-primary border border-1 p-5">7</div>
            <div className="bg-primary border border-1 p-5">7</div>
            <div className="bg-primary border border-1 p-5">9</div>
            <div className="bg-primary border border-1 p-5">10</div>
            <div className="bg-primary border border-1 p-5">11</div>
            <div className="bg-primary border border-1 p-5">12</div>
            <div className="bg-primary border border-1 p-5">13</div>
            <div className="bg-primary border border-1 p-5">14</div>
            <div className="bg-primary border border-1 p-5">15</div>
            <div className="bg-primary border border-1 p-5">16</div>
        </Row>
    );
};
// f93ad254764b45ac87183b6950ce414a
export default Home;