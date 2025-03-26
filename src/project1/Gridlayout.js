import React from 'react';
import './Gridlayout.css';




function Header() {
    return (
        <div className="header">
            Header
        </div>
    );
}

function Sidebar() {
    return (
        <div className="sidebar">
            Sidebar
        </div>
    );
}

function Card({content}) {
    return (
        <div className="card">
            {content}
        </div>
    );   
}

function Footer() {
    return (
        <div className="footer">
            Footer
        </div>
    );
}

function Gridlayout() {
    return (
        <div className="gridlayout">
            <Header />
            <Sidebar />
            <Card content="Card 1" />
            <Card content="Card 2" />
            <Card content="Card 3" />
            <Card content="Card 4" />
            <Footer />
            </div>
    );
}

export default Gridlayout;