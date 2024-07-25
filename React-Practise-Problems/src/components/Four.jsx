//! Q4. Create a component to display of items

import React from 'react'

const Four = () => {
    const items = [
        {
            id: 1,
            name: 'Gaming Controller'
        },
        {
            id: 2,
            name: 'RGB Mouse'
        },
        {
            id: 3,
            name: 'Mechanical Keyboard'
        },
    ]


    return (
        <>
            <div>
                <h1>List of Items</h1>
                {
                    items.map(({ name, id }) => {
                        return (
                            <li key={id}>{name}</li>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Four