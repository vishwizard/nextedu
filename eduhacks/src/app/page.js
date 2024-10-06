// src/app/page.js
"use client"; // This makes it a Client Component
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import MainLayout from "@/components/MainLayout";

export default function Home({children}) {
  
  return (
    <MainLayout>
<ThreeDCardDemo/>
    </MainLayout>
  );
}
