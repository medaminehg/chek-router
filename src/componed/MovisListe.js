import React from 'react'
import MovisCard from './MovisCard'
function MovisListe(props) {
  
   return (
    (props.movis.length === 0)?<h1 className='result'>no results found</h1>:
    <div className='grid-container'>
        {props.movis.map((el, i) => <MovisCard film={el} key={i} />)}

    </div>
  )
}

export default MovisListe
