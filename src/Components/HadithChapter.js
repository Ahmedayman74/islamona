import React, { useEffect, useState } from 'react'
import "../hadith.css"
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const HadithChapter = () => {
  const params = useParams()
  const [ chapter , setChapter] = useState([])
  const [ prev , setPrev] = useState([])





  useEffect(() => {
    fetch(`https://hadithapi.com/api/hadiths/?apiKey=$2y$10$qgiIT5vTJ7fe2jpmwiYGdeM2QBvqAA7zqG8vvP2SJrAgOSq3q&book=${params.chapters}&chapter=${params.chapterId}&paginate=10000`)
    .then(response => response.json())
    .then(data => {
        setChapter(data.hadiths.data)
    })
  } , [])


  console.log(chapter)
  return (
    <div className='chapter-conatiner'>
        <Navbar/>
        <div className='main-title'>
        <h1 className='text-center'></h1>
        </div>
        <div className='container'>
        {
            chapter.map((data) => {
                return (
                    <div className='hadith-lang d-flex'>
                        <div className='hadith-en'>
                            <h6 className='g-color'>{data.englishNarrator}</h6>
                            <p>{data.hadithEnglish}</p>
                        </div>
                        <div className='hadith-ar'>
                            <p className='ar-font'>{data.hadithArabic}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default HadithChapter