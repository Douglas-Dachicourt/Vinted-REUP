import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Publish = ({ userToken }) => {

    const [picture, setPicture] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")
    const [condition, setCondition] = useState("")
    const [place, setPlace] = useState("")
    const [price, setPrice] = useState("")
    const [newsletter, setNewsletter] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("condition", condition);
            formData.append("place", place);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            formData.append("picture", picture);


            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/offer/publish/", formData, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                    "Content-Type": "multipart/form-data",
                }
            })

            navigate("/")
            console.log(response.data);

        } catch (error) {
            console.log(error.message);
        }

    };


    return userToken ? (
        <>
            <div className="publish">
                <h1 style={{ fontSize: "18px", paddingLeft: "360px", lineHeight: "40px", fontWeight: "bold", color: "rgb(40, 36, 16" }}>Vends ton article</h1>
                <form className="publish-form" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="pic-to-upload"
                            style={{ cursor: "pointer", backgroundColor: "white", fontSize: "23px", padding: "2px 20px", border: "2px solid #2DB1BA", color: "#2DB1BA" }}
                        >Ajoute une photo</label>
                        <input type="file"
                            id="pic-to-upload"
                            style={{ display: "none" }}
                            onChange={(e) => { setPicture(e.target.files[0]) }} />
                        {picture && (
                            <img
                                style={{
                                    height: "130px", marginLeft: "100px ", marginTop: "100px"
                                }}
                                src={URL.createObjectURL(picture)} alt="main-offer-pic" />

                        )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="title">Titre</label>
                        <input type="text"
                            style={{ margin: "15px 0", borderBottom: "0.4px solid gray" }}
                            id="title"
                            placeholder="ex : veste Zara "
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <label htmlFor="description">Description</label>
                        <textarea name="" id="description" cols="5" rows="3"
                            style={{ margin: "5px 0", border: "0.1px solid #2DB1BA" }}
                            placeholder="ex : porté quelques fois"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}>Décris ton article</textarea>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="brand">Marque</label>
                        <input type="text "
                            id="brand"
                            style={{ margin: "15px 0", borderBottom: "0.4px solid gray" }}
                            placeholder="ex : Nike, Zara"
                            value={brand}
                            onChange={(e) => { setBrand(e.target.value) }} />

                        <label htmlFor="size">Taille</label>
                        <input type="text"
                            id="size"
                            placeholder="ex : XL , L , M , S"
                            style={{ margin: "15px 0", borderBottom: "0.4px solid gray" }}
                            value={size}
                            onChange={(e) => {
                                setSize(e.target.value)
                            }} />

                        <label htmlFor="color">Couleur</label>
                        <input type="text"
                            id="color"
                            placeholder="ex : vert"
                            style={{ margin: "15px 0", borderBottom: "0.4px solid gray" }}
                            value={color}
                            onChange={(e) => { setColor(e.target.value) }} />

                        <label htmlFor="condition">Etat</label>
                        <input type="text"
                            id="condition"
                            placeholder="ex : bon état général"
                            style={{ margin: "15px 0", borderBottom: "0.4px solid gray" }}
                            value={condition}
                            onChange={(e) => { setCondition(e.target.value) }} />

                        <label htmlFor="city">Lieu</label>
                        <input type="text"
                            id="city"
                            placeholder="ex : Quimper"
                            style={{ margin: "15px 0", borderBottom: "0.4px solid gray" }}
                            value={place}
                            onChange={(e) => { setPlace(e.target.value) }} />

                        <label htmlFor="price">Prix</label>
                        <input type="text"
                            id="price"
                            style={{ margin: "15px 0", borderBottom: "0.4px solid gray" }}
                            placeholder="0,00 €"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }} />
                    </div>
                    <div style={{ alignContent: "center", height: "20px", display: "flex", justifyContent: "space-between", paddingLeft: "80px", marginTop: "-30px" }}>
                        <p style={{ fontSize: "14px" }}>Je suis intéressé(e) par les échanges</p>
                        <input type="checkbox" checked={newsletter}
                            onChange={() => {
                                setNewsletter(!newsletter);

                            }} />
                    </div>
                    <button type="submit" className="publish-option">Publier</button>
                </form >
            </div >
        </>

    ) : (<Navigate to="/login/" />)
}

export default Publish