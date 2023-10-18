"use client"
import { Chathura } from 'next/font/google'
import React, { useState } from 'react'

export default function Searchbt({getdata}) {
const [query,setQuery] = useState("")

  const handleSeacrh = async(e)=>{

  e.preventDefault()
  try{
    const res = await fetch(`/api/${query}`,{
      method: "GET"
     })
    const result = await res.json()
    getdata(result)

  }catch(e){
    console.log(e)
  }



  }


  return (
    <div>
        <div className='   w-full flex justify-center items-center '>
          <form onSubmit={handleSeacrh} className='w-[100%] ml-[370px] flex flex-row gap-x-3'> 
        <input
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}
        className='w-[70%] ring-2 ring-offset-zinc-700 rounded-xl p-5'  type='text' name='search' placeholder='search'/> 
        <button type='submit' className='  bg-blue-600 font-semibold uppercase text-slate-100 rounded-xl p-2'>search</button>
        </form>
     </div>
    </div>
  )
}
