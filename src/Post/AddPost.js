import React, {useState} from 'react'
import '../index.css';
import {withRouter} from 'react-router-dom'

function AddPost({onCreate , history}){
  const [title, setTitle]= useState('');
  const [author, setAuthor]= useState('');
  const [desciption, setDesciption]= useState('');

function submitHandler(event) {
  event.preventDefault()

  if (title.trim()&&author.trim()&&desciption.trim()) {
    onCreate(title,author,desciption);
    setTitle('');
    setAuthor('');
    setDesciption('');
    history.push('/')
  }
}


  return (
    <form className='form' onSubmit={submitHandler}>
      <label className='label'>Title:</label>
      <input value={title} onChange={event=>{setTitle(event.target.value)}}/>
      <label className='label'>Description:</label>
      <textarea value={desciption} onChange={event=>{setDesciption(event.target.value)}} cols="30" rows="10"></textarea>
      <label className='label'>Author:</label>
      <input value={author} onChange={event=>{setAuthor(event.target.value)}}/>
      <button type="submit">Add</button>
    </form> 
  )
}

export default withRouter(AddPost);