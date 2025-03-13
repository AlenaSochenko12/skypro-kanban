import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Column from './components/Column/Column'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import PopUser from './components/Popups/PopUser/PopUser'
import { cardList } from './data'

function App() {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);
  }, []);

  const newCardAdd = () => {
    const newCard = {
      id: Date.now(),
      topic: "Тема",
      title: "Новая задача",
      date: new Date().toLocaleDateString(),
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header newCardAdd={newCardAdd} />
        <main className="main">
          <div className="container"> 
            <div className="main__block">
              <div className="main__content">
                {isLoading ? (
                  <p>Данные загружаются...</p>
                ) : (
                  statusList.map((status) => (
                    <Column
                      key={status}
                      title={status}
                      cardList={cards.filter((card) => card.status === status)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
