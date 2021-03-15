import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import firebase from '../Fire'
const ProfilePage = () => {
    const select = useSelector(state => state.registration.loggedIn)
    const userid = useSelector(state => state.registration.useruid)
    const dispatch = useDispatch()
     const database = firebase.firestore().collection('user')
    const [data , setData] = useState(null)
    useEffect(()=>{
        database
        .get()
        .then(userdata=>{
            userdata.forEach((user)=>{
                let data = user.data()
                if(data.userId===userid){
                    console.log("data1",data)
                    dispatch({type:"KEY_VALUE", payload:user.id})
                    setData(data)
                    console.log(user.id)
                }
            })
        })
    },[userid])
    console.log("data", data)

    return ( data?
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10rem" }}>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={data.image} style={{objectFit:"cover"}} height="200" width="180"/>
                <Card.Body>
                    <Card.Title>Name : {data.firstname} {data.lastname}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Age : {data.age}</ListGroupItem>
                    <ListGroupItem>Mobile No. : {data.mobile}</ListGroupItem>
                    <ListGroupItem>Address : {data.address}</ListGroupItem>
                </ListGroup>
            </Card>
            <Card style={{ width: '18rem' }} >
                <Link to="/editpage" >
                    <Button variant="info" style={{ width: '18rem' }}>Edit My Profile</Button>
                </Link>
            </Card>
        </div>
        :
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10rem" }}>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Name : </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Age : </ListGroupItem>
                    <ListGroupItem>Mobile No. : </ListGroupItem>
                    <ListGroupItem>Address : </ListGroupItem>
                </ListGroup>
            </Card>
            <Card style={{ width: '18rem' }} >
                <Link to="/editpage" >
                    <Button variant="info" style={{ width: '18rem' }} >Edit My Profile</Button>
                </Link>
            </Card>
        </div>
    )
}

export default ProfilePage