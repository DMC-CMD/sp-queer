import styled from "styled-components";
import { useState } from "react";
import SpQueerLogo from "../media/sp_queer_logo.png";
import MenuBarsIcon from "../media/menu-bars.svg";
import CloseSvg from "../media/close-icon.svg";
import { Link } from "./CommonComponents";
import { Link as RouterLink } from "react-router-dom";

const DesktopNavbar = styled.nav`
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;
const SpLogo = styled.img`
  height: 80px;
  transition: all 300ms;

  &:hover {
    transform: scale(1.1);
  }
`;
const Links = styled.ul``;

const A = styled(Link)`
  font-size: 32px;
  margin: 0 12px;
`;

const HrDesktop = styled.hr`
  border: 1px solid white;

  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileBox = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
`;
const MobileNavbar = styled.nav`
  position: fixed;
  padding: 12px;
  height: 100vh;
  padding-bottom: 0;
  background-color: #ef199a;
  z-index: 30;
  @media (min-width: 601px) {
    display: none;
  }
`;
const MobileLinks = styled.ul`
  display: flex;
  background-color: #ef199a;
  z-index: 3;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  margin-bottom: 48px;

  position: relative;
  bottom: 50px;
`;
const MobileLink = styled(Link)`
  font-size: 50px;
  font-weight: 700;

  @media (max-width: 370px) {
    font-size: 40px;
  }
`;

const MenuBars = styled.img`
  width: 80px;
  padding: 12px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 601px) {
    display: none;
  }
`;
const CloseBox = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
`;
const CloseIcon = styled.img`
  width: 80px;

  &:hover {
    cursor: pointer;
  }
`;
const LogoBox = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;

  @media (min-width: 601px) {
    display: none;
  }
`;
const HrMobile = styled.hr`
  border: 1px solid white;
  margin: 0;

  @media (min-width: 601px) {
    display: none;
  }
`;

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <DesktopNavbar>
        <RouterLink to="/">
          <SpLogo src={SpQueerLogo} />
        </RouterLink>
        <Links>
          <A to="/forderungen">Forderungen</A>
          <A smooth to="/#kandidierende">
            Kandidierende
          </A>
          <A smooth to="/#mitmachen">
            Mitmachen
          </A>
        </Links>
      </DesktopNavbar>

      <HrDesktop />

      <MobileBox>
        <LogoBox>
          <a href="/">
            <SpLogo src={SpQueerLogo} />
          </a>
        </LogoBox>
        {showMobileMenu ? (
          <MobileNavbar id="mobileNav">
            <MobileLinks>
              <CloseBox>
                <CloseIcon
                  src={CloseSvg}
                  onClick={() => setShowMobileMenu(false)}
                />
              </CloseBox>

              <div>
                <MobileLink smooth to="/">
                  Home
                </MobileLink>
              </div>
              <div>
                <MobileLink smooth to="/forderungen">
                  Forderungen
                </MobileLink>
              </div>
              <div>
                <MobileLink smooth to="kandidierende">
                  Kandidierende
                </MobileLink>
              </div>
            </MobileLinks>
            <HrMobile />
          </MobileNavbar>
        ) : (
          <MenuBars
            onClick={() => setShowMobileMenu(true)}
            src={MenuBarsIcon}
          />
        )}
      </MobileBox>
    </>
  );
};
