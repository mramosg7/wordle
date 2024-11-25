export default function Info(){
    return(
        <>
            <h1 className="text-2xl font-semibold">¿Que es el wordle?</h1>
            <p className="opacity-80 text-[16px] my-3">Wordle es un popular juego de palabras en el que debes adivinar una palabra de 5 letras en un máximo de 6 intentos. 
                Cada intento recibe pistas que te ayudan a encontrar la solución.</p>
            <h1 className="text-2xl font-semibold mb-3">Indicadores en el juego</h1>
                <div className="ml-2 flex items-center gap-3 mb-3">
                    <div className="bg-keys-correct dark:bg-keys-correct-dark text-2xl h-14 border border-border-keys-correct/70 
                    dark:border-keys-correct-dark/70 px-4 grid 
                    place-items-center uppercase rounded-md">
                        V
                    </div>
                    <p className="opacity-80 text-[16px]">
                        La letra <b>está</b> en la palabra y en la <b>posición correcta</b>.
                    </p>
                </div>
                <div className="ml-2 flex items-center gap-3 mb-3">
                    <div className="bg-keys-present dark:bg-keys-present-dark text-2xl h-14 border border-border-keys-present/70 
                    dark:border-keys-present-dark/70 px-4 grid 
                    place-items-center uppercase rounded-md">
                        A
                    </div>
                    <p className="opacity-80 text-[16px]">
                        La letra <b>está</b> en la palabra pero en una <b>posición diferente</b>.
                    </p>
                </div>
                <div className="ml-2 flex items-center gap-3 mb-3">
                    <div className="bg-keys-absent dark:bg-keys-absent-dark text-2xl h-14 border border-border-keys-absent/70 
                    dark:border-keys-absent-dark/70 px-4 grid 
                    place-items-center uppercase rounded-md">
                        B
                    </div>
                    <p className="opacity-80 text-[16px] ">
                    La letra <b>no está</b> presente en la palabra.
                    </p>
                </div>
        </>
    )
}