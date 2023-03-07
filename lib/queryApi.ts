import openai from "./chatgpt";

const query = async (prompt: string, model: string) => {
  const res = await openai
    .createCompletion({
      prompt,
      model,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      presence_penalty: 0,
      frequency_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
