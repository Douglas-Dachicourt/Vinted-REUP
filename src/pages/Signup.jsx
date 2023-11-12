import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signup = ({ handleToken }) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newsletter, setNewsletter] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", {
                email,
                username,
                password,
                newsletter
            })
            handleToken(response.data.token)
            // console.log(response.data);
            navigate("/")

        } catch (error) {
            console.log(error);
        }
    }

    return (<form className="signup" onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>
        <input type="email" placeholder="email" value={email} onChange={(e) => {
            setEmail(e.target.value)
        }} />
        <input type="text" placeholder="username" value={username} onChange={(e) => {
            setUsername(e.target.value)
        }} />
        <input type="password" placeholder="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
        }} />
        <div>
            <input className="check" type="checkbox" checked={newsletter} onChange={() => {
                setNewsletter(!newsletter)
            }} />
            <p> S'incrire à notre Newsletter</p>
        </div>


        <button type="submit">S'inscrire</button>
    </form>
    )
}

export default Signup