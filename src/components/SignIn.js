import { Link , useHistory, Redirect} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import {loginAction} from '../redux/Actions/loginaction'
import {useDispatch, useSelector} from 'react-redux'
import React, { useState } from 'react';
const SignIn =()=>{
    const dispatch = useDispatch()
    const select = useSelector(state=>state.registration.loggedIn)
    const initialFieldValues = {
        email: '',
        password:''
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
        dispatch(loginAction(values))
    }

    return(
        select? <Redirect to="/"/>:
        <div style={{display:"flex", justifyContent:"center", marginTop:"10rem"}}>
        <Card style={{width: '30rem', padding:"2rem"}}>
        <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={values.email} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={values.password} onChange={handleInputChange}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={HandleFormSubmit}>Sign in</button>
                <p className="forgot-password text-right">
                    Wanna Register <Link to="/register"> Register? </Link>
                </p>
            </form>
            </Card>
        </div>
    )
}

export default SignIn