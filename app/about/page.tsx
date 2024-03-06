'use client'
import Head from "next/head";
import AnimatedText from "../components/animatedText/index";
import LayOutPage from "../components/layout/index";
import Image from "next/image";
import avatar from '../../public/images/profile/me.jpg'
import Skills from "../components/skill/index";
import Experience from "../components/exprience/index";
import Education from "../components/education/index";
import {usePathname} from "next/navigation";

export default function About() {
    const path = usePathname()
    return (
        <>
            <Head>
                <title>XB | About Page</title>
                <meta name={'description'} content={'any description'}/>
            </Head>
            <main className='flex w-full min-h-screen flex-col bg-light items-center justify-center dark:text-light'>
                <LayOutPage className={'pt-16'}>
                    <AnimatedText text={'Passion Fuels Purpose!'}
                                  className={'mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'}/>
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div
                            className='col-span-6 flex flex-col items-start justify-start xl:col-span-7 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I am Luu Gia Xuan Bao, a Front-end Developer with 3 years of experience,
                                passionate about building beautiful, functional, and user-centered web interfaces.
                            </p>
                            <p className='font-medium my-4'>Throughout my 3-year journey, I have always
                                been on the lookout for innovative and effective ways to turn my clients&apos; visions into
                                reality. For me, Front-end development is more than just creating visually appealing
                                interfaces, it&apos;s also about solving problems and delivering intuitive, enjoyable
                                experiences for users.
                            </p>
                            <p className='font-medium'>No matter the project, be it a website, mobile app, or any other
                                digital product, I always apply my in-depth knowledge of Front-end and user-centric
                                thinking to every stage of development. I look forward to the opportunity to bring my
                                skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-1 md:order-1 md:col-span-8
                    '>
                            <div
                                className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                            <Image
                                src={avatar}
                                alt={'XB'}
                                className={'w-full h-auto rounded-2xl'}
                                priority
                                sizes={'(max-width: 768px) 100vw, (max-width: 1280px): 50vw, 33vw'}
                            />

                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </LayOutPage>
            </main>
        </>
    )
}