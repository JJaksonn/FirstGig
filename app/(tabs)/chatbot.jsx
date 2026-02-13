import axios from "axios";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Response from "../../components/response.js";

export default function Chatbot() {
  const [responses, setResponses] = useState([
    { id: "0", content: "Here are some tips to help you land jobs as a teen:" },
  ]);
  const fetchResponse = async () => {
    try {
      const res = await axios({
        url: "https://router.huggingface.co/v1/chat/completions",
        method: "POST",
        headers: {
          Authorization: `Bearer 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`, //wanted to use the .env variable here but it GENUINELY crashed the project, will look into it later
          accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          model: "openai/gpt-oss-120b:groq",
          messages: [
            {
              role: "user",
              content: "Give me 5 more tips on how to land jobs as a teen",
            },
          ],
        },
      });

      const reply = res.data.choices?.[0]?.message?.content;

      setResponses((prev) => [
        ...prev,
        { id: Date.now().toString(), text: reply },
      ]);
    } catch (err) {
      setResponses((prev) => [
        ...prev,
        { id: Date.now().toString(), text: "Error: " + err.message },
      ]);
    }
  };

  //using a list of responses it keeps each response in a separae component which allows for a better look
  // also allows the user to ask for more tips without erasing the previous ones
  return (
    <View style={styles.page}>
      <FlatList
        data={responses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Response text={item.text ?? ""} />}
        contentContainerStyle={styles.listContainer}
      />

      <Pressable style={styles.button} onPress={fetchResponse}>
        <Text style={styles.buttonText}>Get Tips</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#edf3ef",
    padding: 16,
    justifyContent: "flex-end",
  },
  listContainer: {
    paddingBottom: 100,
  },
  button: {
    backgroundColor: "#2f7f5f",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    position: "absolute",
    bottom: 24,
    left: 16,
    right: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Manrope",
  },
});
