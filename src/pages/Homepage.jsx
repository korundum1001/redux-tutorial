import Profile from "../components/Profile";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <div>
      <h1>test</h1>
      <Profile />
      <button onClick={handleLogin}>log in</button>
    </div>
  );
};

export default HomePage;
