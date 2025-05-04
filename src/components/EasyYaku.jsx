
import Section from './Section';
import HandSubSection from './HandSection';
import { filterList } from './searchbar/FilterList.js';

import * as tile from './Tiles.jsx';

import './Hand.css';


const yakus = [
    {name: "Riichi", description: "Closed waiting hand declared with 1,000 of the caller's points put on the table."},
    {name: "All Inside/All Simples", nickname: "Tan'yao", description: "No terminal or honor tiles (no 1s and 9s, no winds or dragons).", 
        example: [
            tile.kanji3,
            tile.kanji4,
            tile.kanji5,
            tile.tire4,
            tile.tire5,
            tile.tire6,
            tile.tire8,
            tile.tire8,
            tile.sticks2,
            tile.sticks3,
            tile.sticks4,
            tile.sticks6,
            tile.sticks6,
            tile.sticks6,
        ]
        },
        {name: "Value Honor", nickname: 'Yakuhai', description: "Triplet or quad of dragon tiles, player's seat wind, or the round/table wind.", 
            example: [
                tile.redDragon,
                tile.redDragon,
                tile.redDragon,
            ]
        },
        {name: "All Triplets", nickname: "Toitoi", 
            description: "Four triplets (or quads) and a pair.",
            example: [
                tile.kanji3,
                tile.kanji3,
                tile.kanji3,
                tile.tire1,
                tile.tire1,
                tile.tire1,
                tile.sticks7,
                tile.sticks7,
                tile.sticks7,
                tile.redDragon,
                tile.redDragon,
                tile.redDragon,
    
            ]
        },
        {name: "Seven Pairs", nickname: "Chiitoitsu", description: "Seven different pairs.",
            example: [
                tile.kanji5,
                tile.kanji5,
                tile.tire1,
                tile.tire1,
                tile.tire8,
                tile.tire8,
                tile.sticks2,
                tile.sticks2,
                tile.sticks6,
                tile.sticks6,
                tile.redDragon,
                tile.redDragon,
                tile.eastWind,
                tile.eastWind,
            ]
        },
    {name: "Common/Half Flush", nickname: "Hon'itsu", 
            description: "Groups and the pair containing only tiles from one suit and honour tiles.",
            example: [
                tile.sticks1,
                tile.sticks2,
                tile.sticks3,
                tile.sticks4,
                tile.sticks4,
                tile.sticks4,
                tile.sticks6,
                tile.sticks6,
                tile.sticks6,
                tile.sticks7,
                tile.sticks8,
                tile.sticks9,
                tile.redDragon,
                tile.redDragon,
            ]
        },
        {name: "Mixed Sequences", nickname: "Sanshoku dojun", description: "Same numerical sequence in each suit.",
            example: [
                tile.kanji1,
                tile.kanji2,
                tile.kanji3,
                tile.tire1,
                tile.tire2,
                tile.tire3,
                tile.sticks1,
                tile.sticks2,
                tile.sticks3,
            ]
        },
]

export default function EasyYaku({
    searchParam,
    sectionRef

}){
    const filtered = filterList(yakus, searchParam)

    return(
        <Section title="Easy Yaku" ref={sectionRef}>
            <HandSubSection hands={filtered} />
        </Section>
    )
}