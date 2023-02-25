import React, { FC } from "react";

import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

import './MainLayout.scss';

interface MainLayoutPropsType {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutPropsType> = ({ children }) => {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout; 