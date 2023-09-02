import React from 'react'

const Login = () => {
    const [user, setUser] = useState({

        email: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/login", { ...user })
            .then(res => console.log(res))

            .catch(error => {
                console.log(error);
            });
        // console.log({ ...user });
        setUser({

            email: "",
            password: ""
        })


    }

    return (
        <div style={{ display: "flex", width: "200px", height: " 200px", justifyContent: "center", alignContent: " center", border: "1px solid red", margin: "auto", padding: "200px" }}>

            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <input type='text' name="email" placeholder='username' value={user.email} onChange={handleChange} /><br />
                <input type='text' name="password" placeholder='password' value={user.password} onChange={handleChange} /><br />
                <button>LOGIN</button>

            </form >

        </div >
    );

}
export default Login