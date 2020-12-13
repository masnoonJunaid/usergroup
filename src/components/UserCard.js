import React from 'react'
import styled from 'styled-components'
class UserCard extends React.Component{
  render(){
    return (
      <CardStyle>
        <div>
          <h1>Hello from profile </h1>
        </div>
      </CardStyle>
    )
  }

}

const CardStyle = styled.div`
`

export default UserCard
