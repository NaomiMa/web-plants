import { useState } from "react";
import { useLogin } from "../../hook/useLogin";

// styles
import "../Signup/Signup.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form" dir="rtl" >
      <h2>התחברות</h2>
      <label>
        <span>דוא"ל:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>סיסמא:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <br />
      <br />

      {!isPending && <button className="btn">התחבר</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
  //   <div className="auth-form">
  //     <Container>
  //       <h2>התחברות</h2>
  //       <form onSubmit={handleSubmit}>
  //         <label>
  //           <Typography variant="h6" gutterBottom component="div">
  //             email:
  //           </Typography>
  //           <TextField
  //             required
  //             id="outlined-password-input"
  //             label="email"
  //             type="email"
  //             autoComplete="username"
  //             onChange={(e) => setEmail(e.target.value)}
  //             value={email}
  //           />
  //         </label>
  //         <label>
  //           <Typography variant="h6" gutterBottom component="div">
  //             password:
  //           </Typography>
  //           <span></span>
  //           <TextField
  //             required
  //             id="outlined-password-input"
  //             label="password"
  //             type="password"
  //             autoComplete="current-password"
  //             onChange={(e) => setPassword(e.target.value)}
  //             value={password}
  //           />
  //       </label>
  //       <br/>        <br/>

  //         {!isPending && <Button className="btn">התחבר</Button>}
  //         {isPending && <Button className="btn" disabled>loading</Button>}
  //         <br/>
  //         {/* <Button handelForgotPsssword = {handelForgotPsssword}>שכחתי סיסמא</Button> */}
  //         {error && <div className='error'>{ error }</div>}

  //       </form>
  //     </Container>
  //   </div>
  // );
}
