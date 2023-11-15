"use client";
import React from 'react'
import { SessionProvider } from "next-auth/react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Layout({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Layout
