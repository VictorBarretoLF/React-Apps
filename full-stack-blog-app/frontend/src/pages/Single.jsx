import { MdDelete, MdDraw } from "react-icons/md";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="single__content">
        <img
          src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imager"
        />
        <div className="single__user">
          <img
            src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="images"
          />
          <div className="single__info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="single__edit">
            <Link to={`/write?edit=2`} className="single__edit--icons">
              <MdDelete title="delete" />
            </Link>
            <Link to={`/write?edit=2`} className="single__edit--icons">
              <MdDraw title="edit" />
            </Link>
          </div>
        </div>
      </div>
      <div className="single__menu">m</div>
    </div>
  );
};

export default Single;
