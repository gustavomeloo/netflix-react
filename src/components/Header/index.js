import React from "react";
import './Header.css'

const Header = ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix"/>
        </a>
      </div>
      <div className="header--user" >
        <a href="/">
          <img src="https://occ-0-1313-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABb_DHMVDo8hDAK3yCzp_kViqNAzRqtn4oFSvy8FppaaBvPEgXCYaVMOX7QyrOZvuznXMuC7CCX4H0-NmnBa5bxs4CCEluvvauk87.png?r=a41" alt="Usuário"/>
        </a>
      </div>
    </header>
  )
}


export default Header