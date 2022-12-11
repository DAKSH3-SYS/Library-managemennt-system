import styles from '../styles/issue.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import Button from "../components/button";
import Input from "../components/input";
import TopbarAdmin from "../pages/topbarAdmin";
import Axios from 'axios';
export default function addbook() {
    let router = useRouter();
    const [bookname, setbookname] = useState("");


    const checkAuthentication = async (e) => {
        e.preventDefault();
        //USE API HERE
        const result = await Axios.get(`http://localhost:8080/books`)
        const x = result.data;
        {
            x.map((item) => {
                if (item.bookName === bookname) {
                    router.push('/afailure')
                }
            })
            const result2 = Axios.post(`http://localhost:8080/book/${bookname}`)
            router.push('/asuccess')
        }

    }
    const setbookName = async (e) => {
        setbookname(e.target.value);
        // console.log(id);
    }


    return (
        <>
            <TopbarAdmin />
            <div className={styles.issue}>
                <span className={styles.issueTitle}>Book Information</span>
                <form className={styles.issueForm}>
                    <label >Book Name</label>
                    <Input type="text" placeholder="Enter Your Book Name....." function={setbookName} />
                    <Button marginTop="20px" bgColor="teal" title="Submit" function={checkAuthentication} />
                </form>
            </div>
        </>
    )
}


