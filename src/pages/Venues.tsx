import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Users, Wifi, Car, Camera, ChefHat, Music, Grid, Map, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import venue3 from '@/assets/venue-3.jpg';

const Venues = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  
  const venues = [
    {
      id: '1',
      name: 'Garden Paradise Wedding Resort',
      location: 'Andheri, Mumbai',
      rating: 4.8,
      reviews: 124,
      price: '₹2,50,000',
      capacity: '200-500',
      image: venue1,
      amenities: ['Parking', 'Catering', 'Photography', 'Music'],
      type: 'Garden',
      verified: true
    },
    {
      id: '2',
      name: 'Royal Ballroom & Convention',
      location: 'Connaught Place, Delhi',
      rating: 4.9,
      reviews: 89,
      price: '₹5,00,000',
      capacity: '300-800',
      image: venue2,
      amenities: ['AC', 'Parking', 'Catering', 'Music'],
      type: 'Banquet Hall',
      verified: true
    },
    {
      id: '3',
      name: 'Heritage Manor Palace',
      location: 'Pink City, Jaipur',
      rating: 4.7,
      reviews: 156,
      price: '₹3,75,000',
      capacity: '150-400',
      image: venue3,
      amenities: ['Heritage', 'Photography', 'Catering', 'Parking'],
      type: 'Heritage',
      verified: true
    },
    {
      id: '4',
      name: 'Seaside Celebration Villa',
      location: 'Bandra, Mumbai',
      rating: 4.6,
      reviews: 78,
      price: '₹4,25,000',
      capacity: '100-300',
      image: venue1,
      amenities: ['Sea View', 'Parking', 'Catering'],
      type: 'Villa',
      verified: false
    },
    {
      id: '5',
      name: 'Grand Crystal Ballroom',
      location: 'Gurgaon, Delhi NCR',
      rating: 4.8,
      reviews: 203,
      price: '₹6,50,000',
      capacity: '500-1000',
      image: venue2,
      amenities: ['AC', 'Valet Parking', 'Premium Catering', 'Music'],
      type: 'Luxury Hall',
      verified: true
    },
    {
      id: '6',
      name: 'Rustic Farm Wedding',
      location: 'Lonavala, Maharashtra',
      rating: 4.5,
      reviews: 92,
      price: '₹1,80,000',
      capacity: '80-250',
      image: venue3,
      amenities: ['Farm Stay', 'Outdoor', 'Catering'],
      type: 'Farm House',
      verified: true
    }
  ];

  const venueTypes = ['Banquet Hall', 'Garden', 'Heritage', 'Villa', 'Luxury Hall', 'Farm House'];
  const amenityIcons = {
    'Parking': Car,
    'Catering': ChefHat, 
    'Photography': Camera,
    'Music': Music,
    'AC': Wifi,
    'Heritage': Star,
    'Sea View': MapPin,
    'Valet Parking': Car,
    'Premium Catering': ChefHat,
    'Farm Stay': MapPin,
    'Outdoor': MapPin
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-primary mb-4">Price Range</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="price1" />
            <label htmlFor="price1" className="text-sm">Under ₹2,00,000</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="price2" />
            <label htmlFor="price2" className="text-sm">₹2,00,000 - ₹5,00,000</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="price3" />
            <label htmlFor="price3" className="text-sm">₹5,00,000 - ₹10,00,000</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="price4" />
            <label htmlFor="price4" className="text-sm">Above ₹10,00,000</label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-primary mb-4">Venue Type</h3>
        <div className="space-y-2">
          {venueTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label htmlFor={type} className="text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-primary mb-4">Capacity</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="capacity1" />
            <label htmlFor="capacity1" className="text-sm">Under 100 guests</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="capacity2" />
            <label htmlFor="capacity2" className="text-sm">100-300 guests</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="capacity3" />
            <label htmlFor="capacity3" className="text-sm">300-500 guests</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="capacity4" />
            <label htmlFor="capacity4" className="text-sm">500+ guests</label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-primary mb-4">Amenities</h3>
        <div className="space-y-2">
          {Object.keys(amenityIcons).map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox id={amenity} />
              <label htmlFor={amenity} className="text-sm">{amenity}</label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-primary mb-4">Rating</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="rating4" />
            <label htmlFor="rating4" className="text-sm flex items-center">
              4+ <Star className="ml-1 h-3 w-3 star-filled fill-current" />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="rating45" />
            <label htmlFor="rating45" className="text-sm flex items-center">
              4.5+ <Star className="ml-1 h-3 w-3 star-filled fill-current" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-display font-bold text-primary">VenueBook</span>
            </Link>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search venues, locations..." 
                  className="pl-10 h-12 border-gray-200 focus:border-accent"
                />
              </div>
            </div>

            <nav className="flex items-center space-x-4">
              <Link to="/owner/dashboard">
                <Button variant="outline" className="hidden md:block">
                  List Your Venue
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              Wedding Venues
            </h1>
            <p className="text-muted-foreground">
              Found {venues.length} venues matching your search
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Filter */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filter Venues</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>

            {/* View Toggle */}
            <div className="flex items-center border border-border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="h-8 px-3"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="h-8 px-3"
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-80 flex-shrink-0">
            <Card className="card-elegant p-6 sticky top-24">
              <h2 className="text-xl font-display font-semibold text-primary mb-6 flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </h2>
              <FilterSidebar />
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {venues.map((venue) => (
                  <Link key={venue.id} to={`/venues/${venue.id}`}>
                    <Card className="card-venue group flex">
                      <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                        <img 
                          src={venue.image} 
                          alt={venue.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-display font-semibold text-primary">
                                {venue.name}
                              </h3>
                              {venue.verified && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 text-xs">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span className="text-sm">{venue.location}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="h-4 w-4 star-filled fill-current" />
                              <span className="text-sm font-medium">{venue.rating}</span>
                              <span className="text-sm text-muted-foreground">({venue.reviews})</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {venue.type}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{venue.capacity} guests</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {venue.amenities.slice(0, 3).map((amenity) => {
                            const IconComponent = amenityIcons[amenity];
                            return (
                              <Badge key={amenity} variant="secondary" className="bg-secondary/10 text-accent border-0 text-xs">
                                {IconComponent && <IconComponent className="h-3 w-3 mr-1" />}
                                {amenity}
                              </Badge>
                            );
                          })}
                          {venue.amenities.length > 3 && (
                            <Badge variant="secondary" className="bg-muted text-muted-foreground border-0 text-xs">
                              +{venue.amenities.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Starting from</p>
                            <p className="text-lg font-semibold text-primary">{venue.price}</p>
                          </div>
                          <Button size="sm" className="btn-elegant">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card className="card-elegant h-96 flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Map view coming soon</p>
                </div>
              </Card>
            )}

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="btn-elegant">
                Load More Venues
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;