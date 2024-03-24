import { Outlet } from "react-router-dom"

import Header from "@/components/layout/header"

function HomeLayout() {

  return (
    <div className='flex flex-col bg-green-main'>
      <Header />
      <div className='flex-1 pt-32'>
        <Outlet />
      </div>
    </div >
  )
}

export default HomeLayout
