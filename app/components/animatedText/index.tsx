'use client'
import {motion} from 'framer-motion'

interface Interface {
    text: string,
    className: string
}

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}
const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,

        }
    }
}
export default function AnimatedText({text, className}: Interface) {
    return (
        <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}>
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize text-8xl  ${className}`}
                variants={quote}
                initial={'initial'}
                animate={'animate'}
            >
                {text?.split(' ').map((word, i) => <motion.span
                    variants={singleWord}
                    key={word + '-' + i}
                    className={'inline-block'}
                >
                    {word}&nbsp;
                </motion.span>)}
            </motion.h1>
        </div>
    )
}