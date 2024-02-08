import { Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function InternalLink({
  path,
  text,
}: {
  path: string;
  text: string;
}) {
  const href = path === "/" ? "/" : "/payment-gateway";

  return (
    <Link href={href} asChild>
      <Pressable>
        <Text>{text}</Text>
      </Pressable>
    </Link>
  );
}
