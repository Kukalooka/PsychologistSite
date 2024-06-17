import styles from "./footer.module.css";

const Footer = () => {
    return (
    <footer>
        <section className={styles.Credits}>
            <a className={styles.linkStyle} href="https://www.freepik.com/free-vector/dandelion-background-design_921206.htm#query=dandelion%20svg
            &position=2&from_view=keyword&track=ais_user&uuid=732b4b31-c8bf-4de0-9e1b-ad64412c5e3b">Link do źródła obrazu Dmuchawca</a> <br></br> <br></br>
            <a className={styles.linkStyle} href="https://github.com/Kukalooka">Strona autorstwa: Drąg Aleksander</a>
        </section>
    </footer>
    );
};
  
export default Footer;