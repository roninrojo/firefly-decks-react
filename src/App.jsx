import { useEffect, useState } from "react";
import { allianceSpaceCards, borderSpaceCards } from "../public/cards";
import Deck from "./components/Deck";
import "../node_modules/augmented-ui/augmented-ui.min.css"
import "./assets/styles/styles.scss"

function App() {

	const [toggle, setToggle]  = useState(1)
	const [deckType, setDeckType]  = useState()
	const [showAlliance, setShowAlliance]  = useState(true)
	const [showBorder, setShowBorder]  = useState(true)

	const toggleShow = () => {
		(toggle === 1) ? setToggle(0) : setToggle(1)
		console.log(toggle)

		if (toggle === 1) {
			setShowAlliance("show")
			setShowBorder("hide")
			setDeckType("Border")
		}
		else {
			setShowAlliance("hide")
			setShowBorder("show")
			setDeckType("Alliance")
		}
	}

	useEffect(() => {
		toggleShow()
	},[])

	const handleClickToggle = () => toggleShow()

	return (
		<>
			<div className="bgContainer">
				<div className="bg"></div>
			</div>
			<div className="nav">
				<span className={"toggle toggle--" + deckType } onClick={handleClickToggle}></span>
			</div>
			<div className="decksBox">
				<Deck
					deck={allianceSpaceCards}
					type="Alliance"
					show={showAlliance}
				/>
				<Deck
					deck={borderSpaceCards}
					type="Border"
					show={showBorder}
				/>
			</div>
		</>
	)
}

export default App;