import React, { useState } from 'react';
import "./style.css";

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    // add the items function
    const addItem = () => {
        if(!inputData) {
            alert("plz fill the data");
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([... items, myNewInputData]);
            setInputData("");
        }
    };

    // helete items section

    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todoimage.png" alt="todologo" />
                    <figcaption>Add Your List Here ✌️</figcaption>
                </figure>
                <div className="addItems">
                    <input
                     type="text" 
                     placeholder="✍️ Add Item" 
                     className="form-control" 
                     value={inputData}
                     onChange={(event) => setInputData(event.target.value)}
                     />
                    <i class="fa-solid fa-plus" onClick={addItem}></i>
                </div>

                <div className="showItems">
                    {
                        items.map((curElem) => {
                            return (
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                            <i class="fa-solid fa-trash-can" onClick={() => deleteItem(curElem.id)}></i>
                                        </div>
                                    </div>
                            );
                        })
                    }
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All">
                       <span>CHECK LIST</span> 
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Todo;
