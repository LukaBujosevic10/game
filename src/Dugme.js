import React from 'react'

function Dugme({ime,provera}) {
    return (
            <button onClick={function(e){
                provera(ime);
            }} className="btn btn-primary">{ime}</button>
    )
}

export default Dugme
