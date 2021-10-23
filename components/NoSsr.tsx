import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'

interface INoSsrProps {
  children: ReactNode
}

const NoSsr = ({ children }: INoSsrProps) => {
  return <>{children}</>
}

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false })
