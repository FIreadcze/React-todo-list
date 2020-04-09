import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";

//we installed bootstrap so!!!
import "bootstrap/dist/css/bootstrap.css";
import { v1 as uuid } from "uuid";
//import ikon fontawesome

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    //zamezi aby se po kliku vyprazdnilo okno
    e.preventDefault();
    //place do nove polozky
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    console.log(newItem);
    //...rozdeli polozky a da je do pole
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <Todolist
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
