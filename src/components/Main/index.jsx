import React from 'react';
import './index.css';
import Form from '../Form'

function Main() {
  return (
    <div className='main'>
      <div className="container">
        <h2 className="containerTitle">О ПРОЕКТЕ.</h2>
        <div className="conatainerContent">
        <p className="containerText">Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда он бесконечно рисует, когда придумывает истории, когда разговаривает с едой и игрушками — дети постоянно включены 
и что-то изобретают. Родители часто недооценивают это спонтанное творчество ребёнка. 
Это не плохо, просто мы привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.</p>
        <p className="containerText">Мы запускаем проект «ТУРБИНА», который открывает работу настоящего музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие современные инди-музыканты пишут свои песни на стихи, написанные детьми. Здесь важно — мы не заставляем наших детей садиться и писать поэзию, мы говорим о том, что родителям стоит быть более внимательными и чуткими к своим детям. Именно так мы сможем получить тексты, которые перестанут быть детскими, не будут осмыслены как взрослые — поэзия, которая сокращает дистанцию между взрослостью и детством, где спонтанное детское творчество 
и бессознательное, замеченное родителем, становится общественным культурным достоянием.</p>
        </div>
      </div>

      <div className="container">
        <h2 className="containerTitle">КАК ЭТО РАБОТАЕТ?</h2>
        <div className="conatainerContent">
        <p className="containerText">Вы можете прислать нам тексты, родившиеся у ваших детей, которые вы записали и считаете, что это сильное высказывание. Мы собираем пул таких текстов и передаём их музыкантам. Артисты создают музыку на эти стихи. Мы продюсируем выпуск трека, возможно съёмки клипа и так далее. Мы всегда указываем автора стихотворений внутри релиза: Хадн Дадн feat. Варя Карпова и Федя Быстров — Контур.</p>
        </div>
      </div>

      <div className="container">
        <h2 className="containerTitle">ТЕЗИСЫ.</h2>
        <div className="conatainerContent">
          <ul className="theses">
            <li className="thesesItem">
            Дети никогда не прекращают творить и круто стараться быть на них похожими в этом.
            </li>
            <li className="thesesItem">
            Детское бессознательное помогает родителям понять, что происходит внутри семьи.
            </li>
            <li className="thesesItem">
            Не существует детской и взрослой поэзии. Существует мысль и чувство, зафиксированное 
в ней.
            </li>
            <li className="thesesItem">
            Дети получают невероятное удовольствие и мотивацию от того, что их творчество востребовано сверстниками и взрослыми.
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h2 className="containerTitle">ФОРМА.</h2>
        <div className="conatainerContent">
        <Form/>
        </div>
      </div>

    </div>
  )
}

export default Main
