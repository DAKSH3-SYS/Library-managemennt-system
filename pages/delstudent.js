import styles from '../styles/issue.module.css'
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import Button from "../components/button";
import Input from "../components/input";
import TopbarAdmin from "../pages/topbarAdmin";
import Axios from 'axios';
export default function delstudent() {
    let router = useRouter();
    const [user, setuser] = useState("");
    const [id, setid] = useState("");


    const checkAuthentication = async (e) => {
        e.preventDefault();
        //USE API HERE
        const result = await Axios.get(`http://localhost:8081/students`)
        const x = result.data;
        {
            x.map((item) => {
                if (item.studentId === id) {
                    const result2 = Axios.delete(`http://localhost:8081/student/delete/${id}`)
                    router.push('/bsuccess')
                }
            },
             router.push('/bfailure')
            )
        }
    }

    const setUser = async (e) => {
        setuser(e.target.value);
        //console.log(bookname);
    }
    const setId = async (e) => {
        setid(e.target.value);
        //console.log(bookname);
    }

    return (
        <>
            <TopbarAdmin />
            <div className={styles.issue}>
                <span className={styles.issueTitle}>Student Information</span>
                <form className={styles.issueForm}>
                    <label >Student Name </label>
                    <Input type="text" placeholder="Enter the Student Name" function={setUser} />
                    <label >Student Id </label>
                    <Input type="text" placeholder="Enter the Student Id" function={setId} />
                    <Button marginTop="20px" bgColor="teal" title="Submit" function={checkAuthentication} />
                </form>
            </div>
        </>
    )
}


