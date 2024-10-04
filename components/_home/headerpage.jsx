"use client"

import { useEffect, useRef } from 'react';
import TabsWithIcon from './searchtabs'

const Carousel = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut = null;
    let runNextAuto = null;

    // Function to reset the animation of the running time
    const resetTimeAnimation = () => {
        if (runningTimeRef.current) {
            runningTimeRef.current.style.animation = 'none';
            runningTimeRef.current.offsetHeight; // Trigger reflow
            runningTimeRef.current.style.animation = null;
            runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
        }
    };

    // Function to handle slider transitions
    const showSlider = (type) => {
        const sliderItemsDom = listRef.current.querySelectorAll('.item');
        const carousel = carouselRef.current;

        if (type === 'next') {
            listRef.current.appendChild(sliderItemsDom[0]);
            carousel.classList.add('next');
        } else {
            listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            carousel.classList.add('prev');
        }

        clearTimeout(runTimeOut);

        runTimeOut = setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext);

        resetTimeAnimation();
    };

    // Handle the initial setup and effects
    useEffect(() => {
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;

        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');

        // Start auto transition
        runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);

        // Start the initial animation
        resetTimeAnimation();

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className="carousel overflow-hidden" ref={carouselRef}>
                <div className="list" ref={listRef}>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/solar1.jpg")' }}>
                        <div className="content">
                            <div className="title">Power Your Future with Solar Energy & Seamless Grid Transitions</div>
                            <div className="des">
                                Effortlessly switch between grid power and solar energy with our advanced automatic change-over switch.
                            </div>
                            <div className="btn lg:flex gap-4">
                                <p className='py-2 px-6 bg-[#fff] inline-block mr-2 lg:mr-0 text-black rounded-3xl text-sm font-extrabold'>See More</p>
                                <p className="py-2 px-6 bg-[#2a9df4] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Subscribe</p>
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/solar2.jpg")' }}>
                        <div className="content">
                            <div className="title">Power Your Future with Solar Energy & Seamless Grid Transitions</div>
                            <div className="des">
                                Effortlessly switch between grid power and solar energy with our advanced automatic change-over switch.
                            </div>
                            <div className="btn lg:flex gap-4">
                                <p className='py-2 px-6 bg-[#fff] inline-block mr-2 lg:mr-0 text-black rounded-3xl text-sm font-extrabold'>See More</p>
                                <p className="py-2 px-6 bg-[#2a9df4] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Subscribe</p>
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/solar3.jpg")' }}>
                        <div className="content">
                            <div className="title">Power Your Future with Solar Energy & Seamless Grid Transitions</div>
                            <div className="des">
                                Effortlessly switch between grid power and solar energy with our advanced automatic change-over switch.
                            </div>
                            <div className="btn lg:flex gap-4">
                                <p className='py-2 px-6 bg-[#fff] inline-block mr-2 lg:mr-0 text-black rounded-3xl text-sm font-extrabold'>See More</p>
                                <p className="py-2 px-6 bg-[#2a9df4] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Subscribe</p>
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/solar3.jpg")' }}>
                        <div className="content">
                            <div className="title">Power Your Future with Solar Energy & Seamless Grid Transitions</div>
                            <div className="des">
                                Effortlessly switch between grid power and solar energy with our advanced automatic change-over switch.
                            </div>
                            <div className="btn lg:flex gap-4">
                                <p className='py-2 px-6 bg-[#fff] inline-block mr-2 lg:mr-0 text-black rounded-3xl text-sm font-extrabold'>See More</p>
                                <p className="py-2 px-6 bg-[#2a9df4] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Subscribe</p>
                            </div>
                        </div>
                    </div>

                    {/* Add more items as needed */}
                </div>

                <div className="arrows">
                    <button className="prev" ref={prevBtnRef}>{'<'}</button>
                    <button className="next" ref={nextBtnRef}>{'>'}</button>
                </div>

                {/* <div className="timeRunning" ref={runningTimeRef}></div> */}
            </div>
            {/* <div className='mx-4 lg:w-4/6 lg:mx-auto mt-[-5rem] bg-[#fff] z-40 relative p-2 lg:p-4 rounded-2xl drop-shadow-lg mb-10'>
                <TabsWithIcon />
            </div> */}
        </div>
    );
};

export default Carousel;