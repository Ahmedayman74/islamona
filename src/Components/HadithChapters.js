import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'

const HadithChapters = () => {
  const params = useParams()
  const [chapters , setChapters] = useState([])
  useEffect(() => {
    fetch(`https://hadithapi.com/api/${params.chapters}/chapters?apiKey=$2y$10$qgiIT5vTJ7fe2jpmwiYGdeM2QBvqAA7zqG8vvP2SJrAgOSq3q`)
    .then(response => response.json())
    .then(data => setChapters(data.chapters))
  } , [])
  return (
    <div className='chapters-container'>
        <Navbar/>
        <div className='main-title'>
            <h1 className='text-center text-capitalize'>{params.chapters}</h1> 
        </div>
        <div className='container d-flex align-items-center justify-content-center'>
            <ul className='chapters '>
                {chapters.map((chapter) => {
                    return (
                        <Link to={`/hadith/${params.chapters}/${chapter.chapterNumber}`} className='text-light'><li className='chapter d-flex align-items-center justify-content-between'>
                            <li>
                            <span className='me-3 d-inline-block'>
                                {chapter.chapterNumber}.
                            </span>
                            <span className='en-chapter'>{chapter.chapterEnglish}</span>
                            </li>
                            <span style={{color:"#2ca4ab"}} className='ms-2 ar-font d-inline-block'>{chapter.chapterArabic}</span></li>
                            </Link>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default HadithChapters