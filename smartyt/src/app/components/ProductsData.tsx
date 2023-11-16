import { ItemProps } from '@/type'
import Image from 'next/image'
import React from 'react'

const ProductsData = ({item}:ItemProps) => {
  return (
    <div className='w-full rounded-lg overflow-hidden'>
          <div>
              <div className='w-full h-96 group overflow-hidden relative'>
                  <Image
                      src={item?.image}
                      alt="product image"
                      width={500}
                      height={500}
                      className='w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg'
                  />
                  {item?.isNew && <span className='absolute top-2 right-2 rounded-full font-medium py-1 px-3 text-xs bg-white
                  group-hover:bg-orange-600 group-hover:text-white duration-200'>New Arrival</span>}
              </div>
    </div>
    </div>
  )
}

export default ProductsData
