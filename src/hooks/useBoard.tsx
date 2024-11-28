import { useEffect, useState } from "react"
import { BoardType, StatsType, BoardArray } from "../types/board"
import dictionary from "../utils/diccionarioFiltrado.json"

const createNewBoard = ()=>{
    const newBoard:BoardType = []
    for (let i = 0; i < 6 ; i++){
        let column:BoardArray[] = []
        for (let h =0; h<5; h++){
            column.push({letter: '', status:'none'})
        }
        newBoard.push(column)
    }
    return newBoard
}

const getStats = ()=>{
    const defaultStats = {
        wins:0,
        gamesPlayed:0,
        currentStreak:0,
        bestStreak:0
    }

    const stats = localStorage.getItem("stats");

    return stats ? JSON.parse(stats) : defaultStats;
}

export const useBoard = ()=>{
    const [row, setRow] = useState<number>(0)
    const [col, setCol] = useState<number>(0)
    const [secretWord, setSecretWord] = useState<string>('')
    const [board, setBoard] = useState<BoardType>(createNewBoard())
    const [block, setBlock] = useState<boolean>(false)
    const [currentWord, setCurrentWord] = useState<string>('')
    const [stats, setStats] = useState<StatsType>(getStats())

    const getRandomWord = ()=>{
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        const randomWord = dictionary[randomIndex];
        setSecretWord(randomWord);
    }

    const setLocalStats = (result:string)=>{
        const statsUpdating = {...stats}
        if(result === 'win'){
            statsUpdating.wins += 1
            statsUpdating.currentStreak +=1
            if (statsUpdating.currentStreak > statsUpdating.bestStreak)
            statsUpdating.bestStreak = statsUpdating.currentStreak
        }

        if(result === 'defeat')
            statsUpdating.currentStreak = 0

        statsUpdating.gamesPlayed +=1
        
        localStorage.setItem("stats", JSON.stringify(statsUpdating));
        setStats(statsUpdating)
    }

    useEffect(()=>{
        if (!secretWord)
           getRandomWord()
    },[])

    
    const resetBoard = ()=>{
                 const newBoard = createNewBoard()
                 setBoard(newBoard)
                 setRow(0)
                 setCol(0)
                 setCurrentWord('')
                 setBlock(false)
                 getRandomWord()
    }

    const checkWord = ()=>{
        console.log("secret:",secretWord)
        console.log("---------------------")
        if (currentWord.length != 5 || !secretWord)
            return

        setBlock(true)

        const currentWordLetters = currentWord.split('')
        const secretWordLetters = secretWord.split('')
        let correctLetters = 0

        const results:{
            result: string,
            letters: {
                letter:string
                status:'correct' | 'present' | 'absent' | 'none'
            }[]
        } = {
            result : '',
            letters:[]
        }
        currentWordLetters.forEach((letter : string, index) => {
            const matchIndex = secretWordLetters.indexOf(letter)

            if (matchIndex === -1){

                results.letters.push({letter: letter, status:'absent'})

            }else if(matchIndex === index){
                secretWordLetters[matchIndex] =''
                results.letters.push({letter: letter, status:'correct'})
                correctLetters += 1

            }else{
                secretWordLetters[matchIndex] =''
                results.letters.push({letter: letter, status:'present'})
              
            }
        })
        setBoard((prevBoard:BoardType)=>{
            prevBoard[row] = results.letters
            return prevBoard
        })
        setCurrentWord('')
        setCol(0)
        if (correctLetters === 5){
            results.result = 'win'
            setLocalStats(results.result)
        }else if(row === 5){
            results.result = 'defeat'
            setLocalStats(results.result)
        }else    {
            results.result = 'incorrect'
            setBlock(false)
            setRow(prevRow => prevRow + 1)
        }
        return results
    }

    

    const isWordInDictionary = ()=>{
        return dictionary.includes(currentWord)
    }

    const registerLetter = (letter : string)=>{

        if (block ||  col > 4)
            return   

        setBoard(prevBoard =>{
            prevBoard[row][col] = {letter: letter, status: 'none'}
            return prevBoard
        })
        setCol(prevCol => prevCol + 1)
        setCurrentWord(prevCurrentWord => prevCurrentWord + letter)

    }
    const deleteLetter = ()=>{
        if (col === 0 || block)
            return
        setBoard(prevBoard =>{
            prevBoard[row][col - 1].letter = ''
            return prevBoard 
        })
        setCurrentWord(prevCurrentWord=>{
            return prevCurrentWord.slice(0, -1)
        })
        setCol( prevCol => prevCol-1)
    }

    return{
        resetBoard,
        secretWord,
        setSecretWord,
        setCurrentWord,
        checkWord,
        isWordInDictionary,
        registerLetter,
        deleteLetter,
        getRandomWord,
        row,
        col,
        board,
        currentWord,
        stats
    }
}
