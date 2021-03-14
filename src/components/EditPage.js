import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import firebase from '../Fire'

const EditPage =()=>{
    const userid = useSelector(state => state.registration.useruid)
    const database = firebase.firestore().collection('user')
    const initialFieldValues = {
        firstname: '',
        lastname:'',
        age:'',
        mobile: '',
        address: '',
    }

    var [values, setValues] = useState(initialFieldValues)
    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const handleclick=(e)=>{
        e.preventDefault()
        database
        .get()
        .then(userdata=>{
            userdata.forEach((user)=>{
                let data = user.data()
                if(data.userId===userid){
                    database.collection("user").doc().set({ userId: userid, firstname: values.firstname, lastname:values.lastname, age:values.age, address: values.address, mobile:values.mobile})
                }
            })
        })

        console.log("values",values)
    }
    return(
        <div style={{display:"flex", justifyContent:"center", marginTop:"0.1rem"}}>
        <Card style={{width: '30rem', padding:"2rem"}}>
        <form>
                <h3>Edit My Info</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstname" value={values.firstname} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname" value={values.lastname} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Age" name="age" value={values.age} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label>Mobile/Phone no</label>
                    <input type="text" className="form-control" placeholder="Mobile/Phone no." name="mobile" value={values.mobile} onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" name="address" value={values.address} onChange={handleInputChange}/>
                </div>
        
                <div className="form-group">
                    <label>Profile Image</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleclick}>Save</button>
            </form>

        </Card>
        </div>
    )
}

export default EditPage