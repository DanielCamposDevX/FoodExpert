import CategoryButton from '@/components/category-buttons';
import { Header } from '@/components/header';
import { Loading } from '@/components/loading';
import { CATEGORIES } from '@/utils/data/products';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter";
import { useState } from 'react';
import { FlatList, View } from 'react-native';


export default function Home() {

  const [selected, setSelected] = useState(CATEGORIES[0])

  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });


  function handleSelectCategory(category: string) {
    setSelected(category);
  }

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="bg-slate-900 flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantity={2} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <CategoryButton title={item} active={item === selected} onPress={() => handleSelectCategory(item)} />
          )
        }}
        horizontal
        className='max-h-10 mt-5'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}