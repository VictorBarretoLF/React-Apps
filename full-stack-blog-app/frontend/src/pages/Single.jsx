import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete, MdDraw } from "react-icons/md";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const { postId } = useParams();
  console.log(post);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="single__content">
        <img
          src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imager"
        />
        <div className="single__user">
          {post.author?.image && (
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="images"
            />
          )}
          <div className="single__info">
            <span>{post.author?.username}</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="single__edit">
            <MdDelete className="single__edit--delete" title="delete" />

            <Link to={`/write?edit=2`}>
              <MdDraw className="single__edit--edit" title="edit" />
            </Link>
          </div>
        </div>
        <h1 className="single__title">{post.title}</h1>
        <p className="single__paragraph">{post.desc}</p>
      </div>
      <div className="single__menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
