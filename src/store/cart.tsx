import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react';
import { getProduct, type Product } from '../data/products';

export const FREE_SHIPPING_FROM = 80;

type CartLine = { slug: string; qty: number };

type Action =
  | { type: 'add'; slug: string; qty: number }
  | { type: 'set'; slug: string; qty: number }
  | { type: 'remove'; slug: string }
  | { type: 'clear' };

const STORAGE_KEY = 'skj-cart';

const readStoredCart = (): CartLine[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line): line is CartLine =>
        typeof line?.slug === 'string' && typeof line?.qty === 'number' && !!getProduct(line.slug)
    );
  } catch {
    return [];
  }
};

const reducer = (lines: CartLine[], action: Action): CartLine[] => {
  switch (action.type) {
    case 'add': {
      const existing = lines.find((l) => l.slug === action.slug);
      if (!existing) return [...lines, { slug: action.slug, qty: action.qty }];
      return lines.map((l) => (l.slug === action.slug ? { ...l, qty: l.qty + action.qty } : l));
    }
    case 'set':
      if (action.qty <= 0) return lines.filter((l) => l.slug !== action.slug);
      return lines.map((l) => (l.slug === action.slug ? { ...l, qty: action.qty } : l));
    case 'remove':
      return lines.filter((l) => l.slug !== action.slug);
    case 'clear':
      return [];
  }
};

type CartItem = CartLine & { product: Product };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(reducer, undefined, readStoredCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      return;
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const items = lines.flatMap((line) => {
      const product = getProduct(line.slug);
      return product ? [{ ...line, product }] : [];
    });
    return {
      items,
      count: items.reduce((sum, i) => sum + i.qty, 0),
      subtotal: items.reduce((sum, i) => sum + i.qty * i.product.price, 0),
      add: (slug, qty = 1) => dispatch({ type: 'add', slug, qty }),
      setQty: (slug, qty) => dispatch({ type: 'set', slug, qty }),
      remove: (slug) => dispatch({ type: 'remove', slug }),
      clear: () => dispatch({ type: 'clear' }),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
