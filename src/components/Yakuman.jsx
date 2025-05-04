
import Section from './Section';
import { filterList } from './searchbar/FilterList.js';

import * as tile from './Tiles.jsx';


import HandSubSection from './HandSection';

const yakuMan = [
    {name: "Blessing of Heaven", nickname: "Tenhou",
        description: "Dealer-only yakuman awarded when East Seat's initial 14-tile deal is already a complete winning hand, with no discards or draws required."

    },
    {name: "Blessing of Earth", nickname: "Chihiou",
        description: "Exclusive to non-dealers who win in their very first draw without discarding or calling."

    },
    {name: "13 Orphans", nickname: "Kokushi muso", 
        description: "One tile of each terminal and honor and one additional terminal or honor tile.",
        example: [
            tile.kanji1,
            tile.kanji9,
            tile.tire1,
            tile.tire1,
            tile.tire9,
            tile.sticks1,
            tile.sticks9,
            tile.eastWind,
            tile.westWind,
            tile.southWind,
            tile.northWind,
            tile.greenDragon,
            tile.redDragon,
            tile.whiteDragon,
        ]
    },
    {name: "9 Gates", nickname: "Churen poto", 
        description: "111234568999 in the same suit, plus one additional tile of that suit.",
        example: [
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.tire2,
            tile.tire2,
            tile.tire3,
            tile.tire4,
            tile.tire5,
            tile.tire6,
            tile.tire7,
            tile.tire8,
            tile.tire9,
            tile.tire9,
            tile.tire9,
        ]
    },
    {name: "Four Concealed Triplets / Four Concealed Pungs", nickname: "Suanko", 
        description: "Four triplets (or quads) without calling.",
        example: [
            tile.kanji3,
            tile.kanji3,
            tile.kanji3,
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.sticks4,
            tile.sticks4,
            tile.sticks4,
            tile.redDragon,
            tile.redDragon,
            tile.redDragon,
        ]
    },
    {name: "Four Quads", nickname: "Sukantsu", 
        description: "Four quads.",
        example: [
            tile.kanji3,
            tile.kanji3,
            tile.kanji3,
            tile.kanji3,
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.sticks4,
            tile.sticks4,
            tile.sticks4,
            tile.sticks4,
            tile.redDragon,
            tile.redDragon,
            tile.redDragon,
            tile.redDragon,
        ]
    },
    {name: "All Green", nickname: "Ryuiiso", 
        description: "Only the following Green Tiles. Bamboo 2, 3, 4, 6, 8 & Green Dragon tiles.",
        example: [
            tile.sticks2,
            tile.sticks3,
            tile.sticks4,
            tile.sticks4,
            tile.sticks4,
            tile.sticks4,
            tile.sticks6,
            tile.sticks6,
            tile.sticks6,
            tile.sticks8,
            tile.sticks8,
            tile.greenDragon,
            tile.greenDragon,
            tile.greenDragon,
        ]
    },
    {name: "Perfect Terminals", nickname: "Chinroto", 
        description: "Four triplets (or quads) and a pair with only terminal tiles.",
        example: [
            tile.kanji1,
            tile.kanji1,
            tile.kanji1,
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.tire9,
            tile.tire9,
            tile.tire9,
            tile.sticks1,
            tile.sticks1,
            tile.sticks1,
            tile.sticks9,
            tile.sticks9,
        ]
    },
    {name: "All Honors", nickname: "Tsuiiso", 
        description: "Only honor tiles.",
        example: [
            tile.redDragon,
            tile.redDragon,
            tile.greenDragon,
            tile.greenDragon,
            tile.greenDragon,
            tile.whiteDragon,
            tile.whiteDragon,
            tile.whiteDragon,
            tile.eastWind,
            tile.eastWind,
            tile.eastWind,
            tile.southWind,
            tile.southWind,
            tile.southWind,

        ]
    },
    {name: "Big Dragons", nickname: "Daisaugen", 
        description: "Three triplets (or quads) of dragon tiles.",
        example: [
            tile.redDragon,
            tile.redDragon,
            tile.redDragon,
            tile.greenDragon,
            tile.greenDragon,
            tile.greenDragon,
            tile.whiteDragon,
            tile.whiteDragon,
            tile.whiteDragon,
        ]
    },
    {name: "Little Winds", nickname: "Shosushii", 
        description: "Three triplets (or quads) and a pair of wind tiles.",
        example: [
            tile.eastWind,
            tile.eastWind,
            tile.eastWind,
            tile.southWind,
            tile.southWind,
            tile.southWind,
            tile.northWind,
            tile.northWind,
            tile.northWind,
            tile.westWind,
            tile.westWind,

        ]
    },
    {name: "Big Winds", nickname: "Daisushii", 
        description: "Four triplets of wind tiles.",
        example: [
            tile.eastWind,
            tile.eastWind,
            tile.eastWind,
            tile.southWind,
            tile.southWind,
            tile.southWind,
            tile.northWind,
            tile.northWind,
            tile.northWind,
            tile.westWind,
            tile.westWind,
            tile.westWind,

        ]
    },
]


const doubleYakuMan = [
    {name: "Thirteen-wait 13 Orphans",
        description: "13 Orphans is a hand that has the 13 honor/terminal tiles needed for 13 orphans and is waiting on any of the 13 tiles to make the pair needed to complete the hand.",

        example: [
            tile.kanji1,
            tile.kanji9,
            tile.tire1,
            tile.tire9,
            tile.sticks1,
            tile.sticks9,
            tile.eastWind,
            tile.westWind,
            tile.southWind,
            tile.northWind,
            tile.greenDragon,
            tile.redDragon,
            tile.whiteDragon,
        ]
    },
    {name: "Single Wait Four Concealed Triplets",
        description: "A hand that has four concealed triplets/quads and is waiting for a single tile to form a pair and complete the winning hand.",
        example: [
            tile.kanji1,
            tile.kanji1,
            tile.kanji1,
            tile.tire2,
            tile.tire2,
            tile.tire2,
            tile.tire9,
            tile.tire9,
            tile.tire9,
            tile.sticks2,
            tile.sticks2,
            tile.sticks2,
            tile.redDragon,
            tile.redDragon,

        ]
    },
    {name: "Four Big Winds",  
        description: "Four complete sets of wind tiles.",
        example: [
            tile.eastWind,
            tile.eastWind,
            tile.eastWind,
            tile.eastWind,
            tile.southWind,
            tile.southWind,
            tile.southWind,
            tile.southWind,
            tile.northWind,
            tile.northWind,
            tile.northWind,
            tile.northWind,
            tile.westWind,
            tile.westWind,
            tile.westWind,
            tile.westWind,
        ]
    },
    {name: "True Nine Gates",  
        description: "A fully concealed hand composed of only one suit with the specific tile pattern 1112345678999 plus any additional tile from that same suit. It must allow for multiple tiles to complete it, meaning the player usually has a broad range of potential winning tiles within that suit.",
        example: [
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.tire4,
            tile.tire5,
            tile.tire6,
            tile.tire7,
            tile.tire8,
            tile.tire9,
            tile.tire9,
            tile.tire9,
        ]
    },
]

export default function Yakuman({
    searchParam,
    sectionRef
}){

    const filtered = filterList(yakuMan, searchParam);

    const filteredDouble = filterList(doubleYakuMan, searchParam)
    
    return(
        <>
        <Section title="Yakuman" ref={sectionRef}>
            <HandSubSection hands={filtered} />
    
        </Section>
        <Section title="Double Yakuman" >
            <HandSubSection hands={filteredDouble} />
    
        </Section>
        </>

    )
}