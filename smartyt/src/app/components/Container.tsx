import React from "react"

interface Props{
    children: React.ReactNode,
    className?:string,
}

function Container({className,children}:Props) {
  return (
    <div className={`${className} max-w-screen-xl max-auto px-4 xl:px-0 py-10`}>
      {children}
    </div>
  )
}

export default Container
