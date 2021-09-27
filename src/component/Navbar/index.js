import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/todo" activeStyle>
                    TODO
                </NavLink>
                <NavLink to="/updown" activeStyle>
                   INC/DRC
                </NavLink>
                <NavLink to="/pagination" activeStyle>
                    PAGINATION
                </NavLink>
                <NavLink to="/user" activeStyle>
                    CURD
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Error</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;