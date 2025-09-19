function Home(){
    return(
        <div className="container">
            <h3 className="mt-5">Welcome to Home page...</h3>
            <div >
                <a href="/Login"className="btn btn-primary mb-3">Login</a><br/>
                
            </div>
            <div >
                <a href="/Signup"className="btn btn-primary">Signup</a>
            </div>
            <br/>
            <br/>
            <div>Forgot password</div>
        </div>

    )
}
export default Home;