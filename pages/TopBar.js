import styles from "../styles/topbar.module.css";
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { handleLogout } from "../features/loginSlice";
// { nameOfUser, username, handleLogout } props of TopBar
export default function TopBar() {
    const disp = useDispatch();
    const nameOfUser = useSelector((state) => state.login.userName);
    const user = useSelector((state) => state.login.userState);

    const logoutStyle = {
        background: "none",
        color: "inherit",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
        marginRight: "20px"
    }
    const goToLogin = async(e) =>{
        e.preventDefault(); 
        
        //console.log("called");
        router.push("/login");
        
      }
    return (
        <div className={styles.top}>
            <div className={styles.topCenter}>
                <ul className={styles.topList}>
                    <li className={styles.topListItem}><Link className={styles.link} href="/" ><a>HOME</a></Link></li>
                    {/* {user ? <li className={styles.topListItem}><Link className={styles.link} href="/ABOUT" ><a>ABOUT</a></Link></li> : <></>} */}
                    {user ? <li className={styles.topListItem}><Link className={styles.link} href="/issue" ><a>ISSUE</a></Link></li> : <></>}
                    {user ? <li className={styles.topListItem}><Link className={styles.link} href="/return" ><a>RETURN</a></Link></li> : <></>}
                    {user ? <li className={styles.topListItem}><Link className={styles.link} href="/login" ><button className={styles.topListItem} style = {logoutStyle} onClick={()=>disp(handleLogout())}>LOGOUT</button></Link></li> : <></>}                                        
                </ul>
            </div>
            <div className='topRight'>
                {user ? (<><span>{ nameOfUser }</span><img className={styles.topImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" alt="" /></>) :
                    (<ul className={styles.topList}><li className={styles.topListItem1}><Link className={styles.link} href="/login"><a>LOGIN/REGISTER</a></Link></li>
                        </ul>)
                }

            </div>
        </div>
    )
}