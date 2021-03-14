import {registeruser} from '../redux/Actions/Action'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
const Register =()=>{
    const dispatch = useDispatch()
    const initialFieldValues = {
        FirstName: '',
        LastName:'',
        age:'',
        mobile: '',
        email: '',
        password:'',
        address: '',
        image:''
    }
    var [values, setValues] = useState(initialFieldValues)
    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const HandleFormSubmit = e => {
        e.preventDefault()
        dispatch(registeruser(values))
    }
    return(
        <div style={{display:"flex", justifyContent:"center", marginTop:"0.1rem"}}>
        <Card style={{width: '30rem', padding:"2rem"}}>
        <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="FirstName" value={values.FirstName} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="LastName" value={values.LastName} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Age" name="age" value={values.age} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Mobile/Phone no</label>
                    <input type="number" className="form-control" placeholder="Mobile/Phone no." name="mobile" value={values.mobile} onChange={handleInputChange}/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"  value={values.email} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"  value={values.password} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Profile Image</label>
                    <input type="file" id="img" name="image" accept="image/*"  value={values.image} onChange={handleInputChange}/>
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