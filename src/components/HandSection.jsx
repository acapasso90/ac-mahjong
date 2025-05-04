import HandDisplay from "./HandDisplay.jsx"

export default function HandSubSection({
    title,
    hands,
}){

    const handsDisplay = hands.map((x) => 
        <HandDisplay key={x.name} hand={x} />
    )

    return(
        <div className="sub-section">
            {title && <div className="header">{title}</div>}
            <div className="hand-content">
              {handsDisplay}
            </div>

        </div>
    )
}