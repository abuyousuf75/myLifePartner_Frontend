import React, { useRef, useEffect } from 'react';
import { FaMale, FaFemale } from "react-icons/fa";
import CountUp, { useCountUp } from 'react-countup';

const CounterSection = () => {
    const totalCounterRef = useRef(null);
    const girlsCounterRef = useRef(null);
    const boysCounterRef = useRef(null);
    const marriagesCounterRef = useRef(null);

    // Using useCountUp for individual counters if needed
    useCountUp({
        ref: totalCounterRef,
        end: 1000,
        enableScrollSpy: true,
        scrollSpyDelay: 2000,
       
    });
    useCountUp({
        ref: girlsCounterRef,
        end: 400,
        enableScrollSpy: true,
        scrollSpyDelay: 2000,
     
    });
    useCountUp({
        ref: boysCounterRef,
        end: 600,
        enableScrollSpy: true,
        scrollSpyDelay: 2000,
      
    });
    useCountUp({
        ref: marriagesCounterRef,
        end: 300,
        enableScrollSpy: true,
        scrollSpyDelay: 2000,
       
    });

    return (
        <section className='mt-10 mb-8 text-center text-xl font-bold '>
            <h3 className='mb-4'>Success Counter</h3>
            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-3'>
                {/* Total Biodatas */}
                <div className='bg-[#DA3182] text-center justify-center items-center flex rounded-sm h-[100px]'>
                    <h4 className='text-white'>
                        Total Biodatas: <span ref={totalCounterRef}></span>
                    </h4>
                </div>
                {/* Girls' Biodatas */}
                <div className='bg-[#DA3182] text-center justify-center items-center flex rounded-sm h-[100px]'>
                    <FaFemale className='text-white mr-2' />
                    <h4 className='text-white'>
                        Girls' Biodatas: <span ref={girlsCounterRef}></span>
                    </h4>
                </div>
                {/* Boys' Biodatas */}
                <div className='bg-[#DA3182] text-center justify-center items-center flex rounded-sm h-[100px]'>
                    <FaMale className='text-white mr-2' />
                    <h4 className='text-white'>
                        Boys' Biodatas: <span ref={boysCounterRef}></span>
                    </h4>
                </div>
                {/* Marriages Completed */}
                <div className='bg-[#DA3182] text-center justify-center items-center flex rounded-sm h-[100px]'>
                    <h4 className='text-white'>
                        Marriages Completed: <span ref={marriagesCounterRef}></span>
                    </h4>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
