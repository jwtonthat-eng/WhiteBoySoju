
import { Flavor, NavLink } from './types';

export const BRAND_NAME = "White Boy Soju";
export const LOCATION = "Boston, MA";

export const NAV_LINKS: NavLink[] = [
  { label: "Flavors", href: "#flavors" },
  { label: "Story", href: "#story" },
  { label: "Culture", href: "#culture" },
  { label: "Founders", href: "#founders" },
  { label: "Find Us", href: "#find" },
];

export const FLAVORS: Flavor[] = [
  {
    id: "amber-waves",
    name: "Amber Waves of Grain",
    notes: "The golden flagship. Smooth, toasted rice with deep amber depth. A New England harvest in a glass.",
    color: "bg-[#FFBF00]",
    textColor: "text-[#1B2A41]",
    badge: "Flagship Product",
    image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "concord-grape",
    name: "Concord Grape",
    notes: "Punchy, tart, and nostalgic. Like a Fall drive through the valley, but with way more attitude.",
    color: "bg-[#4B0082]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1537084642907-629340c7e59c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fluffernutter",
    name: "Fluffernutter",
    notes: "Marshmallow fluff meet peanut butter. A Somerville original reinvented for the night out.",
    color: "bg-[#FDFBF7]",
    textColor: "text-[#8B0000]",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "maple-syrup",
    name: "Maple Syrup",
    notes: "Tapped fresh, finished smooth. A rich, woodsy sweetness that hits like a crisp October morning.",
    color: "bg-[#6F4E37]",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1589733901241-5e391270dd91?auto=format&fit=crop&q=80&w=600"
  },
];
