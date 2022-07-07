import React, { useEffect, useState } from 'react';

import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Animated,
  ImageBackground,
  StatusBar,
} from 'react-native';

import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackButton from '../../components/BackButton'
import image from '../../assets/pricing.png'


const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  return (
    <ScrollView
      barStyle="light-content"
      translucent
      backgroundColor="(rgba(0,0,0,0)"
      showVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 90,
      }}
    >
      <StatusBar />
      {/* header */}
      <ImageBackground style={style.headerImage} source={image}>
        <View style={style.header}>
          <BackButton goBack={navigation.goBack} />
          <Icon name="bookmark-border" size={28} color={COLORS.white} />
        </View>
      </ImageBackground>
      {/* end header */}
      <View>
        <View style={style.iconContainer}>
          <Icon name="star" color={COLORS.orange} size={28} />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {item.packs.title}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: COLORS.grey,
              marginTop: 5,
            }}
          >
            {item.description}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.orange} />
                <Icon name="star" size={20} color={COLORS.grey} />
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>
                4.0
              </Text>
            </View>
            <Text style={{ fontSize: 13, color: COLORS.grey }}>365reviews</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              * {item.packs.descr_1}
            </Text>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              * {item.packs.descr_2}
            </Text>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              * {item.packs.descr_3}
            </Text>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              * {item.packs.descr_4}
            </Text>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              * {item.packs.descr_5}
            </Text>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              * {item.packs.descr_6}
            </Text>
            <Text style={{ lineHeight: 20, color: COLORS.grey }}>
              * {item.packs.descr_7}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Prix
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}
            >
              ${item.packs.amount}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}
            >
              mois
            </Text>
          </View>
        </View>
        <View style={style.btn}>
          <Button
            color={COLORS.red}
            icon="email"
            mode="contained"
            onPress={() => () => navigation.navigate('HomesScreen')}
          >
            ACHETER
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.red,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.red,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default DetailsScreen;
