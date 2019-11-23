import { createContext, Dispatch } from 'react'

const initialData = {
  Poster: '',
  Ratings: '',
  Title: '',
  Year: '',
}

export const initialState = {
  data: initialData
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
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
