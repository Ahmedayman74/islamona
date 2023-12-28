import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReadme } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faDownload, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { removeFromFavReciterArray } from '../slices/favReciterSlice'
import ReciterDetalis from './ReciterDetalis'

const FavoritesReciter = () => {
  const favoritesReciterState = useSelector((state) => state.favReciter )
  const audioref = useRef()
  const [source , setSource] = useState("")
  const dispatch = useDispatch()

  
  const updatesong = (source) => {
    setSource(source);
    if(audioref.current){
        audioref.current.pause();
        audioref.current.load();
        audioref.current.play();
    }
}



const downloadFile = (fileName , link) => {
  fetch(link , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/mp3',
    },
  })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;


      document.body.appendChild(link);

      link.click();

      link.parentNode.removeChild(link);
    });
};

  return (
      <div>
        <Navbar/>
        <div className='main-title'>
            <h1 className='text-center qr-font2'>المفضلة</h1>
        </div>
        <div className='container'>
            <ul className='suwar-conatiner' style={{paddingBottom:"90px"}}>
                {favoritesReciterState.map((fav , index) => {
                    return <li className='d-flex  justify-content-between surah-box align-items-center'>
                        <p><span  className='surah-number qr-font2'>{fav.surahId}. {fav.surahName}</span> <span className='d-inline me-2 sec-c'>{fav.reciterName}</span></p>
                        <ul className='options d-flex align-items-center'>
                        <li><Link to={`/surah/${fav.surahId}`}><FontAwesomeIcon icon={faReadme} /></Link></li>
                        <li style={{cursor:"pointer"}} onClick={() => {
                        document.querySelectorAll(".surah-box").forEach((surah) => {
                            surah.classList.remove("active")
                        })
                        document.querySelectorAll(".surah-box")[index].classList.add("active")
                        if (fav.surahId < 10) {
                            updatesong(`${fav.reciterServer}00${fav.surahId}.mp3`)
                        } else if (fav.surahId > 10 && fav.surahId < 100 ) {
                            updatesong(`${fav.reciterServer}0${fav.surahId}.mp3`)

                        } else {
                            updatesong(`${fav.reciterServer}${fav.surahId}.mp3`)
                        }
                    }}>
                        <FontAwesomeIcon icon={faPlay} />
                        </li>
                        <li onClick={() => {
                        // setSurahNo(`_${fav.surahName}_${fav.reciterName}`)
                        if (fav.surahId < 10) {
                          downloadFile(`_${fav.surahName}_${fav.reciterName}.mp3` , `${fav.reciterServer}00${fav.surahId}.mp3`)
                        } else if (fav.surahId > 10 && fav.surahId < 100 ) {
                          downloadFile(`_${fav.surahName}_${fav.reciterName}.mp3` , `${fav.reciterServer}0${fav.surahId}.mp3`)
                        } else {
                          downloadFile(`_${fav.surahName}_${fav.reciterName}.mp3` , `${fav.reciterServer}${fav.surahId}.mp3`)
                        }
                        }} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faDownload} /></li>
                        <li style={{cursor:"pointer"}} onClick={() => {
                          dispatch(removeFromFavReciterArray({
                            surahId: fav.surahId ,
                            surahName : fav.surahName,
                            reciterName : fav.reciterName,
                            reciterId : fav.reciterId,
                            isFavClicked : false
                          }
                          ))
                        }}><FontAwesomeIcon className={fav.isFavClicked && "sec-c"} icon={faHeart} /></li>
                        </ul>
                    </li>
                })}
            </ul>
        </div>
        <AudioPlayer
              autoPlay
              src={source}
              onPlay={(e) => {
                document.querySelector(".rhap_container").style.cssText = "bottom: -2px;"
              }}
        />
      </div>
  )
}

export default FavoritesReciter
