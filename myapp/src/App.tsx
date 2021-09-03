import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import GuestList from './components/GuestList'
import SearchComponent from './components/SearchComponent';
import UserSearch from './components/UserSearch';
import RestApp from './components/RestApp';
import FormDemo from './components/FormDemo';
//import NoteApp from './components/NoteApp';
import { NewNoteInput } from './components/NewNoteInput';
import {useSelector, useDispatch} from 'react-redux'
import {NotesState} from './notesReducer'

//UI -> Action -> reducer(state.action)

function App() {
  const notes =useSelector<NotesState,NotesState["notes"]>((state) =>state.notes);
  const dispatch = useDispatch();
  return (
    <>
    <div>
      <NewNoteInput addNote={(note) => dispatch({type : "ADD_NOTE", payload: note})}/>
      <hr/>
      <ul>
      {
    notes.map((note)=>{
    return <li key={note}>{note}</li>
    })
  }
      </ul>
    </div>
    </>
  );
}



function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EEdit <code>src/App.tsx</code> and save to reload.
          <MainApp></MainApp>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GuestList></GuestList>
      <SearchComponent></SearchComponent>
      <UserSearch users={[]}></UserSearch>
      <RestApp></RestApp>
      <FormDemo></FormDemo>
    </div>
  );
}

export default App;
