import React, { useState, useRef, useEffect } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import image from '../../assets/pricing.png'
// import { isLOgin } from '../../consts/Storage';


const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({ navigation }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [packs, setPacks] = useState(null)
  const [blogs, setBlogs] = useState(null)

  // function for  fetch api groups 
  const AllGroups = async () => {
    try {
      // get data 
      const response = await fetch('https://api.hoodzpronos.com/groups');
      //If response is in json then in success
      const data = await response.json();
      //Success 
      setPacks(data)
      //If response is not in json then in error
    } catch (error) {
      //Error 
      console.error(error);
    }
  }

  // function for get all blogs
  const getAllBlogs = async () => {
    try {
      // get data 
      const response = await fetch('https://api.hoodzpronos.com/blogs');
      //If response is in json then in success
      const data = await response.json();
      //Success 
      setBlogs(data)
      //If response is not in json then in error
    } catch (error) {
      //Error 
      console.error(error);
    }
  }
  // hooks effect
  useEffect(() => {
    AllGroups();
    getAllBlogs();
  }, []);
  //@ SECTION NAV CATEGORYS
  const CategoryList = () => {
    return (
      <View style={style.categoryListContainer}>
        <Text style={{ ...style.categoryListText }}>
          Votre histoire commence avec nous.
        </Text>
        <Text>
          Pronostiqueur canadien. Trust the process, c’est pas le début mais la
          fin du match l’important.
        </Text>
      </View>
    );
  };

  //@ SECTION CARDS
  const Card = ({ pack, index }) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('DetailsScreen', pack)}
      >
        <Animated.View style={{ ...style.card, transform: [{ scale }] }}>
          <Animated.View style={{ ...style.cardOverLay, opacity }} />
          <View style={style.priceTag}>
            <Text
              style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold' }}
            >
              ${pack.packs.amount}
            </Text>
          </View>
          <Image source={image} style={style.cardImage} />
          <View style={style.cardDetails}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                  {pack.packs.title}
                </Text>
                <Text style={{ color: COLORS.grey, fontSize: 12 }}>
                  {pack.description}
                </Text>
              </View>
              <Icon name="bookmark-border" size={26} color={COLORS.primary} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 10, color: COLORS.grey }}>
                {pack.packs.descr_1}
              </Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  // les blogs
  const TopHotelCard = ({ blog }) => {
    return (
      <View style={style.topHotelCard}>
        <Image style={style.topHotelCardImage} source={{ uri: `https://api.hoodzpronos.com/${blog.cover}` }} />
        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{blog.title}</Text>
        </View>
      </View>
    );
  };
  // function for return views
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* header */}
      <Appbar.Header style={{ backgroundColor: COLORS.black }}>
        <Appbar.Content
          style={{ fontSize: 30, fontWeight: 'bold' }}
          title="Hoodzpronos"
          subtitle="Accueil"
        />
        <Appbar.Action icon="account" onPress={() => navigation.navigate('AccountScreen')} />
      </Appbar.Header>
      {/* fin header */}
      <ScrollView
        barStyle="light-content"
        translucent
        backgroundColor={COLORS.white}
        showVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          paddingBottom: 90,
        }}
      >
        <CategoryList />
        {/* PART CARDS */}
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={e => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth)
              );
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            horizontal
            data={packs}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card pack={item} index={index} />
            )}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: 'bold', color: COLORS.grey }}>
            Les blogs
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('BlogsScreen')}
          >
            <Text style={{ color: COLORS.grey }}>Afficher tout</Text>
          </TouchableOpacity>
        </View>
        {/* SECTION Les blogs */}
        <FlatList
          data={blogs}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({ item }) => <TopHotelCard blog={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 30,
    marginBottom: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topHotelCard: {
    height: 140,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: '70%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default HomeScreen;
