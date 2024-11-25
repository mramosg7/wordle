import { IoIosSettings } from "react-icons/io";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"

export default function Settings (){

    const {lightTheme, darkTheme, theme} = useTheme()
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    const handleThemeChange = (e:any) => {
        const selectedTheme = e.target.value;
        if (selectedTheme === 'light') lightTheme();
        if (selectedTheme === 'dark') darkTheme();
      };

    return (
        <div className="relative">
            <IoIosSettings onClick={()=>{setIsOpen(prev => !prev)}}/>
            <AnimatePresence>
                {isOpen && 
                    <motion.div 
                        className="bg-settings dark:bg-settings-dark before:content-[''] before:top-[-5px] before:left-[126px] before:bg-settings before:dark:bg-settings-dark before:absolute before:rotate-45 before:h-[10px] before:w-[10px] absolute left-[-120px] mt-2 p-2 rounded"
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }}    
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}  
                    >
                        <div className="flex whitespace-nowrap gap-2">
                            <h1 className="text-[18px]">Cambiar tema</h1>
                            <select 
                                className="text-[18px] rounded bg-background dark:bg-background-dark" name="" id=""
                                value={theme} 
                                onChange={handleThemeChange} 
                            >
                                <option selected={theme === 'light'}  value="light">Light</option>
                                <option selected={theme === 'dark'} value="dark">Dark</option>
                            </select>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}