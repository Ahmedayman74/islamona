import Navbar from "./Navbar"
import { useEffect, useState } from 'react';
import "../reciters.css"
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
const Reciters = () => {
    const [reciter , setReciter] = useState([])
    const loading = <div className="d-flex align-items-center justify-content-center h-100vh">
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
   useEffect(() => {
      fetch("https://www.mp3quran.net/api/v3/reciters?language=ar")
      .then(response => response.json())
      .then((data) => setReciter(data.reciters))
  },[])
  let reciterLetterArr = []
  reciter.map((reciterLetter) => {
    reciterLetterArr += reciterLetter.letter
  })
  let reciterLetterArrSet = new Set(reciterLetterArr.toString().split(""))
  let reciterLetter = Array.from(reciterLetterArrSet).sort()
  return (
        <>
        <Navbar/>
        <div className="reciter-container">
            <div className="container">
            {reciter.length !== 0 ? 
            reciterLetter.map((letter ,idx) => {
                return (
                    <div key={idx} className="reciter-box d-flex flex-wrap ">
                        <h1 className="reciter-letter qr-font">{letter}</h1>
                        <ul className="reciter-name d-flex flex-wrap">
                        { reciter.map((reciter , index) => {
                            if (reciter.letter === letter) {
                                return (
                                    <li key={index}><Link to={`/reciter/${reciter.id}`}>{reciter.name}</Link></li>
                                )
                            }
                        })}
                        </ul>
                    </div>
            )})
            : loading
            } 
            </div>
        </div>
        </>
  )
}

export default Reciters