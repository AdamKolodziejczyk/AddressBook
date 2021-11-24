import React from 'react';

const Main = ({changeUsername}) => {
  return (
    <div>
      <div>
        <div>
          <h1>
            The Main Page
          </h1>
        </div>
      </div>
      <div>
        <div>
          <button onClick={() => changeUsername('Anna')}>Change the Username</button>
        </div>
      </div>
    </div>
  );
};

export default Main;



