import MainLayout from '@/components/MainLayout'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import React from 'react'



export default function page() {
  return (
    <MainLayout>
      <div className='mt-4 flex flex-col items-center justify-center '>
        <div>
          Start Learning by entering a prompt below :
        </div>
        <div className='mt-4 w-full'>
        <PlaceholdersAndVanishInput/>
        </div>
      </div>
        
    </MainLayout>
  )
}
