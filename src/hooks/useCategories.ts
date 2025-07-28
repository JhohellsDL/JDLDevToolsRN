import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../services/categoryService';
import { Category } from '../types';

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};
