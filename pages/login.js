import styles from '../styles/login.module.css'
import { useRouter } from 'next/router'
import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import {
  handleParentCallback
} from "../features/loginSlice";
import Axios from "axios";
import Button  from "../components/button";
import Input from "../components/input";
import PopUp from '../components/popUp'
export default function Login() { // {parentcallback}
  let router = useRouter();
  const disp = useDispatch();
  const [user,setuser]=useState("");
  const [id,setid]=useState("");
  const [success,setsuccess]=useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const checkAuthentication = async(e) => {
    e.preventDefault(); 
    //USE API HERE
    Axios.get(`http://localhost:8081/student/${id}`).then((response)=>{
      if(response.data.studentName===user) {setsuccess(true);
         console.log(response.data.studentName)} 
      else{
        // router.push('/lfailure');
        // console.log("invalid")
        setIsOpen(true)
      }   
        //  console.log("functione send successfully as a prop")
    })
    
    // setsuccess(true);
  }
  const goToRegister = async(e) =>{
    e.preventDefault(); 
    console.log("called");
    router.push("/register");
    
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const goToAdmin = async(e) =>{
    e.preventDefault(); 
    setsuccess(true);
    if(user==="Admin"){
    console.log("called");
    router.push("/admin");
    disp(handleParentCallback(user));
    console.log(user,id);
    }
    
    else{
      setIsOpen(true)
    }
    
  }
  const setUser = async(e)=>{
    setuser(e.target.value);
    // console.log(user);
  }
  const setId = async(e)=>{
    setid(e.target.value);
    //console.log(id);
  }
  useEffect(()=>{
    if(success===true && user!=="Admin"){
      disp(handleParentCallback(user));
      //navigate("/",{state:{userName:user}});
      router.push('/');
      console.log(user,id);
    }
  
  }, [success])

  return (
    <>
    <div className={styles.login}>
        <span className={styles.loginTitle}>Login</span>
        <form className={styles.loginForm}>
            <label >Student Name </label>
            <Input type="text" placeholder="Enter Your Name....." function={setUser} />
            <label >Student Id</label>
            <Input type="text" placeholder="Enter Your ID....." function={setId} />
            <Button className="min-w-[30px]" marginTop="20px" bgColor="lightcoral" title = "Login"  function={checkAuthentication} />
            <Button className="min-w-[30px]" bgColor="teal" title = "Register" function={goToRegister}/>
            <Button  className="min-w-[30px]" bgColor="lightcoral" title = "Login As Admin" function={goToAdmin}/>
        </form>
        {isOpen ? <PopUp message="Invalid ID/Name" handleClose={togglePopup} /> : null}
    </div>
    </>
  )
}


// import Link from 'next/link'
{/* <input type="text" className={styles.loginInput} onChange={(e)=>setuser(e.target.value)} placeholder="Enter Your ID....." /> */}
{/* <input type="password" className={styles.loginInput} onChange={(e)=>setid(e.target.value)} placeholder="Enter Your Password....." /> */}
{/* <button className={styles.loginButton} onClick={checkAuthentication}>Login</button> */}
{/* <Link className={styles.link} href="/register" ><button className={styles.loginRegisterButton} >Register Here</button></Link> */}
