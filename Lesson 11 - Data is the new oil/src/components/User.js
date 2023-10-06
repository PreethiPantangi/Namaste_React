import React, {useContext} from 'react'
import UserContext from '../utils/UserContext';

// Functional Component
// const User = () => {
//   return (
//     <div className='user-card'>
//         <h2>Name: Preethi Pantangi</h2>
//         <h3>Location: Fairfax</h3>
//         <h3>Contact: spantang@gmu.edu</h3>
//     </div>
//   )
// }

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'John Doe',
        company: 'XYZ',
        location: 'USA'
      }
    }
  }

  async componentDidMount() {

    this.interval = setInterval(() => {
      console.log("Hello React");
    }, 1000);

    const data = await fetch('https://api.github.com/users/preethipantangi');
    const json = await data.json();
    this.setState({
      userInfo: json
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }
  

  render() {
    const {name, company, location, avatar_url} = this.state.userInfo;
    return (
      <div className='user-card'>
          <img className='user-image' src={avatar_url} alt={name}/>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h3>Company: {company}</h3>
          <div>
            LoggedIn User
            <UserContext.Consumer>
              {(data) => <div>{data.loggedInUser}</div>}
            </UserContext.Consumer>
          </div>
          <div>
            <label>Username : </label>
            <UserContext.Consumer>
              {(data) => <input className='border border-black' onChange={(e) => data.setUserName(e.target.value)} value={data.loggedInUser}/>}
            </UserContext.Consumer>
          </div>
      </div>
    )
  }
}

export default User;