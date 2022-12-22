import React from "react";

const Recommendation = () => {
    const data = [
        { name: "Elisha Kyakopo", company: "Co.lab", project: "https://healthscribe.netlify.app/", contact: 'https://www.linkedin.com/in/razmih5337a817/' },
        { name: "Emmanuel Ezele", company: "Sabo", project: "https://expo.dev/accounts/jaypee/projects/sabo/builds/d6e6079b-48bd-4752-b2aa-e0b919277199", contact: 'https://www.linkedin.com/in/emmanuel-ezele-009b18146/' },
        { name: "Mary Andres", company: "Co.lab", project: "https://healthscribe.netlify.app/", contact: 'https://www.linkedin.com/in/maryandres/' },
        { name: "Abhinav Kothiala", company: "Co.lab", project: "https://healthscribe.netlify.app/", contact: 'https://www.linkedin.com/in/abhinav-kothiala-bb020544/' },
        { name: "Ignatius Willie", company: "EkoAnalytics", project: "http://ekoanalytics.net/", contact: 'https://www.linkedin.com/in/ignatius-willie-a5006021/' },
        { name: "Oti Victory", company: "Movelite", project: "https://movelite.ng/", contact: 'https://www.linkedin.com/in/oti-victory-85ba79168/' },
        { name: "Idowu Israel", company: "Foosion", project: "https://www.foosionng.com/", contact: 'https://www.linkedin.com/in/israel-idowu/' },
        { name: "Summayah", company: "Yoable", project: "http://yoable.org/", contact: 'N/A' },
        { name: "Chinedu Ofor", company: "Travidaloca", project: "https://play.google.com/store/apps/details?id=com.techfarmvillage.travidaloca", contact: 'N/A' },
        { name: "Kenechi Ifeanyi", company: "Movelite", project: "https://movelite.ng/", contact: 'https://www.linkedin.com/in/kenechi-ifeanyi/' }
    ];
    return (
        <div id="recommendation" className="container py-3">
            <div>
                <h2>Recommendation</h2>
                <p className="mb-5">A curated list of persons that can recommend me and atest to my works.</p>
                <ul className="mt-3 d-flex flex-wrap justify-content-between w-100 list-unstyled">
                    {data.map(({ name, company, project, contact }) => {
                        return (
                            <li key={name} className="mb-4 col-6 col-sm-4 col-lg-3">
                                <div>
                                    <p className="mb-0 fw-bold">{name}</p>
                                    <p className="mb-0">Company: {company}</p>
                                    <p className="mb-0 me-2" style={{wordWrap: 'break-word'}}>Project: {" "} <a href={project} target="_blank" without rel="noreferrer" >{project}</a></p>
                                    <p className="mb-0 me-2" style={{wordWrap: 'break-word'}}>Contact: {" "} <a href={contact} target="_blank" without rel="noreferrer" >{contact}</a></p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Recommendation;
