'use client'
import Link from 'next/link'
import Logo from "../components/logo/index";
import {usePathname, useRouter} from 'next/navigation'
import {FaceBookIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon} from "../components/icon/index";
import {motion} from 'framer-motion'
import {useThemeSwitcher} from "../components/hook/useThemeSwitcher";
import {useState} from "react";

export default function Navbar() {

    const {mode, setMode} = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(!isOpen)
    return (
        <header
            className='
            w-full px-12 py-8 font-medium flex items-center justify-between dark:text-light
            relative z-10 lg:px-16 md:px-12 sm:px-8'
        >
            <button onClick={handleClick} className='flex flex-col justify-center items-center hidden lg:flex'>
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${!!isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${!!isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${!!isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex items-center justify-between lg:hidden'>
                <nav>
                    <CustomLink href={'/'} title={'Home'} className={'mr-4'}/>
                    <CustomLink href={'/about'} title={'About'} className={'mx-4'}/>
                    <CustomLink href={'/projects'} title={'Projects'} className={'ml-4'}/>
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a
                        href='https://github.com/xuanbao95' target={'_blank'}
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.9}}
                        className='w-6 mr-3'
                    >
                        <GithubIcon className={''}/>
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/xu%C3%A2n-b%E1%BA%A3o-l%C6%B0u-gia-473899221/'
                        target={'_blank'}
                        className='w-6 mx-3'
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.9}}
                    >
                        <LinkedInIcon className={''}/>
                    </motion.a>
                    <motion.a
                        href='https://www.facebook.com/xuanbao.luugia'
                        target={'_blank'}
                        className='w-6 ml-3'
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.9}}
                    >
                        <FaceBookIcon className={''}/>
                    </motion.a>
                    <button
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                        className={`
                        ml-3 flex items-center justify-center rounded-full p-1
                        ${mode === 'light' ? 'bg-dark text-light' : "bg-light text-dark"}
                    `}
                    >
                        {
                            mode === ' dark' ? <SunIcon className='fill-dark'/> : <MoonIcon className='fill-dark'/>
                        }

                    </button>
                </nav>
            </div>
            {
                !!isOpen && <motion.div
                    className='min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
                    initial={{scale: 0, opacity: 0, x:'-50%', y:'-50%'}}
                    animate={{scale: 1, opacity: 1}}
                >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink href={'/'} title={'Home'}  toggle={handleClick}/>
                        <CustomMobileLink href={'/about'} title={'About'}  toggle={handleClick}/>
                        <CustomMobileLink href={'/projects'} title={'Projects'}  toggle={handleClick}/>
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a
                            href='https://github.com/xuanbao95' target={'_blank'}
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.9}}
                            className='w-6 mr-3 sm:mx-1'
                        >
                            <GithubIcon className={''}/>
                        </motion.a>
                        <motion.a
                            href='https://www.linkedin.com/in/xu%C3%A2n-b%E1%BA%A3o-l%C6%B0u-gia-473899221/'
                            target={'_blank'}
                            className='w-6 mx-3 sm:mx-1'
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.9}}
                        >
                            <LinkedInIcon className={''}/>
                        </motion.a>
                        <motion.a
                            href='https://www.facebook.com/xuanbao.luugia'
                            target={'_blank'}
                            className='w-6 ml-3 sm:mx-1'
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.9}}
                        >
                            <FaceBookIcon className={''}/>
                        </motion.a>
                        <button
                            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                            className={`
                        ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
                        ${mode === 'light' ? 'bg-dark text-light' : "bg-light text-dark"}
                    `}
                        >
                            {
                                mode === ' dark' ? <SunIcon className='fill-dark'/> : <MoonIcon className='fill-dark'/>
                            }

                        </button>
                    </nav>
                </motion.div>
            }
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>
        </header>
    )
}

interface interfaceLink {
    href: string,
    title: string,
    className: string,
}

const CustomLink = ({href, title, className}: interfaceLink) => {
    const pathName = usePathname()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`
                    h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                    ${pathName === href && 'w-full'} dark:bg-light
                `}
            >
                &nbsp;
            </span>
        </Link>
    )
}
interface MobilLink{
    href: string,
    title:string,
    className: string,
    toggle: any
}
const CustomMobileLink = ({href, title, className, toggle}: MobilLink) => {
    const pathName = usePathname()
    const router = useRouter()
    const handleClick = ()=> {
        if(!!toggle)
            toggle()
        router.push(href)
    }
    return (
        <button onClick={handleClick} href={href} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span
                className={`
                    h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                    ${pathName === href && 'w-full'} dark:bg-light 
                `}
            >
                &nbsp;
            </span>
        </button>
    )
}