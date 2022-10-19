import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./css/App.css";

// import { useStateContext } from "./contexts/ContextProvider";
/**
 *
 * Docs
 *  @params   -
 *  @returns  - App component
 *  @contains -
 *
 */
// TODO:

// [ ]: Think About things to add on the Dashboard

const App = () => {
  let activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                // onClick={() => setThemeSettings(true)}
                style={{ background: "blue", borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg">
              Sidebar visible
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar hidden</div>
          )}
          <div
            className={`bg-main-bg dark:bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
              Navbar
            </div>
          </div>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element="Homepage" />
            <Route path="/homepage" element="Homepage" />
            {/* Apps */}
            <Route path="/convert" element="Speech to text converter" />
            <Route path="/editor" element="Text Editor" />
            <Route path="/customers" element="Customer Data" />
            {/* Charts & graphs */}
            <Route path="/line" element="Line chart" />
            <Route path="/area" element="Area graph" />
            <Route path="/bar" element="Bar graph" />
            <Route path="/pie" element="Pie chart" />
            <Route path="/color-mapping" element="Color mapping" />
            <Route path="/pyramid" element="Pyramid " />
            <Route path="/stacked" element="Stacked" />
            {/* Other Pages */}
            <Route path="/profile" element="User account" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
