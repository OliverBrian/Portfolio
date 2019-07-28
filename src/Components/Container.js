import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import './Container.scss';
import Skills from './Skills';

const Container = ({ location }) => (
    <div className="container">
        <TransitionGroup className="transitionGroup">
            <CSSTransition
                key={location.pathname}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
                >
                <section className="routeSection">
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={ About} />
                        <Route path="/Skills" component={ Skills } />
                        <Route path="/Projects" component={ Projects } />
                        <Route path="/Contact" component={ Contact} />
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    </div>
)

export default withRouter(Container);