import { Trash2, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch } from "../../Store/store";
import type { RootState } from "@reduxjs/toolkit/query";
import { decrease, increase, removeFromCart } from "../../Store/cartSlice";

export default function Checkout() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  console.log(cartItems, cartItems?.image);
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-slate-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-slate-100"
                >
                  <div className="flex gap-6">
                    <div className="relative group">
                      <img
                        src={item?.image || "https://via.placeholder.com/150"}
                        alt={item.title}
                        className="w-32 h-32 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-300" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        {item.color && item.size && (
                          <div className="flex gap-4 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              Renk:{" "}
                              <span className="font-medium text-slate-900">
                                {item.color}
                              </span>
                            </span>
                            <span className="flex items-center gap-1">
                              Beden:{" "}
                              <span className="font-medium text-slate-900">
                                {item.size}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                            onClick={() => dispatch(decrease(item.id))}
                          >
                            <Minus className="w-4 h-4 text-slate-700" />
                          </button>
                          <span className="w-8 text-center font-medium text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                            onClick={() => dispatch(increase(item.id))}
                          >
                            <Plus className="w-4 h-4 text-slate-700" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-indigo-600">
                            ₺{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <Trash2 className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
