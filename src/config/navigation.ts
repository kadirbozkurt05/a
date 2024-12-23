import {
  Home,
  BookOpen,
  Calculator,
  Clock,
  GamepadIcon,
  PenTool,
  Menu,
  GraduationCap,
  User,
  Sun // Add Sun icon for solar system
} from 'lucide-react';
import { NavigationItem } from '../types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    label: 'Anasayfa',
    path: '/',
    icon: Home
  },
  {
    label: 'Hakkımda',
    path: '/hakkimda',
    icon: User
  },
  {
    label: 'Araçlar',
    path: '#',
    icon: BookOpen,
    children: [
      {
        label: 'Heceleme Çalışması',
        path: '/hece-calismasi',
        icon: PenTool
      },
      {
        label: 'Matematik Araçları',
        path: '/matematik-araclari',
        icon: Calculator
      },
      {
        label: 'Zaman Planlayıcı',
        path: '/zaman-planlayici',
        icon: Clock
      },
      {
        label: 'Güneş Sistemi',
        path: '/gunes-sistemi',
        icon: Sun
      }
    ]
  },
  // ... rest of the navigation items remain unchanged
];