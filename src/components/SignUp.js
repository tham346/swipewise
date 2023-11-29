import { useState } from 'react';
export default function signUp() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
    className="success"
    style={{display: submitted ? '' : 'none',}}>
    <h1>User {name} successfully registered!!</h1>
</div>
    );
};

// Showing error message if error is true
const errorMessage = () => {
    return (
        <div className="error"
            style={{
            display: error ? '' : 'none',
        }}>
            <h1>Please enter all the fields</h1>
        </div>
    );
};

return (
    <div className="signUpForm">
        <div className="title">
            <h1>Sign Up</h1>
        </div>

        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

        <form>
            <label className="label">Name</label><br/>
            <input onChange={handleName} className="input"
            value={name} type="text" /><br/>

            <label className="label">Email</label><br/>
            <input onChange={handleEmail} className="input"
            value={email} type="email" /><br/>

            <label className="label">Password</label><br/>
            <input onChange={handlePassword} className="input"
            value={password} type="password" /><br/>

            <button onClick={handleSubmit} className="submitBtn" type="submit">
                Submit
            </button>
        </form>
    </div>
    );
}