import { Link } from "react-router-dom"
import logo from "/src/img/vinted.png"

const Header = ({ handleToken, userToken }) => {
  return <header>

    <div className="container header-style">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <input className="recherche" type="text" placeholder="Recherche des articles" />
        {/* <div className="tri">
          <p>Trier par prix : </p>
          <p>Prix entre : </p>
        </div> */}
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
            }}>Déconnexion</button>}
        <button className="button-sell">Vends tes articles</button>
      </div>
    </div>
  </header>
}

export default Header 