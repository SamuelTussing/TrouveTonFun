
import { useState } from 'react';
import BaseDonnee from "../data/games.json"
import Card from './card';

const Trouvetonfun = () => {


    const data = BaseDonnee
    console.log(data)
    //const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Nombre de joueurs minimum');
    const [selectedOption2, setSelectedOption2] = useState('Jimagine un jeu de :');
    const [selectedOption3, setSelectedOption3] = useState('Qui est :');
    const [foundItems, setFoundItems] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);

    const caracteristics1 = ["En solo", "A deux", "Entre amis", "En famille", "Avec les enfants"]
    const caracteristics2 = ["Cartes", "Dés", "Plateau"]
    const caracteristics3 = ["Facile", "Moyenne", "Complexe", "Très complexe"]

    const handleOptionClick = (caracteristics1) => {
        setSelectedOption(caracteristics1);
        setIsOpen(false);
      };

      const handleOptionClick2 = (caracteristics2) => {
        setSelectedOption2(caracteristics2);
        setIsOpen2(false);
      };

      const handleOptionClick3 = (caracteristics3) => {
        setSelectedOption3(caracteristics3);
        setIsOpen3(false);
      };

      


      const RechercheJeu = () => {

        const jeuxTrouves = data.filter(data =>
            data.caractéristiques.gameType.includes(selectedOption2) &&
            data.caractéristiques.Difficulté.includes(selectedOption3) &&
            data.caractéristiques.nbrjoueurs.includes(selectedOption)
            );

            if (jeuxTrouves.length >0) {
                setFoundItems(jeuxTrouves);
            }

            //setFoundItems(jeuxTrouves.map(item => item.name));
      }

  return (<>
    <section className='mt-6 bg-green-100 p-10 w-full h-full'>
        {/* Balise titre */}
        <div className='flex flex-col justify-center items-center mt-6'>
            <h2 className='text-5xl font-bold text-green-800'>TrouveTonFun</h2>
            <p>Le générateur de bonheur ludique qui déniche ton jeu idéal</p>
        </div>

    <div className='flex gap-2'>
    
        {/* Les différents dropdown */}
        <div className='mt-12'>
            <div className='flex flex-col justify-center items-center'>
                <span>JE CHERCHE UN JEU POUR :</span>
                <button
                    className=' mt-5 p-5 border-solid border-2 border-green-500 text-gray-400 w-64 bg-white'
                    onClick={toggleDropdown}>
                    {selectedOption}
                </button>
                {isOpen &&(
                    <ul className='mt-5 border-solid border-2 border-green-500 p-5 w-64 bg-white'>
                        {caracteristics1.map(caracteristics1 => (
                            <li 
                                className='p-1 hover:bg-green-600 hover:text-white'
                                key={caracteristics1} onClick={() => handleOptionClick(caracteristics1)}>
                                {caracteristics1}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

        <div className='mt-12'>
            <div className='flex flex-col justify-center items-center'>
                <span>J&apos;IMAGINE UN JEU DE :</span>
                <button
                    className=' mt-5 p-5 border-solid border-2 border-green-500 text-gray-400 w-64 bg-white'
                    onClick={toggleDropdown2}>
                    {selectedOption2}
                </button>
                {isOpen2 &&(
                    <ul className='mt-5 border-solid border-2 border-green-500 p-5 w-64 bg-white'>
                        {caracteristics2.map(caracteristics2 => (
                            <li 
                                className='p-1 hover:bg-green-600 hover:text-white'
                                key={caracteristics2} onClick={() => handleOptionClick2(caracteristics2)}>
                                {caracteristics2}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

        <div className='mt-12'>
            <div className='flex flex-col justify-center items-center'>
                <span>QUI EST :</span>
                <button
                    className=' mt-5 p-5 border-solid border-2 border-green-500 text-gray-400 w-64 bg-white'
                    onClick={toggleDropdown3}>
                    {selectedOption3}
                </button>
                {isOpen3 &&(
                    <ul className='mt-5 border-solid border-2 border-green-500 p-5 w-64 bg-white'>
                        {caracteristics3.map(caracteristics3 => (
                            <li 
                                className='p-1 hover:bg-green-600 hover:text-white text-sm'
                                key={caracteristics3} onClick={() => handleOptionClick3(caracteristics3)}>
                                {caracteristics3}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

    </div>

        <button 
            className='bg-green-500 text-white ml-5 mt-10 p-5 h-12'
            onClick={RechercheJeu}>
            <span>Trouve moi un jeu !</span>
        </button>
    </section>

    {/*  Affichage des résultats */}
    <section className='mt-5 h-68 bg-green-100 p-11 w-full'>
    <div>
            {foundItems.length > 0 ? (
                <ul className='flex gap-5'>
                    {foundItems.map((item,index)=>

                        <Card
                            key={index}
                            item={item}
                        />
                    )}
                </ul>
            ):(
                "Aucun Jeu ne répond à votre requête. Vous êtes trop difficile."
            )}
        </div>

    </section></>
  )
}

export default Trouvetonfun