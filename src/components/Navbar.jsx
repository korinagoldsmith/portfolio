import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ currPos }) => {
      if (!navbarMenuRef.current) return; // Add null check here

      // Toggle `isTop` based on scroll position
      const navOffsetTop = navbarMenuRef.current.offsetTop;
      if (currPos.y + navOffsetTop > 5) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    },
    [navbarDimensions] // Trigger when dimensions change
  );

  React.useEffect(() => {
  if (!navbarMenuRef.current || !navbarDimensions) return;

  // Delay to ensure DOM has fully updated
  const timer = setTimeout(() => {
    const navOffsetTop = navbarMenuRef.current.offsetTop;
    navBottom - scrollPosition >= navOffsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, 0);

  return () => clearTimeout(timer);
}, [navBottom, navbarDimensions, navbarMenuRef, scrollPosition]);

  

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">

        {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}

          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>

          {(<NavLink
            href={process.env.PUBLIC_URL + "/#experience"}>
              Experience
            </NavLink>)}
          
          {repos.show && (

            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}

          {(<NavLink
            href={process.env.PUBLIC_URL + "/#blog"}>
            Blog
          </NavLink>)}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
