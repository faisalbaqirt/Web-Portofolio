const Sidebar = ({ routes }) => {
  const activeRoute = (routeName) => {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <>
      <div className="sidebar">
        <div className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav flex-column">
              {routes.map((prop, key) => (
                <li
                  className={`nav-item mt-3 ${activeRoute(
                    prop.layout + prop.path
                  )}`}
                  key={key}
                >
                  <a
                    href={prop.layout + prop.path}
                    className={`nav-link fs-5 ${
                      activeRoute(prop.layout + prop.path) === "active"
                        ? "link-active"
                        : ""
                    }`}
                  >
                    
                    <span className="ms-2">{prop.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
