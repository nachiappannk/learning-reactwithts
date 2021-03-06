import React, { useState, ChangeEvent } from "react";

interface NewNoteInputProps{
    addNote(note: string): void;   
}

export const NewNoteInput:React.FC<NewNoteInputProps> = ({addNote}) =>{
    const [note, setNote] = useState<string>("");

    const updateNote = (e: ChangeEvent<HTMLInputElement> ) =>{
        setNote(e.target.value);
    };

    const onAddNoteClick=() =>{
        addNote(note)
        setNote('')
    }

    return (
        <div>
            <input onChange={updateNote} value={note} name="note" placeholder="Enter Note"/>
            <button onClick={onAddNoteClick}>Add Note</button>
        </div>
    );
}