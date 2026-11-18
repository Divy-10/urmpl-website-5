import {
  Spool,
  Shirt,
  Package,
  Factory,
  Ship,
  Layers,
  Globe,
  FlaskConical,
  Handshake,
  Route,
  ClipboardList,
  MessageSquare,
  Compass,
  Building2,
} from 'lucide-react';

const MAP = {
  yarn: Spool,
  spool: Spool,
  shirt: Shirt,
  box: Package,
  factory: Factory,
  ship: Ship,
  layers: Layers,
  globe: Globe,
  flask: FlaskConical,
  handshake: Handshake,
  route: Route,
  clipboard: ClipboardList,
  message: MessageSquare,
  compass: Compass,
  building: Building2,
};

export default function Icon({ name, size = 26, strokeWidth = 1.6, ...rest }) {
  const Cmp = MAP[name] || Globe;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
