import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
	<Navbar variant="dark" bg="dark" expand="md">
		<Navbar.Brand as={Link} to="/">
			<img
				className="rounded-circle bg-secondary mr-3"
				style={{ height: 50 }}
				src="/favicon.ico"
				alt="favicon"
			/>
			Epic Website
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<NavDropdown title="Epic Generators" id="basic-nav-dropdown">
					<NavDropdown.Item as={Link} to="/meme-generator">
						Meme Generator
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/zalgo">
						Zalgo Text
					</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="Canvas Stuff" id="basic-nav-dropdown">
					<NavDropdown.Item as={Link} to="/mouse-tracker">
						Mouse Tracker
					</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/canvas">
						Canvas
					</NavDropdown.Item>
				</NavDropdown>

				<NavItem>
					<NavLink as={Link} to="/notifications">
						Notification Sender
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink as={Link} to="/discord">
						Discord Perms Calculator
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Header;
