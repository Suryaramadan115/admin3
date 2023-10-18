import React, { Suspense } from 'react'
import Navbar from '../components/navbar'
import Table from '../components/table'
import Loading from '../loading'

export default function page() {
  return (
    <div>
   <Navbar/>
   <Suspense fallback={<Loading/>}>

   <Table/>
   </Suspense>


    </div>
  )
}
