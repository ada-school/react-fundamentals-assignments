import _ from "lodash";

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {_.fill(Array(10), null).map((_, index) => (
          <li key={index}>Item {index + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage;
