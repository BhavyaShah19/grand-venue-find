import React from 'react';
import { Search, MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { MobileNav } from '@/components/ui/mobile-nav';
import heroImage from '@/assets/hero-venue.jpg';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import venue3 from '@/assets/venue-3.jpg';

const Index = () => {
  const featuredVenues = [
    {
      id: '1',
      name: 'Garden Paradise',
      location: 'Mumbai, Maharashtra',
      rating: 4.8,
      reviews: 124,
      price: '₹2,50,000',
      image: venue1,
      capacity: '200-500'
    },
    {
      id: '2', 
      name: 'Royal Ballroom',
      location: 'Delhi, NCR',
      rating: 4.9,
      reviews: 89,
      price: '₹5,00,000',
      image: venue2,
      capacity: '300-800'
    },
    {
      id: '3',
      name: 'Heritage Manor',
      location: 'Jaipur, Rajasthan',
      rating: 4.7,
      reviews: 156,
      price: '₹3,75,000',
      image: venue3,
      capacity: '150-400'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Search',
      description: 'Find venues that match your vision and requirements',
      icon: Search
    },
    {
      step: '2', 
      title: 'Book',
      description: 'Connect with venue owners and secure your perfect date',
      icon: Calendar
    },
    {
      step: '3',
      title: 'Celebrate',
      description: 'Create unforgettable memories at your dream venue',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
            <span className="text-xl sm:text-2xl font-display font-bold text-white">VenueBook</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/venues" className="text-white hover:text-secondary transition-colors">Browse Venues</Link>
            <Link to="#" className="text-white hover:text-secondary transition-colors">How it Works</Link>
            <Link to="#" className="text-white hover:text-secondary transition-colors">Contact</Link>
            <Link to="/owner/dashboard">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                List Your Venue
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-secondary text-white hover:bg-secondary/90">
                Sign In
              </Button>
            </Link>
          </nav>
          <MobileNav isTransparent={true} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-secondary">Wedding Venue</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 font-light max-w-3xl mx-auto">
            Discover extraordinary venues for your most important celebrations
          </p>

          {/* Search Form */}
          <div className="search-container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="City, area, or pincode" 
                    className="pl-10 h-12 border-gray-200 focus:border-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Event Type</label>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-accent">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    type="date" 
                    className="pl-10 h-12 border-gray-200 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Number of guests" 
                    className="pl-10 h-12 border-gray-200 focus:border-accent"
                  />
                </div>
              </div>
            </div>
            
            <Link to="/venues">
              <Button className="btn-hero w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold min-h-[48px]">
                <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Find Perfect Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Featured Venues
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover handpicked venues that promise to make your celebration truly exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredVenues.map((venue) => (
              <Link key={venue.id} to={`/venues/${venue.id}`}>
                <Card className="card-venue group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-display font-semibold text-primary">
                        {venue.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 star-filled fill-current" />
                        <span className="text-sm font-medium">{venue.rating}</span>
                        <span className="text-sm text-muted-foreground">({venue.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{venue.location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-lg font-semibold text-primary">{venue.price}</p>
                      </div>
                      <Badge variant="secondary" className="bg-secondary/10 text-accent border-0">
                        {venue.capacity} guests
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/venues">
              <Button variant="outline" className="btn-elegant">
                View All Venues
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your dream venue is just three simple steps away
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="text-center group relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform duration-300">
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
                  {item.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 sm:top-10 left-full w-12 border-t-2 border-dashed border-secondary transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to List Your Venue?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our platform and connect with couples looking for their perfect celebration space
          </p>
          <Link to="/owner/dashboard">
            <Button className="btn-hero text-lg px-12 py-4">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-secondary" />
                <span className="text-xl font-display font-bold">VenueBook</span>
              </div>
              <p className="text-gray-300">
                Creating unforgettable celebrations through perfect venue matches.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/venues" className="hover:text-secondary transition-colors text-sm sm:text-base">Browse Venues</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors text-sm sm:text-base">How it Works</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors text-sm sm:text-base">Reviews</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Venue Owners</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/owner/dashboard" className="hover:text-secondary transition-colors text-sm sm:text-base">List Your Venue</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors text-sm sm:text-base">Owner Resources</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors text-sm sm:text-base">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="#" className="hover:text-secondary transition-colors text-sm sm:text-base">Help Center</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors text-sm sm:text-base">Contact Us</Link></li>
                <li><Link to="#" className="hover:text-secondary transition-colors text-sm sm:text-base">Terms & Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 VenueBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;