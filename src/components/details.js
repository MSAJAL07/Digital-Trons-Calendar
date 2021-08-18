import {Row,Col,Container,Button}from 'react-bootstrap';
import {useLocation,useHistory} from "react-router-dom"
import {useEffect,useState} from 'react';
import {connect} from "react-redux"
import "./home.css"

const Details = props => {
    let location = useLocation()
    let history = useHistory();
    const [data,setData] = useState({})
    const handleHome = (e)=> history.push("/");
    const handleEdit = e => history.push({
        pathname: '/book/'+data.id,
        state: data
    });
    useEffect(()=>{
        setData(props.bookings.filter(e=>e.id === location.state.id)[0])
        window.onbeforeunload = function() {
            return true;
        };
    
        return () => {
            window.onbeforeunload = null;
        };
    },[props,location])
    return(
        
        <Container >
            <Row >
                <Col className ="bordere">Slot</Col>
                <Col className ="bordere">{data.slot}</Col>
            </Row>
            <Row>
                <Col className ="bordere">First Name</Col>
                <Col className ="bordere">{data.first_name}</Col>
            </Row>
            <Row>
                <Col className ="bordere">Last Nmae</Col>
                <Col className ="bordere">{data.last_name}</Col>
            </Row>
            <Row>
                <Col className ="bordere">Phone</Col>
                <Col className ="bordere">{data.phone}</Col>
            </Row>
            <div className = "d-flex justify-content-center">
            <Button variant="primary" type="submit" onClick={handleEdit} className = "btnn1">
                Edit
            </Button>

            <Button variant="primary" type="submit" onClick={handleHome} className = "btnn1" >
                Home
            </Button>
            </div>
        </Container>
        

    )
}
const mapStateToProps = state =>{
    return{
        bookings : state.bookings
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // bookSlot : data => bookSlot(data,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Details);