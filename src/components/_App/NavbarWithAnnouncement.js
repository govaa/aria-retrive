import React from "react";
import Link from "src/utils/ActiveLink";
import { ArrowRightCircle, ChevronDown } from "react-feather";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = null;
  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id='header' className='headroom pt-0'>
      <div className='bg-velvet'>
        <div className='container pt-2 mb-2 pb-3 '>
          <div className='row align-items-center justify-content-center'>
            <div className='text-center'>
              <Link href='/passenger-terminal-expo-2023'>
                <a className='text-white px-2'>
                  Visit us between March 14 and 16 at the Passenger Terminal
                  Expo in Amsterdam, Booth 2408!{" "}
                </a>
              </Link>
              <ArrowRightCircle color='white' />
            </div>
            <div className='col-lg-3 col-md-6 ms-auto'></div>
          </div>
        </div>
      </div>

      <div className='ariadne-nav'>
        <div className='container'>
          <nav className='navbar navbar-expand-md navbar-light'>
            <Link href='/'>
              <a onClick={toggleNavbar} className='navbar-brand'>
                <img src='/images/logo.svg' alt='logo' width='50%' />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-bar top-bar'></span>
              <span className='icon-bar middle-bar'></span>
              <span className='icon-bar bottom-bar'></span>
            </button>

            <div className={classOne} id='navbarSupportedContent'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <Link href='/technology' activeClassName='active'>
                    <a onClick={toggleNavbar} className='nav-link'>
                      Technology <ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-analytics'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Ariadne Analytics
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-navigation'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Ariadne Navigation
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-engagement'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Ariadne Engagement
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/why-ariadne'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Why Ariadne
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/solutions'>
                    <a onClick={toggleNavbar} className='nav-link'>
                      Solutions <ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link
                        href='/solutions/people-counting'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          People Counting
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/queue-management'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Queue Management
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/employee-scheduling'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Employee Scheduling
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/asset-tracking'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Asset Tracking
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/virtual-queuing'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Virtual Queuing
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-engagement'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Push Notification
                        </a>
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                                            <Link href="/solutions/wifi-internet-access" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">WiFi Internet Access to Visitors</a>
                                            </Link>
                                        </li> */}
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/industries'>
                    <a onClick={toggleNavbar} className='nav-link'>
                      Industries <ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link
                        href='/industries/retail-stores'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Retail Stores
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/shopping-centers'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Shopping Centers
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/airports'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Airports
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/transportation'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Transportation
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/industries/cities' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          Cities
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/hospitality'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                          Hospitality
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/#' activeClassName='active'>
                    <a onClick={(e) => e.preventDefault()} className='nav-link'>
                      Company <ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link href='/about' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          About Us
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/blog' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          Blog
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/careers' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                          Careers
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/contact' activeClassName='active'>
                    <a onClick={toggleNavbar} className='nav-link'>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='others-option'>
              {/* <Link href="/cart">
                                <a className="cart-wrapper-btn">
                                    <ShoppingCart /> 
                                    <span>{cart.length}</span>
                                </a>
                            </Link>

                            <Link href="/contact">
							    <a className="btn btn-light">Support</a>
                            </Link> */}

              <Link href='/letstalk/'>
                <a className='btn btn-primary'>Free Demo</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
