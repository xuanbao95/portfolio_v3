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
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16'>
                Education
            </h2>
            <div
                ref={ref}
                className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
            >
                <motion.div
                    className='absolute left-9 top-[3px] w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                    style={{scaleY: scrollYProgress}}
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Detail
                        type={'CYBERSOFT INC'}
                        time={'2020-2021'}
                        place={'Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3'}
                        info={'I studied at Cybersoft Inc. for 1 year, from 2020 to 2021. During my time there, I learned the fundamentals of frontend programming, including HTML, CSS, Javascript, and Reactjs. I also worked on a number of projects, including a movie ticket booking website.'}
                    />
                    <Detail
                        type={'Gia Đinh Regiment'}
                        time={'2017-2019'}
                        place={'Tô Ký, Trung Chánh, Hóc Môn, Thành phố Hồ Chí Minh'}
                        info={'I served in the Gia Dinh Regiment for 2 years, from 2017 to 2019. During my time in the military, I learned about political theory, Vietnamese history, and military tactics. I also received training in how to use firearms and how to respond to natural disasters.'}
                    />
                    <Detail
                        type={'HUTECH UNIVERSITY'}
                        time={'2013 - 2017'}
                        place={'475A Đ. Điện Biên Phủ, Phường 25, Bình Thạnh'}
                        info={'I have studied food technology and product testing at the Hutech University, ' +
                        'where I learned about food safety, food processing, and sensory evaluation. ' +
                        'I also have experience in conducting product testing for a variety of food products.'}
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
        <li ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}