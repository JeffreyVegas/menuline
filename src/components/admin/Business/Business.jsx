import React from 'react';
import { Link } from 'react-router-dom';
import { deleteDocument } from '../../../firebase/funciones';
import './Business.css';

const Business = ({ project }) => {
  const deleteProject = () => {
    const confirn = confirm('Esta seguro que quire eliminarlo');
    confirn && deleteDocument('business', project.id);
  };

  return (
    <li className="collection-item">
      <div>
        {project.name}
        <div className="secondary-content business-icons">
          <Link to={`/admin/${project.id}`}>
            <i className="far fa-share-square"></i>
          </Link>
          <i
            className="far fa-trash-alt"
            onClick={() => console.log('hola')}
          ></i>
        </div>
      </div>
    </li>
  );
};

export default Business;
