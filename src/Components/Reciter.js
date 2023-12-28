import React, { useEffect, useState , useRef  } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../reciter.css"
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { faReadme } from '@fortawesome/free-brands-svg-icons'
import { addToFavReciterArray } from '../slices/favReciterSlice'
import { useDispatch, useSelector } from 'react-redux'
import FavoritesReciter from './FavoritesReciter'
import Swal from 'sweetalert2'
import ReciterDetalis from './ReciterDetalis'

const Reciter = () => {
  const params = useParams()
  const audioref = useRef()
  const [reciter , setReciter] = useState([])
  const [suwar , setSuwar] = useState([])
  const [source , setSource] = useState("")




  useEffect(() => {
    fetch(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${params.reciterId}`)
    .then(response => response.json())
    .then(data => setReciter(data.reciters[0]))
  } , [])


  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah`)
    .then(response => response.json())
    .then(data => setSuwar(data.data))
  } , [])

  // Update Quran Handler
  const updatesong = (source) => {
    setSource(source);
    if(audioref.current){
        audioref.current.pause();
        audioref.current.load();
        audioref.current.play();
    }
}

  // Download Quran Handler
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
    <div className='reciter-component'>
        <Navbar/>
        <div className='main-title'>
            <h1 className='text-center qr-font2'>{reciter.name}</h1>
        </div>
        <div className='container'>
            <ul className='suwar-conatiner'>
                <ReciterDetalis Suwar={suwar} UpdateSong={updatesong} Reciter={reciter} DownloadAudio={downloadFile}/>
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

export default Reciter