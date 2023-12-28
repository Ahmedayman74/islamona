import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Breadcrumb from './Breadcrumb'
import { useParams } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'

const AzkarPage = () => {
  const [ azkar , setAzkar ] = useState([])
  const [ count , setCounter ] = useState(false)

  const params = useParams()

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
    fetch(`https://ahegazy.github.io/muslimKit/json/${params.azkarName}.json`)
    .then(response => response.json())
    .then(data => setAzkar(data))
  },[])





  return (
    <>
    <Navbar/>
    <Breadcrumb PageName={azkar.title} />
    <div className='container pt-5'>
    {
      azkar.length !== 0 ?azkar.content.map((zekr , idx) => {
        return <div className='zekr-box text-center'>
          <h3>{zekr.zekr}</h3>
          <p className='sec-c mt-3'>{zekr.bless}</p>
          <div className='zekr-counter'>
              <span>{zekr.repeat}</span>
          </div>
        </div>
      }) : loading
    }
    </div>
    </>
  )
}

export default AzkarPage