import { useContext } from 'react'
import { BlocContext } from '../Context/BlocContext'

import '../Style/CardStyle.css'

function BlocCard({ note }) {
    const { DeleteNote } = useContext(BlocContext);

    return(
        <section className="note">
            <div className="div_note">
                <h1 className="note_title">{note.title}</h1>
                <p className="note_description">{note.description}</p>
            </div>
            <div className="div_button">
                <button className="btn_del"
                onClick={()=> DeleteNote(note.id)}>Deletar</button>
            </div>
        </section>
    );
}
export default BlocCard;