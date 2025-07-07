import React from 'react'

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={`w-full px-0 md:px-5 lg:px-10 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container