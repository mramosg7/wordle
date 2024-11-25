import { useEffect, useState } from 'react';

export function useTheme(){
    const [theme, setTheme] = useState('')

    const updateTheme = () => {
        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )
        setTheme(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light')
    }

    useEffect(()=>{
        updateTheme()
    },[])

    const lightTheme = ()=>{
        localStorage.theme = 'light'
        updateTheme()
    }

    const darkTheme = ()=>{
        localStorage.theme = 'dark'
        updateTheme()
    }

    return {lightTheme, darkTheme, theme}
}