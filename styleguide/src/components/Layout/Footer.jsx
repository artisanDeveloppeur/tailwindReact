import React, { useState, useEffect } from 'react';

export function Footer() {
  const [dateYear, setDateYear] = useState();

  const getYear = () => setDateYear(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])

  return <>
    <footer className='bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left'>
      <p className='p-4 text-center text-neutral-700 dark:text-neutral-200'>Artisan Développeur &copy; {dateYear}</p>
    </footer>
  </>
}