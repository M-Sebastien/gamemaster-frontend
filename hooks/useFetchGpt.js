export  const useFetchGpt = async (message, token = 300, msgSysteme = "") => {


  
const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY
 console.log(" openaiKEy", process.env.EXPO_PUBLIC_OPENAI_API_KEY);
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
        //  if (!gptResponse.ok) {
        //    throw new Error('La requête a échoué');
        //  } 
   console.log(gptResponse)
        const response = await gptResponse.json();
console.log(response)
        return { gptResponse: response.choices[0].message.content, isLoading: false };
         
} catch (error) {
      return { error: error, isLoading: false };
}
}; 
