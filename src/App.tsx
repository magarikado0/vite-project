import { useState } from 'react'
import './App.css'
import Form from "./form"
import Address from './address'
import axios from "axios";


function App() {
  const [value, setValue] = useState("")
  const getAddress = async (url: string) => {
    return await axios.get(url).then((response) => console.log(response.data));
  }
  const submit = (e: any) => {
    e.preventDefault();
    if(value.length == 7){
      let url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="
      url += value
      const address = getAddress(url)
      // console.log(address[0].address1)
    }
  }

  return (
    <>
    <Form setValue={setValue} />
    <button onClick={submit}>検索</button>
    <Address value={value} />
    </>
  )
}

export default App
