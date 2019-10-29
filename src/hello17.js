import React from 'react'

export default function hello17({
    ...range}) {

        console.log(range)
    return (
        <div>
           {range.name}
        </div>
    )
}
