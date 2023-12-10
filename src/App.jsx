import "./App.css";
import { MantineProvider, Button, createTheme, Title } from "@mantine/core";
import "@mantine/core/styles.css";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import victor from "./assets/Abstract Design (2).svg";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import About from "./pages/About";
import Security from "./pages/Security";
import Login from "./pages/Login";
function App() {
  const theme = createTheme({
    primaryColor: "green",
    defaultRadius: "xl",
    colors: {
      green: [
        "#FEFFFA",
        "#FBFFF0",
        "#F8FFE5",
        "#F2FFCC",
        "#E5FF99",
        "#D8FF66",
        "#D1FF4C",
        "#CAFF33",
      ],
      white: ["#FCFCFD", "#F7F7F8", "#F1F1F3", "#E4E4E7"],
      gray: [
        "#BFBFBF",
        "#B3B3B3",
        "#98989A",
        "#656567",
        "#59595A",
        "#4C4C4D",
        "#333333",
        "#262626",
        "#1C1C1C",
        "#191919",
      ],
    },
    primaryShade: 6,
    fontFamily: "Lexend",
    components: {
      Text: {
        defaultProps: {
          color: "white.0",
          lh: "150%",
        },
      },
      Title: Title.extend({
        defaultProps: {
          c: "white.0",
        },
      }),
      Button: Button.extend({
        defaultProps: {
          c: "dark",
          w: "auto",
          h: "auto",
        },
      }),
    },
  });
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <div className="mx-[16px] sm:mx-10 lg:mx-20 overflow-hidden">
        <img src={victor} alt="" className="absolute top-0 left-0" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Career" element={<Career />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Security" element={<Security />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </div>
      <Footer />
    </MantineProvider>
  );
}

export default App;
