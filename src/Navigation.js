import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registeration from "./pages/Registeration/Registeration";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AllUsers, Books, Upload, Profile } from "./pages";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Upgrade from "./pages/Upgrade/Upgrade";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Alert from "./components/Alert/Alert";
import PendingView from "./pages/PendingView/PendingView";
import Rejected from "./pages/Rejected/Rejected";
import UserProfile from "./pages/UserProfile/UserProfile";
import { Online, Offline } from "react-detect-offline";
import Network from "./components/Network/Network";
import ViewAdminsUsers from "./pages/SuperAdmin/ViewAll/ViewAdminsUsers";
import AddAdmin from "./pages/SuperAdmin/AddAdmin/AddAdmin";
import SuperBooks from "./pages/SuperAdmin/Books/SuperBooks";
import UploadBooks from "./pages/SuperAdmin/UploadBook/UploadBooks";
import SuperProfile from "./pages/SuperAdmin/SuperProfile/SuperProfile";
import FetchUses from "./pages/SuperAdmin/ViewAll/FetchUses";
import PDFViewer from "./pages/PDFViewer/PDFViewer";
import Testimony from "./pages/Testimonies/Testimony";
import Feedback from "./pages/Feedback/Feedback";
import Videoplayer from "./pages/VideoPlayer/Videoplayer";
import Task from "./pages/Admin/Task/Task";
function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user);

  let possiblePathsForAdmin = Array(
    "/books",
    "/users",
    "/upload",
    "/profile",
    "/",
    "/signup",
    "/login"
  );
  let possiblePathsForUsers = Array("/dashboard", "/", "/signup", "/login");
  let generalPath = ["/", "/signup", "/login"];
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="App">{children}</div>;
}

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/testimony" element={<Testimony />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Registeration />} />
          <Route exact path="/pending" element={<PendingView />} />
          <Route exact path="/rejected" element={<Rejected />} />
          <Route exact path="/pdfview" element={<PDFViewer />} />
          <Route exact path="/videoplayer" element={<Videoplayer />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/premium " element={<Premium />} /> */}
          <>
            <Route exact path="/users" element={<AllUsers />} />
            <Route exact path="/books" element={<Books />} />
            <Route exact path="/alltask" element={<Task />} />
            <Route exact path="/upload" element={<Upload />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/feedback" element={<Feedback />} />
            <Route exact path="/upgradetopremium" element={<Upgrade />} />
            <Route
              exact
              path="/all-admins-users"
              element={<ViewAdminsUsers />}
            />
            <Route exact path="/add-admin" element={<AddAdmin />} />
            <Route exact path="/all-super-books" element={<SuperBooks />} />
            <Route exact path="/upload-books" element={<UploadBooks />} />
            <Route exact path="/super-profile" element={<SuperProfile />} />
          </>
          <Route path="*" element={<NotFound msg={"Page Not Found"} />} />
        </Routes>
        {/* <Offline>
          <Network />
        </Offline> */}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
