import { useEffect, useState } from "react"
import "../hadith.css"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

const HadithBooks = () => {
    const  [hadithBooks , setHadithBooks] = useState([])
    useEffect(() => {
        fetch(`https://hadithapi.com/api/books?apiKey=$2y$10$qgiIT5vTJ7fe2jpmwiYGdeM2QBvqAA7zqG8vvP2SJrAgOSq3q`)
        .then(response => response.json())
        .then(data => setHadithBooks(data.books))
      } , [])
return (
    <>
    <Navbar/>
    <div className="hadith-books-conatiner">
        <div className="main-title">
            <h1 className='text-center'>احاديث النبي محمد صلي الله عليه وسلم ف متناول يدك</h1>
        </div>
        <div className="container">
            <ul className="hadith-books d-flex flex-wrap">
            {
                hadithBooks.map((book) => {
                    return (
                        <Link to={`/hadith/${book.bookSlug}`}><li className="hadith-book">{book.bookName}</li></Link>
                    )
                })
            }
            </ul>
        </div>

    </div>
    </>
    
)
}

export default HadithBooks