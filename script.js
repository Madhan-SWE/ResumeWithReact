/* Header Components */

const Name = (props) => {
    return <h1 className="text-center display-6 p-2">{props.name}</h1>;
};

const Title = (props) => {
    return <h2 className="text-center display-6">{props.title}</h2>;
};

/* Header Details and its Components */

const CellphoneIcon = () => {
    return <i class="fa fa-mobile-alt" aria-hidden="true"></i>;
};

const Phone = () => {
    return (
        <div className="col-6 col-lg-3">
            {" "}
            <CellphoneIcon /> +91-8110805088
        </div>
    );
};

const EnvelopeIcon = () => {
    return <i class="fa fa-envelope" aria-hidden="true"></i>;
};

const Email = () => {
    return (
        <div className="col-6 col-lg-3">
            {" "}
            <EnvelopeIcon /> rcmadhankumar@gmail.com
        </div>
    );
};

const LinkedinIcon = () => {
    return (
        <i class="fab fa-linkedin" aria-hidden="true">
            {" "}
        </i>
    );
};

const LinkedIn = () => {
    return (
        <div className="col-6 col-lg-3">
            <LinkedinIcon />
            <a href="https://www.linkedin.com/in/madhankumar-chellamuthu-4b294711b">
                Madhankumar Chellamuthu
            </a>
        </div>
    );
};

const GithubIcon = () => {
    return (
        <i class="fab fa-github" aria-hidden="true">
            {" "}
        </i>
    );
};

const Github = () => {
    return (
        <div className="col-6 col-lg-3">
            <GithubIcon />
            <a href="https://github.com/Madhan-SWE">Madhan-SWE</a>
        </div>
    );
};

const HeaderDeatailsSection = () => {
    return (
        <div className="row p-4 text-center">
            <Phone />
            <Email />
            <LinkedIn />
            <Github />
        </div>
    );
};

const Header = () => {
    return (
        <div className="bg-dark text-white">
            <Name name="Madhankumar Chellamuthu" />
            <Title title="Software Engineer" />
            <HeaderDeatailsSection />
        </div>
    );
};

/* Resume Body Section */

const Strong = (props) => {
    return <strong>{props.name}</strong>;
};


const CareerDescription = () => {
    return (
        <div class="col-12">
            <p>
                {" "}
                Software Engineer with 2.5 years of experience in{" "}
                <Strong name="Python Development" />,{" "}
                <Strong name="Automation" />, and
                <Strong name=" devops" /> Using agile methodology. Aiming for a
                career in a healthy and challenging work environment where one
                can utilize their knowledge and skills efficiently.
            </p> <hr />
        </div>
    );
};



/* Experience Section */


const Years = (props) => {
    return (
        <div class="col-12 col-md-2">
            <h6>
                {" "}
                <Strong name={props.name} />
            </h6>
        </div>
    );
};

const Company = () => {
    return (
        <div className="row">
            <div className="col-12">
                <Strong name="MapleLabs"></Strong>
            </div>
        </div>
    );
};

const Role = () => {
    return (
        <div class="row">
            <div className="col-12">
                Software Enigneer
            </div>
        </div>
    )
}

const CompanyLocationIcon = () => {
    return (
        <i class="fa fa-map-marker" aria-hidden="false"></i>
    );
};

const CompanyLocation = () => {
    return(
        <div class="row">
            <div className="col-12">
            <CompanyLocationIcon />
            Koramangala, Bangalore.
            </div>
        </div>
    )
}



const ExperienceDescription = () => {
    return (
        <div className="col-10">
            <Company />
            <Role />
            <CompanyLocation />
        </div>
    );
};


const Experience = () => {
    return (
        <div className="col-12">
            <h3>Experience: </h3> <hr />
            <div className="row">
            <Years name="July-2018 - Present"/>
            <ExperienceDescription />
            </div>
        </div>
    );
};


/* Education Section */

const College = () => {
    return (
        <div class="row">
            <div className="col-12">
                <Strong name="Kongu Engineering College" />
            </div>
        </div>
    )
}

const Degree = () => {
    return (
        <div class="row">
            <div className="col-12">
                Bachelor of Technology (Information Technology)
            </div>
        </div>
    )
}

const UniversityAndMarks = () => {
    return (
        <div class="row">
            <div className="col-12">
                Anna University - Marks 8.2[CGPA]
            </div>
        </div>
    )
}
const EducationDescription = () => {
    return (
        <div className="col-10">
           <College />
           <Degree />
           <UniversityAndMarks />
        </div>
    );
}

const Education  = () => {
    return (
        <div className="col-12">
            <h3>Education:</h3> <hr />
            <div className="row">
             <Years name="July-2014 - 2018"/>
             <EducationDescription />
            </div>
        </div>
    )
}

/* Projects Section */

const SnappyFlow = () => {
    return (
        <div className="col-12 col-md-10">
           <h4 className="p-2"> SnappyFlow </h4>
           <ul>
               <li>Automated Spark, Hive and OOZIE jobs to run on Hadoop cluster deployed via SnappyFlow</li>
               <li>Converted Hadoop Deployment template of Snappy Flow from AWS to Vcenter</li>
               <li>Involved in the development of plugins to monitor Spark, Hive and OOZIE jobs via SnappyFlow</li>
           </ul>
        </div>
    );
}


const HxAP = () => {
    return (
        <div className="col-12 col-md-10">
           <h4 className="p-2"> HxAP [Hyperflex Appliance Platform] </h4>
           <ul>
               <li>Developed templates for generating HxAP deployment configuration files</li>
               <li>Added a frame work to verify affinity and affinity relationships among Virtual Machines</li>
               <li>Developed libraries to verify VMs and Its configuration, stated created using HxAP platform</li>
               <li>Worked on automating the techsupport bundles collection from Intersight</li>
               <li>Created a tool to monitor CI job results and analyse failures from an interactive UI</li>
               <li>Added methods in QALI automation frame work for HxAP platform</li>
           </ul>
        </div>
    );
}

const ProjectDescription = () => {
    return (
        <div className="col-12">
            <div className="row">
             <Years name="July-2018 - Dec 2018"/>
             <SnappyFlow />
            </div><hr />
            <div className="row">
             <Years name="Jan-2019 - Present"/>
             <HxAP />
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="col-12">
            <h3>Projects: </h3> <hr />
            <div className="row">
            <ProjectDescription />
            </div>
        </div>
    );
};


/* Skills Section */

const Pill = (props) => {
    return (
        <span class="badge badge-secondary">{props.name}</span>
    )
}

const SkillPills = () => {
    return (
        <div className="offset-md-2 col-md-10 col-12">
            <h5>
                <Pill name="Python" />
                <Pill name="Javascript" />
                <Pill name="NodeJS" />
                <Pill name="Express JS" />
                <br />
                <Pill name="React JS" />
                <Pill name="Mongo DB" />
                <Pill name="HTML and CSS" />
                <Pill name="Bootstrap" />
                <br />
                <Pill name="TypeScript" />
                <Pill name="MySQL" />
                <Pill name="Docker" />
                <Pill name="Kubernetes" />
                <br />
                <Pill name="Ansible" />
                <Pill name="Terraform" />
                <Pill name="Jenkins" />
                <Pill name="Flask" />
                <Pill name="Git" />
            </h5>
        </div>
    )
}

const Skills = () => {
    return (
        <div className="col-12">
            <h3>Skills </h3> <hr />
            <div className="row">
                    <SkillPills />
            </div>
        </div>
    );
}

/* Other Projects */

const ZomatoClone = () => {
    return (
        <div className="col-12 col-md-10 offset-md-2">
           <h4 className="p-2"> Zomato Clone Application </h4>
           <ul>
               <li>Created a Front End clone of Zomato food ordering application</li>
               <li>Displayed various collections, cusines and restaurants based on user's search</li>
               <li>The data was collected from Zomato APIs</li>
           </ul>
        </div>
    );
}


const QuizApp = () => {
    return (
        <div className="col-12 col-md-10 offset-md-2">
           <h4 className="p-2"> QUIZ Application </h4>
           <ul>
               <li>Created a completed front end quiz application using HTML, CSS and Typescript</li>
               <li> Used local storage for storing user high scores and name</li>
               <li>The questions and answers were collected from OpenTriviaDB APIs</li>
           </ul>
        </div>
    );
}

const URLSHortnerApp = () => {
    return (
        <div className="col-12 col-md-10 offset-md-2">
           <h4 className="p-2"> URL Shortner Application </h4>
           <ul>
               <li>Created a URL shortner fullstack application by using NodeJS as backend and HTML, CSS and Bootstrap as front end</li>
               <li> JSON Web token was used to authenticate users in the system </li>
               <li>Node mailer was used to send account activation links and password reset links to the user</li>
               <li>A dashboard was implemented using chartsJS to view number of urls created per day and in a month</li>
               <li>URLs and Shortned URLs were stored in mongoDB</li>
           </ul>
        </div>
    );
}

const OtherProjectDescription = () => {
    return (
        <div className="col-12">
            <div className="row">
             <ZomatoClone />
            </div><hr />
            <div className="row">
             <QuizApp />
            </div><hr />
            <div className="row">
             <URLSHortnerApp />
            </div>
        </div>
    )
}




const OtherProjects = () => {
    return (
        <div className="col-12">
            <h3>Other Projects: </h3> <hr />
            <div className="row">
            <OtherProjectDescription />
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="p-4">
        <div className="row"> <CareerDescription /></div>
        <div className="row"><Education /></div>
        <div className="row"><Experience /></div>
        <div className="row"><Projects/></div>
        <div className="row"><Skills/></div>
        <div className="row"><OtherProjects/></div>
        </div>
    );
};







const Footer = () => {
    return <div>
        <hr />
    </div>;
};

const App = () => {
    return (
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
