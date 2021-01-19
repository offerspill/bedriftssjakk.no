import React, { useState, useEffect } from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavContainer,
  Logo,
} from "./NavbarElements";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useWindowWidth, useWindowHeight } from "@react-hook/window-size";

const Navbar = ({ toggle, navbar }) => {
  const [transparentBackground, setTransparentBackground] = useState(false);
  const [blueBackground, setBlueBackground] = useState(false);
  const height = useWindowHeight();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const shouldHaveTransparentBackground = currPos.y < -height + 80;
      const shouldHaveBlueBackground = currPos.y < -height - 40;

      if (shouldHaveTransparentBackground !== transparentBackground) {
        setTransparentBackground(shouldHaveTransparentBackground);
      }

      if (shouldHaveBlueBackground !== blueBackground) {
        setBlueBackground(shouldHaveBlueBackground);
      }
    },
    [transparentBackground, blueBackground]
  );

  return (
    <>
      <Nav
        transparentBackground={transparentBackground}
        blueBackground={blueBackground}
      >
        <NavContainer>
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
