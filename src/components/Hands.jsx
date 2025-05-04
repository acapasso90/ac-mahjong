
import Section from './Section';
import HandSubSection from './HandSection';
import { filterList } from './searchbar/FilterList.js';

import * as tile from './Tiles.jsx';

import './Hand.css';


const oneHan = [
    {name: "Riichi", description: "Closed waiting hand declared with 1,000 of the caller's points put on the table."},
    {name: "Fully Concealed Hand", nickname: "Menzen tsumo", description: "Winning with a self-drawn tile on a fully concealed hand."},
    {name: "Unbroken", nickname: "Ippatsu", 
        description: "Win on the turn after declaring riichi. There must be no interuption from any call (except another riichi declaration)."},
    {name: "After a kan", description: "Winning off the supplementary draw you receive immediately after declaring a kan."},
    {name: "Robbing a kan", description: "Calling ron on an opponent's attemp to upgrade an open pung into a kong."},

    {name: "Under the Sea", description: "Winning by completing your hand from the very last tile available from the wall, not from stealing another player's discard."},
    {name: "Under the River", description: "Winning by completing your hand from stealing the very last discard of the hand from another player."},

    {name: "Value Honor", nickname: 'Yakuhai', description: "Triplet or quad of dragon tiles, player's seat wind, or the round/table wind.", 
        example: [
            tile.redDragon,
            tile.redDragon,
            tile.redDragon,
        ]
    },
    {name: "Pinfu", description: "Four sequences and a valueless pair. Must win with a two-sided wait on a sequence.",
        example: [
            tile.kanji3,
            tile.kanji4,
            tile.kanji5,
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.tire4,
            tile.tire5,
            tile.tire6,
            tile.tire8,
            tile.tire8,
            tile.sticks1,
            tile.sticks2,
            tile.sticks3,

        ]
    },
    {name: "Pure Double Sequence / Twin Sequences", nickname: 'Iipeko', description: "Two identical sequences in the same suit.", 
        example: [
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.tire1,
            tile.tire2,
            tile.tire3,
        ]
    },
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
]

const twoHan = [
    {name: "Double Riichi", nickname: "Daburu Riichi", description: "Win with a riichi declared on your first discard."},
    {name: "Little Dragons", nickname: "Shosangen", 
        description: "Two Dragon triplets (or quads) and a pair of dragon tiles.",
        example: [
            tile.redDragon,
            tile.redDragon,
            tile.redDragon,
            tile.greenDragon,
            tile.greenDragon,
            tile.greenDragon,
            tile.whiteDragon,
            tile.whiteDragon,

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
    {name: "Full Straight/Pure Straight", nickname: "Ikkitsukan / Ittsu", description: "Three sequences of the same suit forming 1-2-3, 4-5-6, and 7-8-9.",
        example: [

            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.tire4,
            tile.tire5,
            tile.tire6,
            tile.tire7,
            tile.tire8,
            tile.tire9,
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
    {name: "Common Ends/Half Outside Hand", nickname: "Chanta", 
        description: "All groups and the pair containing at least one terminal or honor tile. Contains at least one sequence.",
        example: [
            tile.kanji1,
            tile.kanji2,
            tile.kanji3,
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.tire9,
            tile.tire9,
            tile.tire9,
            tile.sticks7,
            tile.sticks8,
            tile.sticks9,

            tile.eastWind,
            tile.eastWind,
        ]
    },
    {name: "Triple Triplets/Mixed Triplets", nickname: "Sanshoku doko", 
        description: "Three triplets (or quads) of the same number in each suit.",
        example: [
            tile.kanji3,
            tile.kanji3,
            tile.kanji3,
            tile.tire3,
            tile.tire3,
            tile.tire3,
            tile.sticks3,
            tile.sticks3,
            tile.sticks3,
        ]
    },
    {name: "Three Concealed Triplets", nickname: "San'anko", 
        description: "Three entirely concealed triplets (or quads) of any tile. May not ron on triplets. Rest of hand may be called.",
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
        ]
    },
    {name: "Three Quads", nickname: "Sankantsu", 
        description: "Three quads.",
        example: [
            tile.kanji3,
            tile.kanji3,
            tile.kanji3,
            tile.kanji3,
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.tire1,
            tile.sticks7,
            tile.sticks7,
            tile.sticks7,
            tile.sticks7,
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
    {name: "Common Terminals", nickname: "Honroto", 
        description: "Only terminal and honor tiles.",
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
            tile.redDragon,
            tile.redDragon,
        ]
    },
    
]

const threeHan = [
    {name: "Double Twin / Twice Pure Double Sequences", nickname: "Ryanpeiko", 
        description: "Two Twin Sequences. Does not stack with Twin Sequences.",
        example: [
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.sticks4,
            tile.sticks5,
            tile.sticks6,
            tile.sticks4,
            tile.sticks5,
            tile.sticks6,
        ]
    },
    {name: "Common Flush / Half Flush", nickname: "Hon'itsu", 
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
    {name: "Perfect Ends / Pure Outside ", nickname: "Junchan", 
        description: "At least one terminal tile in each group with no honor tiles.",
        example: [
            tile.kanji1,
            tile.kanji1,
            tile.kanji1,
            tile.kanji3,
            tile.kanji4,
            tile.kanji5,
            tile.kanji9,
            tile.kanji9,
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.sticks1,
            tile.sticks2,
            tile.sticks3,
        ]
    },
]

const fiveHan = [
    {name: "Nagashi Mangan",
        description: "Special yaku that is awarded when the round ends in a draw and a player has discarded only terminal and honor tiles throughout the round. Requires strategic discards and a non-winning hand.",
        example: [
        ]
    },
]

const sixHan = [
    {name: "Perfect Flush / Full Flush", nickname: "Chin'itsu", 
        description: "Only number tiles from one suit with no honor tiles.",
        example: [
            tile.tire1,
            tile.tire2,
            tile.tire3,
            tile.tire3,
            tile.tire3,
            tile.tire3,
            tile.tire6,
            tile.tire6,
            tile.tire6,
            tile.tire7,
            tile.tire7,
            tile.tire7,
            tile.tire9,
            tile.tire9,

        ]
    },
]

const sections = [
    {title: '1-Han', list: oneHan},
    {title: '2-Han', list: twoHan},
    {title: '3-Han', list: threeHan},
    {title: '5-Han / Mangan', list: fiveHan},

    {title: '6-Han / Haneman', list: sixHan},

]

export default function Hands({
    searchParam,
    sectionRef
}){

    const subSections = sections.map((x) => {
        const filtered = filterList(x.list, searchParam);
        return(
            <HandSubSection key={x.title} title={x.title} hands={filtered} />

        )
    })

    return(
        <Section title="Hans"  ref={sectionRef}>
           {subSections}
        </Section>
    )
}