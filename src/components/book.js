import "./home.css"
import {Form,Button} from "react-bootstrap"
import {useState,useEffect} from "react"
import {useLocation,useHistory} from "react-router-dom"
import {connect} from "react-redux"
import {bookSlot}  from "../store/actions"
const Book = (props) =>{
    let location = useLocation();
    let history = useHistory();
    const [first_name,setFirstName] = useState(location.state.first_name);
    const [last_name,serLastName] = useState(location.state.last_name);
    const [phone,setPhone] = useState(location.state.phone);
    const handleFirst = e => setFirstName(e.target.value)
    const handleLast = e => serLastName(e.target.value)
    const handlePhone = e => setPhone(e.target.value)
    const handleCancle = (e)=> history.push("/");
    const handleSave = () =>{
        props.bookSlot({
            userData : {
                first_name, last_name,phone,
                id : location.state.id,
                slot: location.state.slot
            },
            slot : {
                ...location.state,
                isbooked : true
            }
        });
        history.push("/");
    }

    useEffect(() => {
        window.onbeforeunload = function() {
            return true;
        };
    
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    
    
    return(
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>First Nmae</Form.Label>
                <Form.Control type="text" placeholder="first_name" value={first_name} onChange={handleFirst} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="last_name" value={last_name} onChange={handleLast} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="phone_number" value={phone} onChange={handlePhone} />
            </Form.Group>
            <div className = "d-flex justify-content-center" >
            <Button variant="primary" type="button" onClick={handleSave} className = "btnn1">
                Save
            </Button>

            <Button variant="primary" type="button" onClick={handleCancle} className = "btnn1">
                Cancle
            </Button>
            </div>
        </Form>
    )
}
const mapStateToProps = state =>{
    return{
        slots : state.slots
    }
}
const mapDispatchToProps = dispatch => {
    return {
        bookSlot : data => bookSlot(data,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Book) ;