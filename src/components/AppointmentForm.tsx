import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AppointmentFormProps {
  onClose: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Appointment booked:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-6">Book an Appointment</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="ortho">Orthodontics</option>
                    <option value="implant">Dental Implants</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                placeholder="Any specific requirements or concerns..."
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white"
              >
                Book Appointment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
