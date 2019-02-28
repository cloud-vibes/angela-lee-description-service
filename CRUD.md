**Get a Song Description**
----
  Returns json data about a single song.

* **URL**

  /song/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    `{ id: 1,
    song_name: '',
    artist_name: 'ipsum',
    licence: 'ipsa quia sint',
    description_text: 'Velit quam eos. www.google.com @ipsum Mollitia voluptatem sunt ut sit atque. Et qui at quas in sit error nihil. Velit illo natus ullam et dolor. Quod est sit delectus laudantium. Quisquam magni et ut.',
    released_by: 'ipsum',
    release_date: '2018-08-02T07:00:00.000Z',
    p_line: 'et inventore',
    tags: 'debitis possimus illo', }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    
    `{ error : "Song doesn't exist" }`

**Create a Song Description**
----
  Add a single song.

* **URL**

  /song

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

    `{ success: "Created a new song description" }`

 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    
    `{ error : "Could not add song description" }`

**Delete a Song Description**
----
  Deletes a single song.

* **URL**

  /song/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    `{ success: "Song description deleted" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    
    `{ error : "Song doesn't exist" }`

**Update a Song Description**
----
  Updates data on a single song.

* **URL**

  /song/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    `{ id: 1,
    song_name: '',
    artist_name: 'ipsum',
    licence: 'ipsa quia sint',
    description_text: 'Some edited text. www.google.com @ipsum Mollitia voluptatem sunt ut sit atque. Et qui at quas in sit error nihil. Velit illo natus ullam et dolor. Quod est sit delectus laudantium. Quisquam magni et ut.',
    released_by: 'ipsum',
    release_date: '2018-08-02T07:00:00.000Z',
    p_line: 'et inventore',
    tags: 'debitis possimus illo', }`
 
* **Error Response:**

  * **Code:** 400 NOT FOUND <br />
    **Content:** 
    
    `{ error : "Could not update song description" }`

<br>

**Get Artist Info**
----
  Returns json data about a single artist.

* **URL**

  /artistinfo

* **Method:**

  `GET`
  
*  **URL Params**

    None  

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    `[
    { id: 1,
    artist_name: 'ipsum',
    avatar_picture: 'image.jpg',
    no_of_followers: 2134608,
    no_of_tracks: 23,
    pro_status: 0,
    is_followed: 0,
    }, {}, {}, ... ]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    `{ error : "No artists found" }`

**Create Artist Info**
----
  Creates a new artist info.

* **URL**

  /artistinfo

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    
    `{ success: "Artist info created" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    
    `{ error : "Unable to create new artist" }`

**Update Artist Info**
----
  Updates an artist's info.

* **URL**

  /artistinfo/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    
    `{ success: "Artist info updated" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    
    `{ error : "Artist doesn't exist" }`

**Delete Artist Info**
----
  Delete an artist info.

* **URL**

  /artistinfo/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{ success: "Deleted artist info" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    
    `{ error : "Artist doesn't exist" }`