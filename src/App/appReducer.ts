import { createContext, Dispatch } from 'react'

export const initialState = {
  Poster: '',
  Ratings: [],
  Title: '',
  Year: '',
}

export enum ActionType {
  SET_DATA = 'SET_DATA'
}

export interface IAction {
  data?: any
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
        Poster, Ratings, Title, Year
      }
    default:
      return state
  }
}
