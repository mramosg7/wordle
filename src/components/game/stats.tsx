import { MdOutlineRefresh } from "react-icons/md";
import { BoardType, StatsType } from "../../types/board";

export default function Stats({board, stats, onClick}: {board: BoardType, stats: StatsType, onClick:()=>void}){
    return(
        <>
            <h1 className="text-2xl font-semibold mb-3">Wordle</h1>
                <section className="flex flex-col gap-1 items-center justify-center">
                    {
                        board.map((row, index)=>(
                            <div key={"row-" + index} className="flex gap-1">
                                {row.map((cell, indexc)=>(
                                    <div key={"cell-" + indexc} className={`h-[20px] w-[20px] rounded-md ${
                                        cell.status === 'correct' ? 'bg-keys-correct dark:bg-keys-correct-dark' :
                                        cell.status === 'present' ? 'bg-keys-present dark:bg-keys-present-dark' : 
                                            'bg-keys-absent dark:bg-keys-absent-dark'
                                    }`}>

                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </section>
                <div>
                    <h1 className="text-2xl font-semibold my-3" >Estadísticas</h1>
                    <section className="flex justify-around">
                        <div className="grid place-items-center">
                            <p className="text-2xl">{stats.gamesPlayed}</p>
                            <p >Jugadas</p>
                        </div>
                        <div className="grid place-items-center">
                            <p className="text-2xl">{Math.trunc((stats.wins/stats.gamesPlayed)*100)}%</p>
                            <p>Victorias</p>
                        </div>
                        <div className="grid place-items-center">
                            <p className="text-2xl">{stats.currentStreak}</p>
                            <p>Racha Actual</p>
                        </div>
                        <div className="grid place-items-center">
                            <p className="text-2xl">{stats.bestStreak}</p>
                            <p>Mejor Racha</p>
                        </div>
                    </section>
                </div>
                <div className="grid mt-4 place-items-center h-[50px]">
                    <button onClick={()=>{
                        onClick()
                    }} 
                    className="uppercase w-[70%] font-semibold bg-button text-[18px] dark:bg-button-dark dark:text-white px-4 py-1 flex gap-2 justify-center items-center rounded"
                    >
                        <p className="">Volver a jugar</p>
                         <MdOutlineRefresh className="text-2xl"/>
                    </button>
                </div>
        </>
    )
}