import { Login } from "./Components/Authentication/Login/Login";
import { Profile } from "./Components/Authentication/Profile/Profile";
import { SignUp } from "./Components/Authentication/SignUp/SignUp";
import TopSection from "./Components/TopSection/TopSection";
import { AuthProvider } from "./Components/provider/AuthProvider";

export default function Home() {
  return (
    <div id="App">
      <AuthProvider>
        {/* <SignUp></SignUp> */}
        {/* <Login /> */}
        {/* <Profile /> */}
        <TopSection />
      </AuthProvider>
    </div>
  );
}
