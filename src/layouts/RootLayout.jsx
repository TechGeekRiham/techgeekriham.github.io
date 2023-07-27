import { useState, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar/NavBar";

export function RootLayout({ homePageRef }) {
  const [CurrentWebsitePath, setCurrentWebsitePath] = useState(
    window.location.pathname
  );
  return (
    <div>
      <Fragment>
        <div id="rootnav" className="position-absolute top-0 start-0 w-100">
          <NavBar
            homePageRef={homePageRef}
            CurrentWebsitePath={CurrentWebsitePath}
            setCurrentWebsitePath={setCurrentWebsitePath}
          />
        </div>
        <div id="root-pages" style={{paddingTop:56}}>
          <Outlet />
        </div>
      </Fragment>
    </div>
  );
}
