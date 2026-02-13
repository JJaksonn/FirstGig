import { StyleSheet, Text, View } from "react-native";

const parseMarkdown = (text) => {
  if (!text) return null;

  const lines = text.split("\n");

  return lines.map((line, index) => {
    line = line.trim();

    //chatgpt loves using formatting so I tried to have it render in the app, didnt actually work. ah well,
    if (line.startsWith("###")) {
      return (
        <Text key={index} style={styles.header}>
          {line.replace("###", "").trim()}
        </Text>
      );
    }

    if (line.startsWith("-")) {
      return (
        <Text key={index} style={styles.listItem}>
          {"\u2022 "} {line.replace("-", "").trim()}
        </Text>
      );
    }

    if (line.includes("**")) {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <Text key={index} style={styles.text}>
          {parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <Text key={i} style={styles.bold}>
                  {part.replace(/\*\*/g, "")}
                </Text>
              );
            }
            return part;
          })}
        </Text>
      );
    } //I tried it and it doesnt seem to actually work

    return (
      <Text key={index} style={styles.text}>
        {line}
      </Text>
    );
  });
};

export default function Response({ text }) {
  return <View style={styles.container}>{parseMarkdown(text)}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: "#1f2937",
    marginBottom: 4,
    fontFamily: "Manrope",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Manrope",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "DMSerif",
    color: "#2f7f5f",
  },
  listItem: {
    fontSize: 16,
    marginLeft: 12,
    marginBottom: 4,
    fontFamily: "Manrope",
  },
});
