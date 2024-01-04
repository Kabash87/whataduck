import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../src/components/auth/AuthContext";

const AdvertsList = lazy(() =>
  import("./components/adverts/AdvertsList/AdvertsList")
);
const CreateAdvert = lazy(() =>
  import("./components/adverts/CreateAdvert/CreateAdvert")
);
const EditAdvert = lazy(() =>
  import("./components/adverts/EditAdvert/EditAdvert")
);
const LoginForm = lazy(() => import("./components/auth/LoginForm"));
const Register = lazy(() => import("./components/auth/Register"));
const AdvertDetail = lazy(() => import("./components/adverts/AdvertDetail"));
const Recovery = lazy(() => import("./components/recovery/Recovery"));
const PasswordNew = lazy(() => import("./components/recovery/NewPass"));
const AboutUs = lazy(() => import('./components/Layout/AboutUs'));
const Contact = lazy(() => import("./components/contact/contact"));
const Verified = lazy(() => import("./components/verified/Verified"));

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/adverts" element={<AdvertsList />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail/:advertId" element={<AdvertDetail />} />
            <Route path="/" element={<Navigate to="/adverts" />} />
            <Route path="/create-advert" element={<CreateAdvert />} />
            <Route path="/edit/:id" element={<EditAdvert />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/restore-password" element={<PasswordNew />} />
            <Route path="/about-us" element={< AboutUs />} />
            <Route path="/contact/:advertId" element={<Contact />} />
            <Route path="/verify-email" element={< Verified />} />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
