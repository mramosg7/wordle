import { Fragment, useEffect, useState } from "react";
import Board from "../components/game/board";
import Keyboard from "../components/game/keyboard";

import { useBoard } from "../hooks/useBoard";
import { useKeyboard} from "../hooks/useKeyboard";
import Modal from "../components/ui/modal";
import Stats from "../components/game/stats";
import Header from "../components/game/header";
import Info from "../components/game/info";


export default function Wordle(){
    const {row,board, col, isWordInDictionary,stats,checkWord, registerLetter, deleteLetter, resetBoard } = useBoard()
    const {keys, updateKeys, resetKeys} = useKeyboard()
    const [isStatsOpen, setStatsOpen] = useState(false)
    const [isInfoOpen, setInfoOpen] = useState(true)
    const [isShaking, setIsShaking] = useState(false)
    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key;
        if (/^[a-zA-Z]$/.test(key)) {
            registerLetter(key)
        }
        if (key == 'Backspace') {
            deleteLetter()
        }  
    }
    
    useEffect(()=>{
        
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    },[col,row])

    useEffect(()=>{
        if (col > 4){
            if(!isWordInDictionary()){
                setIsShaking(true)
                setTimeout(()=>{setIsShaking(false)}, 500)
                return
            }
            const results = checkWord()

            if (results){
                updateKeys(results.letters)
                if(results.result ==="win")
                    setStatsOpen(true)
                if(results.result === "defeat")
                    setStatsOpen(true)
            }

            
        }
    },[col])
    return(
        <Fragment>
            <section className="grid grid-rows-[10%_65%_25%] h-[100%] items-center max-w-[480px]">
                <header className="flex items-center justify-center h-full">
                   <Header StatsOpen={()=>{setStatsOpen(true)}} InfoOpen={()=>{setInfoOpen(true)}}/>
                </header>
                <Board isShaking={isShaking} rowi={row} coli={col} board = {board}/>
                <section>
                    <Keyboard letters={keys} deleteLetter={deleteLetter} registerLetter={registerLetter}/>
                </section>
            </section>
            <Modal isOpen={isStatsOpen} onClose={()=>{setStatsOpen(false)}}>
                <Stats board={board} stats = {stats} onClick={()=>{
                    resetBoard()
                    resetKeys()
                    setStatsOpen(false)
                }}/>
                
            </Modal>
            <Modal isOpen={isInfoOpen} onClose={()=>{setInfoOpen(false)}} >
                <Info/>
            </Modal>

        </Fragment>
    )
}