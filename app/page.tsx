import Image from "next/image";
import Link from 'next/link'
import LayOutPage from "./components/layout/index";
import portfolio from '../public/images/profile/developer-pic-1.png'
import AnimatedText from "./components/animatedText/index";
import {LinkArrow} from "./components/icon/index";
import HireMe from "./hireMe/index";
import lightBulb from '../public/images/svgs/miscellaneous_icons_1.svg'
export default function Home() {
    return (
        <main className='flex text-dark w-full min-h-screen bg-light'>
            <LayOutPage className={'pt-0'}>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <Image
                            src={portfolio}
                            alt={'avatar'}
                            className={'w-full h-auto'}
                        />
                    </div>
                    <div className='w-1/2 flex flex-col items-center self-center'>
                        <AnimatedText
                            text={'Turning Vision Into Reality With Code And Design.'}
                            className={'!text-6xl !text-left'}
                        />
                        <p
                            className='my-4 text-base font-medium'
                        >
                            As a skilled front end developer, I am dedicated to turning ideas into innovative web
                            applications.
                            Explore my latest projects and articles, showcasing my expertise in React.js and web
                            development.
                        </p>
                        <div className='flex items-center self-start mt-2'>
                            <Link
                                href={'/All-Texts/Luu-Gia-Xuan-Bao-FE.pdf'}
                                target={'_blank'}
                                className='flex items-center
                                bg-dark text-light p-2.5 px-6
                                rounded-lg text-lg font-semibold
                                hover:bg-light hover:text-dark border-2
                                border-solid border-transparent hover:border-dark'
                                download={true}
                            >
                                Resume
                                <LinkArrow className='w-6 ml-1' />
                            </Link>
                            <Link
                                href={'mailto:bao.lgx@gmail.com'}
                                target={'_blank'}
                                className='ml-4 text-lg font-medium capitalize text-dark underline'
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </LayOutPage>
            <HireMe/>
            <div className='absolute right-8 bottom-8 inline-block w-24'>
                <Image
                    src={lightBulb}
                    alt={'Xuanbao'}
                    className='w-full h-auto'
                />
            </div>
        </main>
    );
}
