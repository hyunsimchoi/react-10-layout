import styled from "styled-components";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet } from "react-router";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
`;

function MainLayout() {
    // Outlet
    // 이 자리에 Routes의 내용이 들어올 자리라는걸 표현하는 기능
    return (
        <Wrap>
            <Header />
            <Outlet />
            <Footer />
        </Wrap>
    );
}

export default MainLayout;
