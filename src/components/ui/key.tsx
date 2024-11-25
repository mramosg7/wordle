import { KeyProps } from "../../types/key";
import { FaBackspace } from "react-icons/fa";
import { motion } from "motion/react"

export default function Key({letter, status, deleteLetter, registerLetter}: KeyProps){
    const bgColor =
    status === "correct"
        ? "bg-keys-correct dark:bg-keys-correct-dark"
        : status === "present"
        ? "bg-keys-present dark:bg-keys-present-dark"
        : status == "absent" 
        ? "bg-keys-absent dark:bg-keys-absent-dark"
        :"";

    return(
        <>
            {letter === 'backspace' ?
                <motion.button 
                    onClick={()=>{deleteLetter()}} 
                    className={`
                        text-2xl bg-red-500 text-red-100 h-12 
                        border border-red-700 basis-20 grid 
                        place-items-center uppercase rounded-md`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaBackspace />
                </motion.button>
                :
                <motion.button 
                    onClick={()=>{registerLetter(letter)}} 
                    className={`
                    text-2xl h-14 border border-borders 
                    dark:border-borders-dark basis-10 grid 
                    place-items-center uppercase rounded-md ${bgColor}`
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {letter}
                </motion.button>
            }
    
        </>
    )
        

}