import React from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavContainer,
  Logo,
} from "./NavbarElements";

const Navbar = ({ toggle, navbar }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Bars onClick={toggle} />
          <NavMenu>
            {navbar?.map((navElement) => {
              return (
                <NavLink key={navElement.link} href={navElement.link}>
                  <a>{navElement.title}</a>
                </NavLink>
              );
            })}
            {/*<ExternalNavLink
            href="https://discord.gg/ekjjVscxNh"
            target="_blank"
            rel="noopener"
          >
            Discord
            <FiExternalLink className="external-link-icon" />
          </ExternalNavLink>*/}
          </NavMenu>
        </NavContainer>
        <Logo height="21px" width="150px" src={"./logo.png"} />
      </Nav>
    </>
  );
};

export default Navbar;
