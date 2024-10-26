// import React from 'react';
// import './Login.css';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2>Login Page</h2>
//       <div className="main-login">
//         <form className="login-form">
//           <div className="input-container">
//             <i className="fas fa-user icon"></i>
//             <input type="text" name="username" placeholder="Enter Name" required />
//           </div>
//           <div className="input-container">
//             <i className="fas fa-envelope icon"></i>
//             <input type="email" name="email" placeholder="Enter Email" required />
//           </div>
//           <div className="input-container">
//             <i className="fas fa-lock icon"></i>
//             <input type="password" name="password" placeholder="Enter Password" required />
//           </div>
//           <div class="login_but">
//           <button type="submit" className="login-btn">Login</button>

//           </div>

         
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div className="main-login">
        <form className="login-form">
          <div className="input-container">
            <i className="fas fa-user icon"></i>
            <input type="text" name="username" placeholder="Enter Name" required />
          </div>
          <div className="input-container">
            <i className="fas fa-lock icon"></i>
            <input type="password" name="password" placeholder="Enter Password" required />
          </div>
          
          <div className="button-container">
            <button type="submit" className="login-btn">Login</button>
          </div>

          <div className="google-signin-container">
            <button className="google-btn">
              <i className="fab fa-google google-icon"></i> Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

