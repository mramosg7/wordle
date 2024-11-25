import { ReactNode } from "react"

export type ModalType = {
    isOpen: boolean,
    onClose: ()=>void,
    children: ReactNode
}