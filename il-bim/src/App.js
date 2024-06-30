
import './App.css'
import Home from '../src/component/pages/Home';
import Login from '../src/component/pages/Login';
import ProtectedRoutes from "../src/component/middlewares/ProtectedRoutes";
import Success from "../src/component/pages/Success";
import Settings from '../src/component/Settings/Settings';
import ProfileSettings from '../src/component/Settings/ProfileSettings';
import EmailSettings from '../src/component/Settings/EmailSettings';
import PasswordSettings from '../src/component/Settings/PasswordSettings';
import LanguageSettings from '../src/component/Settings/LanguageSettings';
import NotificationsSettings from '../src/component/Settings/NotificationsSettings';
import PrivacySettings from '../src/component/Settings/PrivacySettings';
import Contatti from '../src/component/contatti/contatti';
import UserProfile from '../src/component/UserProfile/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from '../src/component/not found 404/NotFound'
import '../src/component/axios';
import AddComment from '../src/component/comments/AddComment';
import WorkWithUs from '../src/component/lavora con noi//WorkWithUs';
import Gallery from '../src/component/gallery/Gallery';


function App() {
 
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/success" element={<Home />}/>
        <Route element={<ProtectedRoutes/>}>
            <Route path="/Home" element={<Home />} />
            <Route path="/feedback" element={<AddComment />} />
            <Route path="/galleria" element={<Gallery />} />
            <Route path="/lavora con noi" element={<WorkWithUs />} />
            <Route path="/UserProfile" element={ <UserProfile /> } />
                  <Route path="/Settings" element={   <Settings />  } />
                  <Route path="/ProfileSettings" element={<ProfileSettings/>} />
                  <Route path="/EmailSettings" element={<EmailSettings/>} />
                  <Route path="/PasswordSettings" element={<PasswordSettings/>} />
                  <Route path="/LanguageSettings" element={<LanguageSettings/>} />
                  <Route path="/NotificationsSettings" element={<NotificationsSettings/>} />
                  <Route path="/PrivacySettings" element={<PrivacySettings/>} />
                  <Route path="/contatti" element={<Contatti/>} />
                  <Route path="*" element={<NotFound />} />
          </Route>
          </Routes>
      </Router>
  )
}
  export default App