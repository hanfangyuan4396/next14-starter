"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import styless from "./navLink.module.css";

const NavLink = ({ item }) => {

    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${styless.container} ${pathName === item.path && styless.active}`}>
            {item.title}
        </Link>
    );
}

export default NavLink;
