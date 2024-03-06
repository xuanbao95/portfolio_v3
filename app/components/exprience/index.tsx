'use client'
import {motion, useScroll} from 'framer-motion'
import {useRef} from "react";
import LiIcon from "../liIcon/index";


export default function Experience() {
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
                Exprience
            </h2>
            <div
                ref={ref}
                className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
            >
                <motion.div
                    className='absolute left-9 top-[3px] w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    '
                    style={{scaleY: scrollYProgress}}
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Detail
                        position={'Front end developer'}
                        time={'2021-Present'}
                        address={'199 Điện Biên Phủ, p.15, Q.Bình Thạnh'}
                        work={'Worked as a frontend developer for e-commerce platforms, online sales management, and user management systems.... Developed web user ' +
                        'interfaces, ensuring aesthetic appeal,' +
                        ' efficiency, and ease of use. Successfully developed and implemented the bulk order feature for the e-commerce platform.' +
                        ''}
                        company={'Upos'}
                        companyLink={'https://upos.vn/'}
                    />
                    <Detail
                        position={'Employee'}
                        time={'2019-2021'}
                        address={''}
                        work={'Worked at the Vietnam Post Office. I was assigned to the position of handling returned parcels and goods. ' +
                        'This involved recording the number of items that couldn\'t be delivered to the buyers and were returned to the sellers. I also updated the system with the statistics of returned goods and stored relevant documents related to return shipments. ' +
                        'Additionally, I dealt with any issues arising from returned goods, such as breakage or missing items.'}
                        company={'Viet Nam Post'}
                        companyLink={'https://vnpost.vn/'}
                    />
                    <Detail
                        position={'Soldier'}
                        time={'2017-2019'}
                        address={'Tô Ký, Trung Chánh, Hóc Môn, Thành phố Hồ Chí Minh'}
                        work={'Upon entering the military, each young man will be trained in military knowledge, combat skills, as well as physical and mental training.' +
                        '' + ' They will learn how to live collectively, obey discipline, and cherish comradeship.' +
                        ' Through the training process, each person will become more mature, stronger, and more aware of their responsibility to their family and society.'
                        + ' Besides military training, the army also focuses on political and ideological education for soldiers. Through that, they will raise awareness of patriotism, national pride, and awareness of protecting the Fatherland.'}
                        company={'Gia Đinh Regiment'}
                        companyLink={''}
                    />


                </ul>
            </div>
        </div>
    )
}

interface InterfaceDetail {
    position: string,
    company: string,
    time: string,
    address: string,
    work: string,
    companyLink: string
}

const Detail = ({position, company, time, address, work, companyLink}: InterfaceDetail) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='
        my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]
        '>
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position} <a
                    target={!!companyLink ? '_blank': ''}
                    className='text-primary dark:text-primaryDark capitalize'
                    href={!!companyLink && companyLink}>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time}{
                    !!address && ` | ${address}`
                }
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}