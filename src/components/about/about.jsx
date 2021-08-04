import "./about.scss";

export default function Intro() {
  return (
    <div className="about" id="about">
        <div className="label">
          <h3>Hello, I'm Alys. Nice to meet you.</h3>
        </div>
      <div className="right">
        <img className="me-img" src="assets/photos/profile-me.jpg" alt="Alys Dickerson">
        </img>
      </div>
      <div className="left">
        <h4> I am a graphic designer, web developer, and multimedia artist besed in New York City and Los Angeles.
        
            After learning the basics of graphic design in high school, I taught myself how to use Adobe Photoshop, InDesign, and Illustrator. 
            Once I felt proficient enough, I reached out to a local boutique and offered my services as a graphic design intern. The owner 
            took me on, and during my time there I created promotional material, social media content, and in-store signage. 
            When it was time for college in 2017, I decided to take a different path, choosing a major in Media, Culture, and the Arts. 
            This allowed me to take classes in design while also building my knowledge of the media landscape,
            and art history. 

            Always in persuit of learning something new, I recently enrolled in a coding class at UCLA. So far, I love being able to 
            create something that is interactive, and designing through a new medium.
    
            When I'm not designing or creating web applications, I love to read and write poetry, attend concerts, paint, and cook. 
        </h4>
      </div>
    </div>
  );
}

