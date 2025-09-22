import { Button } from "@/components/ui/button";
import BackgroundVideo from "@/components/BackgroundVideo";
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  
  const navigateToBooking = () => {
    navigate('/BookNow');
  };

  return (
    <div className="min-h-screen bg-white font-geologica">
      {/* Header - Exact Figma Implementation */}
      <header className="w-full h-24 px-4 lg:px-7">
        {/* Mobile Header */}
        <div className="flex justify-between items-center w-full h-full lg:hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/16c60ddb5503e208873fd3f4b63677235bd61e6a?width=284"
            alt="Luxe Locks"
            className="w-32 h-4"
          />
          <Button 
            onClick={navigateToBooking}
            className="w-36 h-10 bg-brand hover:bg-brand-600 rounded-2xl flex items-center justify-center px-3 transition-all duration-300 hover:scale-105"
          >
            <span className="text-brand-50 font-geologica text-sm font-semibold mr-2">Book Now!!</span>
            <svg className="w-3 h-3" viewBox="0 0 18 15" fill="none">
              <path d="M17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.79289L11.3431 0.428932C10.9526 0.0384077 10.3195 0.0384077 9.92893 0.428932C9.53841 0.819456 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM0 7.5L1.21472e-08 8.5L17 8.5L17 7.5L17 6.5L-1.21472e-08 6.5L0 7.5Z" fill="white"/>
            </svg>
          </Button>
        </div>

        {/* Desktop Header - Exact Figma */}
        <div className="hidden lg:flex justify-center items-center gap-64 w-full h-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/16c60ddb5503e208873fd3f4b63677235bd61e6a?width=284"
            alt="Luxe Locks"
            className="w-36 h-5"
          />

          <nav className="flex items-center gap-6">
            <span className="text-black font-geologica text-lg font-semibold">Home</span>
            <span className="text-gray-400 font-geologica text-lg font-light">About</span>
            <span className="text-gray-400 font-geologica text-lg font-light">Services</span>
            <span className="text-gray-400 font-geologica text-lg font-light">Contact us</span>
            <span className="text-gray-400 font-geologica text-lg font-light">Shop</span>
            <svg className="w-6 h-1 ml-3 -mt-1" viewBox="0 0 27 3" fill="none">
              <path d="M2 1.5H25" stroke="#FD464E" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </nav>

          <div className="relative">
            <Button 
              onClick={navigateToBooking}
              className="w-39 h-11 bg-brand hover:bg-brand-600 rounded-2xl flex items-center justify-center px-4 transition-all duration-300 hover:scale-105"
            >
              <span className="text-brand-50 font-geologica text-lg font-semibold mr-2">Book Now!!</span>
              <svg className="w-4 h-4" viewBox="0 0 18 15" fill="none">
                <path d="M17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.79289L11.3431 0.428932C10.9526 0.0384077 10.3195 0.0384077 9.92893 0.428932C9.53841 0.819456 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM0 7.5L1.21472e-08 8.5L17 8.5L17 7.5L17 6.5L-1.21472e-08 6.5L0 7.5Z" fill="white"/>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section (BODY) - With Background Video Only */}
      <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden" style={{background: 'transparent'}}>
        
        {/* Background Video */}
        <BackgroundVideo 
          src="/video/saloon.webm"
          overlayOpacity={0.3}
        />

        <div className="relative z-10 max-w-4xl px-4 lg:px-20 video-content">
          {/* Confidence badge */}
          <div className="inline-block bg-brand/35 rounded-2xl px-4 lg:px-7 py-2 mb-6 lg:mb-12">
            <span className="text-gray-200 font-geologica text-sm lg:text-base font-normal" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>CONFIDENCE DELIVERED HOME.</span>
          </div>

          {/* Main heading */}
          <h1 className="text-gray-100 font-geologica text-3xl lg:text-6xl font-bold leading-tight mb-6 lg:mb-8 max-w-4xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'}}>
            We're here to make every day your good hair day.
          </h1>

          {/* Description text */}
          <p className="text-gray-200 font-inter text-base lg:text-xl font-medium leading-relaxed mb-8 lg:mb-12 max-w-2xl" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)'}}>
            Our compassionate stylists bring patience, understanding, and years of experience to every appointment. From simple trims to complete style refreshes, we ensure comfort, safety, and dignity throughout the process. Because beautiful hair and a confident smile should always be within reach.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <Button 
              onClick={navigateToBooking}
              className="bg-brand hover:bg-brand-600 text-brand-50 font-geologica text-base lg:text-lg font-semibold px-6 lg:px-8 py-3 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[180px] h-[50px]"
            >
              Book Now!!
            </Button>
            <Button 
              variant="outline"
              className="border border-brand text-brand font-geologica text-base lg:text-lg font-semibold px-6 lg:px-8 py-3 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-brand hover:text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[180px] h-[50px]"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="h-32 lg:h-36 bg-white flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 gap-4">
        <h2 className="text-black font-geologica text-xl lg:text-2xl font-bold">FOLLOW US</h2>
        
        <div className="flex items-center gap-6 lg:gap-8">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7dbfda116818f351d24d0e386f870ccbde35758b?width=408" 
            alt="Instagram"
            className="w-32 lg:w-48 h-auto"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/6ce40a0c797b75d00e99a3d9f885e026e4e59951?width=282" 
            alt="YouTube"
            className="w-24 lg:w-32 h-auto"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/99c8be2e85639871413e2d6468990004bb3f8c36?width=382" 
            alt="Twitter"
            className="w-32 lg:w-48 h-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 py-16 lg:py-28 px-4 lg:px-20">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/157e1f32755c9f2ba8f3a0b042b5c1f29caef620?width=834" 
          alt="Hair styling service"
          className="w-full lg:w-96 xl:w-[420px] h-auto rounded-3xl"
        />
        
        <div className="max-w-3xl">
          <span className="text-brand font-geologica text-lg font-medium">About us</span>
          <h2 className="text-black font-geologica text-3xl lg:text-4xl font-bold mt-4 mb-6">
            Personalized Hair Care, Wherever You Are
          </h2>
          <p className="text-black font-inter text-lg lg:text-xl font-medium leading-relaxed mb-8">
            Specializing in care for seniors and individuals with disabilities, we understand the importance of patience, compassion, and dignity. Our experienced stylists take the time to listen, ensuring every cut and style is tailored to your needs and preferences. Whether it's a simple trim, a refreshing new style, or just a friendly chat while we work, our goal is to make every appointment a positive, uplifting experience. With us, it's more than just a haircut it's care, comfort, and confidence delivered right to your door.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-brand font-geologica text-lg font-medium">View More</span>
            <svg className="w-4 h-4" viewBox="0 0 18 16" fill="none">
              <path d="M17.7071 8.54292C18.0976 8.1524 18.0976 7.51923 17.7071 7.12871L11.3431 0.764748C10.9526 0.374223 10.3195 0.374223 9.92893 0.764748C9.53841 1.15527 9.53841 1.78844 9.92893 2.17896L15.5858 7.83582L9.92893 13.4927C9.53841 13.8832 9.53841 14.5164 9.92893 14.9069C10.3195 15.2974 10.9526 15.2974 11.3431 14.9069L17.7071 8.54292ZM0 7.83582V8.83582H17V7.83582V6.83582H0V7.83582Z" fill="black"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Hair Services Section */}
      <section className="relative py-16 lg:py-20 bg-cover bg-center" style={{backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/27b0e87bc517da08ef73be98606d8f448c98e68a?width=2880)'}}>
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-brand font-geologica text-lg font-medium">Our Services</span>
          <h2 className="text-black font-geologica text-3xl lg:text-4xl font-bold mt-4">Hair Services</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 px-4 lg:px-20">
          <div className="flex flex-col items-center group">
            <div className="relative overflow-hidden rounded-3xl mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/4048d766abb7a5d4a9704c659a02eb8388793098?width=532" 
                alt="Hair Extension"
                className="w-full max-w-xs lg:max-w-sm h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-geologica text-lg font-semibold">Learn More</span>
              </div>
            </div>
            <Button variant="outline" className="border-brand text-brand font-geologica text-lg bg-white rounded-2xl shadow-lg px-8 py-3 hover:bg-brand hover:text-white transition-all duration-300 transform hover:scale-105">
              Hair Extension
            </Button>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative overflow-hidden rounded-3xl mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/754be3fa4e10c2181b9d077d60cc56bc8e9bb5bb?width=532" 
                alt="Cuts & Colors"
                className="w-full max-w-xs lg:max-w-sm h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-geologica text-lg font-semibold">Learn More</span>
              </div>
            </div>
            <Button variant="outline" className="border-brand text-brand font-geologica text-lg bg-white rounded-2xl shadow-lg px-8 py-3 hover:bg-brand hover:text-white transition-all duration-300 transform hover:scale-105">
              Cuts & Colors
            </Button>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative overflow-hidden rounded-3xl mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/449a11c37969890079606937a2c0af9fe52ba9e4?width=532" 
                alt="Keratin Treatment"
                className="w-full max-w-xs lg:max-w-sm h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-geologica text-lg font-semibold">Learn More</span>
              </div>
            </div>
            <Button variant="outline" className="border-brand text-brand font-geologica text-lg bg-white rounded-2xl shadow-lg px-8 py-3 hover:bg-brand hover:text-white transition-all duration-300 transform hover:scale-105">
              Keratin Treatment
            </Button>
          </div>
        </div>
      </section>

      {/* Permanent Make-Up Services Section */}
      <section className="relative py-16 lg:py-20 bg-cover bg-center" style={{backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/bee1c45a96a01ed06f0d471706afc160ebe9cae8?width=2880)'}}>
        <h2 className="text-black font-geologica text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16">
          Permanent Make-Up Services
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 px-4 lg:px-20">
          <div className="flex flex-col items-center group">
            <div className="relative overflow-hidden rounded-3xl mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2db01d27979261b86a956d425b80ed1f62c0c436?width=532" 
                alt="Powder bow"
                className="w-full max-w-xs lg:max-w-sm h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-geologica text-lg font-semibold">Learn More</span>
              </div>
            </div>
            <Button variant="outline" className="border-brand text-brand font-geologica text-lg bg-white rounded-2xl shadow-lg px-8 py-3 hover:bg-brand hover:text-white transition-all duration-300 transform hover:scale-105">
              Powder Brow
            </Button>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative overflow-hidden rounded-3xl mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7464ae93eb999f8bc7a534672fceb12526c3ddff?width=532" 
                alt="Scalp pigmentation"
                className="w-full max-w-xs lg:max-w-sm h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-geologica text-lg font-semibold">Learn More</span>
              </div>
            </div>
            <Button variant="outline" className="border-brand text-brand font-geologica text-lg bg-white rounded-2xl shadow-lg px-8 py-3 hover:bg-brand hover:text-white transition-all duration-300 transform hover:scale-105">
              Scalp Pigmentation
            </Button>
          </div>

          <div className="flex flex-col items-center group">
            <div className="relative overflow-hidden rounded-3xl mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/604457f058e981ab754900d88c4176d736e16819?width=532" 
                alt="Lip blushing"
                className="w-full max-w-xs lg:max-w-sm h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-geologica text-lg font-semibold">Learn More</span>
              </div>
            </div>
            <Button variant="outline" className="border-brand text-brand font-geologica text-lg bg-white rounded-2xl shadow-lg px-8 py-3 hover:bg-brand hover:text-white transition-all duration-300 transform hover:scale-105">
              Lip Blushing
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-brand font-geologica text-lg font-medium">Choose us</span>
          <h2 className="text-black font-geologica text-3xl lg:text-4xl font-bold mt-4">Why Choose us ?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl p-8 flex flex-col items-center justify-center h-48 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
            <span className="text-brand font-geologica text-5xl lg:text-6xl font-bold transition-all duration-300 group-hover:scale-110">3+</span>
            <span className="text-black font-geologica text-base font-bold mt-4 text-center">Years of Experience</span>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl p-8 flex flex-col items-center justify-center h-48 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
            <span className="text-purple-500 font-geologica text-4xl lg:text-5xl font-bold transition-all duration-300 group-hover:scale-110">120+</span>
            <span className="text-black font-geologica text-base font-bold mt-4 text-center">Clients</span>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl p-8 flex flex-col items-center justify-center h-48 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
            <span className="text-green-400 font-geologica text-4xl lg:text-5xl font-bold transition-all duration-300 group-hover:scale-110">24/7</span>
            <span className="text-black font-geologica text-base font-bold mt-4 text-center">Support</span>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl p-8 flex flex-col items-center justify-center h-48 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
            <span className="text-blue-300 font-geologica text-4xl lg:text-5xl font-bold transition-all duration-300 group-hover:scale-110">10+</span>
            <span className="text-black font-geologica text-base font-bold mt-4 text-center">Services</span>
          </div>
        </div>
      </section>

      {/* Instagram Section - Exact Figma Layout */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-brand font-geologica text-lg font-medium">Our Services</span>
          <h2 className="text-black font-geologica text-3xl lg:text-4xl font-bold mt-4">Instagram</h2>
        </div>

        {/* Mobile Layout - Enhanced with Interactions */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          <div className="relative group overflow-hidden rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/698d53ae28ce523726f66350f7e0ce9ee9eac755?width=840"
              alt="Hair styling transformation - Before and after"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">1.2k</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/df184181011d2843304443933f6b6491b7594de3?width=804"
              alt="Hair extension styling process"
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">856</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e8a7fd0cd42ae05a3b6f8056b3fcca49d620cc90?width=644"
              alt="Color treatment results"
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">943</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51263a852a6ad28dd9d2d7e6b455c31bd5f25922?width=840"
              alt="Keratin treatment before and after"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">1.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Enhanced with Interactivity */}
        <div className="hidden lg:block relative w-full max-w-[1180px] mx-auto h-[624px] group">
          {/* Large image - left top */}
          <div className="absolute left-0 top-3 w-[420px] h-[320px] group/item overflow-hidden rounded-[32px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/698d53ae28ce523726f66350f7e0ce9ee9eac755?width=840"
              alt="Hair transformation showcase"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 opacity-0 group-hover/item:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">1.2k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medium image - center */}
          <div className="absolute left-[438px] top-[115px] w-[402px] h-[297px] group/item overflow-hidden rounded-[25px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/df184181011d2843304443933f6b6491b7594de3?width=804"
              alt="Professional hair styling process"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 opacity-0 group-hover/item:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">856</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large image - left bottom */}
          <div className="absolute left-0 top-[361px] w-[420px] h-[263px] group/item overflow-hidden rounded-[23px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51263a852a6ad28dd9d2d7e6b455c31bd5f25922?width=840"
              alt="Hair extension results"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 opacity-0 group-hover/item:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">1.5k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small image - center bottom */}
          <div className="absolute left-[438px] top-[432px] w-[320px] h-[192px] group/item overflow-hidden rounded-[20px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ebde176a5d52cd14e2c35dcd20d34a050cb8603a?width=640"
              alt="Hair color transformation"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 opacity-0 group-hover/item:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">943</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right top image */}
          <div className="absolute left-[858px] top-3 w-[322px] h-[192px] group/item overflow-hidden rounded-[20px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e8a7fd0cd42ae05a3b6f8056b3fcca49d620cc90?width=644"
              alt="Keratin treatment results"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 opacity-0 group-hover/item:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">724</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right middle image */}
          <div className="absolute left-[858px] top-[221px] w-[322px] h-[192px] group/item overflow-hidden rounded-[20px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d0ae5a2e7700a1cbb15bb013669924c133d332b6?width=644"
              alt="Hair styling technique"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 opacity-0 group-hover/item:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">1.1k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right bottom image */}
          <div className="absolute left-[778px] top-[432px] w-[402px] h-[192px] group/item overflow-hidden rounded-[20px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/aabf9a3536427e3d66354b59f1b869026cd678e9?width=804"
              alt="Client transformation story"
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 opacity-0 group-hover/item:opacity-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">@luxelocks_salon</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">2.3k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced VIEW Button */}
          <div className="absolute left-[721px] top-[55px] w-[134px] h-[48px] z-20">
            <div className="w-full h-full bg-brand hover:bg-brand-600 rounded-[24px] flex items-center justify-center shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer group/btn">
              <span className="text-white font-inter text-[15px] font-bold tracking-[0.75px] mr-2 group-hover/btn:mr-3 transition-all duration-300">VIEW ALL</span>
              <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <h2 className="text-black font-geologica text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16">How It Works</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-12 lg:mb-16 max-w-6xl mx-auto">
          <div className="bg-salon-blue rounded-3xl shadow-lg hover:shadow-xl p-8 flex flex-col items-center justify-center h-80 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
            <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f4e4f1fa18895fc355defc7513db217b927f4b3f?width=210" 
                alt="Choose services"
                className="w-24 h-24 mb-6"
              />
            </div>
            <h3 className="text-salon-blueText font-geologica text-lg font-medium mb-4 text-center transition-colors duration-300 group-hover:text-blue-800">CHOOSE YOUR SERVICES</h3>
            <p className="text-salon-blueText font-geologica text-sm font-medium text-center leading-relaxed">
              Choose from our array of services. From cuts to hair extensions and treatments, we've got you covered.
            </p>
          </div>

          <div className="bg-salon-green rounded-3xl shadow-lg hover:shadow-xl p-8 flex flex-col items-center justify-center h-80 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
            <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/27ed273b7b1f5386b394d82ca4e5c624b5e97ac8?width=202" 
                alt="Choose date and time"
                className="w-24 h-24 mb-6"
              />
            </div>
            <h3 className="text-salon-greenText font-geologica text-lg font-medium mb-4 text-center transition-colors duration-300 group-hover:text-green-800">CHOOSE DATE & TIME</h3>
            <p className="text-salon-greenText font-geologica text-sm font-medium text-center leading-relaxed">
              Conveniently book your appointment online for a date and time that works for you.
            </p>
          </div>

          <div className="bg-salon-purple rounded-3xl shadow-lg hover:shadow-xl p-8 flex flex-col items-center justify-center h-80 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
            <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/0c6987ef4835929aaaf71d3d8df2c39ff4a73545?width=198" 
                alt="Relax"
                className="w-24 h-24 mb-6"
              />
            </div>
            <h3 className="text-salon-purpleText font-geologica text-lg font-medium mb-4 text-center transition-colors duration-300 group-hover:text-purple-800">SIT BACK AND RELAX!</h3>
            <p className="text-salon-purpleText font-geologica text-sm font-medium text-center leading-relaxed">
              Christina arrives to your location for your exclusive, customized salon experience!
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={navigateToBooking}
            className="bg-brand hover:bg-brand-600 text-brand-50 font-geologica text-lg font-semibold px-8 py-3 rounded-full shadow-lg"
          >
            Book Now!!
          </Button>
        </div>
      </section>

      {/* Client Testimonials Section - Enhanced with Photos */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-brand font-geologica text-lg font-medium animate-pulse">Our Clients</span>
          <h2 className="text-black font-geologica text-3xl lg:text-4xl font-bold mt-4 text-center">Loved By All</h2>
        </div>

        {/* Mobile Layout - Enhanced */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex items-start">
            <img
              src="/images/1.webp"
              alt="Christina"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0 mr-4 border-2 border-brand/20"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-lg font-bold mb-2">Christina</h4>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-sm font-medium leading-relaxed">
                I can't tell you how many compliments I received. I have had extensions put in four times since then. I have naturally thin, wavy hair, and the extensions give me so much volume. I absolutely LOVE my hair!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex items-start">
            <img
              src="/images/2.webp"
              alt="Samantha"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0 mr-4 border-2 border-brand/20"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-lg font-bold mb-2">Samantha</h4>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-sm font-medium leading-relaxed">
                These extensions have completely transformed my look! I've always struggled with flat hair, but now it feels so full and bouncy. People keep asking me where I got my hair done!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex items-start">
            <img
              src="/images/3.webp"
              alt="Mary"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0 mr-4 border-2 border-brand/20"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-lg font-bold mb-2">Mary</h4>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-sm font-medium leading-relaxed">
                I've tried so many products before, but nothing gave me this much confidence. My hair feels thicker, healthier, and so natural with the extensions. I can't stop looking in the mirror!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex items-start">
            <img
              src="/images/4.jpg"
              alt="Grace"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0 mr-4 border-2 border-brand/20"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-lg font-bold mb-2">Grace</h4>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-sm font-medium leading-relaxed">
                It's honestly the best decision I've made for my hair. Styling has become so easy, and the volume is unbelievable. I get compliments every single day!
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Enhanced Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-6xl lg:mx-auto">
          {/* Christina Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex items-start group">
            <img
              src="/images/1.webp"
              alt="Christina"
              className="w-24 h-24 rounded-full object-cover flex-shrink-0 mr-6 border-3 border-brand/30 group-hover:border-brand transition-colors duration-300"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-xl font-bold mb-3">Christina</h4>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-base font-medium leading-relaxed">
                I can't tell you how many compliments I received. I have had extensions put in four times since then. I have naturally thin, wavy hair, and the extensions give me so much volume. I absolutely LOVE my hair!
              </p>
            </div>
          </div>

          {/* Samantha Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex items-start group">
            <img
              src="/images/2.webp"
              alt="Samantha"
              className="w-24 h-24 rounded-full object-cover flex-shrink-0 mr-6 border-3 border-brand/30 group-hover:border-brand transition-colors duration-300"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-xl font-bold mb-3">Samantha</h4>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-base font-medium leading-relaxed">
                These extensions have completely transformed my look! I've always struggled with flat hair, but now it feels so full and bouncy. People keep asking me where I got my hair done!
              </p>
            </div>
          </div>

          {/* Mary Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex items-start group">
            <img
              src="/images/3.webp"
              alt="Mary"
              className="w-24 h-24 rounded-full object-cover flex-shrink-0 mr-6 border-3 border-brand/30 group-hover:border-brand transition-colors duration-300"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-xl font-bold mb-3">Mary</h4>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-base font-medium leading-relaxed">
                I've tried so many products before, but nothing gave me this much confidence. My hair feels thicker, healthier, and so natural with the extensions. I can't stop looking in the mirror!
              </p>
            </div>
          </div>

          {/* Grace Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex items-start group">
            <img
              src="/images/4.jpg"
              alt="Grace"
              className="w-24 h-24 rounded-full object-cover flex-shrink-0 mr-6 border-3 border-brand/30 group-hover:border-brand transition-colors duration-300"
            />
            <div className="flex-1">
              <h4 className="text-black font-geologica text-xl font-bold mb-3">Grace</h4>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-geologica text-base font-medium leading-relaxed">
                It's honestly the best decision I've made for my hair. Styling has become so easy, and the volume is unbelievable. I get compliments every single day!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="mx-4 lg:mx-20 mb-16 lg:mb-20">
        <div className="bg-gray-800 relative overflow-hidden rounded-3xl shadow-xl">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a50f6568c71e3e01e035932a9a5637524f25ac1d?width=2400" 
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/30"></div>
          <div className="relative z-10 py-14 lg:py-18 px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <div className="text-center lg:text-left flex-1">
                <span className="text-brand font-geologica text-lg lg:text-xl font-medium block mb-3">Connect with us</span>
                <h2 className="text-white font-geologica text-2xl lg:text-4xl font-bold leading-tight" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.6)'}}>
                  Book Your appointment with us now!!
                </h2>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  onClick={navigateToBooking}
                  className="bg-brand hover:bg-brand-600 text-brand-50 font-geologica text-lg font-semibold px-10 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[180px]"
                >
                  Book Now!!
                </Button>
              </div>
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
