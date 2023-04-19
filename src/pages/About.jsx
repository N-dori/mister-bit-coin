import { NavLink, Route } from "react-router-dom";

const Team = () => {
    return (
        <ul>
            <li>Moshe Girit</li>
            <li>Dan Gonzales</li>
            <li>Shimon Dicaprio</li>
        </ul>
    )
}

const Vision = () => {
    return (
        <ol>
            <li>Save the world with our bit coins</li>
            <li>Take over the world with our bit coins</li>
        </ol>
    )
}

export function About() {
    return (


        <section className="about flex">
            <section className="title-container">
                <h1 className="title">Relentlessly building the future of finance since 2011</h1>
                <p className="sub-title">The world’s leading crypto finance house serving people, projects, protocols and institutions since 2011.</p>
            </section>

            <nav>
                <NavLink to="/about/team">Team</NavLink>
                <NavLink to="/about/vision">Vision</NavLink>
            </nav>

            <section>
                <Route path="/about/team" component={Team} />
                <Route path="/about/vision" component={Vision} />
            </section>
        </section>
        
      
    )
}