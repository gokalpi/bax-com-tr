import { Montserrat as FontVariable, DM_Serif_Display as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400'],
});

export const fontVariable = FontVariable({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
