import { useState } from 'react'
import './App.css'
import CourseForm from './components/courseForm'

function App() {
  return (
    <div className="main-container">
      <h1 style={{
        marginBottom : "2rem",
        fontSize : "2.5rem"
        }}>My Course List</h1>
        <CourseForm/>
    </div>
  )
}

export default App
