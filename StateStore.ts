import { atom } from "jotai";

export interface WidgetInfo {
  id: string;
  name: string;
  description: string;
};

export interface CartItem {
  count: number;
  widget: WidgetInfo;
}


export const cartAtom = atom<CartItem[]>([]);

