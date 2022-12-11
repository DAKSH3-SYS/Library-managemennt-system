import styles from '../styles/issue.module.css'
import {  useRouter } from 'next/router'
import { useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import Button  from "../components/button";
import Input from "../components/input";
import TopBar from './topbar';
import  Axios from 'axios';
import TopbarAdmin from './topbarAdmin';
import  PopUp from '../components/popUp';
export default function issue() { 
  let router = useRouter();
  const nameOfUser = useSelector((state) => state.login.userName);
  const [id,setid]=useState("");
  const [bookname,setbookname]=useState("");
  const [success,setsuccess]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const checkAuthentication = async(e) => {
    e.preventDefault(); 
    //will check here if student reaches max no.
    //USE API HERE
    const result = await Axios.get(`http://localhost:8080/book/${bookname}`)
    const result2 = await Axios.get(`http://localhost:8081/student/${id}`)
    if(result2.data.maxIssuing===0){
      // router.push('/maxfailure')
      setIsOpen1(true)
  }
  if(result.data.bookStatus === "Absent"){
      // router.push('/ifailure')
      setIsOpen2(true)
  }
    if(result2.data.maxIssuing>0  && result.data.bookStatus === "Present" ){
        //console.log("gg");
        setsuccess(true);
        setIsOpen(true)
        //  router.push('/isuccess');
        //<Success title="issue"/>
    } 
    if(result2.data.maxIssuing===0){
        // router.push('/maxfailure')
        setIsOpen1(true)
    }
    if(result.data.bookStatus === "Absent"){
        // router.push('/ifailure')
        setIsOpen2(true)
        setIsOpen
    }
    //console.log(result);
    //console.log("functione send successfully as a prop")
  }
  const setId = async(e)=>{
    setid(e.target.value);
    // console.log(id);
  }
  const setbookName = async(e)=>{
    setbookname(e.target.value);
    //console.log(bookname);
  }
  useEffect(()=>{
    if(success===true){
      //will issue the book in name of student 
      const issued =  Axios.get(`http://localhost:8081/student/issue/${id}/${bookname}`)
    }
  }, [success])
  const togglePopup = () => {
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
  };
  return (
    <>
    {nameOfUser==="Admin" ? <><TopbarAdmin /></> :<> <TopBar /> </>}                                        
    <div className={styles.issue}>
        <span className={styles.issueTitle}>Issue</span>
        <form className={styles.issueForm}>
            <label >Book Name </label>
            <Input type="text" placeholder="Enter the Book Name" function={setbookName} />
            <label >Student Id</label>
            <Input type="text" placeholder="Enter Your ID....." function={setId} />
            <Button marginTop="20px" bgColor="teal" title = "Issue" function={checkAuthentication} />
        </form>
        {isOpen ? <PopUp message="Book issued Successfully." handleClose={togglePopup} /> : null}
        {isOpen1 ? <PopUp message="You Have already issued Max Book" handleClose={togglePopup} /> : null}
        {isOpen2 ? <PopUp message="Book is already issued" handleClose={togglePopup} /> : null}

    </div>
    </>
  )
}


