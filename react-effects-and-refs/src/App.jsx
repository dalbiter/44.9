import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerWrapper from './TimerWrapper'
import Counter from './Counter'
import ProfileViewer from './ProfileViewer'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'

function App() {

  return (
    <div className="App">
      <TimerWrapper />
      {/* <Counter /> */}
      <ProfileViewer name="colt"/>
      <ProfileViewerWithSearch /> 
    </div>
  )
}

export default App
