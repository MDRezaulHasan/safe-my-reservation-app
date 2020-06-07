import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import "../checkIn/CheckInCheckOut.css"

const Confirm = ({ getData }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    addData();
    const db = firebase.firestore();
    db.collection("dataForConfirmation").onSnapshot((snapshot) => {
      const newDataArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataArray(newDataArray);
    });
  }, []);

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      const db = firebase.firestore();
      db.collection("dataForConfirmation")
        .doc(key)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    }
  };
  const addData = () => {
    const db = firebase.firestore();
    const userRef = db.collection("dataForConfirmation").add({
      address: getData.address,
      locality: getData.locality,
      countryName: getData.countryName,
      countryCode: getData.countryCode,
      price: getData.price,
    });
  };
  return (
    <div className="row">
      <h4>
        Here you can see your booking. After the confirmation we can send you a
        email.Thank you
      </h4>
      <table className="table table-borderless table-stripped">
        <thead className="thead-light">
          <tr>
            <th>Address</th>
            <th>Locality</th>
            <th>Country Name</th>
            <th>Country Code</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((dataItem) => {
            console.log("id: " + dataItem.id);
            return (
              <tr key={dataItem.id}>
                <td>{dataItem.address}</td>
                <td>{dataItem.locality}</td>
                <td>{dataItem.countryName}</td>
                <td>{dataItem.countryCode}</td>
                <td>{dataItem.price}</td>
                <td>
                  <a
                    className="btn test-danger"
                    onClick={() => {
                      onDelete(dataItem.id);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Confirm;
