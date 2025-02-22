import "./index.css";

function Header() {
  return (
    <header className="header_main_cont">
      <div>
        <h4 className="gradient_name">AA</h4>
      </div>
      <div className="btn-cont">
        <p className="link-p">Home</p>
        <p className="link-p">Projects</p>
        <p className="link-p">About</p>
        <p className="link-p">Contact</p>
      </div>
      <div className="icon_cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-moon-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
        </svg>
        <div className="image_cont" />
      </div>
    </header>
  );
}

export default Header;
