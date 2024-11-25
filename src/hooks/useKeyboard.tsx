import { useState } from "react"
import { keyType } from "../types/key"
import letters from "../utils/letters.json"

export const useKeyboard = ()=>{
    const [keys, setKeys] = useState<keyType[]>(letters.letters as keyType[])

    const updateKeys = (newKeys:keyType[] )=>{
        const updatedKeys = keys.map(key => {

            const update = newKeys.find(updateKey => updateKey.letter === key.letter);
          
         
            if (update && key.status != "correct") {
                if(!(key.status === "present" && update.status === "absent"))
                    return { ...key, status: update.status };
            }
            return key;
        });

        setKeys(updatedKeys)
          
    }

    const resetKeys = ()=>{
        setKeys(letters.letters as keyType[])
    }

    return {
        keys,
        updateKeys,
        resetKeys
    }
}