import {useState} from 'react'
import './App.css'
function App() {
  const [isLogin, setlogin]=useState(true)
  const [username, setusername]=useState('')
  const [email, setemail]=useState('')
  const [password, setpassword]=useState('')
  const [showpassword, setshowpassword]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isLogin){
      alert(`Logged in with Email: ${email}`);
    }
    else{
      alert(`Signed up with username:${username}, Email:${email}`);
    }
    setemail('');
    setusername('');
    setpassword('');
  };
  return (
    <div className="container">
      <div className="form-box">
        <h1>{isLogin?'Login':'Sign up'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin &&(
            <input 
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e)=>setusername(e.target.value)} 
              required
            />
          )}
            <input 
              type="email"
              placeholder="Email"
              value={email} 
              onChange={(e)=>setemail(e.target.value)}
              required 
            />
            <input 
              type={showpassword?'text':'password'} 
              placeholder="Password" 
              value={password} 
              onChange={(e)=>setpassword(e.target.value)}
              required
            />
            <label className="show-pass">
              <input 
                type="checkbox" 
                checked={showpassword} 
                onChange={()=>{setshowpassword(!showpassword)}} 
              />
              Show Password
            </label>
          <button type="submit">{isLogin?'Login':'Sign Up'}</button>
        </form>
          <p>
            {isLogin?"Dont have account?":"Already have account?"}{''}
            <span onClick={()=>setlogin(!isLogin)} className="toggle">
              {isLogin?"Sign Up":"Login"}
            </span>
          </p>
      </div>
    </div>
  );
}

export default App