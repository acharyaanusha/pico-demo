import { test } from 'node:test';
import assert from 'node:assert/strict';
import { subtotal, applyDiscount } from './cart.js';

test('subtotal multiplies price by quantity', () => {
  assert.equal(subtotal([{ price: 5, qty: 2 }, { price: 3, qty: 1 }]), 13);
});

test('applyDiscount takes a percentage off', () => {
  assert.equal(applyDiscount(200, 10), 180);
});
