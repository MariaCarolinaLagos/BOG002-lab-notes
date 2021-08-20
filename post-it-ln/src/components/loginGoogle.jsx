import React, { useState } from "react";
import { auth, google } from "../firebase-config";

function LogGoogle() {
  // const [user, setUser] = useState(null)
  const [photo, setPhoto] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  const loginGoogle = () => {
    auth
      .signInWithPopup(google)
      .then((ans) => {
        // console.log(user)
        // setUser(respuesta.user)
        setPhoto(ans.user.photoURL);
        setDisplayName(ans.user.displayName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1> inicia con GOOGLE</h1>
      <button onClick={loginGoogle} img="">
        GOOGLE
      </button>
      <br />

      {photo ? (
        <div>
          <img height="150" src={photo} alt={"foto usuario" + displayName} />
          <p>{displayName}</p>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default LogGoogle;
