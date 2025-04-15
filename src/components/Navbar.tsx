
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-slate-100">
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-serif font-medium text-navy-900">
          Liviu M.C.
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="btn-primary">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-background border-b border-slate-100 transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-80 py-4" : "max-h-0 py-0 overflow-hidden"
      )}>
        <nav className="container-custom flex flex-col space-y-4">
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link to="/contact" className="btn-primary inline-block text-center" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
