import React from 'react'
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';



const Azkar = () => {
  return (
    <>
        <Navbar/>
        <Breadcrumb PageName={'لاذكار'}/>
        <div className='azkar-container container pt-5 d-flex align-items-center justify-content-center'>
            <div className='row'>
                <motion.div className='col-12 col-md-4 mb-4 '
                    initial={{ x : "100vw"}}
                    animate={{x : 0}}
                    transition={{ type : "spring" , delay: 0.4 , stiffness : 80}}
                >
                    <Link to={`/azkar/azkar_sabah`} className='d-flex align-items-center justify-content-center'>
                    <div className='azkar-box d-flex align-items-center justify-content-center flex-column'>
                    <img src={require('../imgs/sun.png')}></img>
                    <p>اذكار الصباح</p>
                    </div>
                    </Link>
                </motion.div>
                <motion.div className='col-12 col-md-4 mb-4 '
                    initial={{ x : "100vw"}}
                    animate={{x : 0}}
                    transition={{ type : "spring" , delay: 0.6 , stiffness : 80}}
                >
                    <Link to={'/azkar/azkar_massa'} className='d-flex align-items-center justify-content-center'>
                    <div className='azkar-box d-flex align-items-center justify-content-center flex-column'>
                    <img src={require('../imgs/moon.png')}></img>
                    <p>اذكار المساء</p>
                    </div>
                    </Link>
                </motion.div>
                <motion.div className='col-12 col-md-4 mb-4 '
                    initial={{ x : "100vw"}}
                    animate={{x : 0}}
                    transition={{ type : "spring" , delay: 0.8 , stiffness : 80}}
                >
                    <Link to={'/azkar/PostPrayer_azkar'} className='d-flex align-items-center justify-content-center'>
                    <div className='azkar-box d-flex align-items-center justify-content-center flex-column'>
                    <img  src={require('../imgs/praying.png')}></img>
                    <p>اذكار بعد الصلاه</p>
                    </div>
                    </Link>
                </motion.div>
            </div>
        </div>
        
    </>
  )
}

export default Azkar