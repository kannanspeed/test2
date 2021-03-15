import React, { Component } from "react";

class Table extends Component{

    constructor(props){
        super(props)
        this.state={
            users:[{email: "Sincere@april.biz",
            id: 1,
            name: "Leanne Graham",
            phone: "1-770-736-8031 x56442",
            username: "Bret",
            website: "hildegard.org"}],
            isLoading:false,
            isError:false
        }
    }
async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response.body)
    if (response.ok) {
      const respUsers = await response.json();
      console.log(typeof(respUsers));

      let users = [];
      respUsers.forEach(user => {
        // users.push({...user});
        users.push({id: user.id, name: user.name,  username:  user.username, email: user.email,phone: user.phone, website: user.website, company: user.company.name})
      })
      this.setState({ users:users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

    renderTableHeader=()=>{
        return Object.keys(this.state.users[0]).map(attr=><th key={attr}>
            {attr.toUpperCase()}
        </th>)
    }

    renderTableRows=()=>{
        return this.state.users.map(user=>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company}</td>
                </tr>
            )
        })
    }



   
render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error.........</div>
    }

    return users.length > 0
      ? (
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
              
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
  }}

    export default Table
