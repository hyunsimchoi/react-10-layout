import styled from "styled-components";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet } from "react-router";
import type { Dispatch, SetStateAction } from "react";

const Wrap = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

function MainLayout({
    toggleTheme,
    theme,
    setTheme,
}: {
    toggleTheme: () => void;
    theme: "light" | "dark";
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}) {
    // Outlet
    // 이 자리에 Routes의 내용이 들어올 자리라는걸 표현하는 기능
    return (
        <Wrap>
            <Header toggleTheme={toggleTheme} />
            <Outlet />
            <Footer />
        </Wrap>
    );
}

export default MainLayout;
