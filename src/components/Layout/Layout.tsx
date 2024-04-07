import {FC, ReactNode} from "react";
import {Footer} from "./ui/Footer/Footer";
import {Header} from "./ui/Header/Header";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode[] | ReactNode;
}

export const Layout = ({children}: LayoutProps) => (
  <div className={styles.root}>
    <Header />
    {children}
    <Footer />
  </div>
);
