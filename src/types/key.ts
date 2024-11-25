export type KeyProps = {
    letter: string,
    status: 'correct' | 'present' | 'absent' | 'none',
    deleteLetter:()=>void,
    registerLetter:(letter: string) =>void
}

export type keyType = {
    letter : string,
    status: 'correct' | 'present' | 'absent' | 'none'
}