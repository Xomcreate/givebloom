import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// Example content components
function VolunteerA() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("VolunteerA: Help us support children and communities in need.");
  }, []);

  return <section><h2>VolunteerA</h2><p>{content}</p></section>;
}

function VolunteerB() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("VolunteerB: Participate in our local charity events.");
  }, []);

  return <section><h2>VolunteerB</h2><p>{content}</p></section>;
}

function VolunteerC() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("VolunteerC: Join online campaigns to raise awareness.");
  }, []);

  return <section><h2>VolunteerC</h2><p>{content}</p></section>;
}

function VolunteerD() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("VolunteerD: Donate your skills to help our organization grow.");
  }, []);

  return <section><h2>VolunteerD</h2><p>{content}</p></section>;
}

// Main Volunteer Page
function Volunteer() {
  return (
    <>
      <Helmet>
        <title>Volunteer at GiveBloom</title>
        <meta
          name="description"
          content="Join GiveBloom as a volunteer and help support communities in need. Learn about opportunities, events, and campaigns to make a difference."
        />
      </Helmet>

      <div>
        <VolunteerA />
        <VolunteerB />
        <VolunteerC />
        <VolunteerD />
      </div>
    </>
  );
}

export default Volunteer;
