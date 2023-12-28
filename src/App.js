import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Reciters from './Components/Reciters';
import Reciter from './Components/Reciter';
import HadithBooks from './Components/HadithBooks';
import HadithChapters from './Components/HadithChapters';
import HadithChapter from './Components/HadithChapter';
import { Surah } from './Components/Surah';
import { Quran } from './Components/Quran';
import { Azan } from './Components/Azan';
import FavoritesReciter from './Components/FavoritesReciter';
import Azkar from './Components/Azkar';
import AzkarPage from './Components/AzkarPage';
import { useSelector } from 'react-redux';







function App() {
  const AzanTime = useSelector((state) => state)
  console.log(AzanTime)
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Quran/>}/>
        <Route path="/favorites" element={<FavoritesReciter/>} />
        <Route path="/azan" element={<Azan/>}/>
        <Route path="/reciters" element={<Reciters/>}/>
        <Route path="/reciter/:reciterId" element={<Reciter/>}/>
        <Route path="/azkar" element={<Azkar/>} />
        <Route path='azkar/:azkarName' element = {<AzkarPage/>}/>
        <Route path="/surah/:surahId" element={<Surah/>}/>
        <Route path='/hadith' element={<HadithBooks/>}/>
        <Route path='/hadith/:chapters' element={<HadithChapters/>}/>
        <Route path='/hadith/:chapters/:chapterId' element={<HadithChapter/>}/>
      </Routes>
    </div>
  );
}

export default App;
