import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends Component {

    constructor(props){
      super(props);
      //creating state
      this.state = {
        users: [],
        loading: false
      }
      //bind
      this.getUsers = this.getUsers.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUsers(){
      this.setState({
        loading: true
      })

      axios('https://randomuser.me/api/?results=5')
      .then(response => this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      }));
    }

    handleSubmit(e){
      e.preventDefault();
      this.getUsers();

    }

    componentWillMount(){
      this.getUsers();
    }

    render() {
    return (
        <div className="App">
          <h1>FistBump Employees</h1>
          <table border="1" cellpadding="5" cellspacing="2">
          <th>Title</th>
          <th>Name</th>
          <th>Email</th>
          {!this.state.loading ? this.state.users.map(user =>
              <tr>
                <td>{user.name.title}</td>
                <td>{user.name.first}</td>
                <td>{user.email}</td>
              </tr>
          ) : <Loading /> }

          </table>


          <br/>

          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Load more employees"/>
          </form>
        </div>
      );
    }
}

export default App;
