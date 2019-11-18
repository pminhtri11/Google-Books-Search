import React from "react";
import { Row, Col } from "../Grid";
import Thumbnail from "../Thumbnails";
import "./style.css";


// Exporting both RecipeList and RecipeListItem from this file
// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function Books(props) {
  return (
    <li className="list-group-item" >
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.src} />
        </Col>
        <Col size="xs-10 sm-10">
          <div class="row">
            <div class="col-9">
              <h3>{props.title}</h3>
            </div>
            <div class="col">
              <div className="buttons">
                <a href={props.href} target="_blank">
                  <button className="btn btn-success">View Detail</button>
                </a>
                {!(window.location.pathname === "/saved") ?
                  <buton className="saved btn btn-primary" id={props.id} onClick={() => props.handleSaveButton(props.id)}> Save</buton>
                  :
                  <buton className="delete btn btn-primary" id={props.id} onClick={() => props.handleDeleteButton(props.id)}> Delete</buton>
                }
              </div>
            </div>
          </div>
          <p>Author: {props.authors}</p>
          <p>Description: {props.description}</p>
        </Col>
      </Row>
    </li >
  )
}