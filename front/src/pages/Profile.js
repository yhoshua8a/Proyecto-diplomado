import React from 'react';

const Profile = () => {
    return (

      
        <section className="container-profile">
              <h1 className="title">Perfil</h1>

              <div className="profile-avatar">
                  <img src="./profile.png"/>
              </div>
              <div className="profile-info">
                  <p><strong>Nombre:</strong> Yhoshua Alejandro Ochoa Solis</p>
                  <p><strong>Edad:</strong> 26</p>
                  <p><strong>Estatus Alumno:</strong> Regular</p>
                  <p><strong>Promedio:</strong> 10</p>
                  <p><strong>Tutor:</strong> Benito Samuel Lazo</p>
              </div>
            </section>
    );
}

export default Profile;