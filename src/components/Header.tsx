import React from 'react'

function Header() {
  return (
    <header className=''>
      <div>
      <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New popular</li>
          <li>My List</li>
        </ul>
      </div>
    </header>
  )
}

export default Header