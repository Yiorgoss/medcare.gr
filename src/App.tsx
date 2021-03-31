import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Company, Fleet, Services, Contact } from "./pages";
import Header from "./components/header";
import LoadingPage from "./components/loading-page";
import Footer from "./components/footer";

export default function App() {
    const [isLoading, setLoading] = useState(true);

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        setTimeout(() => setLoading(false), 20);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route exact path="/company" render={() => <Company />} />
                        <Route path="/company/:statement" render={() => <Company />} />
                        <Route path="/fleet" render={() => <Fleet />} />
                        <Route path="/services" render={() => <Services />} />
                        <Route path="/contact" render={() => <Contact />} />
                        <Route render={(): any => 404} />
                    </Switch>
                    {/*<Footer />*/}
                </Router>
            )}
        </>
    );
}
