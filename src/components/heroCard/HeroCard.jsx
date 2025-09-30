import { felliowship } from "../../lessons/lesson05/fellowship";


function HeroCard() {

    return(
        <div>
            {felliowship.map(hero =>(
                <div key={hero.id} className={`hero-card ${hero.isDark ? `hero-card-dark` : `hero-card-light` }`}>
                    <h3>Hero: {hero.name}</h3>
                    <p>age: {hero.age}</p>
                    <p>{hero.isDark ? 'Villain 🔥' : 'Hero 🤠'}</p>
                    <p>Weapons: {hero.weapons.map((weapon, index) => index !== hero.weapons.length -1 ? weapon + ', ': weapon +'.')}</p>
                    <div className="image-wrapper">
                        <img src={hero.image} alt="" />
                    </div>              
                </div>
            ))}
        </div>
    )
}

export default HeroCard;