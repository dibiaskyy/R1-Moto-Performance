import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    totalCount, 
    totalAmount,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0c0c11] border-l border-white/10 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-900/60">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-600/15 border border-rose-500/30 text-rose-500 flex items-center justify-center font-bold">
                <ShoppingBag size={16} />
              </div>
              <div>
                <h3 className="font-heading font-black text-white text-base uppercase tracking-tight">
                  Your Cart
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-[10px] font-mono text-neutral-400 hover:text-rose-400 px-2 py-1 rounded hover:bg-white/5 transition"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 text-neutral-500 flex items-center justify-center mx-auto">
                  <ShoppingBag size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm uppercase">Your Cart is Empty</h4>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
                    Browse our high-performance transmission parts and add items to your cart.
                  </p>
                </div>
                <Link
                  to="/catalog"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-rose-950"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ) : (
              <div className="space-y-3.5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition space-y-3"
                  >
                    <div className="flex items-start space-x-3.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-contain rounded-xl bg-neutral-900 border border-white/10 p-1 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-heading font-bold text-white text-xs uppercase leading-snug truncate">
                          {item.name}
                        </div>
                        <div className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate">
                          {item.model}
                        </div>
                        <div className="text-xs font-mono font-bold text-rose-400 mt-1">
                          ₱{item.price.toLocaleString()}
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-neutral-500 hover:text-rose-400 p-1 transition"
                        title="Remove Item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center space-x-2 bg-white/[0.04] border border-white/10 rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-lg bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center justify-center transition"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <div className="text-xs font-mono font-bold text-white">
                        ₱{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-neutral-900/80 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Subtotal ({totalCount} items)</span>
                  <span className="font-mono text-white">₱{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Estimated Shipping</span>
                  <span className="text-emerald-400 font-mono text-[11px]">Free Promo</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                  <span className="font-heading font-bold text-white text-sm uppercase">Total</span>
                  <span className="font-mono font-black text-rose-400 text-lg">
                    ₱{totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert(`Checkout initiated for ${totalCount} items! Total: ₱${totalAmount.toLocaleString()}`);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl shadow-rose-950 flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[10px] font-mono text-neutral-500">
                <ShieldCheck size={13} className="text-rose-500" />
                <span>100% Genuine R1 Performance Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
