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

  return (
    <div className="single">
      <div className="single__content">
        <img
          src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imager"
        />
        <div className="single__user">
          {post.userImg && (
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="images"
            />
          )}
          <div className="single__info">
            <span>{post.username}</span>
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
        <h1 className="single__title">{post.title}</h1>
        <br />
        <p className="single__paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia commodi
          asperiores, accusantium quam non harum optio reprehenderit nobis nihil
          nesciunt illo doloremque ex eaque ipsa est libero minus dolorum ad.
          Facilis sed, voluptas magni corrupti debitis natus, eum saepe error
          temporibus impedit itaque delectus a blanditiis! Eum nobis, aliquam
          tempore numquam provident animi magni ipsam repudiandae nisi
          necessitatibus cum placeat? Natus, non obcaecati vitae magni dolorem
          quo facilis dicta neque omnis explicabo praesentium ut molestiae
          sapiente, impedit minima, odit enim. Alias dolorem reprehenderit
          ratione earum possimus est maxime eius animi.
        </p>
        <br />
        <p className="single__paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia commodi
          asperiores, accusantium quam non harum optio reprehenderit nobis nihil
          nesciunt illo doloremque ex eaque ipsa est libero minus dolorum ad.
          Facilis sed, voluptas magni corrupti debitis natus, eum saepe error
          temporibus impedit itaque delectus a blanditiis! Eum nobis, aliquam
          tempore numquam provident animi magni ipsam repudiandae nisi
          necessitatibus cum placeat? Natus, non obcaecati vitae magni dolorem
          quo facilis dicta neque omnis explicabo praesentium ut molestiae
          sapiente, impedit minima, odit enim. Alias dolorem reprehenderit
          ratione earum possimus est maxime eius animi.
        </p>
      </div>
      <div className="single__menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
