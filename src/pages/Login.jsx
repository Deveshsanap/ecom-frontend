import { useState } from "react"

const LoginPage = () => {
    const [message, setmessage] = useState("")
    // var username=undefined
    // var password=undefined
    var formdata = {}
    const HandleChange = (event) => {
        if (event.target.name == "username") {
            formdata.username = event.target.value
        } if (event.target.name == "password") {
            formdata.password = event.target.value
        }
    }
    const HandleSubmit = (event) => {
        event.preventDefault()
        fetch('https://dummyjson.com/auth/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        })
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    setmessage(res.message)
                }else{
                    setmessage("")
                }
            })
    }
    return (
        <div className="container-fluid bg-light">
            <div className="row " style={{ height: "100vh" }}>
                <div className="col-6 bg-white offset-3 my-auto mx-auto shadow " style={{ height: "70vh", width: "30%" }} >
                    <form onSubmit={HandleSubmit} >
                        <h3 className="text-center my-5">Login Here</h3>
                        {message != "" && <p className="alert alert-danger">{message}</p>}
                        <input type="text" className="form-control my-2" name="username" placeholder="Username" onChange={HandleChange} required />
                        <input type="password" className="form-control my-3" name="password" placeholder="Password" onChange={HandleChange} required />

                        <input type="submit" className="btn btn-dark w-100 my-3" value="Submit" />

                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;