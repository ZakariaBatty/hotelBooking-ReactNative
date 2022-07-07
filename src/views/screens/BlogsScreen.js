import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { Paragraph, Card } from 'react-native-paper';

import COLORS from '../../consts/colors';
import HeaderBackAction from '../../components/HeaderBackAction';

const BlogsScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState(null)

  // function for get all blogs
  const getBlogs = async () => {
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
    getBlogs();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBackAction goBack={navigation.goBack} title="Blogs" />
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
        {blogs &&
          blogs.map((blog, index) => (
            <Card key={index} style={styles.card}>
              <Card.Cover source={{ uri: `https://api.hoodzpronos.com/${blog.cover}` }} />
              <View>
                <Card.Title title={blog.title} />
              </View>
              <Card.Content>
                <Paragraph>
                  <View>
                    <Text>{blog.content}</Text>
                  </View>
                </Paragraph>
              </Card.Content>
            </Card>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 4,
  },
  card: {
    margin: 6,
  },
});

export default BlogsScreen;
