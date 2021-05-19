import React from "react";
import Input from "./components/Input";
import List from "./components/List";
import styled, { css } from 'styled-components';

const WrapperForm = styled.div`
background-color: #FAEBD7;
width: 40%;
margin: 5rem auto;

`

const WrapperList = styled(WrapperForm)`
margin: 1rem auto;`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      item: {
        name: "",
        model: "",
      },
      isEditing: false,
      temp_id: null,
    };

    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
  }

  add(e) {
    e.preventDefault();
    let products = this.state.products;
    products.push(this.state.item);
    this.setState({ products: products, item: { name: "", model: "" } });
  }

  view(item) {
    alert(
      `
            Product Name :  ${item.name}\n
            Model Name: ${item.model}
            `
    );
  }

  edit(id) {
    let item = this.state.products[id];
    this.setState({ isEditing: true, item: item, temp_id: id });
  }

  update(e) {
    e.preventDefault();
    let products = this.state.products;
    products[this.state.temp_id] = this.state.item;
    this.setState({
      products: products,
      item: {
        name: "",
        model: "",
      },
      isEditing: false,
      temp_id: null,
    });
  }

  delete(id) {
    let products = this.state.products;
    products.splice(id, 1);
    this.setState({ products: products });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    let item = this.state.item;
    item[name] = value;
    this.setState({ item: item });
  }

  render() {
    return (
      <React.Fragment>
      <WrapperForm>
        <form
          onSubmit={this.state.isEditing ? this.update : this.add}
          method="POST"
        >
          <Input
            labelName="Product Name: "
            type="text"
            name="name"
            placeholder="Enter the Product name"
            value={this.state.item.name}
            onChange={this.handleChange}
          />

          <Input
            labelName="Product Model: "
            type="text"
            name="model"
            placeholder="Enter the Product model"
            value={this.state.item.model}
            onChange={this.handleChange}
          />

          <Input
            type="submit"
            value={this.state.isEditing ? "Update" : "Save"}
          />
        </form>
        </WrapperForm>
        <WrapperList>
        <List
          products={this.state.products}
          view={this.view}
          edit={this.edit}
          delete={this.delete}
        ></List>
        </WrapperList>
      </React.Fragment>
    );
  }
}

export default App;
