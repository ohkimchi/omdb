import React, { FC, useReducer } from 'react'
import { ThemeProvider } from 'styled-components'
import Input from '../Components/Input/Input'
import { Tile } from '../Components/Tile/Tile'
import './App.css'
import { AppContext, appReducer, H, initialState, theme } from './appReducer'

const App: FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <div className='header'>
            <H color='primary'>hey</H>
            <H color='secondary'>cinema</H>
          </div>
          <div className='search'><Input/></div>
          <div className='result'><Tile /></div>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
