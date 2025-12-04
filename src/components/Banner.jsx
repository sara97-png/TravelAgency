import React from "react";

import "./Banner.css";

export default function Banner({ image, title }) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-text-container">
        <h1 className="text-content">{title}</h1>
      </div>
    </section>
  );
}
