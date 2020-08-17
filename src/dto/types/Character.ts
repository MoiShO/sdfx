// Character
// There is a total of 671 characters sorted by id.

// Character schema
// Key	Type	Description
// id	int	The id of the character.

export interface Character {
    name: String,	    //The name of the character.
    status: String,	    // The status of the character ('Alive', 'Dead' or 'unknown').
    species: String,    // The species of the character.
    type: String,	    // The type or subspecies of the character.
    gender: String,	    // The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
    origin: object,	    // Name and link to the character's origin location.
    location: object,	// Name and link to the character's last known location endpoint.
    image: string,      // (url) Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
    episode: String[],  // (urls) List of episodes in which this character appeared.
    url: String,        //  (url) 	Link to the character's own URL endpoint.
    created: String,	// Time at which the character was created in the database.
}
