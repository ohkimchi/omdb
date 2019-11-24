import { createContext, Dispatch } from 'react'
import styled from 'styled-components'

export const initialState = {
  Poster: '',
  Ratings: [],
  Title: '',
  Year: '',
  search: ''
}

export enum ActionType {
  SET_DATA = 'SET_DATA',
  SET_SEARCH = 'SET_SEARCH'
}

export interface IAction {
  data?: any
  search?: string
  type: ActionType
}

interface IContextProps {
  state: typeof initialState
  dispatch: Dispatch<IAction>
}

export const AppContext = createContext({} as IContextProps)

export function appReducer(state: any, action: IAction) {
  switch (action.type) {
    case ActionType.SET_DATA:
      const { Poster, Ratings, Title, Year } = action.data
      return {
        ...state,
        Poster,
        Ratings,
        Title,
        Year
      }
    case ActionType.SET_SEARCH:
      return {
        ...state,
        search: action.search
      }
    default:
      return state
  }
}

export const theme = {
  fontBold: 'bold 18px Helvetica Neue',
  fontRegular: 'regular 16px Helvetica Neue',
  primary: '#7FAAE4',
  secondary: '#834DB7',
  tertiary: '#34283F'
}

export const H = styled.div`
  font: ${(props) => props.theme.fontBold};
  color: ${(props) => (props.color ? props.theme[props.color] : 'black')};
`

export const CallOut = styled.div`
  font: ${(props) => props.theme.fontRegular};
  color: ${(props) => (props.color ? props.theme[props.color] : 'black')};
`

export const Subtitle = styled.div`
  font: ${(props) => props.theme.fontRegular};
  color: ${(props) => (props.color ? props.theme[props.color] : 'grey')};
`
