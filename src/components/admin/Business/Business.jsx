import React from 'react';
import { Link } from 'react-router-dom';
import { deleteDocument } from '../../../firebase/funciones';

const Business = ({ project }) => {
  const deleteProject = () => {
    const confirn = confirm('Esta seguro que quire eliminarlo');
    confirn && deleteDocument('business', project.id);
  };

  return (
    <p className="item-business">
      * {project.name}{' '}
      <Link to={`/admin/${project.id}`}>
        <button>go</button>
      </Link>
      <button onClick={deleteProject}>x</button>
    </p>
  );
};

export default Business;
