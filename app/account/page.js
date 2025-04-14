'use client';

import { useContext } from 'react';
import { UserContext} from '../components/UserDetails';
import styles from './account.module.css';

export default function account(){
    const {user} = useContext(UserContext);

    return(
        <div className={styles.container}>
            <h1  className={styles.title}>Account</h1>
            {user ? ( 
                <div className={styles.detailsContainer}>
                <p className={styles.detailItem}>
                    <span className={styles.detailLabel}>Username:</span>
                    {user.username}
                </p>
                <p className={styles.detailItem}>
                    <span className={styles.detailLabel}>Email:</span>
                    {user.email}
                </p>
            </div>
            ) : (
                <p className={styles.noDetails}>No details found</p>
            )}
        </div>
    )
}