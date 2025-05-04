import React from 'react';



const Section = React.forwardRef(({
    title, 
    children
}, ref ) => {
    return(
        <div ref={ref}>
            <h3>{title}</h3>
            {children}
        </div>
    )
})

export default Section;