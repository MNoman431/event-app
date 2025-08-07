// import React from "react";
// import { useSelector } from "react-redux";

// const MyCart = () => {
//   const { cartItems } = useSelector((state) => state.cart);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in your cart yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cartItems.map((item, index) => (
//             <li key={index} className="p-4 border rounded-lg shadow">
//               <p><strong>Date:</strong> {item.eventDate}</p>
//               <p><strong>Time:</strong> {item.eventTime}</p>
//               <p><strong>Description:</strong> {item.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyCart;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCartItemsThunk } from "../../Redux/thunks/CartThunk";
import { getCartByUserThunk } from "../../Redux/thunks/CartThunk";





const MyCart = () => {
  const dispatch = useDispatch();
  const { cartItems, loading, error } = useSelector((state) => state.cart);

  // ✅ Trigger GET API when component loads
 useEffect(() => {
  dispatch(getCartByUserThunk());
}, [dispatch]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {loading && <p>Loading cart items...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && cartItems.length === 0 && (
        <p>No items in your cart yet.</p>
      )}

      {!loading && cartItems.length > 0 && (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="p-4 border rounded-lg shadow">
              <p><strong>Date:</strong> {item.eventDate}</p>
              <p><strong>Time:</strong> {item.eventTime}</p>
              <p><strong>Description:</strong> {item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCart;
