import { FaInfoCircle } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";

import { FaGithub } from "react-icons/fa";
import { HeaderProps } from "../../types/header";
import Settings from "./settings";


export default function Header({StatsOpen, InfoOpen}: HeaderProps){
    return(
        <header className="flex justify-around w-full text-[22px] items-center">
            <nav className="flex gap-7">
                <FaInfoCircle onClick={InfoOpen}/>
                <GrLineChart onClick={StatsOpen} />
            </nav>
            <h1>
                WORDLE MRAMOSG12
            </h1>
            <nav className="flex gap-7">
                <Settings/>
                <a href="https://github.com/mramosg7/wordle"><FaGithub /></a>
            </nav>
        </header>
    )
}