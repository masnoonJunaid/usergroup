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
                <CardStyle
                  className="div-card"
                  onClick={()=>{
                    value.selectUser()
                  }}
                  >
                    <img className="select" alt="correct" src="correct.svg"/>
                    <img
                      className="prof-img"
                      alt="profile"
                      src={Image}
                      key={id}
                         />
                    <p className="name">{name}</p>
                </CardStyle>
            )
          }}
        </UserConsumer>
      </CardStyle>
    )
  }

}

const CardStyle = styled.div`

.select{
  height:30px;
  width:30px;
  background-color:#5798EB;
  float:right;
  border-radius:0 8px 0 0;
  display:none;
}

.toggle-select{
  display:block;
}

.name{
  background-color:#5798EB;
  border-radius:0 0 8px 8px;
  height:5vh;
}

.div-card{
    margin:30px;
    max-width:100%;
    max-height:100%;
    text-align:center;
    width:140px;
    border-radius:4%;
    background-color:#393939;

}

.prof-img{
  margin-top:18%;
  height:18vh;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  width:80%;
  border-radius:8px 8px 0 0;
}
`

export default UserCard
