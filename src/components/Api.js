import React from 'react'

const Api = () => {
   
  const client_id = "faeea4083d7348edad6be877c50c3436"
  const client_secret = "17baffc4a81c4af0956b50a84a444381"

  const getToken = async ()  => {
    const result = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type" : "",
        "Authorization" : "Basic" + btoa( client_id + client_secret)
      },
      body: "grant_type=client_credentials"
    })


     const data = await result.json();
     return data.access_token;

  }


  return (
    <div>Api</div>
  )
}

export default Api





// const client_id: 

// const client_secret: 