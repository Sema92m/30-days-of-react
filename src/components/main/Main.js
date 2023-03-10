import React from "react";
import Button from "./../shared/Button";
import buttonStyles from "../../styles/button-styles";

class TechList extends React.Component {
    render() {
        const { techs } = this.props;
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
        return techsFormatted;
    }
}

const Message = ({ message }) => (
    <div>
        <h1>{message}</h1>
    </div>
);
const Login = () => (
    <div>
        <h3>Please Login</h3>
    </div>
);
const Welcome = (props) => (
    <div>
        <h1>Welcome to 30 Days Of React</h1>
    </div>
);

class Main extends React.Component {
    render() {
        const {
            techs,
            greetPeople,
            handleTime,
            loggedIn,
            handleLogin,
            message,
            changeBackground,
            styles,
        } = this.props;
        const status = loggedIn ? <Welcome /> : <Login />;
      
        return (
            <main style={styles}>
                <div className="main-wrapper">
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={this.props.techs} />
                    </ul>
                    {techs.length === 3 && (
                        <p>
                            You have all the prerequisite courses to get started
                            React
                        </p>
                    )}
                    <div>
                        <Button
                            text="Show Time"
                            onClick={handleTime}
                            style={buttonStyles}
                        />{" "}
                        <Button
                            text="Greet People"
                            onClick={greetPeople}
                            style={buttonStyles}
                        />
                        {!loggedIn && (
                            <p>
                                Please login to access more information about 30
                                Days Of React challenge
                            </p>
                        )}
                    </div>
                    <div style={{ margin: 30 }}>
                        <Button
                            text={loggedIn ? "Logout" : "Login"}
                            style={buttonStyles}
                            onClick={handleLogin}
                        />{" "}
                        <Button
                            text="Dark mode"
                            style={buttonStyles}
                            onClick={changeBackground}
                        />
                        <br />
                        {status}
                    </div>
                    <Message message={message} />
                </div>
            </main>
        );
    }
}
export default Main;
