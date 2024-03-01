'use client'
import {motion} from 'framer-motion'


export default function Skills() {
    return(
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>
                Skills
            </h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div
                    className='flex items-center justify-center
                    rounded-full font-semibold bg-dark text-light p-8
                    shadow-dark cursor-pointer
                    '
                    whileHover={{
                        scale: 1.05
                    }}
                >
                    Web
                </motion.div>
                <Skill name={'HTML'} x={'-20vw'} y={'2vw'} />
                <Skill name={'CSS'} x={'-5vw'} y={'-8.5vw'} />
                <Skill name={'JavaScript'} x={'24vw'} y={'6vw'} />
                <Skill name={'ReactJs'} x={'30.5vw'} y={'-2vw'} />
                <Skill name={'NextJs'} x={'5vw'} y={'20vw'} />
                <Skill name={'Redux'} x={'-32.5vw'} y={'-8.5vw'} />
                <Skill name={'Style Component'} x={'7vw'} y={'-17.5vw'} />
                <Skill name={'SASS'} x={'-15vw'} y={'15.5vw'} />
                <Skill name={'Figma'} x={'-15vw'} y={'15.5vw'} />
                <Skill name={'Tailwind css'} x={'-15vw'} y={'15.5vw'} />
            </div>
        </>
    )
}

const Skill =({name, x,y})=>{
    return <motion.div
        className={`flex items-center justify-center
                    rounded-full font-semibold bg-dark text-light py-3 px-6
                    shadow-dark cursor-pointer absolute
                    `}
        whileHover={{
            scale: 1.05
        }}
        initial={{x: 0, y:0}}
        animate={{x:x, y:y}}
        transition={{duration: 1.5}}
    >
        {name}
    </motion.div>
}