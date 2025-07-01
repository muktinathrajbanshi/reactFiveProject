import React from 'react';
import "./style.css";

const Resturant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">1</span>
                <span className="card-author subtle">Breakfast</span>
                <h2 className="card-title">Maggi</h2>
                <span className="card-description subtle">
                    Maggi is a quick, delicious instant noodle loved worldwide. Its signature masala flavor, easy preparation, and comforting warmth make it a go-to snack or meal. Perfect for late nights, cravings, or nostalgic childhood moments.
                </span>
                <div className="card-read"></div>
            </div>
            <img src="" alt="" className="card-media" />

            <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  );
};

export default Resturant;
