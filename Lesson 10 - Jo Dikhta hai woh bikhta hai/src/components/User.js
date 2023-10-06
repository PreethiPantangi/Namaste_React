import React from 'react'

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
      </div>
    )
  }
}

export default User;