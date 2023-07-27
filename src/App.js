import React, { Component, createRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, About, Error } from "./routes";
import { RootLayout } from "./layouts/RootLayout";

export class App extends Component {
  HomePageRef = createRef();
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<RootLayout homePageRef={this.HomePageRef} />}
          >
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route
              path="*"
              element={<Error homePageRef={this.HomePageRef} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
