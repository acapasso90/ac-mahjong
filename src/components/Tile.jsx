export default function Tile({
    tile
}){
    return(
        <div className="tile">
            <img src={tile.img}  alt={tile.alt}   />
            <div className="number">
                {tile.number}
            </div>
        </div>
    )
}