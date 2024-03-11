'use client'
import Image from "next/image";
import Link from 'next/link'
import LayOutPage from "./components/layout/index";
import portfolio from '../public/images/profile/me-2.jpg'
import AnimatedText from "./components/animatedText/index";
import {LinkArrow} from "./components/icon/index";
import HireMe from "./hireMe/index";
import lightBulb from '../public/images/svgs/miscellaneous_icons_1.svg'
export default function Home() {
    return (
        <main className='flex text-dark w-full min-h-screen bg-light dark:bg-dark dark:text-light'>
            <LayOutPage className={'pt-0 md:pt-16 sm:pt-8'}>
                <div className='flex items-center justify-between w-full lg:flex-col'>
                    <div className='w-1/2 md:w-full p-8'>
                        <Image
                            src={portfolio}
                            alt={'avatar'}
                            className={'w-full h-auto lg:hidden md:inline-block md:w-full rounded-2xl border-4 border-dark dark:border-light'}
                            priority
                            sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'}
                        />
                    </div>
                    <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                        <AnimatedText
                            text={'Turning Vision Into Reality With Code And Design.'}
                            className={'!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'}
                        />
                        <p
                            className='my-4 text-base font-medium md:text-sm sm:text-xs'
                        >
                            As a skilled front end developer, I am dedicated to turning ideas into innovative web
                            applications.
                            Explore my latest projects, showcasing my expertise in React.js and web
                            development.
                        </p>
                        <div className='flex items-center self-start mt-2 lg:self-center'>
                            <Link
                                href={'/All-Texts/Luu-Gia-Xuan-Bao-FE.pdf'}
                                target={'_blank'}
                                className='flex items-center
                                bg-dark text-light p-2.5 px-6
                                rounded-lg text-lg font-semibold
                                hover:bg-light hover:text-dark border-2
                                border-solid border-transparent hover:border-dark
                                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                                hover:dark:border-light
                                md:p-2 md:px-4 md:text-base
                                '
                                download={true}
                            >
                                Resume
                                <LinkArrow className='w-6 ml-1' />
                            </Link>
                            <Link
                                href={'mailto:bao.lgx@gmail.com'}
                                target={'_blank'}
                                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </LayOutPage>
            <HireMe/>
        </main>
    );
}
