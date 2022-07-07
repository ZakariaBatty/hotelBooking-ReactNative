import React, { useState } from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { Avatar, Card, Button, List } from 'react-native-paper';
import COLORS from '../../consts/colors';
import HeaderBackAction from '../../components/HeaderBackAction';

const ContactScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBackAction goBack={navigation.goBack} title="Contact" />
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
        <View style={style.cardContact}>
          <List.Section>
            <List.Subheader>Les informations</List.Subheader>
          </List.Section>
          <Card.Title
            style={style.shadowProp}
            title="Email"
            subtitle="HOODZPRONOS1@GMAIL.COM"
            right={props => <Avatar.Icon {...props} icon="email" />}
          />
          <Card.Title
            style={style.shadowProp}
            title="Tél"
            subtitle="WhatsApp : +1 514-971-0591"
            right={props => <Avatar.Icon {...props} icon="phone" />}
          />
          <Card.Title
            style={style.shadowProp}
            title="Région"
            subtitle="Canada"
            right={props => <Avatar.Icon {...props} icon="country" />}
          />
          <Card.Title
            title="Web site"
            subtitle="https://hoodzpronos.com/"
            right={props => <Avatar.Icon {...props} icon="site" />}
          />
          <Card.Title
            title="Instagram"
            subtitle="https://www.instagram.com/hoodz_pronos/"
            right={props => <Avatar.Icon {...props} icon="instagram" />}
          />
          <Card.Title
            style={style.shadowProp}
            title="Snapchat"
            subtitle="https://www.snapchat.com/add/houssame0325"
            right={props => <Avatar.Icon {...props} icon="snapchat" />}
          />
          <View style={style.buttonMail}>
            <Button
              color={COLORS.red}
              icon="email"
              mode="contained"
              onPress={() => console.log('Pressed')}
            >
              envoyer un mail
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  shadowProp: {
  },
  cardContact: {
    marginTop: 26,
    width: '90%',
    justifyContent: 'center',
    marginHorizontal: '2%',
  },
  buttonMail: {
    marginTop: 25,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ContactScreen;
