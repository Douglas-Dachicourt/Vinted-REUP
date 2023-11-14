import { Link } from "react-router-dom"
import logo from "/src/img/vinted.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = ({ handleToken, userToken, search, setSearch }) => {
  return <header>

    <div className="container header-style">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <FontAwesomeIcon icon="magnifying-glass" style={{ color: "gray" }} />
        <input className="recherche"
          type="text"
          placeholder="... des articles"
          value={search}
          onChange={(event) => { setSearch(event.target.value) }}
          icon="magnifying-glass"
        />
      </div>

      <div className="navigation">
        {!userToken ?
          <> <Link to={"/signup/"}>
            <button>S&apos;inscrire</button>
          </Link>
            <Link to={"/login/"}>
              <button>Se connecter</button>
            </Link> </> : <button style={{ backgroundColor: "red", color: "white", border: "none" }} onClick={() => {
              handleToken(null)
            }} >Se déconnecter</button>}
        <Link to={userToken ? "/publish/" : "/login/"}>
          <button className="button-sell"  >Vends tes articles</button>
        </Link>
      </div>
    </div>
  </header>
}

export default Header 