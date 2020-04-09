import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          {" "}
          <div className="input-group">
            {" "}
            <div className="input-group-prepend ">
              {" "}
              <div className="input-group-text bg-primary text-white ">
                {" "}
                <i className="fas fa-book"> </i>
              </div>
            </div>
            <input
              type="text"
              className="form-control  text-capitalize"
              placeholder="add todo Item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-4"
                : "btn btn-block btn-outline-primary mt-4"
            }
          >
            {editItem ? "edit item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}
