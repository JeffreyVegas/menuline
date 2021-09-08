import React, { useState, useEffect, useRef } from 'react';
import { updateDato, deleteDocument } from '../../../firebase/funciones';
import AddProduct from '../AddProduct';
import DynamicModal from '../../common/DynamicModal';
import Confirm from '../../common/Confirm';
import EditCategorie from '../EditCategorie';
import './Categorie.css';
import Products from '../Products';

const Categorie = ({ categorie }) => {
  const refCategorie = useRef(null);
  const [products, setProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState(null);
  const [refEdit, setRefEdit] = useState(null);

  useEffect(() => {
    categorie.products && setProducts(categorie.products);
  }, [categorie]);

  const addProduct = (product) => {
    const ListProduct = products;
    ListProduct.push(product);
    updateDato('categorie', categorie.id, { products: ListProduct });
  };

  const updateCategorie = (data) => {
    updateDato('categorie', categorie.id, data);
  };
  const delteCategorie = (confirn) => {
    confirn && deleteDocument('categorie', categorie.id);
  };

  const handleModal = (option) => {
    switch (option) {
      case 'edit':
        setRefEdit(refCategorie);
        setChildren(
          <EditCategorie
            text={categorie.name}
            editName={updateCategorie}
            setShowModal={setShowModal}
          />
        );
        setShowModal(true);
        break;
      case 'confirm':
        setRefEdit(null);
        setChildren(
          <Confirm
            text="Estas seguro que lo quieres eliminar"
            funcion={delteCategorie}
            setShowModal={setShowModal}
          />
        );
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <li className="collection-item categorie-li">
        <div className="flex-sb-ac" ref={refCategorie}>
          <h5>{categorie.name}</h5>
          <div className="categorie-icons">
            <i className="fas fa-pen" onClick={() => handleModal('edit')}></i>
            <i
              className="far fa-trash-alt"
              onClick={() => handleModal('confirm')}
            ></i>
          </div>
        </div>
        <Products categorie={categorie} />
      </li>
      <DynamicModal
        show={showModal}
        setShow={setShowModal}
        refElement={refEdit}
      >
        {children}
      </DynamicModal>
    </>
  );
};

export default Categorie;
