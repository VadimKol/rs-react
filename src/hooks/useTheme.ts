import { useContext } from 'react';

import { ThemeContext } from '@/contexts/theme';

export const useTheme = (): { theme: string; toggleTheme: () => void } => useContext(ThemeContext);
