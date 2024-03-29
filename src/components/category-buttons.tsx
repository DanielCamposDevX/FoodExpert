import { clsx } from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

type CategoryButtonProps = PressableProps & {
  title: string;
  active?: boolean;
}


export default function CategoryButton({ title, active, ...rest }: CategoryButtonProps) {
  return (
    <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md", active && "border-2 border-lime-300")} {...rest}>
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  )
}