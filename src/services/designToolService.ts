import axiosInstance from '../api/axios';
import { TOOL_ENDPOINTS } from '../constants/api';
import { Tool } from '../types';

export const fetchDesignTools = async (): Promise<Tool[]> => {
  const response = await axiosInstance.get(TOOL_ENDPOINTS.DESIGN_TOOLS);
  return response.data.tools;
};
