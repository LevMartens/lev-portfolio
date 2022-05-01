import db from '@firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';

const useCollection = () => {
    const [projects, setProjects] = useState([]);

    const initializeProjects = async () => {
        const projectsCol = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsResult = projectsSnapshot.docs.map(doc => doc.data());

        setProjects(projectsResult);
    };
    return {
        // State
        projects,

        // Functions
        initializeProjects,
        // Errors
    };
};

export default useCollection;
