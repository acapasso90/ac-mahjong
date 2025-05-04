import Background from "./Background";
import Header from "./Header";
import {Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './MainLayout.css';

export function MainLayout({
}){
    return(
        <div className="layout">
            <Header />
            <Background />
            <Container fluid>  
                <div className="content">
                    <Outlet />
                </div>  
            </Container>

        </div>
    )
}