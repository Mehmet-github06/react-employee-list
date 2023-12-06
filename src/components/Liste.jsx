import React from 'react'

const Liste = ({data}) => {
  return (
    <>
    {data.map(({id,name,email,image,age})=>(
        <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
                <p>{age} years</p>
            </div>
        </article>
    ))

    }
    </>
  )
}

export default Liste
