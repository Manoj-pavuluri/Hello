import React,{memo} from 'react'

function Hello22({name}) {
    console.log(name)
    return (
        <div>
            {name}
        </div>
    )
}

export default memo(Hello22)
