import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default class App extends Component {


  apiKey = 'your_api_key';
  // apiKey = (process.env.REACT_APP_NEWS_API)

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#0000FF'
          progress={this.state.progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="Home" pageSize={6} country="in" category="General" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}
                key="entertainment"
                pageSize={6}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}
                key="business"
                pageSize={6}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="health"
                pageSize={6}
                country="in"
                category="Health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}
                key="science"
                pageSize={6}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"
                pageSize={6}
                country="in"
                category="Sports" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey}
                key="technology"
                pageSize={6}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
