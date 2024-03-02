'use client'
import {motion, useScroll} from 'framer-motion'
import {useRef} from "react";
import LiIcon from "../liIcon/index";


export default function Education() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div
            className='my-64'
        >
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Education
            </h2>
            <div
                ref={ref}
                className='w-[75%] mx-auto relative'
            >
                <motion.div
                    className='absolute left-9 top-[3px] w-[4px] h-full bg-dark origin-top'
                    style={{scaleY: scrollYProgress}}
                />
                <ul>
                    <Detail
                        type={'Bachelor Of Science In Computer Science'}
                        time={'2016-2020'}
                        place={'Massachusetts Institute Of Technology (MIT)'}
                        info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial \n' +
                        'Intelligence.'}
                    />
                    <Detail
                        type={'Bachelor Of Science In Computer Science'}
                        time={'2016-2020'}
                        place={'Massachusetts Institute Of Technology (MIT)'}
                        info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial \n' +
                        'Intelligence.'}
                    />
                    <Detail
                        type={'Bachelor Of Science In Computer Science'}
                        time={'2016-2020'}
                        place={'Massachusetts Institute Of Technology (MIT)'}
                        info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial \n' +
                        'Intelligence.'}
                    />
                </ul>
            </div>
        </div>
    )
}

interface InterfaceDetail {
    type: string,
    time: string,
    place: string,
    info: string
}

const Detail = ({type, time, place, info}: InterfaceDetail) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y: 50}}
                whileInView={{y:0}}
                transtion={{duration: 0.5 , type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}