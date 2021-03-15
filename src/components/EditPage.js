import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import firebase from '../Fire'

const EditPage =()=>{
    const key = useSelector(state => state.registration.keyvalue)
    const userid = useSelector(state => state.registration.useruid)
    const loginpage = useSelector(state => state.registration.gotologin)
    const database = firebase.firestore().collection('user')
    const storage = firebase.storage()
    const dispatch = useDispatch()
    const initialFieldValues = {
        firstname: '',
        lastname:'',
        age:'',
        mobile: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)
    const [image, setImage] = useState(null)
    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    var [values, setValues] = useState(initialFieldValues)

    const handleFileChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
  
    const handleclick=(e)=>{
        e.preventDefault()
        if(image){
        database
        .get()
        .then(userdata=>{
            userdata.forEach((user)=>{
                if(user.id===key){
                    const uploadTask = storage.ref(`/images/${image.name}`).put(values.image);
                    uploadTask.on("state_changed", console.log, console.error, () => {
                      storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((url) => {
                          console.log("url",url)
                          database.doc(key).set({ userId:userid, firstname: values.firstname, lastname:values.lastname, age:values.age, address: values.address, mobile:values.mobile, image:url})
                        });
                    });
                }
            })
            alert("login to see changes")
            dispatch({type:"GOTO_LOGIN", payload:true})
        })
    }else{
        database
        .get()
        .then(userdata=>{
            userdata.forEach((user)=>{
                if(user.id===key){
                    database.doc(key).set({ userId:userid, firstname: values.firstname, lastname:values.lastname, age:values.age, address: values.address, mobile:values.mobile})
                }
            })
            alert("login to see changes")
        })
    }
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
                    <input type="file" id="img" name="img" accept="image/*" onChange={handleFileChange}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleclick}>Save</button>
            </form>

        </Card>
        </div>
    )
}

export default EditPage