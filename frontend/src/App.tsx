import "./App.css";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query {
    user(id: 1) {
      id
      email
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <p>
        User ID: {data.user.id}, EMAIL: {data.user.email}
      </p>
    </>
  );
}

export default App;
