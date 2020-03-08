import React from 'react';
import config from '../static/config'
import {Accordion, Card, Button, Form, Table } from 'react-bootstrap';

function CustomAccordian(props){
    const days = props.days
    console.log(days)
    return(
        <Form.Group >
            {days.map((daily) => {
                return(
                    <Accordion key={daily.day}>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {daily.day}
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Table striped bordered hover key="exercises">
                                <thead>
                                    <tr>
                                    <th>Exercise</th>
                                    <th>Reps</th>
                                    <th>Weight</th>
                                    </tr>
                                </thead>
                            {daily.exercises.map((exercises) => {
                                return(
                                    <tbody key = {exercises.exercise}>
                                        <tr>
                                            <td>{exercises.exercise}</td>
                                            <td>{exercises.info.reps}</td>
                                            <td>{exercises.info.weight}</td>
                                        </tr>
                                    </tbody>
                                );
                            }
                            )
                            }
                            </Table>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion> 
                );
            }
            )
            }
        </Form.Group>  
    );
}


class Schedule extends React.Component{

    constructor(props) {
        super(props);
        this.state = {"days":config['dummyDay']}
    }

    render(){
        const days = this.state.days
        return(
            <Form >
            <CustomAccordian days={days}/>
            </Form>
        );

    }
}

export default Schedule