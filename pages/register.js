import styles from '../styles/login.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    handleParentCallback
} from "../features/loginSlice";
import Button from "../components/button";
import Input from "../components/input";

export default function Login() { 
    // {parentcallback}
    let router = useRouter();
    const disp = useDispatch();
    const [user, setuser] = useState("");
    const [id, setid] = useState("");
    const [success, setsuccess] = useState(false);

    const checkAuthentication = async (e) => {
        e.preventDefault();
        //USE API HERE
        setsuccess(true);

    }
    const setUser = async(e)=>{
        setuser(e.target.value);
        // console.log(user);
      }
      const setId = async(e)=>{
        setid(e.target.value);
        //console.log(id);
      }
    useEffect(() => {
        if (success === true) {
            disp(handleParentCallback(user));
            //navigate("/",{state:{userName:user}});
            router.push('/');
            //console.log(user, id);
        }
    }, [success])

    return (
        <>
            <div className={styles.login}>
                <span className={styles.loginTitle}>Register</span>
                <form className={styles.loginForm}>
                    <label >Student Name </label>
                    <Input type="text" placeholder="Enter Your Name....." function={setUser} />
                    <label >Student Id</label>
                    <Input type="text" placeholder="Enter Your ID....." function={setId} />
                    <Button marginTop="20px" bgColor="teal" title="Register" function={checkAuthentication} />
                    {/* <button className={styles.loginButton} onClick={checkAuthentication}>Register</button> */}
                </form>
            </div>
        </>
    )
}
