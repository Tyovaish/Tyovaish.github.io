import React, { Component } from 'react';
import './App.css';
import { Button, Table, Jumbotron, Navbar, NavItem,MenuItem,Nav, NavDropdown } from 'react-bootstrap';
import { VictoryPie, VictoryLine } from 'victory';
class App extends Component {
  render() {
    return (

      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Yovaish Terminal</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={0} href="#">Textbook Arbitrage</NavItem>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      <Table striped bordered condensed hover>
      <thead>
        <tr>
        <th>Item</th>
        </tr>
      </thead>
      <tbody>
          <Textbook
          name="MATH TEXTBOOK"
          />
        </tbody>
      </Table>
      </div>
    );
  }
}
class ItemTable extends Component {
    render(){
      return(
        <Table striped bordered condensed hover>
        <thead>
          <tr>
          <th>Item</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
            <Textbook
            name="MATH TEXTBOOK"
            />
          </tbody>
        </Table>
      );
    }
}

 class Textbook extends Component {
   constructor(props){
      super(props);
      this.purchase = this.purchase.bind(this)
    }
    purchase(){
      console.log("Purchasing Book")
    }
   render(){
     return(
       <tr>
        <td>{this.props.name}</td>
        <td> <button onClick = {this.purchase}>Purchase</button>  </td>
      </tr>
     );
    }
 }
export default App;
