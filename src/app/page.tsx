'use client'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'

export default function Home() {
  const [halo, setHalo] = useState(null)
  const haloRef = useRef(null)

  useEffect(() => {
    if(!halo) {
      setHalo(HALO({
        THREE: THREE,
        el: haloRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        // baseColor: 0x0,
        // backgroundColor: 0x0,
        amplitudeFactor: 2.5,
        xOffset: 0,
        yOffset: 0,
        size: 2,
        speed: 1.5
      }))
    }
    return () => {
      if(halo) {
        (halo as any).destroy()
      }
    }
  }, [halo])

  return (
    <main className="">
      {!halo && <div className="h-screen w-screen bg-black text-white flex items-center justify-center font-mono">Loading...</div>}
      <section id="halo-section" className="h-screen" ref={haloRef}>
        <h1 className="text-5xl text-white rounded-xl mx-auto font-sans text-center p-5 top-[45vh] w-fit bg-[#000000ad] shadow-white text-shadow-black">Welcome to Angelus Productions</h1>
      </section>
    </main>
  )
}