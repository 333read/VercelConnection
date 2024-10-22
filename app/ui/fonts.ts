// 使用此文件保存将在整个应用程序中使用的字体

import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';


export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
 });