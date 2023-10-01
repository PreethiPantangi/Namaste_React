import {Component} from 'react';
import User from './User';

// const About = () => {
//   return (
//     <div>
//       <User name="Preethi Pantangi" contact="spantang@gmu.edu" location="Fairfax"/>
//     </div>
//   )
// }

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