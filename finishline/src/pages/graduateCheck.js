// src/pages/graduateCheck.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import UserHeader from '../components/userHeader'; 
import Footer from '../components/footer';
import logo2 from '../assets/images/logo2.png'; // 로고 이미지
import cap from '../assets/images/cap.png'; // 원 안에 넣을 이미지

const GraduateCheck = () => {
    const totalCredits = 130;
    const completedCredits = 102;

    // 진행률 계산
    const percentage = (completedCredits / totalCredits) * 100;

    return (
        <main className={css(styles.container)}>
            <UserHeader additionalBoldLink="/graduateCheck" /> {/* 특정 링크 강조 */}
            <div className={css(styles.logoSection)}>
                <img src={logo2} alt="Finish Line Logo" className={css(styles.logo)} />
                <h1 className={css(styles.title)}>졸업요건 검사 결과</h1>
            </div>
            <div className={css(styles.resultSection)}>
                <p className={css(styles.userInfo)}>소프트웨어학과 홍길동님의 결과입니다.</p>
                
                {/* 커스텀 원형 프로그래스바 */}
                <div className={css(styles.chartContainer)}>
                    <svg
                        width="200"
                        height="200"
                        viewBox="0 0 120 120"
                        className={css(styles.progressSvg)}
                        style={{ clipPath: 'inset(0px 0px 50px 0px)' }} // 하단 숨기기
                    >
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#e0e0e0" strokeWidth="10" />
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="#4a90e2"
                            strokeWidth="10"
                            strokeDasharray={`${2 * Math.PI * 50}`}
                            strokeDashoffset={`${2 * Math.PI * 50 - (2 * Math.PI * 50 * percentage) / 100}`}
                            style={{
                                transition: 'stroke-dashoffset 0.5s ease',
                                transform: 'rotate(90deg)',
                                transformOrigin: 'center',
                            }}
                        />
                        
                    </svg>
                    {/* 원 안에 이미지 */}
                    <div className={css(styles.innerContent)}>
                        <img src={cap} alt="원 안의 사진" className={css(styles.cap)} />
                        <p className={css(styles.credits)}>{completedCredits} / {totalCredits} 학점</p>
                    </div>
                </div>
                <p className={css(styles.remainingText)}>
                    졸업까지{' '}
                    <span className={css(styles.remainingHighlight)}>{totalCredits - completedCredits} 학점</span>{' '}
                    남았습니다!
                </p>
            </div>
            <Footer />
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
        position: 'relative',
        width: '200px',
        height: '200px',
        margin: '0 auto 20px',
        overflow: 'hidden', // 아래 부분을 숨김
    },
    progressSvg: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    innerContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    cap: {
        width: '120px',
        height: '120px',
        marginTop: '40px',
        marginLeft: '10px',
    },
    credits: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#333',
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
