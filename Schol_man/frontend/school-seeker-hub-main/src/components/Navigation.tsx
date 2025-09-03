import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Plus, List } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border shadow-sm sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-elegant">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SchoolSeeker</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              asChild
              className="transition-all duration-200"
            >
              <Link to="/">
                Home
              </Link>
            </Button>
            
            <Button
              variant={isActive("/add-school") ? "default" : "ghost"}
              asChild
              className="transition-all duration-200"
            >
              <Link to="/add-school" className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add School</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive("/schools") ? "default" : "ghost"}
              asChild
              className="transition-all duration-200"
            >
              <Link to="/schools" className="flex items-center space-x-2">
                <List className="w-4 h-4" />
                <span>Browse Schools</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;