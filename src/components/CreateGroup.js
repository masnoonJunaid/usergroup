import styled from 'styled-components'

function CreateGroup(){
  return (
    <CreateStyles>
    <ul className="create-list">
      <li class="element-list">
        <img className="group-img" alt="" src="user.png"/>
        <div className="group-upload">
          <img className="camera-logo" alt="Group" src="camera.svg"/>
          <p className="group-text">Group Logo</p>
        </div>
      </li>
      <li className="element-list">
        <label className="label-text" for="name">Name</label>
        <label className="label-text" for="desc">Description</label>
      </li>
      <li className="element-list">
        <form className="input-form">
          <input className="input-ele" type="text"id="name" placeholder="group name"/>
          <input className="input-ele" type="text"id="desc" placeholder="group description"/>
        </form>
      </li>
      </ul>
    </CreateStyles>
  )
}


const CreateStyles = styled.div`

.group-img{
  border-radius:10px;
  height:50%;
  margin:4%;
}

.create-list{
  display:flex;
  width:100%;
  margin-left:auto;
  margin-right:auto;
  text-align:center;

}
.label-text{
  color:lightgrey;
  display:block;
  padding:12%;
}

.input-ele{
  margin:8%;
  height:6vh;
  width:80%;
  border-radius:18px;
  background-color:#1A1F22;
  border-style: groove;
  text-align:center;
  color:lightgrey;
}
.input-ele:focus{
  border-style:none;
}

.element-list{
  display:block;
  width:20%;

}
.camera-logo{
  width:15%;
  height:15%;
}

.group-text{
  margin-left:3px;
  margin-top:4px;
  color:lightgrey;
}

.group-upload{
  display:inline-flex;
  margin-left:50px;
`

export default CreateGroup
