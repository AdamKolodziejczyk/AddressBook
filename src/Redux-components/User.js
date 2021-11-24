import React from 'react';

const User = ({username}) => {
  return ( 
    <div>
      <div>
        <div>
          <h1>
            The User Page
          </h1>
        </div>
      </div>
      <div>
        <div>
          <p>User Name: {username}</p>
        </div>
      </div>
    </div>
  );
}



export default User;



