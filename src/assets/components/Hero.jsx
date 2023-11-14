import { Link } from "react-router-dom"

const Hero = () => {

  return <div className="hero">
    <div className="left-part-hero">
      <div className="teaser">
        <h1>Prêts à faire du tri dans vos placards?</h1>
        <Link to={"/signup/"}>
          <button className="start-to-sell"> Commencer à vendre</button>
        </Link>
      </div>
    </div>
  </div>

}


export default Hero