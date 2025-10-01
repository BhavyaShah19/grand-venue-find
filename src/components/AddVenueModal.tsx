import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Car, 
  ChefHat, 
  Camera, 
  Music, 
  Wifi, 
  Star, 
  MapPin, 
  Upload, 
  X, 
  Plus, 
  Trash2 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

const venueTypes = ['Banquet Hall', 'Garden', 'Heritage', 'Villa', 'Luxury Hall', 'Farm House'];

const amenityOptions = [
  { name: 'Parking', icon: Car },
  { name: 'Catering', icon: ChefHat },
  { name: 'Photography', icon: Camera },
  { name: 'Music', icon: Music },
  { name: 'AC', icon: Wifi },
  { name: 'Heritage', icon: Star },
  { name: 'Sea View', icon: MapPin },
  { name: 'Valet Parking', icon: Car },
  { name: 'Premium Catering', icon: ChefHat },
  { name: 'Farm Stay', icon: MapPin },
  { name: 'Outdoor', icon: MapPin }
];

const venueFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  location: z.string().min(5, 'Location must be at least 5 characters'),
  venueType: z.string().min(1, 'Please select a venue type'),
  capacity: z.string().regex(/^\d+-\d+$/, 'Format: 200-500'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  basePrice: z.string().min(1, 'Base price is required'),
  pricePerGuest: z.string().min(1, 'Price per guest is required'),
  amenities: z.array(z.string()).min(1, 'Select at least one amenity'),
  includedServices: z.array(z.string()),
  additionalServices: z.array(z.object({
    name: z.string(),
    price: z.string()
  }))
});

type VenueFormValues = z.infer<typeof venueFormSchema>;

interface AddVenueModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddVenueModal({ open, onOpenChange }: AddVenueModalProps) {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [includedService, setIncludedService] = useState('');
  const [additionalServiceName, setAdditionalServiceName] = useState('');
  const [additionalServicePrice, setAdditionalServicePrice] = useState('');

  const form = useForm<VenueFormValues>({
    resolver: zodResolver(venueFormSchema),
    defaultValues: {
      name: '',
      location: '',
      venueType: '',
      capacity: '',
      description: '',
      basePrice: '',
      pricePerGuest: '',
      amenities: [],
      includedServices: [],
      additionalServices: []
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 5) {
      toast({
        title: 'Maximum 5 images allowed',
        variant: 'destructive'
      });
      return;
    }

    const newImages = [...images, ...files].slice(0, 5);
    setImages(newImages);

    const previews = newImages.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const addIncludedService = () => {
    if (includedService.trim()) {
      const current = form.getValues('includedServices');
      form.setValue('includedServices', [...current, includedService.trim()]);
      setIncludedService('');
    }
  };

  const removeIncludedService = (index: number) => {
    const current = form.getValues('includedServices');
    form.setValue('includedServices', current.filter((_, i) => i !== index));
  };

  const addAdditionalService = () => {
    if (additionalServiceName.trim() && additionalServicePrice.trim()) {
      const current = form.getValues('additionalServices');
      form.setValue('additionalServices', [
        ...current,
        { name: additionalServiceName.trim(), price: additionalServicePrice.trim() }
      ]);
      setAdditionalServiceName('');
      setAdditionalServicePrice('');
    }
  };

  const removeAdditionalService = (index: number) => {
    const current = form.getValues('additionalServices');
    form.setValue('additionalServices', current.filter((_, i) => i !== index));
  };

  const onSubmit = (data: VenueFormValues) => {
    if (images.length === 0) {
      toast({
        title: 'Please upload at least one image',
        variant: 'destructive'
      });
      return;
    }

    console.log('Form Data:', data);
    console.log('Images:', images);
    
    toast({
      title: 'Venue added successfully!',
      description: 'Your venue has been submitted for review.'
    });
    
    onOpenChange(false);
    form.reset();
    setImages([]);
    setImagePreviews([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-display font-bold">Add New Venue</DialogTitle>
          <DialogDescription>
            Fill in the details below to list your venue on our platform
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-120px)] px-6 pb-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Venue Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Garden Paradise Resort" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="venueType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Venue Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select venue type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {venueTypes.map(type => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location *</FormLabel>
                      <FormControl>
                        <Input placeholder="Andheri West, Mumbai, Maharashtra" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="capacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Guest Capacity *</FormLabel>
                      <FormControl>
                        <Input placeholder="200-500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your venue, its features, and what makes it special..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Images */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Venue Images</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label htmlFor="images" className="cursor-pointer">
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors">
                        <Upload className="h-4 w-4" />
                        <span>Upload Images</span>
                      </div>
                      <input
                        id="images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-sm text-muted-foreground">
                      {images.length}/5 images uploaded
                    </span>
                  </div>

                  {imagePreviews.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                          <img 
                            src={preview} 
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1 bg-destructive text-white rounded-full hover:bg-destructive/90"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Amenities *</h3>
                <FormField
                  control={form.control}
                  name="amenities"
                  render={() => (
                    <FormItem>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {amenityOptions.map((amenity) => (
                          <FormField
                            key={amenity.name}
                            control={form.control}
                            name="amenities"
                            render={({ field }) => {
                              const Icon = amenity.icon;
                              return (
                                <FormItem
                                  key={amenity.name}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(amenity.name)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, amenity.name])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== amenity.name
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal flex items-center gap-2 cursor-pointer">
                                    <Icon className="h-4 w-4 text-muted-foreground" />
                                    {amenity.name}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Pricing */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Pricing</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="basePrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Base Price *</FormLabel>
                        <FormControl>
                          <Input placeholder="₹2,50,000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pricePerGuest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price Per Guest *</FormLabel>
                        <FormControl>
                          <Input placeholder="₹1,200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Included Services */}
                <div className="space-y-3">
                  <FormLabel>Included Services</FormLabel>
                  <div className="flex gap-2">
                    <Input
                      placeholder="e.g., Venue decoration"
                      value={includedService}
                      onChange={(e) => setIncludedService(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addIncludedService())}
                    />
                    <Button type="button" onClick={addIncludedService} size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {form.watch('includedServices').length > 0 && (
                    <div className="space-y-2">
                      {form.watch('includedServices').map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                          <span className="text-sm">{service}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeIncludedService(index)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Additional Services */}
                <div className="space-y-3">
                  <FormLabel>Additional Services (Optional)</FormLabel>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Service name"
                      value={additionalServiceName}
                      onChange={(e) => setAdditionalServiceName(e.target.value)}
                      className="flex-1"
                    />
                    <Input
                      placeholder="Price"
                      value={additionalServicePrice}
                      onChange={(e) => setAdditionalServicePrice(e.target.value)}
                      className="w-32"
                    />
                    <Button type="button" onClick={addAdditionalService} size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {form.watch('additionalServices').length > 0 && (
                    <div className="space-y-2">
                      {form.watch('additionalServices').map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                          <div className="flex-1">
                            <span className="text-sm font-medium">{service.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">{service.price}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAdditionalService(index)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-secondary hover:bg-secondary/90">
                  Add Venue
                </Button>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
