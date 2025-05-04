import * as tile from './Tiles.jsx';

import Tile from './Tile.jsx'

import './Legend.css';

const sections = [
    {name: "Pin", tiles: [
        tile.tire1,
        tile.tire2,
        tile.tire3,
        tile.tire4,
        tile.tire5,
        tile.tire6,
        tile.tire7,
        tile.tire8,
        tile.tire9
    ]},
    {name: "So", tiles: [
        tile.sticks1,
        tile.sticks2,
        tile.sticks3,
        tile.sticks4,
        tile.sticks5,
        tile.sticks6,
        tile.sticks7,
        tile.sticks8,
        tile.sticks9
    ]},
    {name: "Man", tiles: [
        tile.kanji1,
        tile.kanji2,
        tile.kanji3,
        tile.kanji4,
        tile.kanji5,
        tile.kanji6,
        tile.kanji7,
        tile.kanji8,
        tile.kanji9
    ]},
    {name: "Terminals", subText:"1s and 9s", tiles: [
        tile.tire1,
        tile.tire9,
        tile.sticks1,
        tile.sticks9,
        tile.kanji1,
        tile.kanji9
    ]},
    {name: "Honors", subText: "Non-numbers", tiles: [
        tile.greenDragon,
        tile.redDragon,
        tile.whiteDragon,
        tile.eastWind,
        tile.westWind,
        tile.southWind,
        tile.northWind,
    ]}
]

export default function Legend(){
    return(
        <div className="legend">
            <h2>
                Legend
            </h2>
            <ul>
                {sections.map((x) => 
                    <li key={x.name}>
                    {x.name} 
                    <div className="ps-2">
                        {x.subText &&
                            <div className="subtext">
                                {x.subText}
                            </div>
                        }
                        <div className="d-flex flex-wrap">
                        {x.tiles.map((tile) => <Tile key={tile.alt} tile={tile} />)}
                        </div>
   
                    </div>

                    </li>
                )}
            </ul>
        </div>
    
    )
}