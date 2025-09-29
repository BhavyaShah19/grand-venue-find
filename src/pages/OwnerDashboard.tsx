import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  DollarSign, 
  Users, 
  Star,
  Edit,
  Eye,
  MoreHorizontal,
  MapPin,
  Camera,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';
import venue3 from '@/assets/venue-3.jpg';

const OwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const owner = {
    name: 'Rajesh Sharma',
    email: 'rajesh@example.com',
    phone: '+91 98765 43210',
    joinDate: '2023-06-15',
    verified: true
  };

  const stats = {
    totalListings: 3,
    totalBookings: 28,
    monthlyRevenue: 2850000,
    averageRating: 4.7
  };

  const venues = [
    {
      id: '1',
      name: 'Garden Paradise Resort',
      location: 'Andheri, Mumbai',
      status: 'Active',
      rating: 4.8,
      reviews: 124,
      bookings: 12,
      revenue: 1200000,
      image: venue1,
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      name: 'Royal Ballroom',
      location: 'Connaught Place, Delhi',
      status: 'Active',
      rating: 4.9,
      reviews: 89,
      bookings: 8,
      revenue: 950000,
      image: venue2,
      lastUpdated: '2024-01-12'
    },
    {
      id: '3',
      name: 'Heritage Manor',
      location: 'Pink City, Jaipur',
      status: 'Pending Review',
      rating: 4.7,
      reviews: 156,
      bookings: 8,
      revenue: 700000,
      image: venue3,
      lastUpdated: '2024-01-10'
    }
  ];

  const bookings = [
    {
      id: 'B001',
      venueName: 'Garden Paradise Resort',
      customerName: 'Priya & Arjun',
      eventDate: '2024-02-14',
      eventType: 'Wedding',
      guests: 350,
      amount: 425000,
      status: 'Confirmed',
      bookingDate: '2024-01-10'
    },
    {
      id: 'B002',
      venueName: 'Royal Ballroom',
      customerName: 'Sharma Family',
      eventDate: '2024-02-20',
      eventType: 'Anniversary',
      guests: 150,
      amount: 185000,
      status: 'Pending',
      bookingDate: '2024-01-12'
    },
    {
      id: 'B003',
      venueName: 'Heritage Manor',
      customerName: 'Meera Patel',
      eventDate: '2024-03-05',
      eventType: 'Birthday',
      guests: 80,
      amount: 125000,
      status: 'Confirmed',
      bookingDate: '2024-01-14'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      venueName: 'Garden Paradise Resort',
      customerName: 'Priya & Arjun',
      rating: 5,
      comment: 'Absolutely stunning venue! Perfect for our dream wedding.',
      date: '2024-01-15'
    },
    {
      id: 2,
      venueName: 'Royal Ballroom',
      customerName: 'Rohit Singh',
      rating: 4,
      comment: 'Great service and beautiful interiors. Highly recommended.',
      date: '2024-01-14'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'pending review': return 'bg-yellow-100 text-yellow-700';
      case 'inactive': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
      case 'pending review':
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Star className="h-8 w-8 text-secondary" />
                <span className="text-2xl font-display font-bold text-primary">VenueBook</span>
              </Link>
              <Badge variant="secondary" className="bg-secondary/10 text-accent border-0">
                Owner Dashboard
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="btn-hero">
                <Plus className="h-4 w-4 mr-2" />
                Add New Venue
              </Button>
              
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-secondary text-white font-semibold">
                    {owner.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-primary">{owner.name}</p>
                  <p className="text-xs text-muted-foreground">Venue Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
            Welcome back, {owner.name.split(' ')[0]}!
          </h1>
          <p className="text-muted-foreground">
            Manage your venue listings and track your business performance
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="card-elegant">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Listings
                  </CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalListings}</div>
                  <p className="text-xs text-muted-foreground">
                    +1 from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Bookings
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalBookings}</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Monthly Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">
                    ₹{(stats.monthlyRevenue / 100000).toFixed(1)}L
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Average Rating
                  </CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.averageRating}</div>
                  <p className="text-xs text-muted-foreground">
                    Based on 369 reviews
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-semibold text-primary">
                    Recent Bookings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h4 className="font-semibold text-primary">{booking.customerName}</h4>
                        <p className="text-sm text-muted-foreground">{booking.venueName}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.eventDate} • {booking.guests} guests
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">₹{(booking.amount / 100000).toFixed(1)}L</p>
                        <Badge 
                          variant="secondary" 
                          className={`${getStatusColor(booking.status)} border-0 text-xs`}
                        >
                          {getStatusIcon(booking.status)}
                          <span className="ml-1">{booking.status}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-semibold text-primary">
                    Recent Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-primary">{review.customerName}</h4>
                          <p className="text-sm text-muted-foreground">{review.venueName}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 star-filled fill-current" />
                          <span className="text-sm font-medium">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                      <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Listings Tab */}
          <TabsContent value="listings" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-2">My Venue Listings</h2>
                <p className="text-muted-foreground">Manage your venue properties and their details</p>
              </div>
              <Button className="btn-hero">
                <Plus className="h-4 w-4 mr-2" />
                Add New Venue
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search venues..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {venues.map((venue) => (
                <Card key={venue.id} className="card-venue">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-display font-semibold text-primary mb-1">
                          {venue.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{venue.location}</span>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Listing
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Camera className="h-4 w-4 mr-2" />
                            Manage Photos
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="secondary" 
                        className={`${getStatusColor(venue.status)} border-0`}
                      >
                        {getStatusIcon(venue.status)}
                        <span className="ml-1">{venue.status}</span>
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 star-filled fill-current" />
                        <span className="text-sm font-medium">{venue.rating}</span>
                        <span className="text-sm text-muted-foreground">({venue.reviews})</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Bookings</p>
                        <p className="font-semibold text-primary">{venue.bookings} this month</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Revenue</p>
                        <p className="font-semibold text-primary">₹{(venue.revenue / 100000).toFixed(1)}L</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Last updated: {venue.lastUpdated}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-2">Booking Management</h2>
              <p className="text-muted-foreground">Track and manage all your venue bookings</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search bookings..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-primary">Booking ID</th>
                        <th className="text-left p-4 font-semibold text-primary">Customer</th>
                        <th className="text-left p-4 font-semibold text-primary">Venue</th>
                        <th className="text-left p-4 font-semibold text-primary">Event Date</th>
                        <th className="text-left p-4 font-semibold text-primary">Guests</th>
                        <th className="text-left p-4 font-semibold text-primary">Amount</th>
                        <th className="text-left p-4 font-semibold text-primary">Status</th>
                        <th className="text-left p-4 font-semibold text-primary">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-border">
                          <td className="p-4 font-medium">{booking.id}</td>
                          <td className="p-4">
                            <div>
                              <p className="font-medium text-primary">{booking.customerName}</p>
                              <p className="text-sm text-muted-foreground">{booking.eventType}</p>
                            </div>
                          </td>
                          <td className="p-4 text-sm">{booking.venueName}</td>
                          <td className="p-4 text-sm">{booking.eventDate}</td>
                          <td className="p-4 text-sm">{booking.guests}</td>
                          <td className="p-4 font-medium">₹{(booking.amount / 100000).toFixed(1)}L</td>
                          <td className="p-4">
                            <Badge 
                              variant="secondary" 
                              className={`${getStatusColor(booking.status)} border-0`}
                            >
                              {getStatusIcon(booking.status)}
                              <span className="ml-1">{booking.status}</span>
                            </Badge>
                          </td>
                          <td className="p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                                <DropdownMenuItem>Update Status</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-2">Customer Reviews</h2>
              <p className="text-muted-foreground">View and respond to customer feedback</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="card-elegant text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stats.averageRating}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(stats.averageRating) 
                            ? 'star-filled fill-current' 
                            : 'star-empty'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </CardContent>
              </Card>

              <Card className="card-elegant text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">369</div>
                  <p className="text-sm text-muted-foreground">Total Reviews</p>
                </CardContent>
              </Card>

              <Card className="card-elegant text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {recentReviews.map((review) => (
                <Card key={review.id} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-secondary text-white font-semibold">
                            {review.customerName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-primary">{review.customerName}</h4>
                          <p className="text-sm text-muted-foreground">{review.venueName}</p>
                          <div className="flex items-center gap-1 mt-1">
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
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{review.comment}</p>
                    <Button variant="outline" size="sm">
                      Reply to Review
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-2">Booking Calendar</h2>
              <p className="text-muted-foreground">Manage availability and view upcoming events</p>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Calendar View</h3>
                  <p className="text-muted-foreground">
                    Interactive calendar feature coming soon. You'll be able to:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• View all bookings in calendar format</li>
                    <li>• Block dates for maintenance</li>
                    <li>• Set special pricing for peak dates</li>
                    <li>• Quick booking management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OwnerDashboard;