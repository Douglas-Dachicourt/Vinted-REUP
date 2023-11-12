import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"




const Login = ({ handleToken }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login", {
                email,
                password
            })
            handleToken(response.data.token);
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    return <form className="signup"
        onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
        <input type="email" placeholder="email"
            value={email}
            onChange={(event) => { setEmail(event.target.value) }} />
        <input type="password" placeholder="password"
            value={password}
            onChange={(event) => { setPassword(event.target.value) }} />
        <button type="submit">Connexion</button>
    </form>
}

export default Login