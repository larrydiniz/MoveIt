import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/larrydiniz.png" alt="Larissa Diniz"/>
            <div>
                <strong>Larissa Diniz</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}