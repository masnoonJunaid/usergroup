import React from 'react'


const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    users: [],
    isLoaded:false
  }


  componentDidMount(){
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(res=>res.json())
      .then(users=> {
        this.setState({
          users:users,
          isLoaded:true
        })
      })
  };

  getCard = (id) => {
    const card = this.state.users.find(card => card.id === id)
    return card
  }

  selectUser = (id)  => {


    let card =   document.querySelectorAll('.select')
    card[4].classList.toggle('toggle-select')
    card[3].classList.toggle('toggle-select')
    card[1].classList.toggle('toggle-select')
    card[0].classList.toggle('toggle-select')
    // card.forEach( c=> {
    //   c.classList.toggle('toggle-select')
    // })
    // card.classList.toggle('toggle-select')
    //   console.log("I am working fine")
    }


  render(){
    return (
      <UserContext.Provider value={{
        ...this.state,
        selectUser:this.selectUser
      }}>
      {this.props.children}
      </UserContext.Provider>
    )
  }
}


const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer}
