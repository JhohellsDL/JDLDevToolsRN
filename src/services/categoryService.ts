import axiosInstance from '../api/axios';
import { TOOL_ENDPOINTS } from '../constants/api';
import { Category } from '../types';

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get(TOOL_ENDPOINTS.CATEGORIES);
  return response.data.categories;
};
