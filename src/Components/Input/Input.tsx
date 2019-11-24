import { debounce } from 'lodash'
import React, { FC, useContext } from 'react'
import SearchField from 'react-search-field'
import { ActionType, AppContext } from '../../App/appReducer'

const Input: FC = () => {
  const { dispatch } = useContext(AppContext)

  const handleOnChange = debounce(async (text: string) => {
    dispatch({
      search: text,
      type: ActionType.SET_SEARCH
    })
  }, 1000)

  return (
    <div>
      <SearchField
        placeholder='Search the movie name...'
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Input
