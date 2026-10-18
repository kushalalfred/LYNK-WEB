import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

function formatPrice(price) {
  return `$${price.toFixed(2)} `;
}

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <div className="min-h-[70vh] bg-[#F7F5F0] px-4 py-10 text-[#162032] sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Your order
            </p>
            <h1 className="text-3xl font-extrabold sm:text-4xl">Shopping cart</h1>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#162032] text-white">
              1
            </span>
            <span>Cart</span>
            <span className="h-px w-8 bg-slate-300" />
            <span className="text-slate-400">Delivery</span>
            <span className="h-px w-8 bg-slate-300" />
            <span className="text-slate-400">Payment</span>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <FiLock size={24} aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Explore the LYNK badge holder configurations and add the one that
              works best for you.
            </p>
            <Link
              to="/purchase"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#162032] px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              <FiArrowLeft aria-hidden="true" />
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px]">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="hidden grid-cols-[1fr_120px_120px] gap-4 border-b border-slate-200 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 sm:grid">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
              </div>
              <ul className="divide-y divide-slate-200">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-[1fr_120px_120px] sm:items-center sm:px-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-slate-100 p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold">{item.name}</h2>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.subtitle}
                        </p>
                        {item.addOns.length > 0 && (
                          <p className="mt-2 text-xs text-slate-500">
                            Add-ons:{" "}
                            {item.addOns.map((addOn) => addOn.name).join(", ")}
                          </p>
                        )}
                        <p className="mt-2 text-sm font-semibold">
                          {formatPrice(item.unitPrice)} each
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-center">
                      <span className="text-sm text-slate-500 sm:hidden">
                        Quantity
                      </span>
                      <div className="flex items-center rounded-lg border border-slate-200">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          disabled={item.quantity <= 1}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 text-slate-600 transition hover:text-[#162032] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <FiMinus aria-hidden="true" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 text-slate-600 transition hover:text-[#162032]"
                        >
                          <FiPlus aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end sm:text-right">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-red-600 sm:hidden"
                      >
                        <FiTrash2 aria-hidden="true" />
                        Remove
                      </button>
                      <div>
                        <span className="text-sm text-slate-500 sm:hidden">
                          Item total
                        </span>
                        <p className="font-bold">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="hidden p-2 text-slate-400 transition hover:text-red-600 sm:inline-flex"
                      >
                        <FiTrash2 aria-hidden="true" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-200 px-6 py-4">
                <Link
                  to="/purchase"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-[#162032]"
                >
                  <FiArrowLeft aria-hidden="true" />
                  Continue shopping
                </Link>
              </div>
            </section>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Order summary</h2>
              <div className="mt-6 space-y-4 border-b border-slate-200 pb-5 text-sm">
                <div className="flex justify-between gap-4 text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#162032]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-slate-600">
                  <span>Shipping</span>
                  <span className="text-right">Calculated at checkout</span>
                </div>
                <div className="flex justify-between gap-4 text-slate-600">
                  <span>Taxes</span>
                  <span className="text-right">Calculated at checkout</span>
                </div>
                <div className="flex justify-between gap-4 text-slate-600">
                  <span>Currency</span>
                  <span className="text-right">NZD</span>
                </div>
              </div>
              <div className="flex justify-between gap-4 py-5">
                <span className="font-bold">Subtotal before shipping & taxes</span>
                <span className="text-right text-lg font-extrabold">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-xl bg-[#162032] px-5 py-3.5 font-semibold text-white opacity-60"
                title="Checkout is not available yet."
              >
                Checkout coming soon
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Shipping and taxes will be calculated when checkout becomes
                available.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-200 pt-5 text-xs font-medium text-slate-500">
                <FiLock aria-hidden="true" />
                Secure checkout coming soon
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
