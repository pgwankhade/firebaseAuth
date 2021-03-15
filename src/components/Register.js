import { registeruser } from '../redux/Actions/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
const Register = () => {
    const dispatch = useDispatch()
    const loginpage = useSelector(state => state.registration.gotologin)
    const initialFieldValues = {
        firstname: '',
        lastname: '',
        age: '',
        mobile: '',
        email: '',
        password: '',
        address: '',
        image: null
    }
    var [values, setValues] = useState(initialFieldValues)
    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFileChange = e => {
        if (e.target.files[0]) {
            var { name } = e.target;
            setValues({
                ...values,
                [name]: e.target.files[0]
            })
        }
    }

    const HandleFormSubmit = e => {
        e.preventDefault()
    if(values.image){
        dispatch(registeruser(values))
    }else{
        alert("please upload image")
    }
    }
    return (loginpage?<Redirect to="/login"/>:
        <div style={{ display: "flex", justifyContent: "center", marginTop:"2rem"}}>
            <Card style={{ width: '30rem', padding: "1rem" }}>
                <form>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" name="firstname" value={values.firstname} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" name="lastname" value={values.lastname} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" placeholder="Age" name="age" value={values.age} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Mobile/Phone no</label>
                        <input type="text" className="form-control" placeholder="Mobile/Phone no." name="mobile" value={values.mobile} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Address" name="address" value={values.address} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" value={values.email} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" value={values.password} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Profile Image</label>
                        <input type="file" id="img" name="image" accept="image/*" onChange={handleFileChange} />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={HandleFormSubmit}>Register</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login"> <a href="#">log in?</a> </Link>
                    </p>
                </form>

            </Card>
        </div>
    )
}

export default Register