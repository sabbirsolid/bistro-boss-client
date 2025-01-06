const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold">Your Brand Name</h2>
          <p class="text-sm text-gray-400">
            Delivering quality services with a passion for excellence.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 class="font-semibold text-lg mb-3">Quick Links</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-3">Contact Us</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                Email:{" "}
                <a href="mailto:info@yourbrand.com" class="hover:text-white">
                  info@yourbrand.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" class="hover:text-white">
                  +1 234 567 890
                </a>
              </li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-3">Follow Us</h3>
            <div class="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                class="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.586 0 0 .586 0 1.308v21.384C0 23.414.586 24 1.325 24H12v-9H9v-4h3V7c0-2.8 2-4 4.667-4h3v4h-2c-.9 0-1 .5-1 1v3h3l-1 4h-2v9h5.675C23.414 24 24 23.414 24 22.692V1.308C24 .586 23.414 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                class="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482C7.69 8.094 4.067 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.214 2.188 4.098a4.904 4.904 0 01-2.229-.616v.061a4.916 4.916 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.922 4.922 0 004.604 3.42A9.868 9.868 0 010 21.543a13.924 13.924 0 007.548 2.213c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.436-.014-.653A10.253 10.253 0 0024 4.557z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                class="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24H22.23C23.206 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.23 0zM7.12 20.451H3.557V9.184H7.12v11.267zM5.337 7.807c-1.144 0-1.936-.783-1.936-1.765 0-.997.81-1.764 2.013-1.764s1.936.767 1.949 1.764c.001.982-.792 1.765-2.026 1.765zm14.635 12.644h-3.561v-5.503c0-1.388-.496-2.334-1.74-2.334-.948 0-1.514.643-1.764 1.263-.091.224-.114.537-.114.849v5.725h-3.558s.047-9.293 0-10.267h3.558v1.455c.473-.732 1.318-1.771 3.205-1.771 2.338 0 4.091 1.528 4.091 4.813v6.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center text-gray-400 text-sm">
          © 2025 Your Brand Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
