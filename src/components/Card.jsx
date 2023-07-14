import parse from 'html-react-parser';

const Card = prop => {
	const {
		id,
		title,
		type,
		opt1Ttitle,
		opt2Ttitle,
		opt1,
		opt2,
		footer,
		deckType,
		face
	} = prop

	const fontSize_small =
		id === 0 ||
		(id === 13 && deckType === 'Alliance') ||
		(id === 14 && deckType === 'Alliance') 
			? { fontSize: "0.85em" } : null;
	
	const footerClass = id === 0 ? `${deckType}Deck__cards-footer shuffle-btn` : `${deckType}Deck__cards-footer`;
	
	return (
		<>	
			{/* <div className={deckType+"Deck__ui"}>
				<div className="ui-title1"></div>
				<div className="ui-title2"></div>
				<div className="borderLeft"></div>
				<div className="borderBottom"></div>
			</div> */}
			<div className={deckType + "Deck__cards"}>
			{face === 'back' ? (<>
					<span className={deckType + "Deck__back"}>
						<span className={"title title--" + deckType}>{deckType === 'Alliance' ? 'Espacio de' : 'Espacio'}</span>
						<span className={"title title--" + deckType}>{deckType === 'Alliance' ? 'la Alianza' : 'Fronterizo'}</span>
					</span>	
			</>) : (<>
					{title && <header className="header" data-augmented-ui><h1 className={"title title--" + deckType}>{parse(title)}</h1></header>}
				{opt1 && <section className="opt-section opt-section-1" data-augmented-ui>
					{opt1Ttitle && <h2 className="opt-title">{parse(opt1Ttitle)}</h2>}
					<div className="opt" style={fontSize_small}>
						{parse(opt1)}
					</div>
					<span className='opt-section__num'>Opción 1</span>
				</section>}
				{opt2 && <section className="opt-section opt-section-2" data-augmented-ui>
					{opt2Ttitle && <h2 className="opt-title">{parse(opt2Ttitle)}</h2>}
					<div className="opt" style={fontSize_small}>
						{parse(opt2)}
					</div>
					<span className='opt-section__num'>Opción 2</span>
				</section>}
				{ footer && <footer className={footerClass}>{footer}</footer>}
				<span className="idCard">{id}-{type}</span>
				</>)}
			</div>
		</>
	)
}

export default Card