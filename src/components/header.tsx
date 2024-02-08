import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
  cartQuantity: number;
}

export function Header({ title, cartQuantity }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
        <Text className="text-white text-xl font-heading mt-2">Cardápio</Text>
      </View>
      <TouchableOpacity className="relative">
        {
          cartQuantity > 0 && <View className="bg-lime-300 w-4 h-4 rounded-full top-2 z-0 -right-3.5">
            <Text className="text-center text-black font-bold text-xs">{cartQuantity}</Text>
          </View>
        }
        <Feather name="shopping-bag" color={colors.white} size={24} />
      </TouchableOpacity>
    </View>
  )
}