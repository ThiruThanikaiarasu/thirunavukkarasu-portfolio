import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent'

const MainLayout = () => {
  return (
    <div
        className="max-w-[600px] mx-auto"
    >
        <NavbarComponent />
        <div
            className="
                        mt-6 p-4
                        rounded-lg
                        text-black dark:text-white
                        bg-[#ffffff] dark:bg-[#212121]
                    "
        >
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout