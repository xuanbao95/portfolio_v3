import {useEffect, useState} from "react";

export const useThemeSwitcher = ()=>{
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const [mode, setMode] = useState(typeof window !== 'undefined' ?
        window.localStorage.getItem('theme') : 'light')

    useEffect(()=>{
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia(preferDarkQuery)
            const userPref = window.localStorage.getItem('theme')

            const handleChange = ()=>{
                if(userPref){
                    let check = userPref === 'dark' ? 'dark' : 'light'
                    setMode(check)
                    if(check === 'dark'){
                        if(typeof document !== 'undefined')
                            document.documentElement.classList.add('dark')
                    } else {
                        if(typeof document !== 'undefined')
                            document.documentElement.classList.remove('dark')
                    }
                }else{
                    let check = mediaQuery.matches ? 'dark' : 'light'
                    setMode(check)
                    if(check === 'dark'){
                        if(typeof document !== 'undefined')
                            document.documentElement.classList.add('dark')
                    } else {
                        if(typeof document !== 'undefined')
                            document.documentElement.classList.remove('dark')
                    }
                }
            }
            handleChange()
            mediaQuery.addEventListener('change', handleChange)
            return ()=> mediaQuery.removeEventListener('change', handleChange)
        }

    },[])

    useEffect(()=>{
        if( mode === 'dark'){
            if(typeof window !== 'undefined')
                window.localStorage.setItem('theme', "dark")
            if(typeof document !== 'undefined')
                document.documentElement.classList.add('dark')
        }else{
            if(typeof window !== 'undefined')
                window.localStorage.setItem('theme', "light")
            if(typeof document !== 'undefined')
                document.documentElement.classList.remove('dark')
        }
    },[mode])


    return{mode, setMode}
}