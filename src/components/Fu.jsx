import Section from "./Section"


import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const headers = ["Name", "Open", "Closed"]

const bodyRows = [
    ["Winning", "20", "20"],
    ["Tsumo (Unless for Pinfu)", "+2", "+2"],
    ["Concealed Ron", "", "+20"],
    [<>
        Open Pinfu  
        <OverlayTrigger
            placement="right"
            overlay={ 
                <Tooltip >
                    Four sequences and a valueless pair. Must win with a two-sided wait on a sequence.
                </Tooltip>
            }
        >
        <i className="bi bi-question-circle" />
    </OverlayTrigger>
    </>,"+2", ""],
    ["Seven Pairs","25", "25"],
    ["Sequence","0", "0"],
    ["Triplet","+2", "+4"],
    ["Triplet Terminal/Honor","+4", "+8"],
    ["Quad","+8", "+16"],
    ["Quad Terminal/Honor","+16", "+32"],
    ["Pair Value Honor","+2", "+2"],
    ["Pair Double Wind (seat / table)","+4", "+4"],
    [<>
        Edge Wait 
        <OverlayTrigger
            placement="right"
            overlay={ 
                <Tooltip >
                    Waiting for an edge value in a sequence to win. Ex. needing a 3 to complete a 1-2-3 sequence.
                </Tooltip>
            }
        >
            <i className="bi bi-question-circle" />
        </OverlayTrigger>
    </>,"+2", "+2"],
    [<>
        Middle Wait 
        <OverlayTrigger
            placement="right"
            overlay={ 
                <Tooltip >
                    Waiting for the middle value in sequence to win. Ex. needing a 2 to complete a 1-2-3 sequence.
                </Tooltip>
            }
        >
            <i className="bi bi-question-circle" />
        </OverlayTrigger>
    </>
        ,"+2", "+2"],
    ["Pair Wait","+2", "+2"],

]

export default function Fu({
    sectionRef,
}){

    let keyCounter = 0;
    return(
        <Section title="Fu" ref={sectionRef}>
            <div className="sub-section">
                    <table>
                        <thead>
                            <tr>
                            {headers.map((x ) => <th key={x}> {x} </th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {bodyRows.map((row) => {
                                return(
                                    <tr key={keyCounter}>
                                        {row.map((x) => {
                                            keyCounter += 1 ;
                                            return(
                                                <td key={keyCounter}>{x}</td>
                                            )
                                        })}
                                    </tr>    
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </Section>
    )

}