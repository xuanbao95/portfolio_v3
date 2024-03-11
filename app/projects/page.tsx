'use client'
import LayOutPage from "../components/layout/index";
import AnimatedText from "../components/animatedText/index";
import Image from "next/image";
import Link from 'next/link'
import upos from '../../public/images/projects/upos.png'
import evo from '../../public/images/projects/evo.png'
import nike from '../../public/images/projects/nike.png'
import movie from '../../public/images/projects/movie.png'
export default function Projects() {
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
                            title={'Online Sales and Management'}
                            summary={'This solution helps you optimize the effectiveness of live selling and order management on multiple channels. With features such as automatic order confirmation, hiding phone numbers in comments, fast comment synchronization, and live stream script support'}
                            link={'https://banhang.upos.vn/'}
                            type={'Fearture Project'}
                            img={upos}
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title={'J&t Online Sales and Management'}
                            link={'https://evoshop.vn/'}
                            type={'Helps customers save time on ordering and managing orders'}
                            img={evo}
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title={'Nike'}
                            link={'https://nikereact.surge.sh/'}
                            type={'Nike shoes can be easily searched by type, size, color, price, and other criteria.'}
                            img={nike}
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeatureProjects
                            title={'Booking Movie Tickets'}
                            summary={'Online portal for movie ticketing and cinema showtime information'}
                            link={'https://tix-cybersoft.surge.sh/'}
                            type={'Booking Movie Tickets'}
                            img={movie}
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
}

const FeatureProjects = ({type, title, img, link, summary}: InterfaceFeatureProject) => {
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
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full border-4 border-dark dark:border-light '
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
                    <h2 className='my-2 w-full text-left text-3xl dark:text-light font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div
                    className='mt-2 flex items-center'
                >
                    <Link
                        href={link}
                        target='_blank'
                        className='
                         rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
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
}

const Project = ({type, title, img, link}: InterfaceProject) => {
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
                    <span className='text-primary dark:text-primaryDark font-medium text-md lg:text-lg md:text-base'>{type}</span>
                    <Link
                        href={link}
                        target='_blank'
                        className='hover:underline underline-offset-2'
                    >
                        <h2 className='my-2 w-full text-left text-2xl dark:text-light font-bold lg:text-2xl'>{title}</h2>
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
                    </div>
                </div>
            </article>
        </div>
    )
}