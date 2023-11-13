import { Link } from "react-router-dom"
import logo from "/src/img/vinted.png"

const Header = ({ handleToken, userToken, search, setSearch }) => {
  return <header>

    <div className="container header-style">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <input className="recherche"
          type="text"
          placeholder="... Recherche des articles"
          value={search}
          onChange={(event) => { setSearch(event.target.value) }}
        />

      </div>

      <div className="navigation">
        {!userToken ?
          <> <Link to={"/signup/"}>
            <button>S&apos;inscrire</button>
          </Link>
            <Link to={"/login/"}>
              <button>Se connecter</button>
            </Link> </> : <button onClick={() => {
              handleToken()
            }} >Déconnexion</button>}
        <Link to={"/publish/"}>
          <button className="button-sell">Vends tes articles</button>
        </Link>
      </div>
    </div>
  </header>
}

export default Header 