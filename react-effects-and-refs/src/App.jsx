import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerWrapper from './TimerWrapper'
import Counter from './Counter'
import ProfileViewer from './ProfileViewer'
import ProfileViewerWithSearch from './ProfileViewerWithSearch'
import Video from './Video';
import Focuser from './Focuser'
import Timer2 from './Timer2'

function App() {

  return (
    <div className="App">
      {/* <TimerWrapper />
      <Counter />
      <ProfileViewer name="colt"/>
      <ProfileViewerWithSearch />  */}
      <Video />
      <Focuser />
      <Timer2 />
    </div>
  )
}

export default App
