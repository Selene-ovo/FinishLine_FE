// src/pages/graduateCheck.js
// 만들고 있습니다.

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import logo2 from '../assets/images/logo2.png'; // 이미지 경로 수정

const GraduateCheck = () => {
    const totalCredits = 130;
    const completedCredits = 102;

    return (
        <main className={css(styles.container)}>
             <Header /> {/* Header 컴포넌트 추가 */}
            <div className={css(styles.logoSection)}>
                <img
                    src={logo2}
                    alt="Finish Line Logo"
                    className={css(styles.logo)}
                />
                <h1 className={css(styles.title)}>졸업요건 검사 결과</h1>
            </div>
            <div className={css(styles.resultSection)}>
                <p className={css(styles.userInfo)}>
                    소프트웨어학과 홍길동님의 결과입니다.
                </p>
                <div className={css(styles.chartContainer)}>
                    <CircularProgressbar
                        value={(completedCredits / totalCredits) * 100}
                        text={`${completedCredits} / ${totalCredits} 학점`}
                        styles={{
                            path: { stroke: '#4a90e2' },
                            text: { fontSize: '16px', fill: '#333' },
                        }}
                    />
                </div>
                <p className={css(styles.remainingText)}>
                    졸업까지 <span className={css(styles.remainingHighlight)}>
                        {totalCredits - completedCredits} 학점
                    </span> 남았습니다!
                </p>
            </div>
            <Footer /> {/* Footer 컴포넌트를 페이지 하단에 추가 */}
        </main>
          
    );
};

const styles = StyleSheet.create({
    container: {

        textAlign: 'center',
        fontFamily: 'Lato',
        backgroundColor: '#FFFEFB',
    },
    logoSection: {
        marginBottom: '20px',
    },
    logo: {
        height: '120px',
        marginBottom: '20px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
    },
    resultSection: {
        marginBottom: '40px',
    },
    userInfo: {
        fontSize: '16px',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    chartContainer: {
        width: '200px',
        height: '200px',
        margin: '0 auto 20px',
    },
    remainingText: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    remainingHighlight: {
        color: '#e74c3c',
    },
});

export default GraduateCheck;
