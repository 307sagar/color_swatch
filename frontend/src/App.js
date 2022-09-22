// Import React
import React from "react";

//Import colorpicker from react-color-pallette 
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";

// Import other React Component
import CreateColor from
    "./components/create-color.component";
import EditColor from
    "./components/edit-color.component";
import ColorList from
    "./components/color-list.component";


// App Component
const App = () => {
const [colorHex, setColorHex] = useColor("hex", "#121212");
//const [colorRgb, setColorRgb] = useColor("rgb", "#800000");
return (
    <Router>
    <div className="App">
        <header className="App-header">
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
                <Link to={"/create-color"}
                className="nav-link">
                Brikl color swatch MVP
                </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
                <Nav>
                <Link to={"/create-color"}
                    className="nav-link">
                    Create Color
                </Link>
                </Nav>

                <Nav>
                <Link to={"/color-list"}
                    className="nav-link">
                    Color List
                </Link>
                </Nav>
            </Nav>
            </Container>
        </Navbar>
        </header>

        <Container>
        <Row>
            <Col md={12}>
            <div className="wrapper">
                <Routes>
                <Route path="/"
                    element={ <CreateColor /> } />
                <Route path="/create-color"
                    element={ <CreateColor /> } />
                <Route path="/edit-color/:id"
                    element={ <EditColor /> } />
                <Route path="/color-list"
                    element={ <ColorList /> } />
                </Routes>
            </div>
            </Col>
        </Row>
        </Container>
            <span className="Pallette">
        <h1>Color Picker</h1>
        <ColorPicker width={456} height={228} 
                   color={colorHex} 
                   onChange={setColorHex} hideHSV dark />;
                 
    </span>
    </div>
    </Router>

);
};

export default App;

// <ColorPicker width={456} height={228} 
// color={colorRgb} 
// onChange={setColorRgb} hideHSV dark />
    