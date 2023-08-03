import React from "react";
import Header from "./Header";
import City_Search from "./City_Search";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <City_Search />
        <Footer />
      </>
    );
  }
}

export default App;
