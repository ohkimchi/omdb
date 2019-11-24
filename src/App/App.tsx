import React, { FC, useReducer } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Input from '../Components/Input/Input'
import { Tile } from '../Components/Tile/Tile'
import './App.css'
import { AppContext, appReducer, initialState } from './appReducer'

const theme = {
  fontBold: 'bold 18px Helvetica Neue',
  fontRegular: 'regular 16px Helvetica Neue',
  primary: '#7FAAE4',
  secondary: '#834DB7',
  tertiary: '#34283F'
}

export const H = styled.div`
  font: ${(props) => props.theme.fontBold};
  color: ${(props) => props.color ? props.theme[props.color] : 'black'}
`

export const CallOut = styled.div`
  font: ${(props) => props.theme.fontRegular};
  color: ${(props) => props.color ? props.theme[props.color] : 'black'}
`

export const Subtitle = styled.div`
  font: ${(props) => props.theme.fontRegular};
  color: ${(props) => props.color ? props.theme[props.color] : 'grey'}
`

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
