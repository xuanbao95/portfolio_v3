'use client'
import Link from 'next/link'
import Logo from "../components/logo/index";
import { usePathname } from 'next/navigation'
import TwitterIcon, { FaceBookIcon, GithubIcon, LinkedInIcon } from "../components/icon/index";
import {motion} from 'framer-motion'
export default function Navbar() {
    return(
        <header
            className='w-full px-12 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CustomLink href={'/'} title={'Home'} className={'mr-4'}/>
                <CustomLink href={'/about'} title={'About'} className={'mx-4'}/>
                <CustomLink href={'/projects'} title={'Projects'} className={'ml-4'}/>
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a
                    href='https://github.com/xuanbao95' target={'_blank'}
                    whileHover={{y:-2}}
                    whileTap={{scale: 0.9}}
                    className='w-6 mr-3'
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a
                    href='https://www.linkedin.com/in/xu%C3%A2n-b%E1%BA%A3o-l%C6%B0u-gia-473899221/'
                    target={'_blank'}
                    className='w-6 mx-3'
                    whileHover={{y:-2}}
                    whileTap={{scale: 0.9}}
                >
                    <LinkedInIcon/>
                </motion.a>
                <motion.a
                    href='https://www.facebook.com/xuanbao.luugia'
                    target={'_blank'}
                    className='w-6 ml-3'
                    whileHover={{y:-2}}
                    whileTap={{scale: 0.9}}
                >
                    <FaceBookIcon/>
                </motion.a>
            </nav>
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
    target: string
}
const CustomLink = ({href, title, className, target}: interfaceLink)=>{
    const pathName= usePathname()
    console.log(pathName)
    return(
        <Link href={href} target={!!target ? target : ''} className={`${className} relative group`}>
            {title}
            <span
                className={`
                    h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                    ${pathName === href && 'w-full'}
                `}
            >
                &nbsp;
            </span>
        </Link>
    )
}