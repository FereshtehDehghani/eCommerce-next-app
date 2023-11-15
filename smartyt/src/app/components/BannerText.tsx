
interface Props{
    title: string;
}

import React from 'react'
import Container from './Container';

const BannerText = ({title}:Props) => {
  return (
      <div className='hidden lg:inline-block absolute
     top-0 left-0 w-full h-full'>
          <Container className='flex flex-col gap-y-6 justify-center'>
              <h2>{title}</h2>
          </Container>
      
    </div>
  )
}

export default BannerText
