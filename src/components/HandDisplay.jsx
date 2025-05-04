import Tile from "./Tile.jsx";

export default function HandDisplay({hand}){
    let keyCounter = 0;
    return (
        <div className="hand">
            <div className="hand-name">{hand.name} {hand.nickname && <span className="nickname">({hand.nickname})</span>}</div>
            <div className="ps-3">{hand.description}</div>
            {hand.example && 
                <div className='hand-tiles d-flex py-2'>
                    {hand.example.map((tile) => {
                        keyCounter += 1;
                        return(
                            <Tile tile={tile} key={keyCounter} />
                        )
                    })}
                </div>
            }
        </div>
    )
}