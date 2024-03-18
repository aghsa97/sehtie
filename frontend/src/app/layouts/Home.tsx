import { Outlet } from "react-router-dom"

import Header from "@/components/layout/header"
import NavBar from "@/components/layout/nav-bar"

function HomeLayout() {

  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <NavBar />
      <div className='w-full max-w-screen-xl mx-auto flex-1 pt-16 '>
        <Outlet />
      </div>
    </div >
  )
}

export default HomeLayout
