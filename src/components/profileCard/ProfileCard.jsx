import "./ProfileCard.css"
function ProfileCard() {

const person = {
    firstname: "Sherlock",
    lastname: "Holmes",
    profession: "Private Detective",
    hobby: "Playing the violin",
    avatar: "https://media.gettyimages.com/id/dv271153a/de/foto/private-investigator-looking-through-magnifying-glass.jpg?s=612x612&w=0&k=20&c=zhPtR0LyALWXm4tQxNNNGeqCE_K1qbnZegEk87LI1hA="

}
  return <div>
        <h1>My name is:</h1>
        <h1> {person.firstname} {person.lastname}</h1>
      <img className="img-avatar" 
      src={person.avatar} 
      alt={`${person.firstname} ${person.lastname}`} />
    <h2>I am: {person.profession}</h2>
    <p></p>
    <h2>And my hobby: {person.hobby}</h2>
  </div>

}

export default ProfileCard;