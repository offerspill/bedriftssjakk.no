import styled from "styled-components";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 100px;
  position: sticky;
  left: 0;
  top: 0;

  padding-left: 3rem;

  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  background: ${({ transparentBackground, blueBackground }) =>
    blueBackground
      ? "#423cec"
      : transparentBackground
      ? "none"
      : "linear-gradient(to left, #ffffff 40%, #423cec 20%)"};

  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 10;
  justify-content: flex-start;

  @media screen and (max-width: 1080px) {
    background: #423cec;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 2.6rem;
  right: 14rem;

  @media screen and (max-width: 1080px) {
    filter: brightness(0) invert(1);
    right: 5rem;
  }

  @media screen and (max-width: 1012px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: block;

    left: 4.5rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-left: 3rem;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  margin-top: 2rem;
  font-weight: 100;

  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }

  a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 25px;

    @media screen and (max-width: 1500px) {
      font-size: 23px;
    }

    @media screen and (max-width: 1280px) {
      font-size: 20px;
    }

    &:hover {
      background: #fff;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ExternalNavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  .external-link-icon {
    margin-left: 5px;
    margin-bottom: 3px;
    font-size: 15px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #3ab99b;
  }
`;

export const NavLinkElement = styled.p`
  color: ${(props) => props.theme.colors.white};
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 8px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
