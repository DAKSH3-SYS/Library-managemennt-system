import styles from "../styles/header.module.css"
export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitles}>
        <span className={styles.headerTitleSm}>Library Management System</span>
        <span className={styles.headerTitleLg}>Piramal</span>

      </div>
      <img className={styles.headerImg} src="https://images.unsplash.com/photo-1457276587196-a9d53d84c58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" alt="" />
    </div>
  )
}