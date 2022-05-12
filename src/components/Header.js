import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1><a href='https://www.podinario.rs/setnje/'>Podinario Blog Application</a></h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Change the background color
			</button>
		</div>
	);
};

export default Header;
