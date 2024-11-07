import styled from 'styled-components';

export const LoginFormWrap = styled.form`
    &.login-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        img {
            width: 40%;
            /* width: 30rem; */
            margin: 5%;
        }
        .login-input,
        .failed-input {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
            input {
                border: 1px solid #dcdcdc;
                border-radius: 2rem;
                outline: invert;
                text-indent: 2rem;
                font-size: 1.6rem;
                height: 4rem;
                margin-bottom: 5%;
                width: 40rem;
            }
        }
        .failed-input {
            label {
                font-size: 1.4rem;
                text-align: left;
                margin-bottom: 1rem;
                color: #ed1d24;
            }
            input {
                border: 1px solid #ed1d24;
            }
        }
        button {
            min-width: 14rem;
            font-size: 1.6rem;
        }
    }
`;

export const QuickLoginWrap = styled.ul``;
