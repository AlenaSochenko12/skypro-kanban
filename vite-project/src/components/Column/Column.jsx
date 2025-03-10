import './Column.css'
import WebDesign from '../Cards/WebDesign/WebDesign'
import Research from '../Cards/Research/Research'
import Copywriting from '../Cards/Copywriting/Copywriting'

function Column() {
  return (
    <>
    <div className="main__column column">
      <div className="column__title">
        <p>Без статуса</p>
      </div>
      <div className="cards">
        <WebDesign />
        <Research />
        <WebDesign />
        <Copywriting />
        <WebDesign />
      </div>
    </div>
    <div className="main__column">
      <div className="column__title">
        <p>Нужно сделать</p>
      </div>
      <div className="cards">
        <Research />
      </div>
    </div>
    <div className="main__column">
      <div className="column__title">
        <p>В работе</p>
      </div>
      <div className="cards">
        <Research />
        <Copywriting />
        <WebDesign />
      </div>
    </div>
    <div className="main__column">
      <div className="column__title">
        <p>Тестирование</p>
      </div>
      <div className="cards">
        <Research />
      </div>
    </div>
    <div className="main__column">
      <div className="column__title">
        <p>Готово</p>
      </div>
      <div className="cards">
        <Research />
      </div>
    </div>
    </>
  )
}

export default Column
