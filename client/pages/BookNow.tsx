import { useState } from 'react';
import { Button } from "@/components/ui/button";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'Hair Extension',
    'Cuts & Colors',
    'Keratin Treatment',
    'Powder Brow',
    'Scalp Pigmentation',
    'Lip Blushing',
    'Full Styling Package',
    'Consultation'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        location: '',
        specialRequests: ''
      });
    }, 3000);
  };

  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to book an appointment for beauty services. Please let me know your availability.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@luxelocks.com?subject=Appointment Booking Request';
  };

  return (
    <div className="min-h-screen bg-white font-geologica">
      {/* Header */}
      <header className="w-full h-24 px-4 lg:px-7 bg-white relative z-20">
        <div className="flex justify-between items-center w-full h-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/16c60ddb5503e208873fd3f4b63677235bd61e6a?width=284"
            alt="Luxe Locks"
            className="w-32 h-4 lg:w-36 lg:h-5"
          />
          <Button 
            onClick={() => window.history.back()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-geologica text-sm lg:text-base font-medium px-4 lg:px-6 py-2 rounded-xl"
          >
            ← Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden">
        
        {/* Background Video */}
        <BackgroundVideo 
          src="/video/saloon.webm"
          overlayOpacity={0.4}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-brand/35 rounded-2xl px-4 lg:px-7 py-2 mb-6">
                <span className="text-gray-200 font-geologica text-sm lg:text-base font-normal" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>
                  BOOK YOUR APPOINTMENT
                </span>
              </div>
              
              <h1 className="text-gray-100 font-geologica text-3xl lg:text-5xl font-bold leading-tight mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'}}>
                Ready for Your Perfect Hair Day?
              </h1>
              
              <p className="text-gray-200 font-inter text-lg lg:text-xl font-medium leading-relaxed mb-8" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)'}}>
                Book your personalized beauty experience with our expert stylists. We bring professional salon services directly to your home.
              </p>

              {/* Quick Contact Options */}
              <div className="space-y-4 mb-8">
                <h3 className="text-gray-200 font-geologica text-lg font-semibold mb-4" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
                  Need Immediate Assistance?
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleCall}
                    className="bg-green-600 hover:bg-green-700 text-white font-geologica text-base font-semibold px-6 py-3 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105"
                  >
                    📞 Call Now
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white font-geologica text-base font-semibold px-6 py-3 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105"
                  >
                    💬 WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={handleEmail}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-geologica text-base font-semibold px-6 py-3 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105"
                  >
                    ✉️ Email Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10">
              {showSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-geologica font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 font-inter">We'll contact you shortly to confirm your appointment details.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-geologica font-bold text-gray-800 mb-2">
                      Book Your Appointment
                    </h2>
                    <p className="text-gray-600 font-inter">Fill out the form below and we'll get back to you within 2 hours</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-geologica font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-geologica font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-geologica font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-gray-700 font-geologica font-medium mb-2">Select Service *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter"
                      >
                        <option value="">Choose a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-geologica font-medium mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-geologica font-medium mb-2">Preferred Time *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-gray-700 font-geologica font-medium mb-2">Service Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter"
                        placeholder="Enter your address for home service"
                      />
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-gray-700 font-geologica font-medium mb-2">Special Requests</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-transparent font-inter resize-none"
                        placeholder="Any special requirements or preferences..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand hover:bg-brand-600 text-brand-50 font-geologica text-lg font-semibold py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Booking...
                        </div>
                      ) : (
                        'Book Appointment'
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-geologica font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 font-inter">We're here to help you look and feel your best</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-geologica font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 font-inter mb-4">Speak directly with our team</p>
              <Button 
                onClick={handleCall}
                className="bg-green-600 hover:bg-green-700 text-white font-geologica px-6 py-2 rounded-full"
              >
                (123) 456-7890
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-geologica font-bold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 font-inter mb-4">Quick and convenient messaging</p>
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-geologica px-6 py-2 rounded-full"
              >
                Message Us
              </Button>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-geologica font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 font-inter mb-4">Send us your inquiries</p>
              <Button 
                onClick={handleEmail}
                className="bg-blue-600 hover:bg-blue-700 text-white font-geologica px-6 py-2 rounded-full"
              >
                info@luxelocks.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-salon-pink py-16 lg:py-20 px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <div className="mb-6">
              <span className="text-gray-600 font-geologica text-base lg:text-lg font-medium block">
                © 2024 BEAUTY ON DEMAND<br/>
                ALL RIGHTS RESERVED
              </span>
            </div>
            <div className="mb-6">
              <span className="text-gray-600 font-geologica text-base lg:text-lg font-medium block">
                SERVING THE LOS ANGELES &<br/>
                ORANGE COUNTY AREAS
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-geologica text-base lg:text-lg font-medium">
                ​WEBSITE COURTESY OF MILL ST. CREATIVE
              </span>
            </div>
          </div>

          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/6266edb71380e1710b921be795650c889a2d9ee0?width=434" 
            alt="Luxe Locks Logo"
            className="w-48 lg:w-56 h-auto order-first lg:order-none"
          />

          <div className="text-left lg:text-right">
            <div className="space-y-4">
              <div className="text-gray-600 font-geologica text-base lg:text-lg font-medium">ABOUT</div>
              <div className="text-gray-600 font-geologica text-base lg:text-lg font-medium">JOIN OUR TEAM</div>
              <div className="text-gray-600 font-geologica text-base lg:text-lg font-medium">BOOK NOW</div>
              <div className="text-gray-600 font-geologica text-base lg:text-lg font-medium">CONTACT</div>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <div className="w-16 h-8 bg-black/50 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 32 33" fill="none">
                  <path d="M32.6182 16.3091C32.6182 7.30184 25.3164 0 16.3091 0C7.30184 0 0 7.30184 0 16.3091C0 24.4495 5.96401 31.1966 13.7608 32.4201V21.0235H9.61983V16.3091H13.7608V12.716C13.7608 8.62854 16.1957 6.37075 19.921 6.37075C21.7054 6.37075 23.5718 6.68929 23.5718 6.68929V10.7029H21.5152C19.4892 10.7029 18.8574 11.96 18.8574 13.2498V16.3091H23.3807L22.6576 21.0235H18.8574V32.4201C26.6542 31.1966 32.6182 24.4495 32.6182 16.3091Z" fill="black" fillOpacity="0.5"/>
                  <path d="M22.6576 21.0233L23.3806 16.309H18.8574V13.2497C18.8574 11.9599 19.4892 10.7027 21.5152 10.7027H23.5718V6.68914C23.5718 6.68914 21.7054 6.37061 19.921 6.37061C16.1957 6.37061 13.7608 8.62839 13.7608 12.7159V16.309H9.61981V21.0233H13.7608V32.4199C15.4494 32.6842 17.1688 32.6842 18.8574 32.4199V21.0233H22.6576Z" fill="white" fillOpacity="0.5"/>
                </svg>
              </div>
              <div className="w-16 h-8 bg-black/50 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white" fillOpacity="0.8"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
