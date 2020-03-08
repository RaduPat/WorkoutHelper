import ReactBootstrap, { Form, Button, Col} from 'react-bootstrap';
import React from 'react';


class Reps extends React.Component{
    constructor(props) {
        super(props);
        this.state = {'repsAreInvalid':null}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const repsValid = event.currentTarget.value.match(/^([0-9]+)\*([0-9]+)$/)
        const reps = repsValid ? false : true
        this.setState({'repsAreInvalid':reps})
    }

    render() {
        return(
            <Col key={this.props.id} >
                <Form.Control required placeholder="Reps" onChange={this.handleChange} isInvalid={this.state.repsAreInvalid}/>
                <Form.Control.Feedback type="invalid">
                    Reps are invalid, needs to follow number*number
                </Form.Control.Feedback>
            </Col>
        );
    }
}

class Weight extends React.Component{
    constructor(props) {
        super(props);
        this.state = {'weightIsInvalid':null}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const weightValid = event.currentTarget.value.match(/^[0-9]+$/)
        const weight = weightValid ? false : true
        this.setState({'weightIsInvalid':weight})
    }

    render() {
        return(
            <Col key={this.props.id} >
                <Form.Control required placeholder="Weight" onChange={this.handleChange} isInvalid={this.state.weightIsInvalid}/>
                <Form.Control.Feedback type="invalid">
                    Weight is invalid, needs to be a real number
                </Form.Control.Feedback>
            </Col>
        );
    }
}
//,"FrontSquat","Deadlift","Leg Press","Planks","Crunches"
export default function RenderDay(props) {
    const exercises = props.exercises
    if(props.day == "Monday"){
      return(
        <Form.Group >
            {exercises.map((exercise) => {
                return(
                    <Form.Group key={exercise} controlId={exercise}>
                        <Form.Row>
                            <Col >
                                <Form.Control readOnly defaultValue={exercise} />
                            </Col>
                            <Reps onChange={props.onChange} repsAreInvalid={props.repsAreInvalid} id={'reps'}/>
                            <Weight onChange={props.onChange} weightIsInvalid={props.weightIsInvalid} id={'weight'}/>
                        </Form.Row>
                    </Form.Group>
                );
            }
            )
            }
        </Form.Group>
      );
    }
    if(props.day == "Tuesday"){
      return(
        <Form.Group>
            {exercises.map((exercise) => {
                return(
                    <Form.Row key={exercise}>
                        <Col >
                            <Form.Control readOnly defaultValue={exercise} />
                        </Col>
                        <Reps onChange={props.onChange} repsAreInvalid={props.repsAreInvalid} id={'reps'}/>
                        <Weight onChange={props.onChange} weightIsInvalid={props.weightIsInvalid} id={'weight'}/>
                    </Form.Row>
                );
            }
            )
            }
        </Form.Group>
      );
    }
    if(props.day == "Wednesday"){
      return(
        <Form.Group>
            {exercises.map((exercise) => {
                return(
                    <Form.Row key={exercise}>
                        <Col >
                            <Form.Control readOnly defaultValue={exercise} />
                        </Col>
                        <Reps onChange={props.onChange} repsAreInvalid={props.repsAreInvalid} id={'reps'}/>
                        <Weight onChange={props.onChange} weightIsInvalid={props.weightIsInvalid} id={'weight'}/>
                    </Form.Row>
                );
            }
            )
            }
        </Form.Group>
      );
    }
    if(props.day == "Thursday"){
      return(
        <Form.Group>
            {exercises.map((exercise) => {
                return(
                    <Form.Row key={exercise}>
                        <Col >
                            <Form.Control readOnly defaultValue={exercise} />
                        </Col>
                        <Reps onChange={props.onChange} repsAreInvalid={props.repsAreInvalid} id={'reps'}/>
                        <Weight onChange={props.onChange} weightIsInvalid={props.weightIsInvalid} id={'weight'}/>
                    </Form.Row>
                );
            }
            )
            }
        </Form.Group>
      );
    }
    else{
      return(<h1>Error loading exercises</h1>);
    }
  }
