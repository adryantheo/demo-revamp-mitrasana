// ContactUs.jsx
import { useState } from 'react';
import backgroundImage from '../assets/static/contact_us_bg.jpg'; // Ensure you have this image in your assets folder

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row">
            {/* Contact Form Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-green-800 mb-8">Hubungi Kami</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Nama lengkap anda" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Masukan alamat email anda" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Handphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder="Masukan no handphone anda" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan anda</label>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Tuliskan pesan anda" 
                    rows="6" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-2 rounded-md transition-colors"
                  >
                    Kirim pesan
                  </button>
                </div>
              </form>
            </div>
            
            {/* Customer Service Image - Hidden on mobile, shown on medium screens and up */}
            {/* <div className="hidden md:block md:w-1/2 md:pl-12">
              <img 
                src="/customer-service.jpg" 
                alt="Customer Service Representative" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;