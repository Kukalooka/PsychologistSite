import styles from "./home.module.css";
import SvgImg from './dmuchawiec.svg';

const Home = () => {
    return (
    <div className={styles.mainCont}>
        <img src={SvgImg} className={styles.transImg} height="800px" alt="Dmuchawiec"/>
        <header>
            <h1>
                Dominika Drąg
            </h1>
            <p>
                Jestem doświadczonym psychologiem i pedagogiem, który z pasją i
zaangażowaniem zajmuje się pomocą w rozwiązywaniu sytuacji kryzysowych, jakich każdy człowiek
może doświadczyć na różnych etapach swojego życia. Specjalizuję się w zakresie udzielania
indywidualnej pomocy psychologicznej, między innymi w radzeniu sobie z zaburzeniami lękowymi,
depresji, obniżonego nastroju, przeżytych traumatycznych wydarzeń i innych sytuacji życiowych, które
uniemożliwią lub znacznie utrudniają codzienne funkcjonowanie. Od blisko 5 lat pracuję w nurcie Terapii
Skoncentrowanej na Rozwiązaniach (ukończony I i II stopień), co pozwala mi przede wszystkim
dogłębnie poznać mocne strony pacjenta i to na nich oprzeć proces niwelowania problemu. W swojej
pracy przede wszystkim staram się stworzyć atmosferę bezpieczeństwa oraz zaufania. Kieruję się przede
wszystkim dobrem osoby z którą pracuję oraz uwzględniam Jej indywidualne potrzeby. Szczególne
miejsce w moim doświadczeniu zawodowym zajmuje praca z młodzieżą oraz dziećmi.
            </p>
        </header>
        <main>
            <article className={styles.czemuJa}>
                <h2>
                    Zachęcam do kontaktu ze mną, w celu ustalenia dogodnego
                    terminu spotkania, ze swojej strony oferuję:
                </h2>
                <ul>
                    <li><b>Profesjonalizm:</b> Posiadam wieloletnie doświadczenie w pracy z różnorodnymi problemami psychologicznymi.</li>
                    <li><b>Indywidualne podejście:</b> Każdy klient jest dla mnie wyjątkowy, dlatego dostosowuję swoje metody pracy do jego potrzeb.</li>
                    <li><b>Poufność:</b> Wszystkie sesje odbywają się w atmosferze pełnej dyskrecji i zaufania.</li>
                    <li><b>Wygodne terminy</b></li>
                </ul>
            </article>
            <article className={styles.uslugi}>
                <h3>
                    Zakres oferowanej pomocy:
                </h3>
                <ul>
                    <li><b>Zaburzenia nastroju / Depresja</b></li>
                    <li><b>Zaburzenia lękowe</b></li>
                    <li><b>Wsparcie</b> w komunikacji interpersonalnej</li>
                    <li><b>Wsparcie</b> w kryzysach życiowych</li>
                    <li><b>Niepowodzenia szkolne</b></li>
                    <li><b>Uzależnienia, samouszkodzenia</b></li>
                </ul>
            </article>
            <article className={styles.kontakt}>
                <h4>
                    Zapraszam do kontaktu
                </h4>
                <ul>
                    <li><b>Dogodna lokalizacja gabinetu:</b> Tarnów, ul. Czerwona 7-7a</li>
                    <li><b>Telefon:</b> 791851025</li>
                    <li><b>Adres email:</b> <a className={styles.emailStyle} href="mailto:psychologdominikadrag@gmail.com">psychologdominikadrag@gmail.com</a></li>
                </ul>
            </article>
        </main>
    </div>
    );
};
  
export default Home;
