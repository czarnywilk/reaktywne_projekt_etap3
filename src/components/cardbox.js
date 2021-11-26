import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Card from './card';
import { Link } from "react-router-dom";
import Pagination from './pagination';
import { paginate } from "./utils/paginate";
import { Nav } from 'react-bootstrap';

class Cardbox extends Component {
    constructor() {
        super();
        this.state = {
            pageSize: 4,
            currentPage: 1
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.films = [{id: 1,title: "Pulp Fiction", year: "1994", desc: "Płatni mordercy, Jules (Samuel L. Jackson) i Vincent (John Travolta), dostają zlecenie, by odzyskać z rąk przypadkowych rabusiów tajemniczą walizkę bossa mafii. Nie dość tego, Vincent dostaje kolejną robotę - na czas nieobecności gangstera w mieście ma zaopiekować się jego poszukującą wrażeń żoną Mią (Uma Thurman). Vincent i Jules niespodziewanie wpadają po uszy, gdy przypadkowo zabijają zakładnika. Kłopoty ma też podupadły bokser (Bruce Willis), który otrzymał dużą sumę za przegranie swojej walki. Walkę jednak wygrywa, a Los Angeles staje się od tej chwili dla niego za małe. Specjaliści od mokrej roboty będą mieli co robić...", pic: "https://static.posters.cz/image/750/plakaty/pulp-fiction-cover-i1288.jpg"}, 
        {id: 2,title: "Ostatni Mohikanin", year: "1992", desc: "Rok 1757. W Polnocnej Ameryce trwa wojna miedzy Anglia i Francja o dominacje na kontynencie. W krwawy konflikt uwiklani sa tez Indianie, prastarzy mieszkancy tych ziem. Rozne plemiona staja po roznych stornach barykady, uwiedzione obietnicami Bialych. Mohikanie na czele z wodzem i jego synem Unkasem sympatyzuja z Anglikami. Indianie maja w swoim plemieniu bialego czlowieka - trapera Sokole Oko, przygarnietego lata temu jako dziecko. Ten niebawem wykaze sie nie lada odwaga.", pic: "https://assets.upflix.pl/media/plakat/1992/the-last-of-the-mohicans__300_427.jpg"},
        {id: 3,title: "Full Metal Jacket", year: "1987", desc: "Młodzi szeregowi, między innymi Joker, Kowboj, Snowball i Leonard, trafiają do obozu szkoleniowego, gdzie pod opieką sadystycznego sierżanta Hartmana przechodzą szkolenie mające przygotować ich do wojny w Wietnamie. Każdy z młodych ludzi pragnie zostać elitarnym żołnierzem marines, choć może za to zapłacić wysoką cenę. Potworne szkolenie Hartmana powoduje, iż Leonard, najbardziej przez niego wyszydzany i prześladowany, powoli popada w obłęd. Wkrótce ostatni, wydawałoby się szczęśliwy dzień w obozie, zmienia się w krwawą tragedię... Kilka miesięcy później śledzimy poczynania szeregowych, którym udało się wyjechać do Wietnamu...", pic: "https://www.galeriaplakatu.com/img/imagecache/31001-32000/495x755_product_media_31001-32000_FULL_METAL_JACKET_POSTER_HELMET-j.webp"}, 
        {id: 4,title: "Pluton", year: "1986", desc: "Rok 1967, Wietnam, kompania Bravo. Na front przybył Chris Taylor, młody chłopak z zamożnej rodziny. Był rekrutem-idealistą, który patrzył optymistycznie na swój kraj. Rzucił studia i zaciągnął się do wojska w imię własnych ideałów. Trafił do plutonu, w którym istniały swoiste podziały napędzane przez dwóch skłóconych dowódców, sierżanta Barnesa, bezwzględnego rygorystę i sierżanta Eliasa, zachowującego spokój i moralną odwagę. Kilka tygodni na froncie w dżungli wystarczyło, by Chris zmienił diametralnie swoje poglądy na temat wojny i wojska. Odkrył też, że najtrudniejszą walką, którą trzeba stoczyć, jest walka z samym sobą – z własnymi słabościami, strachem, gniewem i wycieńczeniem.", pic: "https://static.posters.cz/image/750/plakaty/platoon-one-sheet-i1695.jpg"},
        {id: 5,title: "The Walking Dead", year: "2010-2022", desc: "Serial opowiada o czasie następującym po pandemicznej apokalipsie, po której świat opanowały zombie. Szeryf Rick Grimes (Andrew Lincoln) podróżuje wraz z rodziną i z garstką ocalałych, w bezustannym poszukiwaniu bezpiecznego schronienia. Ciągła presja oraz codzienne zmagania się z zagrożeniem i śmiercią zbierają krwawe żniwo, popychając wielu ku otchłani najgłębszego ludzkiego okrucieństwa. W trakcie walki o przeżycie swojej rodziny, Rick odkrywa, że wszechogarniający strach ocalałych może być dużo bardziej niebezpieczny niż przemierzające świat zombie.", pic: "https://static.wikia.nocookie.net/walkingdead/images/2/27/Walking-Dead_510.jpeg"},
        {id: 6,title: "Był sobie pies", year: "2017", desc: "Najlepszym przyjacielem człowieka jest pies, to fakt. A kto jest najlepszym przyjacielem psa? Bailey, czworonożny bohater tej opowieści nie ma wątpliwości: jego psie życie ma sens tylko u boku pewnego chłopca o imieniu Ethan. Gdy obaj są szczeniakami, wszystko sprowadza się do zabawy. Gdy dorastają, Ethan zamiast za piłką ugania się za dziewczynami, czasem wdaje się w bójkę – wtedy trzeba gryźć wroga w kostkę, a gdy zbije szybę sąsiadów, ktoś musi wziąć winę na siebie. Bailey jest więc szczęśliwy, bo jak każdy pies chce czuć się w życiu potrzebny. Nadchodzi jednak moment, w którym drogi przyjaciół się rozchodzą, a życie Ethana przestaje rozpieszczać. Wtedy Bailey musi wykazać się nad-psią siłą, by odnaleźć przyjaciela i podać mu pomocną łapę.", pic: "https://fwcdn.pl/fpo/64/06/756406/7791657.6.jpg"},
        {id: 7,title: "Harry Potter i Zakon Feniksa", year: "2007", desc: "Harry Potter tym razem nie może mieć spokojnych wakacji. Lord Voldemort powrócił, a prasa czarodziejska milczy na ten temat. Na mugolskim osiedlu Little Whinging pojawiają się Dementorzy, a zbzikowana sąsiadka Dursley'ów pani Figg jest charłakiem! W dodatku Harry staje przed całym Wizengamotem za użycie czarów przez nieletniego, a Straż Przednia zabiera go do kwatery głównej Zakonu Feniksa - organizacji powołanej przez Dumbledora do walki z Sam-Wiesz-Kim. Tymczasem w Hogwarcie rządy przejmuje sprzymierzeniec Korneliusza Knota i nauczycielka obrony przed czarną magią profesor Umbridge. Wygląda na to, że nikt nie wierzy Harry'emu i Dumbledorowi, że Lord Voldemort odrodził się na nowo. Kiedy zaatakuje wszystko wyjdzie na jaw, ale czy wtedy nie będzie już za późno?", pic: "https://fwcdn.pl/fpo/30/08/113008/7166226.3.jpg"},
        {id: 8,title: "Opowieści z Narnii: Książę Kaspian", year: "2008", desc: "Ekranizacja drugiego z siedmiu tomów słynnej serii C.S.Lewisa. Od poprzednich przygód rodzeństwa Pevensie w Narnii minął już ponad rok, wedle angielskiej rachuby czasu. Teraz, dzieci znowu trafiają do swego królestwa, jednak czas w Narnii płynie inaczej. Od ich zniknięcia minęło 1300 lat i wiele się zmieniło. Magiczne stworzenia i mówiące zwierzęta stały się jedynie legendą, a rządy sprawuje okrutny uzurpator Miraz (Sergio Castellitto). Prawowity władca, tytułowy Książę Kaspian (Ben Barnes) to bratanek Miraza. Zmuszony do ucieczki, znajduje schronienie wśród rodowitych Narnijczyków, którzy rzekomo wyginęli. Rodzeństwo Pevensie musi pomóc księciu w pokonaniu stryja i odzyskaniu tronu...", pic: "https://d-art.ppstatic.pl/kadry/k/r/25/9a/5a8c584539207_o_original.jpg"},
        {id: 9,title: "Władca Pierścieni: Powrót Króla", year: "2003", desc: "Film Władca Pierścieni: Powrót króla to zakończenie serii z filmowych adaptacji powieści Władca Pierści, autorstwa autorstwa J.R.R. Tolkiena, zabierająca widzów w kolejną niezwykłą podróż do rzeczywistości Śródziemia, gdzie dojdzie do najbardziej spektakularnego starcia, być może w historii całego gatunku fantasy.", pic: "https://fwcdn.pl/fpo/18/41/11841/7494142.3.jpg"},
        {id: 10,title: "Forrest Gump", year: "1994", desc: "Forrest Gump to romantyczna historia, w której Tom Hanks wcielił się w tytułową postać - nierozgarniętego młodego człowieka o wielkim sercu i zdolności do odnajdywania się w największych wydarzeniach w historii USA, począwszy od swego dzieciństwa w latach 50-tych. Po tym, jak staje się gwiazdą footballu, odznaczonym bohaterem wojennym i odnoszącym sukcesy biznesmenem, główny bohater zyskuje status osobistości, lecz nigdy nie rezygnuje z poszukiwania tego, co dla niego najważniejsze - miłości swej przyjaciółki, Jenny Curran.", pic: "https://i.pinimg.com/originals/de/66/f8/de66f85373a1a39a068a5ef8c0043a03.jpg"}];
        this.posts = [];
    }

    handlePageChange(page){
        console.log("xDDD");
        this.setState({currentPage: page});
    };
 
    render() {
        console.log(React.version);
        if (!this.films.length) return <p>brak filmów</p>;
        this.posts = [];
        this.posts = paginate(this.films, this.state.currentPage, this.state.pageSize)
        const {pageSize, currentPage} = this.state;
        console.log(this.posts);
        return(
            <div className="container">
                <div className = "row">
                    <div className = "sm-col-8">
                        <React.Fragment>
                            {this.posts.map((item, i) => {
                                console.log(item);
                                return (
                                    <Nav.Link key={i} href={`/film/${item.id}`}>
                                        <Card title={item.title} year={item.year} desc={item.desc} pic = {item.pic} style={styles.container}></Card>
                                    </Nav.Link>
                                );
                            })}
                            <Pagination itemsCount={this.films.length} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        )
    }
}

var styles = {
    container: {
      padding: 100,
      marginTop: 100
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    image: {
        padding: 0
    }
  };

export default Cardbox;