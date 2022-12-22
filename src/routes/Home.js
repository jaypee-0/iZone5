import React from "react";

const Home = () => {
    const data = [
        { name: "React Native" },
        { name: "React" },
        { name: "Javascript" },
        { name: "Typescript" },
        { name: "SCSS" },
        { name: "Bootstrap" },
        { name: "Tailwind" },
        { name: "CSS" },
        { name: "HTML" },
        { name: "Googling" },
        { name: "StackOverflow" }, 
        { name: "Blender" }, 
        { name: "NodeJS" }, 
    ];
    return (
        <div className="container pt-4 pb-2">
            <div>
                <h2 className="mb-2 fw-bold">About Me</h2>
                <p style={{width: '75%'}} className="mb-5">Johnpaul Eyibra is an experienced Front-end Developer with more than 2 years of software development experience, who has worked extensively on the front-end aspect of web applications using React/Next, Node, Mongo, JavaScript, and Typescript. Striving to never stop learning and improving.</p>
                <h2 className="my-2 fw-bold">Hobbies</h2>
                <p>Johnpaul Eyibra is an experienced Front-end Developer with more than 2 years of software development experience, who has worked extensively on the front-end aspect of web applications using React/Next, Node, Mongo, JavaScript, and Typescript. Striving to never stop learning and improving.</p>
                <p></p>
                <h2 className="my-2 fw-bold">Skills</h2>
                <ul className="d-flex justify-content-evenly list-unstyled flex-wrap">
                    {data.map(({ name }) => {
                        return <li key={name} className="col-6 col-md-4 bg-dark py-2 px-3 text-light w-auto mb-2 me-2 me-lg-5">{name}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Home;
