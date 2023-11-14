import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Offer = () => {


    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const params = useParams()
    const id = params.id

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`)
                setData(response.data);
                setIsLoading(false)
            } catch (error) {
                console.log(error.response.data);

            }

        };
        fetchData();
    }, [id])

    return isLoading ? <p>Chargement en cours... </p> : (

        <main className="main">
            <div className="pic">
                <img src={data.product_image.secure_url} alt="" />
                <div>
                </div>
            </div>
            <aside className="main-offer">
                <p style={{ fontSize: "28px", fontWeight: "bold" }}>{data.product_price} €</p>
                {data.product_details.map((offer) => {

                    const nameKey = Object.keys(offer)
                    // console.log(nameKey[0]);
                    return (
                        <div className="block-details" key={nameKey}>
                            <p style={{ width: "50%", paddingLeft: "40px", color: "grey", fontWeight: "normal" }}>{nameKey[0]}</p>
                            <p>{offer[nameKey]}</p>
                        </div>
                    )
                })}
                <div className="offer-tosee">
                    <div>
                        <p style={{ marginBottom: "20px", fontSize: "16px", fontWeight: "bold" }}>{data.product_name}</p>
                        <p>{data.product_description}</p>
                    </div>
                    <div className="avatar">
                        {data.owner.account.avatar && (
                            <img src={data.owner.account.avatar.secure_url} alt="" />
                        )}

                        <p>{data.owner.account.username}</p>
                    </div>
                    <div>
                        <button>Acheter</button>
                    </div>
                </div>
            </aside>
        </main>
    )
}

export default Offer