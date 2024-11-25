import { createPortal } from "react-dom";
import { ModalType } from "../../types/modal";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react"

export default function Modal({isOpen, onClose, children}: ModalType){

    return createPortal(
        <AnimatePresence>
            {isOpen && <motion.div
                role="dialog"
                aria-modal = "true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className={`
                    fixed
                    top-0
                    left-0
                    bg-black/60
                    h-[100%]
                    w-[100%]
                    flex
                    items-center
                    justify-center
                    
                `}
            >
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`
                        bg-background
                        dark:bg-background-dark
                        dark:bg-gray-1
                        min-w-[480px]
                        max-w-[480px]
                        md:max-w-[50%]
                        min-h-[400px]
                        relative
                        p-5
                        rounded
                        dark:text-white
                    `}
                >
                    <motion.button 
                        onClick={onClose}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute top-1 right-1"
                    >
                        <FaXmark className="text-2xl" />
                    </motion.button>
                    {children}
                </motion.div>
            </motion.div>}
        </AnimatePresence>, document.body
    )
}