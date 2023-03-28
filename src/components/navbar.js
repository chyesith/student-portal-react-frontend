import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
const  navbar= () => {
return (<>
    <Nav>
        <Bars />

        <NavMenu>
            <NavLink to='/Home' activeStyle>
                Home
            </NavLink>
            <NavLink to='/Courses' activeStyle>
                Courses
            </NavLink>
            
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signout'>Sign Out</NavBtnLink>
        </NavBtn>
    </Nav>
</>);
}
export default navbar;
