import { CellProps } from "../../types/cell";
import { motion } from 'framer-motion';

export default function Cell ({letter, status, highlighted}: CellProps){
    
    const colorMap = {
        "correct": "bg-keys-correct dark:bg-keys-correct-dark",
        "present": "bg-keys-present dark:bg-keys-present-dark",
        "absent": "bg-keys-absent dark:bg-keys-absent-dark",
        "none": "bg-transparent", // Fondo transparente si no hay status
    }

    const bgColor = colorMap[status]


    return(
        <motion.div
            key={letter}
            className={`
                border border-borders dark:border-borders-dark
                uppercase grid place-items-center text-4xl font-extrabold
                h-20 w-20 
                ${bgColor} 
                ${highlighted && 'border-highlitings dark:border-highlitings-dark border-2'}
            `}
            initial={{ scale: letter != '' ? 1.1: 1 }} // Escala inicial de la celda
            animate={{ scale: 1 }} // Escala al aplicar el efecto de zoom
            exit={{ scale: 1 }} // Regresa a la escala original al desaparecer
            transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Transición suave
        >
            {letter}
        </motion.div>
        
        
    )
}