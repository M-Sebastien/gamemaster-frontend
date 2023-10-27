export  const useFetchGpt = async (message, token = 300, msgSysteme = "") => {


  
  const apiKey = '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'; // clef api
  let requestData = {
      model: 'gpt-3.5-turbo',
      messages:  [
        { "role": "assistant", "content": msgSysteme },
        { "role": "user", "content": message }
      ],
      max_tokens: token,
      temperature: 0.7,
    };// modele de request gpt

if ( msgSysteme === "" ) {
  requestData = {
      model: 'gpt-3.5-turbo',
      messages:  [
        { "role": "user", "content": message }
      ],
      max_tokens: token,
      temperature: 0.7,
    }; // if qui permet de gerer les messages ou sans systeme.
}
 

try {
  const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestData),
    })
         if (!gptResponse.ok) {
           throw new Error('La requête a échoué');
         } 
   
        const response = await gptResponse.json();

        return { gptResponse: response.choices[0].message.content, isLoading: false };
         
} catch (error) {
      return { error: error.message, isLoading: false };
}
}; 
