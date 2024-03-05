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
                        work={'Worked on a team responsible for developing new features for Google\'s \n' +
                        'search engine, including improving the accuracy and relevance of search results and \n' +
                        'developing new tools for data analysis and visualization.'}
                        company={'Upos'}
                        projectLink={'https://banhang.upos.vn/'}
                        companyLink={'https://upos.vn/'}
                    />
                    <Detail
                        position={'Intern @Facebook'}
                        time={'Summer 2021'}
                        address={'Menlo Park, CA.'}
                        work={'Worked on a team responsible for developing a new mobile app feature that allowed users to create and \n' +
                        'share short-form video content, including designing and implementing a new user interface and developing \n' +
                        'the backend infrastructure to support the feature.'}
                        company={'Google'}
                        companyLink={'www.google.com'}
                    />
                    <Detail
                        position={'Software Engineer @Google'}
                        time={'2022-Present'}
                        address={'Mountain View, CA'}
                        work={'Worked on a team responsible for developing new features for Google\'s \n' +
                        'search engine, including improving the accuracy and relevance of search results and \n' +
                        'developing new tools for data analysis and visualization.'}
                        company={'Google'}
                        companyLink={'www.google.com'}
                    />
                    <Detail
                        position={'Software Engineer @Google'}
                        time={'2022-Present'}
                        address={'Mountain View, CA'}
                        work={'Worked on a team responsible for developing new features for Google\'s \n' +
                        'search engine, including improving the accuracy and relevance of search results and \n' +
                        'developing new tools for data analysis and visualization.'}
                        company={'Google'}
                        companyLink={'www.google.com'}
                    />
                    <Detail
                        position={'Software Engineer @Google'}
                        time={'2022-Present'}
                        address={'Mountain View, CA'}
                        work={'Worked on a team responsible for developing new features for Google\'s \n' +
                        'search engine, including improving the accuracy and relevance of search results and \n' +
                        'developing new tools for data analysis and visualization.'}
                        company={'Google'}
                        companyLink={'www.google.com'}
                    />
                    <Detail
                        position={'Software Engineer @Google'}
                        time={'2022-Present'}
                        address={'Mountain View, CA'}
                        work={'Worked on a team responsible for developing new features for Google\'s \n' +
                        'search engine, including improving the accuracy and relevance of search results and \n' +
                        'developing new tools for data analysis and visualization.'}
                        company={'Google'}
                        companyLink={'www.google.com'}
                    />


                </ul>
            </div>
        </div>
    )
}

interface InterfaceDetail {
    position: string,
    company: string,
    projectLink: string,
    time: string,
    address: string,
    work: string,
    project: string,
}

const Detail = ({position, company, projectLink, time, address, work, project}: InterfaceDetail) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='
        my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]
        '>
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y: 50}}
                whileInView={{y:0}}
                transtion={{duration: 0.5 , type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position} <a target={'_blank'}
                                                                                  className='text-primary dark:text-primaryDark capitalize'
                                                                                  href={projectLink}>{project}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {company}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}