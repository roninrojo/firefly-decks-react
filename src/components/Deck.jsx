import { useState } from 'react';
import { getRandomInt } from '../helpers/';
import Card from '../components/Card';

const Deck = prop => {
	const {deck, type, show} = prop
	const [randomNumber, setRandomNumber] = useState(-1);
	const [numberArray, setNumberArray] = useState([]);
	const [counter, setCounter] = useState(0);

	let min = 1
	let decksize = 39

	// the first shuffle dont includes card id 0
	if (counter > 0) {
		min = 0
		decksize = 39
	}

	const generateRandomNumber = () => {
		const newNumber = getRandomInt(min, decksize);

		if (numberArray.length === decksize) {
			setNumberArray([]);
			setCounter(counter + 1);
			return
		} else if (!numberArray.includes(newNumber)) {
			setNumberArray([...numberArray, newNumber]);
			setRandomNumber(newNumber);
			return
		}

		return generateRandomNumber()

	};

	const resetDeck = () => {
		generateRandomNumber()
		setNumberArray([])
		setCounter(counter + 1)
		console.log('reset!')
	}

	const handleClick = () => generateRandomNumber()
	
	console.log(numberArray)

	return (
		<>
			{randomNumber < 0 ?
			(<>
				<div
					className={type + "Deck " + show}
					onClick={handleClick}
				>
				<Card
					face="back"
					deckType={type}
					
				/>
				</div>
			</>)
			:
			(<>
				<div 
					className={type + "Deck " + show}
					onClick={deck[randomNumber].id === 0 ?
						resetDeck : handleClick
					}
				>
				<Card
					id={deck[randomNumber].id}
					title={deck[randomNumber].title}
					type={deck[randomNumber].type}
					opt1Ttitle={deck[randomNumber].opt1Ttitle}
					opt2Ttitle={deck[randomNumber].opt2Ttitle}
					opt1={deck[randomNumber].opt1}
					opt2={deck[randomNumber].opt2}
					footer={deck[randomNumber].footer}
					deckType={type}
				/>
				<footer className='decksBox__footer'>
					<span className='shuffles'>Shuffles: {counter}</span> 
					<div className="className">reset deck</div>
					<div className="className">help</div>
				</footer>
				</div>
			</>)
			}
		</>
		)	
	}

export default Deck