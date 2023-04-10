// import React from 'react';
// import Header from './header';
// import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import {FiHome} from 'react-icons/fi';
// import {CiUser} from 'react-icons/ci';
// import {BiUserCircle} from 'react-icons/bi';
// import {BsBag} from 'react-icons/bs';
// import {MdPayment} from 'react-icons/md';

// function Sidebar({children}) {
//   return (
//     <>
//     <Header />

//      <Container fluid>
//       <Row>
//         <Col md={2} className="bg-dark sidebar" style={{ height: '100vh' }}>
//           <Nav className="flex-column">
//           <Link to="/" className="nav-link text-white">
//                <FiHome/> Home
//             </Link>
//             <Link to="/user" className="nav-link text-white">
//                <CiUser/> Users
//             </Link>
//             <Link to="/employee" className="nav-link text-white">
//                <BiUserCircle/> Employee
//             </Link>
//             <Link to="/product" className="nav-link text-white">
//                <BsBag/> Products
//             </Link>
//             <Link to="/payment" className="nav-link text-white">
//                <MdPayment/> Payments
//             </Link>
//           </Nav>
//         </Col>
//         <Col md={10} className="content p-3">
//          {children}
//         </Col>
//       </Row>
//     </Container>

//     </>
//   );
// }

// export default Sidebar;

import React, { useState } from 'react';
import Header from './header';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import { BiUserCircle } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true); // state untuk mengecek apakah sidebar terbuka atau tertutup

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen); // fungsi untuk mengubah state isOpen menjadi sebaliknya (terbuka -> tertutup, tertutup -> terbuka)
  }

  return (
    <>
      <Header />

      <Container fluid>
        <Row>
          <Col md={isOpen ? 2 : 1} className={`bg-dark sidebar ${isOpen ? 'open' : 'closed'}`} style={{ height: '100vh' }}>
            <div className="toggle-btn" onClick={handleToggleSidebar}>
              {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
            </div>
            <Nav className="flex-column">
              <Link to="/" className="nav-link text-white">
                <FiHome /> Home
              </Link>
              <Link to="/user" className="nav-link text-white">
                <CiUser /> Users
              </Link>
              <Link to="/employee" className="nav-link text-white">
                <BiUserCircle /> Employee
              </Link>
              <Link to="/product" className="nav-link text-white">
                <BsBag /> Products
              </Link>
              <Link to="/payment" className="nav-link text-white">
                <MdPayment /> Payments
              </Link>
            </Nav>
          </Col>
          <Col md={isOpen ? 10 : 11} className={`content p-3 ${isOpen ? 'open' : 'closed'}`}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sidebar;

