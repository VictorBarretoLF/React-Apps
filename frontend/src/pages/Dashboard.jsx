import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GoalForm from "../components/GoalForm";

function Dashboard(props) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <Fragment>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </Fragment>
  );
}

export default Dashboard;
