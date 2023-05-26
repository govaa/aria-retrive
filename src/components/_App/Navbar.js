import React from "react";
import Link from "src/utils/ActiveLink";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Navbar = () => {
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

  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Technology",
      text_b:"Ariadne Analytics",
      text_c:"Ariadne Navigation",
      text_d:"Ariadne Engagement",
      text_e:"Why Ariadne",
      text_f:"Solutions",
      text_g:"People Counting",
      text_h:"Queue Management",
      text_i:"Employee Scheduling",
      text_j:"Asset Tracking",
      text_k:"Virtual Queuing",
      text_l:"Push Notification",
      text_m:"Industries",
      text_n:"Retail Stores",
      text_o:"Shopping Centers",
      text_p:"Airports",
      text_r:"Transportation",
      text_s:"Cities",
      text_t:"Hospitality",
      text_u:"Company",
      text_v:"About Us",
      text_y:"Blog",
      text_z:"Careers",
      text_aa:"Contact",
      text_bb:"Free Demo",
    },
    de: {
      text_a:"Technologie",
      text_b:"Ariadne-Analytics",
      text_c:"Ariadne-Navigation",
      text_d:"Ariadne-Engagement",
      text_e:"Warum Ariadne",
      text_f:"Lösungen",
      text_g:"Personenzählung",
      text_h:"Warteschlangenverwaltung",
      text_i:"Mitarbeiterplanung",
      text_j:"Asset-Tracking",
      text_k:"Virtuelle Warteschlange",
      text_l:"Push-Benachrichtigung",
      text_m:"Industrien",
      text_n:"Einzelhandelsgeschäfte",
      text_o:"Einkaufszentren",
      text_p:"Flughäfen",
      text_r:"Transport",
      text_s:"Städte",
      text_t:"Gastfreundschaft",
      text_u:"Firma",
      text_v:"Über uns",
      text_y:"Blog",
      text_z:"Karriere",
      text_aa:"Kontakt",
      text_bb:"Frei Demo",
    },
  }

  const [language, setLanguage] = useState({});

  useEffect(() => {
    console.log(locale);
    if (locale === "de") {
      console.log("locale is german");
      setLanguage(translations.de);
    } else if (locale === "en") {
      console.log("locale is uk");
      setLanguage(translations.en);
      // console.log("object: ",language)
    } else {
      console.log("locale is french");
      setLanguage(translations.fr);
      // console.log("object: ",language)
    }
  }, []);

  return (
    <header id='header' className='headroom'>
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
                    {language.text_a} <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-analytics'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_b}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-navigation'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_c}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-engagement'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_d}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/why-ariadne'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_e}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/solutions'>
                    <a onClick={toggleNavbar} className='nav-link'>
                    {language.text_f} <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link
                        href='/solutions/people-counting'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_g}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/queue-management'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_h}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/employee-scheduling'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_i}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/asset-tracking'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_j}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/solutions/virtual-queuing'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_k}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/technology/ariadne-engagement'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_l}
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
                    {language.text_m} <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link
                        href='/industries/retail-stores'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_n}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/shopping-centers'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_o}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/airports'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_p}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/transportation'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_r}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/industries/cities' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_s}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        href='/industries/hospitality'
                        activeClassName='active'
                      >
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_t}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/#' activeClassName='active'>
                    <a onClick={(e) => e.preventDefault()} className='nav-link'>
                    {language.text_u} <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <Link href='/about' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_v}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/blog' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_y}
                        </a>
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link href='/careers' activeClassName='active'>
                        <a onClick={toggleNavbar} className='nav-link'>
                        {language.text_z}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link href='/contact' activeClassName='active'>
                    <a onClick={toggleNavbar} className='nav-link'>
                    {language.text_aa}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='others-option'>
              {/* <Link href="/cart">
                                <a className="cart-wrapper-btn">
                                    <Icon.ShoppingCart /> 
                                    <span>{cart.length}</span>
                                </a>
                            </Link>

                            <Link href="/contact">
							    <a className="btn btn-light">Support</a>
                            </Link> */}

              <Link href='/letstalk/'>
                <a className='btn btn-primary'>{language.text_bb}</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
