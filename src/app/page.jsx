import styles from "./homepage.module.css";
import Featured from "@/Components/Featured/Featured";
import CategoryList from "@/Components/CategoryList/CategoryList";
import CardList from "@/Components/CardList/CardList";
import Menu from "@/Components/Menu/Menu";

export default function Home() {
  return (
      <div className={styles.container}>
        <Featured></Featured>
        <CategoryList></CategoryList>
        <div className={styles.content}>
            <CardList></CardList>
            <Menu></Menu>
        </div>
      </div>
    )
}
