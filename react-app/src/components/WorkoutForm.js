import React from 'react';
import { Form, Button, Col} from 'react-bootstrap';
import RenderDay from '../forms/workout';
import config from '../static/config'

class WorkoutComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {"day":"Monday",'repsAreInvalid':null,'weightIsInvalid':null}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const day = event.target.value
    this.setState({"day":String(day)})
  }

  handleSubmit(event) {
    const result = {}
    try{
      for (const exercise of config['ExerciseDict'][this.state.day]){
        const [reps, weight] = ''
        for (const item of event.target.elements[exercise]){
          if (item.placeholder == 'Reps'){
            reps = item.value
          }
          if (item.placeholder == 'Weight'){
            weight = item.value
          }
        }
        result[exercise] =  {'reps':reps,'weight':weight}
      }
    }
    catch(err){
      console.log(err)
      console.log(err)
    }
    console.log(result)
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="Day">
          <Form.Label>Day select</Form.Label>
          <Form.Control as="select" onChange={this.handleChange}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
          </Form.Control>
        </Form.Group>
          <RenderDay day={this.state.day} exercises={config['ExerciseDict'][this.state.day]}/>
        <Button variant="primary" type="submit" >
            Submit
        </Button>
      </Form>
    );
  }
}

export default WorkoutComponent