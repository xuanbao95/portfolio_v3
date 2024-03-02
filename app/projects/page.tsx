import LayOutPage from "../components/layout/index";
import AnimatedText from "../components/animatedText/index";
import Image from "next/image";
import Link from 'next/link'
import {GithubIcon} from "../components/icon/index";
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

export default function Projects() {
    return (
        <main className='w-full mb-16 bg-light flex flex-col items-center justify-center'>
            <LayOutPage
                className='pt-16'
            >
                <AnimatedText
                    text={'Imagination Trumps Knowledge!'}
                    className='mb-16'
                />
                <div className='grid grid-col-12 gap-24 gap-y-32'>
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
                    <div className='col-span-6'>
                        <Project
                            title={'Crypto Screener Application'}
                            link={'/'}
                            type={'Build A Custom Pagination Component In Reactjs From Scratch'}
                            img={project1}
                            github={'/'}
                        />
                    </div>
                    <div className='col-span-6'>
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
                bg-light shadow-2xl p-12 relative rounded-br-2xl
            '
        >
            <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link
                href={link}
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                />
            </Link>
            <div
                className='w-1/2 flex flex-col items-start justify-between pl-6'
            >
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link
                    href={link}
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div
                    className='mt-2 flex items-center'
                >
                    <Link
                        href={github}
                        target='_blank'
                        className='w-10'
                    >
                        <GithubIcon/>
                    </Link>
                    <Link
                        href={link}
                        target='_blank'
                        className='
                        ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold

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
                    border-solid border-dark bg-light p-6 relative
                '
            >
                <div className='absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />

                <Link
                    href={link}
                    target='_blank'
                    className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image
                        src={img}
                        alt={title}
                        className='w-full h-auto'
                    />
                </Link>
                <div
                    className='w-full flex flex-col items-start justify-between mt-4'
                >
                    <span className='text-primary font-medium text-xl'>{type}</span>
                    <Link
                        href={link}
                        target='_blank'
                        className='hover:underline underline-offset-2'
                    >
                        <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    </Link>
                    <div
                        className='w-full mt-2 flex items-center justify-between'
                    >
                        <Link
                            href={link}
                            target='_blank'
                            className='
                         text-lg font-semibold underline

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