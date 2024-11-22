// src/pages/userGuide.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function UserGuide() {
    return (
        <div className={css(styles.container)}>
            <h1 className={css(styles.title)}>추후 완성 예정</h1>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Lato',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    description: {
        fontSize: '18px',
        color: '#555',
    },
});

export default UserGuide;
