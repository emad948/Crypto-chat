import { Button, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { FormControl } from '@material-ui/core';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase';

const App=() => {
  const [input, setInput]=useState("");
  const [messages, setMessages]=useState([{ username: "", message: "", token: "" }]);
  const [username, setUsername]=useState("");
  const [token, setToken]=useState("");
  useEffect(() => {
    setUsername(prompt('Please enter your Name :)'));
    setToken(prompt('What is your favorite crypto-currency?'));
  }, [])

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', "desc").onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  const handleSubmit=(e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      token: token,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  return (
    <div>
      <h1> Hello Emad</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input type="text" value={input} onChange={e => setInput(e.target.value)}></Input>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={handleSubmit}> Send Message</Button>
        </FormControl>
      </form>
      <Message messages={messages} loggedIn={username} />
    </div>
  )
}

export default App
