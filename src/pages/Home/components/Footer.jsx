

export default function Footer() {
  return (
    <>
      <footer className="mx-auto w-screen bg-gray-100 py-10 md:py-24">
        <div className="wrapper mx-auto flex w-[90%] flex-col items-start justify-between md:w-[70rem] md:flex-row">
          <div className="left-part mb-10 md:mb-0">
            <p className="font-europa-italic text-3xl md:text-5xl">
              Start your journey{" "}
            </p>
          </div>
          <div className="right-part w-full md:w-[80%]">
            <div className="footer-content mx-auto flex flex-col justify-between text-sm md:flex-row md:px-10">
              <div className="link-section mb-6 space-y-3 md:mb-0">
                <h3 className="font-geist text-base font-medium">Product</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="link-section mb-6 space-y-3 md:mb-0">
                <h3 className="font-geist text-base font-medium">Resources</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div className="link-section mb-6 space-y-3 md:mb-0">
                <h3 className="font-geist text-base font-medium">Company</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="link-section mb-6 space-y-3 md:mb-0">
                <h3 className="font-geist text-base font-medium">Support</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Report an Issue
                    </a>
                  </li>
                </ul>
              </div>
              <div className="link-section space-y-3">
                <h3 className="font-geist text-base font-medium">Community</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-black">
                      Contribute
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
