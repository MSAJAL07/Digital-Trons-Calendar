import React from "react"
import {Row,Col,Container}from 'react-bootstrap';
import "./home.css"
import {connect} from "react-redux"
import { Link} from "react-router-dom"
const Home = (props) => {

    const container = props.slots.map((slot,i)=>{
        return (
            <Row key={i} >
            <Col className = {"d-flex justify-content-center"} >
                <div className= {"slot " + (slot.isbooked? " booked" : "") }>
                    {
                        slot.isbooked ? <Link to={{ pathname: '/details/'+slot.id  , state:  slot }} >{slot.slot}</Link>  :
                        <Link to={{ pathname: '/book/'+slot.id  , state:  slot }}> {slot.slot}</Link> 
                    }                   
                </div>
            </Col>
        </Row>
        )
    })
    return(      
        <Container className ="warpper" fluid >
            {container}
        </Container>
    )
   
}
const mapStateToProps = state =>{
    return{
        slots : state.slots
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Home);

