import { useContext } from 'react'
import { BlocContext } from '../Context/BlocContext'
import BlocCard from './BlocCard'
import '../Style/ListStyle.css'

function BlocList() {
    const { notes } = useContext(BlocContext)

    if(notes.length === 0){
        return <h2 className='note_empty'>Empty</h2>
    }

    return(
        <section className='note_section'>
            {notes.map((note)=> (
                <BlocCard key={note.id} note={note} />
            ))}
        </section>
    );
}

export default BlocList;