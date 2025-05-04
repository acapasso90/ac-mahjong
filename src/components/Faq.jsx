export default function Faq(){

    const sections = [
        {   title: "Why can't I play my hand?", 
            description: "You can only play your hand if you have a yaku. If you have a winning hand without a yaku, you cannot play it to win."
        },
        {
            title: "Sequences",
            description: "Sequences can only be made from 3 tiles, no more or less, from numerical tiles. Making a sequence from a honor tile (wind or dragon) only works for 13 Orphans."
        },
        {
            title: "Why can't I play the sequence/triplet in my hand?",
            description: "You can only play the sequence when you have a winning hand and play the entire hand at once, or if you complete the sequence by stealing another player's discard."
        },
        {
            title: "What is Baiman?",
            description: "A 8-10 han hand."
        },
        {
            title: "What is Chii?",
            description: "When you take the player to the left's discard to complete a sequence."
        },
        {
            title: "What is Dora?",
            description: `In Mahjong Soul, the Dora tiles are the tiles that flash. They are special tiles that add one han each if held in a player's winning hand. Types of doras:`,
            listItems: [
                `Akadora: Red 5 value tiles, they do not need to revealed in the dora wall. `,
                `Kandora: Additional Dora indicators that are flipped whenever a kan is called.`,
                `Uradora: Underneath Doras that are revealed whenever a hand wins with riichi.`
            ]
        },
        {
            title: "What is Furiten?",
            description: "Furiten is a state where the tile you need to win is one you previously discarded, or you were in Riichi and did not Ron a winning tile, preventing you from winning by taking that tile from another player's discard. The only way to win while in Furiten is by Tsumo, or self-drawing that tile."
        },
        {
            title: "What is Kan?",
            description: `Triplets that have been upgraded into a four-of-a-kind. Types of kans:`,
            listItems: [
                `Ankan: AKA Closed Kan. Called when four of the same tile are in your hand without taking a discard. Ankan does not open your hand, so you may still enter Riichi. `,
                `Daminkan: An open kan that is called like pon by taking a discard. You must already have three of the same tile in your hand.`,
                `Shouminkan: A kan that is called when you have previously called pon, then draw the fourth tile yourself. You cannot take the fourth tile from a discard.`
            ]
        },
        {
            title: "What is a Han?",
            description: "Each yaku has a han value, which determins how much the hand's base points are multiplied. Some yaku are worth multiple han, and therefore can increase the hand value by 4 or 8 times. More difficult yaku to achieve typically grant more han, leading you to have a larger score."
        },
        {
            title: "What is Haneman?",
            description: "A 6-7 han hand."
        },
        {
            title: "What is Honba?",
            description: "A point bonus that happens whenever nobody wins or when the dealer wins. Each honba adds 300 points to the winning hand's score."
        },
        {
            title: "What is Mangan?",
            description: "A 5 han hand."
        },
        {
            title: "What is Pon?",
            description: "When you take a player's discard to complete an open triplet."
        },
        {
            title: "What is Riichi?",
            description: "It can only be played with a completely concealed hand, so the player cannot steal any discarded tiles from other players. It costs 1000 points and puts the player on 'autopilot' mode, preventing hand from being altered. It counts as a yaku."
        },
        {
            title: "What is Ron?",
            description: "Stealing a discard tile to complete a winning hand. You must have at least one yaku and cannot be in furiten."
        },
        {
            title: "What is Sanbaiman?",
            description: "A 11-12 han hand."
        },
        {
            title: "What is a Yaku?",
            description: "Yaku are specific patterns/conditions that your hand must meet to be a winning hand."
        },
        {
            title: "What is Yakuman?",
            description: "A 13+ han hand."
        },
    ]

    return(
        <div>
            <h2> FAQ </h2>
            {sections.map((x) => 
                <div className="ps-2">
                    <div className="header">{x.title}</div>
                    <p className="ps-3">{x.description}</p>
                    {x.listItems && 
                        <ul className="ps-5">
                            {x.listItems.map((item) => <li>{item}</li>)}
                        </ul>
                    }
                </div>
            )}
        </div>
    )
}