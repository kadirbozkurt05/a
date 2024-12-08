import {
  Home,
  BookOpen,
  Calculator,
  Clock,
  GamepadIcon,
  PenTool,
  Menu,
  GraduationCap
} from 'lucide-react';
import { NavigationItem } from '../types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    label: 'Anasayfa',
    path: '/',
    icon: Home
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
        label: 'Sınavlar',
        path: '#',
        icon: GraduationCap,
        children: [
          { label: '1. Sınıf', path: '/sinavlar/1' },
          { label: '2. Sınıf', path: '/sinavlar/2' },
          { label: '3. Sınıf', path: '/sinavlar/3' },
          { label: '4. Sınıf', path: '/sinavlar/4' }
        ]
      }
    ]
  },
  {
    label: 'Oyunlar',
    path: '#',
    icon: GamepadIcon,
    children: [
      {
        label: 'Hafıza Oyunu',
        path: '/oyunlar/hafiza'
      },
      {
        label: 'Kelime Karıştırma',
        path: '/oyunlar/kelime-karistirma'
      },
      {
        label: 'Matematik Yarışması',
        path: '/oyunlar/matematik-yarismasi'
      }
    ]
  },
  {
    label: 'Kaynaklar',
    path: '#',
    icon: Menu,
    children: [
      {
        label: 'Tüm Sınıflar',
        path: '/kaynaklar'
      },
      {
        label: '1. Sınıf',
        path: '/sinif/1'
      },
      {
        label: '2. Sınıf',
        path: '/sinif/2'
      },
      {
        label: '3. Sınıf',
        path: '/sinif/3'
      },
      {
        label: '4. Sınıf',
        path: '/sinif/4'
      }
    ]
  }
];