import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Users, 
  Calendar, 
  Phone, 
  Mail, 
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Car,
  Camera,
  ChefHat,
  Music,
  Check,
  X
} from 'lucide-react';
import { MobileNav } from '@/components/ui/mobile-nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import venue3 from '@/assets/venue-3.jpg';

const VenueDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [guestCount, setGuestCount] = useState('');

  // Mock data - in real app this would come from API
  const venue = {
    id: id,
    name: 'Garden Paradise Wedding Resort',
    location: 'Andheri West, Mumbai, Maharashtra',
    rating: 4.8,
    reviewCount: 124,
    price: '₹2,50,000',
    capacity: '200-500',
    description: 'Garden Paradise is an exquisite wedding resort nestled in the heart of Mumbai, offering a perfect blend of natural beauty and elegant sophistication. Our lush gardens, sparkling fountains, and romantic gazebos create an enchanting atmosphere for your special day. With world-class amenities and impeccable service, we ensure your wedding dreams come true.',
    images: [venue1, venue2, venue3, venue1, venue2],
    amenities: [
      { name: 'Free Wi-Fi', icon: Wifi, available: true },
      { name: 'Parking (200 cars)', icon: Car, available: true },
      { name: 'Professional Photography', icon: Camera, available: true },
      { name: 'In-house Catering', icon: ChefHat, available: true },
      { name: 'Sound System', icon: Music, available: true },
      { name: 'Air Conditioning', icon: Users, available: false },
    ],
    pricing: {
      basePrice: '₹2,50,000',
      pricePerGuest: '₹1,200',
      includedServices: [
        'Venue decoration',
        'Basic lighting',
        'Security service',
        'Parking facility',
        'Bridal room'
      ],
      additionalServices: [
        { name: 'Premium catering', price: '₹800/guest' },
        { name: 'Photography package', price: '₹50,000' },
        { name: 'DJ & sound system', price: '₹25,000' },
        { name: 'Floral decoration', price: '₹75,000' }
      ]
    },
    availability: {
      bookedDates: ['2024-01-15', '2024-01-22', '2024-02-14', '2024-03-10'],
      availableDates: ['2024-01-20', '2024-01-25', '2024-02-10', '2024-02-18']
    },
    owner: {
      name: 'Rajesh Sharma',
      phone: '+91 98765 43210',
      email: 'rajesh@gardenparadise.com',
      responseTime: '2 hours',
      verified: true
    },
    reviews: [
      {
        id: 1,
        user: 'Priya & Arjun',
        rating: 5,
        date: '2024-01-10',
        comment: 'Garden Paradise exceeded all our expectations! The venue was absolutely stunning, and the staff went above and beyond to make our wedding day perfect. The gardens provided the most beautiful backdrop for our ceremony.',
        images: [venue1]
      },
      {
        id: 2,
        user: 'Meera Patel',
        rating: 4,
        date: '2024-01-05',
        comment: 'Beautiful venue with excellent service. The catering was delicious and the decorations were exactly what we envisioned. Only minor issue was with parking during peak hours.',
        images: []
      },
      {
        id: 3,
        user: 'Rohit & Sneha',
        rating: 5,
        date: '2023-12-20',
        comment: 'Our dream wedding came true at Garden Paradise. The venue manager was incredibly helpful throughout the planning process. Highly recommended for anyone looking for an elegant outdoor wedding venue.',
        images: [venue2, venue3]
      }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % venue.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + venue.images.length) % venue.images.length);
  };

  const averageRating = venue.reviews.reduce((acc, review) => acc + review.rating, 0) / venue.reviews.length;

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-card sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/venues">
                <Button variant="ghost" size="sm" className="min-h-[44px]">
                  <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Back to Venues</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6 hidden sm:block" />
              <Link to="/" className="flex items-center space-x-2">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                <span className="text-lg sm:text-xl font-display font-bold text-primary">VenueBook</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button variant="outline" size="sm" className="min-h-[44px]">
                <Share2 className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Share</span>
              </Button>
              <Button variant="outline" size="sm" className="min-h-[44px]">
                <Heart className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Save</span>
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Image Gallery */}
            <Card className="card-elegant overflow-hidden">
              <div className="relative aspect-[16/9]">
                <img 
                  src={venue.images[currentImageIndex]} 
                  alt={`${venue.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {venue.images.length}
                </div>
              </div>

                {/* Thumbnail Strip */}
              <div className="p-3 sm:p-4">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {venue.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'border-accent shadow-md' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Venue Information */}
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold text-primary mb-2">
                      {venue.name}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{venue.location}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 star-filled fill-current" />
                        <span className="font-semibold">{venue.rating}</span>
                        <span className="text-muted-foreground">({venue.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{venue.capacity} guests</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-0">
                    Verified
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {venue.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-display font-semibold text-primary">
                  Amenities & Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {venue.amenities.map((amenity, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-2 sm:space-x-3 p-3 rounded-lg border ${
                        amenity.available 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <amenity.icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${
                        amenity.available ? 'text-green-600' : 'text-gray-400'
                      }`} />
                      <span className={`text-xs sm:text-sm flex-1 ${
                        amenity.available ? 'text-green-800' : 'text-gray-500'
                      }`}>
                        {amenity.name}
                      </span>
                      {amenity.available ? (
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-display font-semibold text-primary">
                  Pricing & Packages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Base Package</h4>
                  <div className="bg-gradient-gold p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-white">Starting from</span>
                      <span className="text-2xl font-bold text-white">{venue.pricing.basePrice}</span>
                    </div>
                    <p className="text-white/90 text-sm">+ {venue.pricing.pricePerGuest} per additional guest</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Included Services</h4>
                  <ul className="space-y-2">
                    {venue.pricing.includedServices.map((service, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Additional Services</h4>
                  <div className="space-y-2">
                    {venue.pricing.additionalServices.map((service, index) => (
                      <div key={index} className="flex items-center justify-between text-sm border border-border rounded-lg p-3">
                        <span>{service.name}</span>
                        <span className="font-medium text-accent">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-display font-semibold text-primary">
                  Reviews & Ratings
                </CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-6 w-6 star-filled fill-current" />
                    <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
                  </div>
                  <div className="text-muted-foreground">
                    Based on {venue.reviews.length} reviews
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {venue.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-secondary text-white font-semibold">
                              {review.user.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h5 className="font-semibold text-primary">{review.user}</h5>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating 
                                        ? 'star-filled fill-current' 
                                        : 'star-empty'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{review.comment}</p>
                      {review.images.length > 0 && (
                        <div className="flex gap-2">
                          {review.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Review image ${index + 1}`}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <Card className="card-elegant lg:sticky lg:top-24">
              <CardHeader>
                <CardTitle className="text-xl font-display font-semibold text-primary">
                  Check Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="event-date">Event Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="event-date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guest-count">Number of Guests</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="guest-count"
                        placeholder="Enter guest count"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="reception">Reception</SelectItem>
                        <SelectItem value="engagement">Engagement</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="btn-hero w-full">
                  Check Availability
                </Button>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Contact Venue Owner</h4>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-secondary text-white font-semibold">
                        {venue.owner.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h5 className="font-semibold text-primary">{venue.owner.name}</h5>
                      <p className="text-sm text-muted-foreground">
                        Typically responds in {venue.owner.responseTime}
                      </p>
                    </div>
                    {venue.owner.verified && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      {venue.owner.phone}
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Send Inquiry</h4>
                  <Textarea 
                    placeholder="Tell the venue owner about your event requirements..."
                    className="min-h-[100px]"
                  />
                  <Button className="btn-elegant w-full">
                    Send Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;