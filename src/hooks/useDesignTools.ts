import { useQuery } from '@tanstack/react-query';
import { fetchDesignTools } from '../services/designToolService';
import { Tool } from '../types';

export const useDesignTools = () => {
  return useQuery<Tool[]>({
    queryKey: ['designTools'],
    queryFn: fetchDesignTools,
  });
};
