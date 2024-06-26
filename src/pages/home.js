import styles from "./home.module.css";
import SvgImg from './dmuchawiec.svg';

const Home = () => {
    return (
    <div className={styles.mainCont}>
        <img src={SvgImg} className={styles.transImg} height="800px" alt="Dmuchawiec"/>
        <header>
            <h1>
                Witam na stronie usług psychologicznych
            </h1>
            <p>
                Cieszę się, że odwiedziłeś moją stronę. Nazywam się <b>Dominika Drąg</b> i jestem doświadczonym psychologiem, 
                który z pasją i zaangażowaniem pomaga ludziom w ich codziennych zmaganiach oraz w odkrywaniu lepszej wersji siebie. 
                Moja praktyka opiera się na empatii, zrozumieniu i profesjonalnym wsparciu, które dostosowuję indywidualnie do potrzeb każdego klienta.
            </p>
        </header>
        <main>
            <article className={styles.czemuJa}>
                <h2>
                    Dlaczego warto wybrać mnie?
                </h2>
                <ul>
                    <li><b>Profesjonalizm:</b> Posiadam wieloletnie doświadczenie w pracy z różnorodnymi problemami psychologicznymi.</li>
                    <li><b>Indywidualne podejście:</b> Każdy klient jest dla mnie wyjątkowy, dlatego dostosowuję swoje metody pracy do jego unikalnych potrzeb.</li>
                    <li><b>Poufność:</b> Wszystkie sesje odbywają się w atmosferze pełnej dyskrecji i zaufania.</li>
                    <li><b>Wygodne terminy:</b> Oferuję elastyczne godziny spotkań, aby dopasować się do Twojego grafiku.</li>
                </ul>
            </article>
            <article className={styles.uslugi}>
                <h3>
                    Usługi które oferuje
                </h3>
                <ul>
                    <li><b>Indywidualna</b> pomoc psychologiczna</li>
                    <li><b>Poradnictwo</b> psychologiczne</li>
                    <li>Radzenie sobie ze<b> stresem, lękami, depresją</b></li>
                    <li><b>Niepowodzenia szkolne</b></li>
                    <li><b>Uzależnienia, samouszkodzenia</b></li>
                </ul>
            </article>
            <article className={styles.kontakt}>
                <h4>
                    Skontaktuj się ze mną
                </h4>
                <ul>
                    <li><b>Telefon:</b> 791851025</li>
                    <li><b>Adres email:</b> <a className={styles.emailStyle} href="mailto:psychologdominikadrag@gmail.com">psychologdominikadrag@gmail.com</a></li>
                </ul>
            </article>
        </main>
    </div>
    );
};
  
export default Home;
