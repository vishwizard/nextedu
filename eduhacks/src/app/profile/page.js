import MainLayout from '@/components/MainLayout'
import { SignupFormDemo } from '@/components/SignupFormDemo'
import React from 'react'

export default function page() {
  return (
    <MainLayout>
        <div className='mt-4'>
        <SignupFormDemo/>
        </div>
    </MainLayout>
  )
}
