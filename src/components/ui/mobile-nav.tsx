import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface MobileNavProps {
  isTransparent?: boolean;
}

export const MobileNav = ({ isTransparent = false }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/venues', label: 'Browse Venues' },
    { to: '#', label: 'How it Works' },
    { to: '#', label: 'Contact' },
    { to: '/owner/dashboard', label: 'List Your Venue' },
    { to: '/auth', label: 'Sign In', isButton: true },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className={`md:hidden p-2 ${
            isTransparent 
              ? 'text-white hover:bg-white/10' 
              : 'text-primary hover:bg-muted'
          }`}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-secondary" />
            <span className="text-xl font-display font-bold text-primary">VenueBook</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                item.isButton 
                  ? 'bg-secondary text-white hover:bg-secondary/90 text-center' 
                  : 'text-primary hover:bg-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};