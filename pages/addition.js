import React from 'react'
import Button from '../components/button'
import { useRouter } from 'next/router'
import TopbarAdmin from './topbarAdmin';

export default function addition() {
    let router = useRouter();
    const addStyles = {
        alignItems: "center",
        marginTop: "300px",
        backgroundColor: "#FFB6C1",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
    const goToaddStudent = async (e) => {
        e.preventDefault();
        router.push("/addstudent");

    }
    const goToaddBook = async (e) => {
        e.preventDefault();
        router.push("/addbook");

    }
    return (
        <div>
            <TopbarAdmin />
            <div style={addStyles}>
                <Button marginTop="20px" bgColor="lightcoral" title="ADD STUDENT" function={goToaddStudent} />
                <Button bgColor="teal" title="ADD BOOK" function={goToaddBook} />
            </div>
        </div>
    )
}
