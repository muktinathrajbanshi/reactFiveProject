import React from 'react';
import "./style.css";

const todo = () => {
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todoimage.png" alt="todologo" />
                    <figcaption>Add Your List Here ✌️</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍️ Add Item" className="form-control" />
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All">
                       <span>CHECK LIST</span> 
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default todo;
