import React from "react";

const Experience = () => {
    const data = [
        {
            name: "Movelite",
            link: "https://movelite.ng/",
            pic: "./image/movelite.jpg",
            tools: "React, Javascript, Redux,",
            category: "Web",
            about: "MOVELITE is a forward-thinking transportation and courier service provider focused on people, goods and convenient service delivery."
        },
        { name: "HealthScribe", link: "https://healthscribe.netlify.app/", pic: "./image/healthscribe.png", tools: "React, Typescript, Ruby On Rails, Javascript", category: "Web", about: "Health Tracker to keep track of your health related symptoms on all of your devices. " },
        { name: "Yoable", link: "http://yoable.org/", pic: "./image/yoable.png", tools: "Next, React, Javascript", category: "Web", about: "Yoable is a non-profit organization set on empowering, inspiring and connecting ambitious youths with the help of skills which will be needed inevitably at every pointof their lives." },
        { name: "EkoAnalytics", link: "http://ekoanalytics.net/", pic: "./image/ekoanalytics.png", tools: "HTML, CSS, Javascript", category: "Web", about: "Eko Analytics is a registered data analytics firm which specializes in machine learning, business intelligence, Statistical Inference, computing and data visualization." },
        {
            name: "Travidaloca",
            link: "https://play.google.com/store/apps/details?id=com.techfarmvillage.travidaloca",
            pic: "./image/travidaloca.webp",
            tools: "Typescript, React Native, Expo Cli",
            category: "Mobile",
            about: "TraVidaLoca is flight, hotel and travel booking application."
        },
        {
            name: "Sabo",
            link: "https://expo.dev/accounts/jaypee/projects/sabo/builds/d6e6079b-48bd-4752-b2aa-e0b919277199",
            pic: "./image/sabo.png",
            tools: "Typescript, React Native, Expo Cli",
            category: "Mobile",
            about: "Establishing a medium for currency exchange"
        },
        { name: "Foosion", link: "https://www.foosionng.com/", pic: "./image/foosion.png", tools: "Next, Typescript, React", category: "Web", about: "Foosion seeks to reduce the ever-growing costs in food prices in the world. Our top priority is to provide quality products at the best prices, food products are delivered in a highly controlled process right from the farms till it gets to the consumer" }
    ];

    const [page, setpage] = React.useState("All");
    function Render() {
        switch (page) {
            case "All":
                return <Box data={data} />;
            case "Web":
                return <Box data={data.filter((data) => data.category === "Web")} />;
            case "Mobile":
                return <Box data={data.filter((data) => data.category === "Mobile")} />;
            default:
                return <Box data={data} />;
        }
    }
    function Box({ data }) {
        return (
            <div className="d-flex flex-wrap justify-content-evenly mb-5">
                {data.map((data) => {
                    return (
                        <div key={data.name} style={{ boxShadow: "10px 3px 20px #00000040" }} className="boxContainer mb-3">
                            <img src={data.pic} className="img-fluid" alt={data.name} />
                            <p className="bg-dark mb-0 px-2 text-light">{data.name}</p>
                            <p className="mb-0">About: {data.about}</p>
                            <p className="my-2">
                                URL:{" "}
                                <a className="" href={data.link}>
                                    Link View
                                </a>
                            </p>
                            <p>Tools: {data.tools}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    const active = (data) => {
        if (page === data) {
            return setpage(data);
        }
        setpage(data);
    };
    return (
        <div className="container">
            <div>
                <h2 className="my-2 fw-bold">Experience</h2>
                <p>Currently have a 2 - 3 years of experience building solutions with frontend technologies such as react, react native, scss, css, typescript, javascript etc.</p>
                <h2 className="my-2 fw-bold">Projects</h2>
                <div className="d-flex ">
                    {["All", "Web", "Mobile"].map((data) => (
                        <p key={data} className="me-3 pe-3 text-decoration-underline" onClick={() => active(data)} style={{ cursor: "pointer" }}>
                            {data}
                        </p>
                    ))}
                </div>
                <div>
                    <Render />
                </div>
            </div>
        </div>
    );
};

export default Experience;
