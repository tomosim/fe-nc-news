import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { fetchTopics } from "../api";

const Navbar = ({ loggedInUser }) => {
  const [topics, setTopics] = useState([]);
  const [subNavIsOpen, setSubNavIsOpen] = useState(false);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  });

  return (
    <nav>
      <Link to="/">Home</Link>
      <button onClick={() => setSubNavIsOpen(!subNavIsOpen)}>Topics</button>
      <Link to="/new-article">Post New Article</Link>
      {subNavIsOpen && (
        <nav>
          {topics.map((topic) => (
            <Link to={`/${topic.slug}/articles`}>{topic.slug}</Link>
          ))}
        </nav>
      )}
      {loggedInUser === "" ? (
        <Link to="/log-in">Login</Link>
      ) : (
        <Link to="/user/jessjelly">My Profile</Link>
      )}
    </nav>
  );
};

export default Navbar;
