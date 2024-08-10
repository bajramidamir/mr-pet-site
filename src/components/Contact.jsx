import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Kontaktirajte Nas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Telefon */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src="/images/phone.svg"
              alt="Telefon"
              className="w-12 h-12 text-primary mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="text-neutral text-lg">+387 61 123 456</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src="/images/mail.svg"
              alt="Email"
              className="w-12 h-12 text-primary mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-neutral text-lg">info@example.com</p>
          </div>

          {/* Lokacija */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src="/images/location.svg"
              alt="Lokacija"
              className="w-12 h-12 text-primary mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Lokacija</h3>
            <p className="text-neutral text-lg">1234 Ulica, Grad, Zemlja</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
