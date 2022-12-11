import React from 'react'
import Button from '../components/button'
import { useRouter } from 'next/router'
import TopbarAdmin from './topbarAdmin';

export default function deletion() {
    let router = useRouter();
    const deleteStyles = {
        alignItems: "center",
        marginTop: "300px",
        backgroundColor: "#FFB6C1",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }

    const goTodelStudent = async (e) => {
        e.preventDefault();
        console.log("called");
        router.push("/delstudent");

    }
    const goTodelBook = async (e) => {
        e.preventDefault();
        console.log("called");
        router.push("/delbook");

    }
    return (
        <div >
            <TopbarAdmin />
            <div style={deleteStyles}>
                <Button marginTop="20px" bgColor="lightcoral" title="DELETE STUDENT" function={goTodelStudent} />
                <Button bgColor="teal" title="DELETE BOOK" function={goTodelBook} />
            </div>
        </div>
    )
}
