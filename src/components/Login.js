import axios from "axios";

export default function Login() {

    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post("http://localhost:4001/login", {
            email: event.target.elements.namedItem("email").value,
            password: event.target.elements.namedItem("password").value
        })
            .then(res => {
                sessionStorage.setItem("token", res.data.token)
                sessionStorage.setItem("id", res.data._id)
                window.location.href = "/"
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
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
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    )
}
