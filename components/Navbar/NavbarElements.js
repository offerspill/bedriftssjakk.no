import styled from "styled-components";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 80px;
  position: sticky;
  left: 0;
  top: 0;

  background: linear-gradient(to left, #ffffff 40%, #423cec 20%);

  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 10;
  justify-content: flex-start;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
