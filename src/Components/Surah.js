import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { ThreeDots } from 'react-loader-spinner';

export const Surah = () => {
    const [surah , setSurah] = useState([])
    const audioref = useRef()
    const params = useParams()
    const [source , setSource] = useState("")

    const Loading = <div className="d-flex align-items-center justify-content-center h-100vh">
    <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#343a40" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
</div> 



    const updatesong = (source) => {
        setSource(source);
        if(audioref.current){
            audioref.current.pause();
            audioref.current.load();
            audioref.current.play();
        }
    }
    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/surah/${params.surahId}/ar.alafasy`)
        .then(response => response.json())
        .then(data => setSurah(data.data))
      } , [])

  return (
    <>
    <Navbar/>
    <div className=''>
    <div className='main-title mb-4'>
            <h1  className='text-center qr-surah-name'>{surah.name}</h1>
    </div>
    <div className='qr-font container'>
        {surah.length !== 0 ? surah.ayahs.map((ayah) => {
        return <div className='d-inline'>
         <span onClick={() => {
            updatesong(ayah.audio)
        }} className='ayah-style' style={{cursor:"pointer"}}> {ayah.text}</span>
                <span className='ayah-number d-inline-block me-2 ms-e'>﴿{ayah.numberInSurah}﴾</span> 
        </div>
    }) : Loading }
    </div>
    <AudioPlayer
              autoPlay
              src={source}
              onPlay={(e) => {
                document.querySelector(".rhap_container").style.cssText = "bottom: -2px;"
              }}
        />
    </div>
    </>
  )
}
