import { useState, useRef } from "react";

import Hands from "./Hands"
import EasyYaku from "./EasyYaku";
import Yakuman from "./Yakuman"
import Fu from './Fu';

import "./Homepage.css"
import { SearchBar } from "./searchbar/Searchbar";


export default function HomePage(){
    const [searchParam, setSearchParam] = useState('')

    const yakuRef = useRef();
    const fuRef = useRef();
    const handsRef = useRef();
    const yakumanRef = useRef();

    const buttonData = [
        {title: "Easy Yaku", ref: yakuRef},
        {title: "Hans", ref: handsRef},
        {title: "Yakuman", ref: yakumanRef},
        {title: "Fu", ref: fuRef},
    ]

    const buttons = buttonData.map((x) => 
        <button key={x.title} onClick={() => handleScroll(x.ref)}>{x.title}</button>
    )


    const handleScroll = (ref) => {
        ref.current.scrollIntoView();
    }
    
    return(
        <div className="homepage">
            <div className='navbar d-flex justify-content-between align-items-end'>
                <div>
                    <div className="header">
                        Jump to:
                    </div>
                    <div className='jump-buttons d-flex justify-content-between'>
                        {buttons} 
                    </div>
                </div>
                <SearchBar searchParam={searchParam} setSearchParam={setSearchParam}/>

            </div>
            <EasyYaku sectionRef={yakuRef} searchParam={searchParam} />
            <Hands sectionRef={handsRef} searchParam={searchParam}/>
            <Yakuman sectionRef={yakumanRef} searchParam={searchParam} />
            <Fu   sectionRef={fuRef}/>
        </div>
    )
}