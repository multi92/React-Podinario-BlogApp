import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			//unique id
			id: nanoid(),
			text: 'Podinario blog-Podinario apartmani nalaze se u mirnijem delu Sokobanje kod akva parka. Sokobanja je veoma malo mesto, pa tako i centar grada nije toliko daleko(8min pesaka).Apartmani Podinario poseduju 5 velika apartmana u kojima mogu nociti 4-6 osobe u svakom od apartmana. Ukoliko zelite vise da se informisete mozete posetiti i nas sajt www.podinario.rs ili nas naci na booking-u(Podinario-Booking)',
			date: '15/04/2022',
		},
		
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		// console.log(text);
		const date = new Date();
		const newNote = {
		
			id: nanoid(),
			text: text,
		
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const editNote = (text) => {
		console.log(editNote);
		const editNote = {
			id: nanoid(),
			text: text,
		};

		const newEdits = [...editNote, editNote];
		setNotes(newEdits);
	}



	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					//take the curent list of notes(filter those notes to return only the ones that include the search text and pass to note props)
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					handleEditNote={editNote}
					
					
				/>
			</div>
		</div>
	);
};

export default App;
