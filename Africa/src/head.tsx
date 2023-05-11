import bok from "./open-book.png";
import hub from "./network.png";
import serch from "./search.png";
import logo from "./logo-afta.jpg";
import kq from "./loading-to-the-aircraft.jpg.webp";

const Head = () => {
  return (
    <>
      <div className="head-1">
        <div className="tarrif">
          <div>
            <img src={bok} alt="bok" />
          </div>
          <div className="text">
            <pre>E-Tariff Book</pre>
          </div>
        </div>
        <div className="afta-hub">
          <div>
            <img src={hub} alt="bok" />
          </div>
          <div className="text">
            <pre>AfCFTA Hub</pre>
          </div>
        </div>
        <div className="careers">
          <div>
            <pre>Careers Bids Contact Us</pre>
          </div>
          <div className="text">
            <img src={serch} alt="s" />
          </div>
        </div>
      </div>
      <nav className="navlist navv">
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About AfCFTA </a>
          </li>
          <li>
            <a href="#">Trade Areas</a>
          </li>
          <li>
            <a href="#">Operational Instruments</a>
          </li>
          <li>
            <a href="#">State Parties</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">News & Events</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Head;
