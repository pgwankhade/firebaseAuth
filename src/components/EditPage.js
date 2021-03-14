import Card from 'react-bootstrap/Card';
const EditPage =()=>{
    return(
        <div style={{display:"flex", justifyContent:"center", marginTop:"0.1rem"}}>
        <Card style={{width: '30rem', padding:"2rem"}}>
        <form>
                <h3>Edit My Info</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Age" />
                </div>

                <div className="form-group">
                    <label>Mobile/Phone no</label>
                    <input type="text" className="form-control" placeholder="Mobile/Phone no." />
                </div>
        
                <div className="form-group">
                    <label>Profile Image</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Save</button>
            </form>

        </Card>
        </div>
    )
}

export default EditPage