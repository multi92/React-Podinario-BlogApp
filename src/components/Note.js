//Note component
//react icons
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		//parent div
		<div className='note'>
			<span>{text}</span>
			{/* footer */}
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>

				
			
			</div>
		</div>
	);
};

export default Note;
