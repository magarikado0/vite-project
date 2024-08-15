import { useState } from 'react'
import './App.css'
import Form from "./form"
import Address from './address'
import axios from "axios";

interface ResponseAddress{
  address1: string;
  address2: string;
  address3: string;
  zipcode: string;
}

interface Response{
  results: ResponseAddress[];
  status: number;
}

function App() {
  const [value, setValue] = useState("")
  const [town, setTown] = useState("")
  const [city, setCity] = useState("")
  const [prefec, setPrefec] = useState("")
  const setAddress = (prefec: string, city: string, town: string) => {
    setTown(town);
    setCity(city);
    setPrefec(prefec)
  }
  const getAddress = async (url: string)  => {
    return await axios.get<Response>(url).then(
      (res) => setAddress(
        res.data.results[0].address1,
        res.data.results[0].address2,
        res.data.results[0].address3
      )
    )
  }
  const submit = (e: any) => {
    e.preventDefault();
    if(value.length == 7){
      let url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="
      url += value
      getAddress(url)
    }
    console.log(town)
  }

  return (
    <>
    <Form setValue={setValue} />
    <button onClick={submit}>検索</button>
    <Address town={town} city={city} prefec={prefec} />
    </>
  )
}

export default App
