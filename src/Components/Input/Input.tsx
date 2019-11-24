import axios from 'axios'
import { debounce } from 'lodash'
import React, { FC, useContext, useState } from 'react'
import SearchField from 'react-search-field'
import { ActionType, AppContext } from '../../App/appReducer'

const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=6d5bb630'

const Input: FC = () => {
  const [search, setSearch] = useState('')
  const { dispatch } = useContext(AppContext)

  async function searching(text: string) {
    axios.get(api + '&&t=' + text).then(async (res) => {
      if (search.length > 0) {
        const { data } = res
        const { Title } = data
        dispatch({
          data,
          type: ActionType.SET_DATA
        })
      }
    })
  }

  const handleOnChange = debounce(async (text: string) => {
    if (text.length > 0) {
      await setSearch(text)
      await searching(text)
    }
  }, 1000)

  return (
    <div>
      <div>{search}</div>
      <SearchField
        placeholder='Search the movie name...'
        onChange={handleOnChange}
      />
    </div>
  )

}

export default Input
