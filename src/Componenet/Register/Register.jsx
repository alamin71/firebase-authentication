

const Register = () => {
    const handleRegister=e=>{
        e.preventDefault();
        const email = e.target.Email.value
        const password = e.target.Password.value;
        console.log(email, password);
    }
    return (
        <div className="border bg-slate-600">
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl text-yellow-400 mb-8">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="mb-4 w-3/4 py-2 px-4" type="email" name="Email" id="" placeholder="Email address" /><br/>
                <input className="mb-4 w-3/4 py-2 px-4" type="password" name="Password" id="" placeholder="Password" /><br/>
                <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register" />
            </form>
            </div>
        </div>
    );
};

export default Register;