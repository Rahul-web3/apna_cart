import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
    };
  }
  render() {
    return (
      <div>
        <form
          className="row align-items-center"
          onSubmit={(event) => {
            event.preventDefault();
            this.props.addItem(this.state.name, Number(this.state.price));
          }}
        >
          <div className="form-group col-4">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Name"
              name="productName"
              onChange={(event) => this.setState({ name: event.target.value })}
              value={this.state.name}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Price"
              onChange={(event) => this.setState({ price: event.target.value })}
              value={this.state.price}
            />
          </div>
          <div className="col-4 text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
