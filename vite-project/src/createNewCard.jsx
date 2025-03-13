import { cardList } from "./data";
function createNewCard() {
    const [cards, setCards] = useState(cardList);
  
    function onCardAdd() {
      // Логика добавления карточки
    }
  
    return (
      <Wrapper>
        <Header onCardAdd={onCardAdd} />
        <Main cards={cards} />
      </Wrapper>
    );
  }

  export default createNewCard  