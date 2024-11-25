
export type BoardArray = {
    letter : string,
    status: 'correct' | 'present' | 'absent' | 'none'
}

export type BoardType = Array<BoardArray[]>

export type BoardProps = {
    board: BoardType,
    rowi: number,
    coli:number,
    isShaking:boolean
}

export type StatsType = {
    wins:number,
    gamesPlayed:number
    currentStreak:number,
    bestStreak:number
}