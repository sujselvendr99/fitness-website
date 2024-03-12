import "./navbarNotes.scss";

const NavbarNotes = ({setOpen}) => {
  return (
    
      <div className="nav-wrapper container">
        <span className="logo">Notes</span>
        <div className="nav-options">
          <div className="nav-icon" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
  );
};

export default NavbarNotes