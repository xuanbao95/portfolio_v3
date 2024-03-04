'use client'
import LayOutPage from "../components/layout/index";
import AnimatedText from "../components/animatedText/index";
import Image from "next/image";
import Link from 'next/link'
import {GithubIcon} from "../components/icon/index";
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import TransitionEffect from "../components/transitionEffect/index";
import {usePathname} from "next/navigation";
export default function Projects() {
    const path = usePathname()
    return (
        <main className='w-full mb-16 bg-light dark:bg-dark flex flex-col items-center justify-center'>
            <LayOutPage
                className='pt-16'
            >
                <AnimatedText
                    text={'Imagination Trumps Knowledge!'}
                    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />
                <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeatureProjects
                            title={'Crypto Screener Application'}
                            summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. \n' +
                            'It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your \n' +
                            'local currency.'}
                            link={'/'}
                            type={'Fearture Project'}
                            img={project1}
                            github={'/'}
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title={'Crypto Screener Application'}
                            link={'/'}
                            type={'Build A Custom Pagination Component In Reactjs From Scratch'}
                            img={project1}
                            github={'/'}
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title={'Crypto Screener Application'}
                            link={'/'}
                            type={'Build A Custom Pagination Component In Reactjs From Scratch'}
                            img={project1}
                            github={'/'}
                        />
                    </div>
                </div>
            </LayOutPage>
        </main>
    )
}

interface InterfaceFeatureProject {
    type: string,
    title: string,
    summary: string,
    img: any,
    link: string,
    github: string
}

const FeatureProjects = ({type, title, github, img, link, summary}: InterfaceFeatureProject) => {
    return (
        <article
            className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark
                bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
                lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
            '
        >
            <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link
                href={link}
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <Image
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    priority
                    sizes={'(max-width: 760px) 100vw, (max-width: 1280px): 50vw, 50vw'}
                />
            </Link>
            <div
                className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'
            >
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link
                    href={link}
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-4xl dark:text-light font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div
                    className='mt-2 flex items-center'
                >
                    <Link
                        href={github}
                        target='_blank'
                        className='w-10 md:w-6'
                    >
                        <GithubIcon/>
                    </Link>
                    <Link
                        href={link}
                        target='_blank'
                        className='
                        ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:text-dark dark:bg-light dark:border-dark
                        sm:px-4 sm:text-base
                        '
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

interface InterfaceProject {
    type: string,
    title: string,
    img: any,
    link: string,
    github: string
}

const Project = ({type, title, github, img, link}: InterfaceProject) => {
    return (
        <div>
            <article
                className='w-full rounded-2xl border
                    border-solid border-dark bg-light dark:bg-dark dark:border-light fill-dark:border-light p-6 relative
                    xs:p-4
                '
            >
                <div className='
                absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
                md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
                ' />

                <Link
                    href={link}
                    target='_blank'
                    className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image
                        src={img}
                        alt={title}
                        className='w-full h-auto'
                        priority
                        sizes={'(max-width: 760px) 100vw, (max-width: 1280px): 50vw, 50vw'}
                    />
                </Link>
                <div
                    className='w-full flex flex-col items-start justify-between mt-4'
                >
                    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                    <Link
                        href={link}
                        target='_blank'
                        className='hover:underline underline-offset-2'
                    >
                        <h2 className='my-2 w-full text-left text-4xl dark:text-light font-bold lg:text-2xl'>{title}</h2>
                    </Link>
                    <div
                        className='w-full mt-2 flex items-center justify-between'
                    >
                        <Link
                            href={link}
                            target='_blank'
                            className='
                         text-lg font-semibold underline dark:text-light md:text-base

                        '
                        >
                            Visit
                        </Link>
                        <Link
                            href={link}
                            target='_blank'
                            className='w-10'
                        >
                            <GithubIcon/>
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}