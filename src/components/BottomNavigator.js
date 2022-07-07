import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigator = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {
                        height: 3,
                        width: 3,
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                }}
            >
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={{
                                uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png',
                            }}
                            onPress={() => navigation.navigate('HomeScreen')}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
                        Accueil
                    </Text>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.navigate('BlogsScreen')}>
                        <Image
                            onPress={() => navigation.navigate('BlogsScreen')}
                            source={{
                                uri: 'http://simpleicon.com/wp-content/uploads/active-search.png',
                            }}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
                        blog{' '}
                    </Text>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ContactScreen')}
                    >
                        <Image
                            source={{
                                uri: 'http://pixsector.com/cache/a1dd5a90/av895b2bd52a42e99ee3c.png',
                            }}
                            onPress={() => navigation.navigate('ContactScreen')}
                            style={{ marginHorizontal: 16, width: 30, height: 30 }}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
                        contact
                    </Text>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Image
                            source={{
                                uri: 'http://pixsector.com/cache/a1dd5a90/av895b2bd52a42e99ee3c.png',
                            }}
                            onPress={() => navigation.navigate('LoginScreen')}
                            style={{ marginHorizontal: 16, width: 30, height: 30 }}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
                        Setting
                    </Text>
                </View>
                {/* </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default BottomNavigator;
