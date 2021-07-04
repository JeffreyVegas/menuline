import { db, storage } from './firebase-config';

export const newCollection = async (nameCollection, data) => {
  await db
    .collection(nameCollection)
    .add(data)
    .then((data) => {
      console.log('exito');
    })
    .catch((err) => {
      throw new Error(`Error al crear ${nameCollection}: ${err}`);
    });
};

export const updateDato = async (nameCollection, id, dato) => {
  await db
    .collection(nameCollection)
    .doc(id)
    .update(dato)
    .then(() => {
      console.log('hola');
    })
    .catch((err) => {
      throw new Error(`Error al crear ${nameCollection}: ${err}`);
    });
};

export const getCollection = async (nameCollection, state) => {
  await db
    .collection(nameCollection)
    .orderBy('date')
    .onSnapshot((querySnapshot) => {
      state(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
};

export const getCollectionByIdUser = async (nameCollection, iduser, state) => {
  await db
    .collection(nameCollection)
    .where('idUser', '==', iduser)
    .onSnapshot((querySnapshot) => {
      state(
        querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => a.date - b.date)
      );
    });
};

export const getCollectionByParameter = async (
  nameCollection,
  parameter,
  state
) => {
  await db
    .collection(nameCollection)
    .where(
      `${Object.keys(parameter)[0]}`,
      '==',
      parameter[Object.keys(parameter)[0]]
    )
    .onSnapshot((querySnapshot) => {
      state(
        querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => a.date - b.date)
      );
    });
};

export const deleteDocument = async (namecollection, id) => {
  await db
    .collection(namecollection)
    .doc(id)
    .delete()
    .then(() => console.log('removed success'))
    .catch((e) => console.log(e));
};

export const uploadFile = async (pathFile, name, file) => {
  const ref = storage.ref();
  await ref.child(`${pathFile}/${name}`).put(file);
  return await storage.ref(pathFile).child(`${name}`).getDownloadURL();
};

export const deleteFile = async (pathFile, name) => {
  const ref = storage.ref();
  ref
    .child(`${pathFile}/${name}`)
    .delete()
    .then(() => console.log('File delete'));
};
