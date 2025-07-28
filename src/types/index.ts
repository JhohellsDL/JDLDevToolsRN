export interface Subcategory {
  id: string;
  name: string;
  // Add other properties if known
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
  // Add other properties if known
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  // Add other properties if known
}
