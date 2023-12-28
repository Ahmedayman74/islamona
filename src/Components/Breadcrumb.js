import React from 'react'

const Breadcrumb = ({PageName}) => {
  return (
    <div className='main-title mb-4'>
    <h1  className='text-center qr-surah-name'>{PageName}</h1>
    </div>
  )
}

export default Breadcrumb