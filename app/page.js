'use client'
import SliderElement from "@/components/Slider";
import LoginModal from "@/components/LoginModal";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function Home() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (e) =>{
        e.preventDefault();

        //IMPLEMENT LOGIC HERE

        if(email === 'user@email.com' && password === '123456'){
            setError('');
            setShow(false);
            router.push('/home');
        }else{
            setError('Invalid email or password');
        }
    };

    const handleRegister = (e) =>{
        e.preventDefault();
        setShow(false);
        console.log('registering...', email, password);
        router.push('/home');
    }

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };


  return (
      <>
          <SliderElement/>
          <div className="position-absolute top-0 end-0 p-4">
              <button className="btn btn-light" onClick={() => setShow(true)}>
                  {isLogin ? 'Login' : 'Register'}
              </button>
          </div>
          <LoginModal
            show={show}
            handleClose={() => setShow(false)}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            isLogin={isLogin}
            toggleForm={toggleForm}
          />
      </>
  );
}
