import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
    return (
        <div className={styles.cointaer}>
            <div className={styles.imgContainer}>
                <Image
                    src="/postDetail.jpg"
                    alt=""
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.textCointaner}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image 
                        className={styles.avatar}
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>San Zhang</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>2024.09.16</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam, eveniet recusandae ad nisi repellat nostrum odit sapiente quos non consectetur voluptates, in nam illum aliquid et hic, obcaecati sit.
                </div>
            </div>
        </div>
    )
};

export default SinglePostPage;
