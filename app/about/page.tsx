'use client'
import Head from "next/head";
import AnimatedText from "../components/animatedText/index";
import LayOutPage from "../components/layout/index";
import Image from "next/image";
import avatar from '../../public/images/profile/developer-pic-2.jpg'
import Skills from "../components/skill/index";
import Experience from "../components/exprience/index";
import Education from "../components/education/index";

export default function About() {
    return (
        <>
            <Head>
                <title>XB | About Page</title>
                <meta name={'description'} content={'any description'}/>
            </Head>
            <main className='flex w-full min-h-screen flex-col bg-light items-center justify-center'>
                <LayOutPage className={'pt-16'}>
                    <AnimatedText text={'Passion Fuels Purpose!'} className={''}/>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-6 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>
                                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating
                                beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am
                                always looking for
                                new and innovative ways to bring my clients' visions to life.
                            </p>
                            <p className='font-medium my-4'>I believe that design is about more than just making things
                                look pretty – it's about
                                solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='font-medium'>Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered
                                thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and
                                passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-2 relative w-80 h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8
                    '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image
                                src={avatar}
                                alt={'XB'}
                                width={300}
                                height={300}
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