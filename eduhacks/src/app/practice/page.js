'use client'
import MainLayout from '@/components/MainLayout'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import React from 'react'
// import { useEffect } from 'react';

export default function page() {

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('/api/gemini');
    //         const result = await response.json();
    //         console.log(result);
    //       } catch (err) {
    //         console.error('Failed to fetch data');
    //       }
    //     };
    
    //     fetchData();
    //   }, []);

  return (
    <MainLayout>
      <div className='mt-4 flex flex-col items-center justify-center '>
        <div>
          What topics do you wanna practice?
        </div>
        <div className='mt-4 w-full'>
        <PlaceholdersAndVanishInput/>
        </div>
      </div>
        
    </MainLayout>
  )
}
