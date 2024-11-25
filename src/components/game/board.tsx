import { BoardProps } from "../../types/board"
import Cell from "../ui/cell"
import { motion } from "motion/react"

export default function Board({board, rowi, coli, isShaking}: BoardProps){
    return(
        <>
            <div>
                {board.map((row, rindex)=>(
                    <motion.div 
                        animate={{
                            x: isShaking && rindex === rowi ? [0, -10, 10, -10, 10, 0] : 0,
                        }}
                        transition={{
                            duration: 0.3, 
                            times: [0, 0.2, 0.4, 0.6, 0.8, 1], 


                        }}
                        className="flex items-center justify-center" 
                        key={`r-${rindex}`}
                    >
                        {row.map((cell,cindex)=>(
                            <Cell highlighted={rindex === rowi && cindex === coli} letter={cell.letter} status={cell.status} key={`b-${cindex}`}/>
                        ))}
                    </motion.div>
                ))} 
            </div>
        </>
    )
}