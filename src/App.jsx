import "./App.css";
import { registerUser } from "./services/registerUser";

export function App() {
  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <div>
      <form>
        <div>
          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>
          <span className="error" role="alert">
            Test error
          </span>
        </div>
        <div>
          <label>
            Name
            <input type="text" placeholder="Name" />
          </label>
          <span className="error" role="alert"></span>
        </div>
        <div>
          <label>
            Age
            <input type="number" placeholder="Age" />
          </label>
          <span className="error" role="alert"></span>
        </div>
        <div>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <span className="error" role="alert"></span>
        </div>
        <div>
          <label>
            Password check
            <input type="password" placeholder="Password check" />
          </label>
          <span className="error" role="alert"></span>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
          </label>
          <span className="error" role="alert"></span>
        </div>

        <button>Sign up</button>
      </form>
    </div>
  );
}
