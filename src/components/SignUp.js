import axios from "axios";

export default function SignUp() {
    async function handleSubmit(event) {
        event.preventDefault()
         await axios.post("http://localhost:4001/register",{
            header: "Content-Type: application/json",
            first_name: event.target.elements.namedItem("firstName").value,
            last_name: event.target.elements.namedItem("lastName").value,
            email: event.target.elements.namedItem("email").value,
            password: event.target.elements.namedItem("password").value
        })
             .then(res => {
                 sessionStorage.setItem("token", res.data.token)
                 sessionStorage.setItem("id", res.data._id)
                 window.location.href = "/"
             })
             .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>First name</label>
                <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input name="lastName" type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    )
}
