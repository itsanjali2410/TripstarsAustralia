import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/Homepage";
import Themes from "./pages/Themes/Themes";
import Thirdpage from "./pages/ThirdPage/ThirdPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import Tripdetailspage from "./pages/Tripdetails/Tripdetailspage";
import NotFoundPage from "./pages/NotFoundPage";
import Faq from "./pages/Faq/Faq";
import PaymentPolicies from "./pages/Paymentpolicy/PaymentPolicies";
import VideoScroller from "./pages/Video/VideoScroller";

// Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Styles
// import GlobalStyles from "./GlobalStyles"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  const isVideoPage = location.pathname === "/video";

  return (
    <>
      {/* <GlobalStyles />  */}
      <div className="App">
        {!isVideoPage && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/:location" element={<Tripdetailspage />} />
          <Route path="/tripdetails" element={<Thirdpage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/terms-conditions" element={<PrivacyPolicyPage title="Terms & Conditions" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage title="Privacy Policy" />} />
          <Route path="/cancellation-policy" element={<PrivacyPolicyPage title="Cancellation Policy" />} />
          <Route path="/payment" element={<PaymentPolicies />} />
          <Route path="/video" element={<VideoScroller />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
        {!isVideoPage && <Footer />}
      </div>
    </>
  );
}

export default App;
