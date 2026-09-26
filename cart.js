// Shopping cart helpers.

/** Sums line items: each item is { price, qty }. */
export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

/** Applies a percentage discount, e.g. 10 for 10% off. */
export function applyDiscount(amount, percent) {
  return amount - amount * (percent / 100);
}
