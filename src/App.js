import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";

const App = () => {
  const gradientBackground = (e) => {
    const { clientX, clientY } = e;
    const x = parseInt(
      100 - ((window.innerWidth - clientX) / window.innerWidth) * 100
    );
    const y = parseInt(
      100 - ((window.innerHeight - clientY) / window.innerHeight) * 100
    );
    // document.getElementById(
    //   "main-container-gradient"
    // ).style.background = `radial-gradient(at ${x}% ${y}%, #c9e6f9d1 1%, #9ab0b4c7 99%)`;
    document.getElementById(
      "main-container-gradient"
    ).style.background = `radial-gradient(at ${x}% ${y}%, #95b6ccba 1%, #c9e6f9d1 99%)`;
  };
  return (
    <div
      className="main_cont"
      onMouseMove={gradientBackground}
      id="main-container-gradient"
      // style={{ background: "radial-gradient(#9ab0b4c4, #9ab0b4c4)" }}
    >
      <Header />
      <Home />
      <div className="down-btn-cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 30, width: 30 }}
          fill="#1a55d6"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>
    </div>
  );
};

export default App;
