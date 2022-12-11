import styles from '../styles/issue.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../components/button";
import Input from "../components/input";
import TopBar from './topbar';
import Axios from 'axios';
import TopbarAdmin from './topbarAdmin';
export default function returns() {
  let router = useRouter();
  const nameOfUser = useSelector((state) => state.login.userName);
  const [id, setid] = useState("");
  const [bookname, setbookname] = useState("");
  const [success, setsuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const checkAuthentication = async (e) => {
    e.preventDefault();
    //will check here if had issue the book.
    //USE API HERE
    const result = await Axios.get(`http://localhost:8080/book/${bookname}`)
    const result2 = await Axios.get(`http://localhost:8081/student/${id}`)
    const x = result2.data.studentIssuedBooks;
    {
      x.map((item) => {
        if (item.bookName === bookname) {
          return setsuccess(true)
        }
        else {
          // router.push('/rfailure')
          setIsOpen1(true)
        }
      })
    }
    if (success === false) {
      // router.push('/rfailure')
      setIsOpen1(true)
    }
  }
  const setId = async (e) => {
    setid(e.target.value);
    // console.log(id);
  }
  const setbookName = async (e) => {
    setbookname(e.target.value);
    //console.log(bookname);
  }
  useEffect(() => {
    if (success === true) {
      //will issue the book in name of student 
      // router.push('/rsuccess');
      setIsOpen(true)
      const returned = Axios.get(`http://localhost:8081/student/return/${id}/${bookname}`)
    }
  }, [success])
  const togglePopup = () => {
    setIsOpen(false);
    setIsOpen1(false);
  };
  return (
    <>
      {nameOfUser === "Admin" ? <><TopbarAdmin /></> : <> <TopBar /> </>}
      <div className={styles.issue}>
        <span className={styles.issueTitle}>RETURN</span>
        <form className={styles.issueForm}>
          <label >Book Name </label>
          <Input type="text" placeholder="Enter the Book Name" function={setbookName} />
          <label >Student Id</label>
          <Input type="text" placeholder="Enter Your ID....." function={setId} />
          <Button marginTop="20px" bgColor="teal" title="Return" function={checkAuthentication} />
        </form>
        {isOpen ? <PopUp message="Book returned Successfully." handleClose={togglePopup} /> : null}
        {isOpen1 ? <PopUp message="Invalid Book Name/ Book is not issued " handleClose={togglePopup} /> : null}
      </div>
    </>
  )

}


