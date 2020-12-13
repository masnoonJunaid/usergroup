import React from 'react'
import styled from 'styled-components'
import {UserConsumer} from '../context'
class UserCard extends React.Component{
  render(){
    return (
      <CardStyle>
        <UserConsumer>
          {value=> {
            const {Image, name, id} = this.props.user;
            return (
                <div className="div-card">
                  <img className="prof-img" alt="profile" src={Image} key={id}/>
                  <p className="name">{name}</p>
                </div>
            )
          }}
        </UserConsumer>
      </CardStyle>
    )
  }

}

const CardStyle = styled.div`


.name{
  background-color:#5798EB;
  width:100px;
  height:7vh;
}

.div-card{
    margin:30px;
    width:20%;
    border-radius:4%;
    background-color:#393939;

}

.prof-img{
  height:100px;
  background-size:cover;
  border-radius:10px;
}
`

export default UserCard
