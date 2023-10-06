import {Component} from 'react';
import User from './User';

class About extends Component {
  constructor({props}) {
    super(props)
  }

  render() {
    return (
      <div>
        <User/>
      </div>
    )
  }
}

export default About