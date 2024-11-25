export type CellProps = {
    letter: string,
    status: 'correct' | 'present' | 'absent' | 'none',
    highlighted: boolean
}