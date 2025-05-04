import { useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

import Offcanvas from 'react-bootstrap/Offcanvas'
import Col from 'react-bootstrap/Col'

const menuArray = [
    {path: '/', label: "Guide"},
    {path: '/faq', label: "FAQ"},
    {path: '/legend', label: "Legend"},

]

export function FullScreenMenu(){
    const {pathname} = useLocation();

    const menuItems = menuArray.map((x) => {
        let active = pathname.includes(x.path)  ? 'active' : ''
        if (x.path === '/'){
            active = pathname === x.path ? 'active' : '';
        }
        return(
            <Link className={active} key={x.label}  to={x.path}>{x.label} </Link>
        )
    }
    )

    return(
        <Nav className="header-links">
            {menuItems}
        </Nav>
    )
}


const HamburgerMenu =() => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    const resetOpen = () => {
        if (window.innerWidth > 650 && open){
            setOpen(!open)
        }
    }
    
    const toggle = (path) => {
        navigate(path);
        setOpen(false)
    }
   
    window.addEventListener("resize", resetOpen);

    const menuItems = menuArray.map((x) => 
        <button key={x.path} onClick={() => toggle(x.path)}>
            {x.label}
        </button>
    )

    return(
        <>
            <Col xs={2} className="hamburger" onClick={() => setOpen(!open)} >
                <i className="bi bi-list"></i>
            </Col>
            <Offcanvas
                show={open}
                onHide={() => setOpen(!open)}
                backdrop={false}
                className="nav-offcanvas"
            >
                <Offcanvas.Header className="d-flex justify-content-between">
                    <h3 className="ps-1"> Navigation</h3>
                    <button onClick={()=>setOpen(!open)}>
                        <i className='bi bi-x-lg' />
                    </button>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    {menuItems}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default function Header(){
    return(
        <header className="d-flex justify-content-between align-items-end">
            <h1> Riichi Mahjong Guide </h1>
            <FullScreenMenu />
            <HamburgerMenu />
        </header>
    )
}