import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import firebase from '../Fire'
const ProfilePage = () => {
    // const database = firebase.firestore().collection('user')
    const databaseRef = firebase.database().ref();
    const statCardsRef = databaseRef.child("user-details");
    statCardsRef.on("value", snapshot => {
        console.log(snapshot.val())
    })
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center", marginTop:"10rem"}}>
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Name</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Age:</ListGroupItem>
                <ListGroupItem>Mobile No.</ListGroupItem>
                <ListGroupItem>Address</ListGroupItem>
            </ListGroup>
        </Card>
        <Card style={{ width: '18rem'}} >
        <Link to="/editpage" >
           <Button variant="info" style={{ width: '18rem'}}>Edit My Profile</Button>
        </Link>
        </Card>
        </div>
    )
}

export default ProfilePage