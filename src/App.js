import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/Profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
      <a>
      {githubState.loading ? (
          <p>Loading</p>
          ) : (
            <f>
              <Profile />
              <Repositories />
            </f>
          )}
        </a>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
