import React from "react";
import { Drawer } from "antd";
import { useSelector } from "react-redux";

const CartDrawer = ({ open, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Drawer
      title="Your Cart"
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
    >
      {cartItems.length === 0 ? (
        <div className="text-gray-500 text-center">Cart is empty.</div>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, idx) => (
            <li key={item._id || idx} className="bg-white shadow rounded-lg p-4">
              <div className="font-semibold text-lg text-yellow-700">{item.name || item.serviceName}</div>
              <div className="text-gray-700">{item.description}</div>
              <div className="text-gray-500">Event: {item.eventDate} {item.eventTime}</div>
              {/* Add more fields as needed */}
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  );
};

export default CartDrawer;
