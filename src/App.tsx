import { useState } from 'react'
import './App.css'
import Form from "./form"
import Address from './address'
import axios from "axios";

// interface ResponseAddress{
//   address1: string;
//   address2: string;
//   address3: string;
//   zipcode: string;
// }

// interface Response{
//   message: any;
//   results: ResponseAddress[];
//   status: number;
// }

function App() {
  const [value, setValue] = useState("") // 入力された郵便番号
  const [town, setTown] = useState("") // APIから返ってきた「町村」情報
  const [city, setCity] = useState("") // APIから返ってきた「市」情報
  const [prefec, setPrefec] = useState("") // APIから返ってきた「都道府県」情報
  const setAddress = (prefec: string, city: string, town: string) => {
    setTown(town);
    setCity(city);
    setPrefec(prefec)
  }
  // const setAddress1 = (res: Response) => {
  //   setPrefec(res.results[0].address1)
  //   setCity(res.results[0].address2)
  //   setTown(res.results[0].address3)
  // }
  const getAddress = async (url: string)  => { // APIからaxios.getしてくる
    return await axios.get(url).then(
      (res) => setAddress(
        res.data.results[0].address1, // それぞれを住所をsetAddress
        res.data.results[0].address2,
        res.data.results[0].address3
      )
    )
  }
  // const getAddress1 = async (url: string)  => { // APIからaxios.getしてくる
  //   return await axios.get<Response>(url).then(
  //     (res: Response) => setAddress1(res)
  //   )
  // }
  const submit = (e: any) => {
    e.preventDefault();
    const result = window.confirm("郵便番号"+value+"で検索します。") // 確認ダイアログ
    if(result === true){
      if(value.length == 7){ // 入力された郵便番号が七桁かどうか
        let url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" 
        getAddress(url + value)
      }
      console.log(town)
    }
  }

  return (
    <>
    <Form setValue={setValue} />
    {(value.length != 7 && value.length != 0) && <p className='text-white'>7桁の郵便番号を入力してください。</p>}
    <button className="relative z-0 h-12 rounded-full bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500" onClick={submit}>検索</button>
    <Address town={town} city={city} prefec={prefec} />
    </>
  )
}

export default App
