import React, { useState, useEffect } from 'react';
import { getCollectionByIdUser } from '../../firebase/funciones';
import AddBusiness from '../../components/admin/AddBusiness';
import Business from '../../components/admin/Business';
import { useStore } from 'react-redux';

const Admin = () => {
  const [showInput, setShowInput] = useState(false);
  const [BusinessCollection, setBusinessCollection] = useState([]);
  const { uid } = useStore().getState().auth;

  useEffect(() => {
    getCollectionByIdUser('business', uid, setBusinessCollection);
  }, []);

  const handleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="admin">
      <div className="btn-add">
        <button onClick={handleInput}>New</button>
      </div>
      <div className="admin-lista-projects">
        {BusinessCollection.map((item) => (
          <Business project={item} key={item.id} />
        ))}
      </div>
      {showInput && <AddBusiness setShowInput={setShowInput} />}
    </div>
  );
};

export default Admin;
