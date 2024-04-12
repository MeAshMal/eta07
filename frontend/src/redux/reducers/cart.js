import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? {
        products: JSON.parse(localStorage.getItem("cart")),
        totalPrice: 0,
      }
    : {
        products: [],
        totalPrice: 0,
      },
};

// export const cartReducer = createReducer(initialState, (builder)=>{
//   ADD_TO_CART: (state, action) => {
//     const itemExists = state.cart.products?.find((item) => {
//       return item._id === action.payload._id;
//     });
//     if (itemExists) {
//       state.cart.products?.forEach((item) => {
//         if (item._id === action.payload._id) {
//           if (item.qty < Number(item.stock)) {
//             item.qty += 1;
//           }
//         }
//       });
//     } else {
//       state.cart.products?.push(action.payload);
//     }
//     localStorage.setItem("cart", JSON.stringify(state.cart.products));
//   },
//   REMOVE_FROM_CART: (state, action) => {
//     state.cart.products = state.cart.products?.filter(
//       (item) => item._id !== action.payload._id
//     );
//     localStorage.setItem("cart", JSON.stringify(state.cart.products));
//   },
//   DECREASE_QUANTITY: (state, action) => {
//     state.cart.products?.forEach((item) => {
//       if (item._id === action.payload._id) {
//         if (item.qty === 1) {
//           state.cart.products = state.cart.products?.filter(
//             (item) => item._id !== action.payload._id
//           );
//           localStorage.setItem("cart", JSON.stringify(state.cart.products));
//           return;
//         }
//         item.qty -= 1;
//       }
//     });
//     localStorage.setItem("cart", JSON.stringify(state.cart.products));
//   },
//   CLEAR_CART: (state, _) => {
//     state.cart.products = [];
//     state.cart.totalPrice = 0;
//     localStorage.setItem("cart", JSON.stringify(state.cart.products));
//     localStorage.removeItem("cart");
//   },

//   CALCULATE_SUBTOTAL: (state, _) => {
//     state.cart.totalPrice = state.cart?.products
//       ?.filter((product) => product.price && product.qty)
//       .reduce((acc, product) => acc + product.price * product.qty, 0);
//   },
// });

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    const itemExists = state.cart.products?.findIndex((item) => {
      return (
        item._id === action.payload._id &&
        item.size === action.payload.size &&
        item.color === action.payload.color
      );
    });
    if (itemExists !== -1) {
      // state.cart.products?.forEach((item) => {
      //   if (item._id === action.payload._id) {
      //     if (item.qty < Number(item.stock)) {
      //       item.qty += action.payload.qty;
      //     }
      //   }
      // });
      state.cart.products[itemExists].qty += action.payload.qty;
    } else {
      state.cart.products?.push(action.payload);
    }
    localStorage.setItem("cart", JSON.stringify(state.cart.products));
  });
  builder.addCase("DECREASE_QUANTITY", (state, action) => {
    const itemIndex = state.cart.products?.findIndex((item) => {
      return (
        item._id === action.payload._id &&
        item.size === action.payload.size &&
        item.color === action.payload.color
      );
    });
    if (state.cart.products[itemIndex].qty > 1) {
      state.cart.products[itemIndex].qty -= 1;
    } else {
      state.cart.products.splice(itemIndex, 1);
    }
    localStorage.setItem("cart", JSON.stringify(state.cart.products));
  });
  builder.addCase("CALCULATE_SUBTOTAL", (state, action) => {
    console.log(action.payload);
    if (!action.payload) {
      state.cart.totalPrice = state.cart?.products
        ?.filter((product) => product.price && product.qty)
        .reduce((acc, product) => acc + product.price * product.qty, 0);
    } else {
      state.cart.totalPrice = action.payload.totalPrice;
    }
  });
});
