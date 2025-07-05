import { Home, User, Briefcase, FileText, Eclipse, Handshake, Phone , Video} from "lucide-react";
import { NavBar } from "@/components/ui/tebelight-navbar";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", url: "/", icon: Home, active: pathname === "/" },
    { name: "About", url: "#", icon: Eclipse, active: pathname === "#" },
    { name: "Services", url: "#", icon: Video, active: pathname === "#" },
    { name: "Blogs", url: "/blog", icon: User, active: pathname === "/blog" },
    { name: "Contact", url: "#", icon: Phone, active: pathname === "#" },
    
  ];

  return <NavBar items={navItems} />;
}
