import axios from 'axios'
import { debounce } from 'lodash'
import React, { FC, useContext, useState } from 'react'
import SearchField from 'react-search-field'
import { ActionType, AppContext } from '../App/appReducer'

const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=6d5bb630'

const Input: FC = () => {
  const [search, setSearch] = useState('')
  const { dispatch } = useContext(AppContext)

  async function searching() {
    axios.get(api + '&&t=' + search).then(async (res) => {
      console.log(search, res)
      dispatch({
        data: res,
        type: ActionType.SET_DATA
      })
    })
  }

  const handleOnChange = debounce(async (text: string) => {
    setSearch(text)
    await searching()
  }, 2000)

  return (
    <div>
    <div>{search}</div>
    <SearchField
      placeholder='movie name...'
      onChange={handleOnChange}
    />
    </div>
  )

}

export default Input
