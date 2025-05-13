import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link to="/Kambaz/Courses/1800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/databases.jpg" width={200} />
            <div>
              <h5> CS1400 Database Management Systems </h5>
              <p className="wd-dashboard-course-title">
                Database Management  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link to="/Kambaz/Courses/1255/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5> CS1255 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                Artificial Intelligence  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
          <Link to="/Kambaz/Courses/5220/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/supervised_ml.jpg" width={200} />
            <div>
              <h5> DS5220 Supervised Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Supervised ML  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/Kambaz/Courses/5230/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/unsupervised_ml.jpg" width={200} />
            <div>
              <h5> DS5230 Unsupervised Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Unsupervised ML  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/Kambaz/Courses/5240/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/deep_learning.jpg" width={200} />
            <div>
              <h5> DS5240 Deep Learning </h5>
              <p className="wd-dashboard-course-title">
                Deep Learning  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/Kambaz/Courses/5250/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reinforcement_learning.jpeg" width={200} />
            <div>
              <h5> DS5250 Reinforcement Learning </h5>
              <p className="wd-dashboard-course-title">
                Reinforcement Learning  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}