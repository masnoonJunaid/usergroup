import React from 'react'


const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    users: [],
  }


  componentDidMount(){
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(res=>res.json())
      .then(users=> {
        this.setState({
          users:users
        })
      })
  }

  render(){
    return (
      <UserContext.Provider value={{
        ...this.state,
      }}>
      {this.props.children}

      </UserContext.Provider>
    )
  }
}


const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer}
