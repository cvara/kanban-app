import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default class Notes extends React.Component {

	render() {
		const {
			notes,
			onNoteClick = () => {},
			onEdit = () => {},
			onDelete = () => {}
		} = this.props;

		return (
			<ul> {notes.map(({id, editing, task}) =>
				<li key={id}>
					<Note onClick={onNoteClick.bind(null, id)}>
						<Editable editing={editing} value={task} onEdit={onEdit.bind(null, id)}/>
						<button onClick={onDelete.bind(null, id)}>x</button>
					</Note>
				</li>
			)} </ul>
		);
	}
}
