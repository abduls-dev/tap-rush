import React, { useState, useEffect } from "react";
import "./App.css";

const ClickGame = () => {
	const [count, setCount] = useState(0);
	const [timeLeft, setTimeLeft] = useState(10); // Set the game time (e.g., 10 seconds)
	const [isGameActive, setIsGameActive] = useState(false);

	useEffect(() => {
		let timer;
		if (isGameActive && timeLeft > 0) {
			timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
		} else if (timeLeft === 0) {
			setIsGameActive(false); // Stop the game when time runs out
		}
		return () => clearTimeout(timer);
	}, [timeLeft, isGameActive]);

	const handleButtonClick = () => {
		if (!isGameActive) {
			setIsGameActive(true); // Start the game on first click
		}
		if (isGameActive && timeLeft > 0) {
			setCount(count + 1); // Increase count on each click
		}
	};

	const handleStartNewGame = () => {
		setCount(0);
		setTimeLeft(10); // Reset the game time
		setIsGameActive(false); // Reset game status
	};

	return (
		<div className="click-game">
			<h1>Click Game</h1>
			<h2>Time Left: {timeLeft} seconds</h2>
			<h3>Clicks: {count}</h3>
			<button
				onClick={handleButtonClick}
				disabled={!isGameActive && timeLeft === 0}
			>
				Click Me
			</button>
			{!isGameActive && timeLeft === 0 && (
				<div>
					<h4>Game Over! You clicked {count} times.</h4>
					<button onClick={handleStartNewGame}>Start New Game</button>
				</div>
			)}
		</div>
	);
};

export default ClickGame;
