"use client";

import {
  Activity,
  Airplay,
  Award,
  BadgeCheck,
  Blocks,
  BookOpen,
  Boxes,
  Building,
  Building2,
  Bus,
  Camera,
  Car,
  CircuitBoard,
  Clapperboard,
  Cog,
  Component,
  Cpu,
  Database,
  FileText,
  Frame,
  GraduationCap,
  HardHat,
  Headset,
  Heart,
  Home,
  Landmark,
  Laptop,
  LayoutGrid,
  type LucideIcon,
  Megaphone,
  MessagesSquare,
  Monitor,
  Newspaper,
  Palette,
  PenTool,
  Plane,
  Presentation,
  RadioTower,
  Receipt,
  Scissors,
  Shirt,
  ShoppingBag,
  Sparkles,
  Stamp,
  Stethoscope,
  Store,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

// Semantic icon registry. Data files reference these names instead of emoji so
// the interface uses one consistent line-icon set at a single optical weight.
const ICONS = {
  // Course domains
  analytics: TrendingUp,
  dashboard: LayoutGrid,
  ai: Cpu,
  marketing: Megaphone,
  graphics: Palette,
  multimedia: Clapperboard,
  animation: Sparkles,
  interior: Home,
  photography: Camera,
  fashion: Shirt,
  boutique: ShoppingBag,
  desktop: Monitor,
  accounting: Receipt,
  storage: Database,
  code: Component,
  web: Airplay,
  plc: Wrench,
  scada: CircuitBoard,

  // Vocational trades
  computer: Laptop,
  textiles: Scissors,
  healthcare: Heart,
  retail: Store,
  telecom: RadioTower,
  automotive: Car,
  electronics: Blocks,

  // Sectors & services
  logistics: Truck,
  drone: Airplay,
  automation: Cog,
  ev: Zap,
  government: Landmark,
  industry: Building,
  school: Presentation,
  education: GraduationCap,
  campus: HardHat,
  lab: Frame,
  office: Building2,
  nursing: Stethoscope,
  hostel: Home,

  // Work abroad journey
  registration: PenTool,
  language: MessagesSquare,
  culture: Users,
  certification: BadgeCheck,
  visa: Stamp,
  deployment: Plane,
  globe: Boxes,

  // Contact desks
  placement: Boxes,
  hr: Users,
  director: Landmark,

  // Resource tabs
  news: Newspaper,
  ads: Megaphone,
  recognition: Award,
  brochures: FileText,

  // Misc
  activity: Activity,
  support: Headset,
  book: BookOpen,
  transit: Bus,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.6,
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  const Cmp = ICONS[name as IconName];
  if (!Cmp) return null;
  return <Cmp size={size} color={color} strokeWidth={strokeWidth} style={style} aria-hidden />;
}

export default Icon;
