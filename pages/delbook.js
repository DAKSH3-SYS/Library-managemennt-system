import styles from '../styles/issue.module.css'
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import Button from "../components/button";
import Input from "../components/input";
import TopbarAdmin from "../pages/topbarAdmin";
import Axios from 'axios';
export default function delbook() {
    let router = useRouter();
    const [bookname, setbookname] = useState("");
    const [success, setsuccess] = useState(false);

    const checkAuthentication = async (e) => {
        e.preventDefault();
        //USE API HERE
        const result = await Axios.get(`http://localhost:8080/books`)
        const x = result.data;
        {
            x.map((item) => {
                if (item.bookName === bookname) {
                    const result2 = Axios.delete(`http://localhost:8080/book/${bookname}`)
                    router.push('/bsuccess')
                }
            },
             router.push('/bfailure')
            )
        }
    }

    const setbookName = async (e) => {
        setbookname(e.target.value);
        //console.log(bookname);
    }

    return (
        <>
            <TopbarAdmin />
            <div className={styles.issue}>
                <span className={styles.issueTitle}>Book Information</span>
                <form className={styles.issueForm}>
                    <label >Book Name </label>
                    <Input type="text" placeholder="Enter the Book Name" function={setbookName} />
                    <Button marginTop="20px" bgColor="teal" title="Submit" function={checkAuthentication} />
                </form>
            </div>
        </>
    )
}


