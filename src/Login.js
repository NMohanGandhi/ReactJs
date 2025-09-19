function Login(){
    return(

        <div className="container">
            <div className='row'>
                <div className="col-4">
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label>EMAIL</label>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label>PASSWORD</label>
                        <input type="password" className='form-control' placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <a href="/Signup" className="btn btn-primary">Signup</a>
                    </div>
                    <div className="mt-3">
                        <a href="/">Home</a>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Login;
