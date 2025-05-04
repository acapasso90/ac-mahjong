import * as tile from '../Tiles.jsx';
import Tile from '../Tile';

import './Background.css';

const tileArray = [
    tile.redDragon,
    tile.sticks3,
    tile.tire6,
    tile.kanji9,
    tile.northWind,
    tile.eastWind,
    tile.tire3,
    tile.sticks1,
    tile.kanji2,
    tile.greenDragon,
    tile.tire1,


]

export default function Background(){
    let keyCounter = 0;

    const tiles = tileArray.map((tile) => {
        keyCounter += 1;
        return <Tile tile={tile} key={keyCounter} />
    })
    
    return(
        <div className="background">
            {tiles}
        </div>
    )
}