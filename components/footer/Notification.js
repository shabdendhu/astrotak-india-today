import React from "react";

const Notification = ({ selectedCategory }) => {
  return (
    <div className="footer-notification">
      ₹ {selectedCategory.price} (1 Question on {selectedCategory.name} )
      <button className="footer-notification-button">Ask Now</button>
    </div>
  );
};

export default Notification;
