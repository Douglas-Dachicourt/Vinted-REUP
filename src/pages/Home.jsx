import {useEffect,useState} from "react"
import axios from "axios"
import Hero from "../assets/components/Hero";
import { Link } from "react-router-dom";


const Home = ()=>{

const [data,setData]= useState()
const[isLoading, setIsLoading]= useState(true)

useEffect(()=>{
    const fetchData = async ()=>{
        try {
            const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers")
            // console.log(response.data);
            setData(response.data)
            setIsLoading(false)        
        } catch (error) {console.log(error);
            
        }
            
    };
    fetchData()
},[])

return isLoading? <p>Merci de patienter ...</p> : (

<>
<Hero/>
<main>
    <div className="container description">
       {data.offers.map((elem)=>{
            return <Link to={`/offers/${elem._id}`}
            style={{textDecoration:"none", color:"inherit"}}
            key={elem._id}
            >      
            <article >       
                <div className="author">
                    {elem.owner.account.avatar && (
                        <img src={elem.owner.account.avatar.secure_url} alt="" />
                    )}              
                  <span>{elem.owner.account.username}</span>
                </div>
                <img src={elem.product_image.secure_url} alt="" className="main-pic"/>
                <div className="details">
                    <p style={{fontSize:"17px", marginBottom:"5px"}}>{elem.product_price} €</p>
                    <div className="more-details">
                      <p>{elem.product_details[1].TAILLE}</p>
                      <p>{elem.product_details[0].MARQUE}</p>
                    </div>
                </div>              
            </article>                     
            </Link>           
        })}    
    </div>
</main>
</>

)};

export default Home