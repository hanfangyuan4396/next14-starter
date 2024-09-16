import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';

const PostCard = () => {
    return (
        <div style={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.jpg" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis delectus cum sequi, error rem recusandae laborum ipsum praesentium deleniti quos obcaecati voluptatum laboriosam voluptates officiis nisi! Quas, a rerum?</p>
                <Link href="/blog/post" className={styles.link}>Read More</Link>
            </div>
        </div>
    );
};

export default PostCard;
