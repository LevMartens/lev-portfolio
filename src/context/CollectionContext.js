/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { collection, getDocs } from "firebase/firestore/lite";
import React, { useContext, useMemo, useState, useEffect } from "react";

import db from "@firebase/clientApp";

const CollectionContext = React.createContext();

export const CollectionContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const [otherProjects, setOtherProjects] = useState([]);

  const hydrateProjects = async () => {
    const projectsCol = collection(db, "projects");

    const projectsSnapshot = await getDocs(projectsCol);

    const projectsResult = projectsSnapshot.docs.map((doc) => doc.data());

    const sortedProjectResult = projectsResult.sort((a, b) => a.id - b.id);

    setProjects(sortedProjectResult);
  };

  const hydrateOtherProjects = async () => {
    const otherProjectsCol = collection(db, "otherProjects");

    const otherProjectsSnapshot = await getDocs(otherProjectsCol);

    const otherProjectsResult = otherProjectsSnapshot.docs.map((doc) =>
      doc.data()
    );

    const sortedOtherProjectResult = otherProjectsResult.reverse();

    setOtherProjects(sortedOtherProjectResult);
  };

  useEffect(() => {
    hydrateProjects();
    hydrateOtherProjects();
  }, []);

  const value = useMemo(
    () => ({
      // State
      projects,
      otherProjects,
    }),
    [
      // State
      projects,
      otherProjects,
    ]
  );

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};
export const CollectionContextConsumer = CollectionContext.Consumer;

export const useCollectionContext = () => {
  const context = useContext(CollectionContext);

  if (context === undefined) {
    throw new Error(
      "CollectionContext.Consumer must be used within a CollectionContext.Provider :("
    );
  }

  return context;
};

export default CollectionContext;
