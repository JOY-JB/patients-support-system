const Contact = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.495850675771!2d91.80470027591389!3d22.372657240267696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd85f4dba6a6b%3A0x812e380dbc9fee53!2sEast%20Delta%20University!5e0!3m2!1sen!2sbd!4v1692384890935!5m2!1sen!2sbd"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Have questions or need assistance? Contact us anytime.
            </p>
            <p className="text-gray-600">
              Email:{" "}
              <a href="mailto:info@example.com">joybarua0058@gmail.com</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:+123456789">+1 (234) 567-89</a>
            </p>
            <p className="text-gray-600">
              Address: 123 Medical Avenue, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
