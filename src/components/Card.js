const Card = ({pokemonName, pokemonType, cardClickHandler}) => {
    return (
        <>
            <div className="card" onClick={cardClickHandler}>
                <h2>{pokemonName}</h2> 
                <h3>{pokemonType}</h3>    
            </div>
        </>
    )
}

export default Card;