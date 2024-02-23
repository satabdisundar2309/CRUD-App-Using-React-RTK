import React from 'react'
import img from '../../public/favicon.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function NavBar() {
    const allUsers = useSelector((state)=>{
        return state.xyz.users;
    })

  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <img className='navbar-brand' width={50} src={img} alt='LOGO'/>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Users ({allUsers.length})
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
            //   value={searchData}
            //   onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar