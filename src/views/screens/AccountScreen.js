import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { List, DataTable } from 'react-native-paper';

import COLORS from '../../consts/colors';
import HeaderBackAction from '../../components/HeaderBackAction';

const optionsPerPage = [2, 3, 4];
const AccountScreen = ({ navigation }) => {
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [profile, setProfile] = React.useState(null);
    const [expect, setExpect] = React.useState(null);
    const [history, setHistory] = React.useState(null);


    //  get Profile 
    const Profile = async () => {
        try {
            // get data 
            const response = await fetch('https://api.hoodzpronos.com/profile', { withCredentials: true });
            //If response is in json then in success
            const data = await response.json();
            //Success 
            if (!data.error) {
                setProfile(data)
            }
            //If response is not in json then in error
        } catch (error) {
            //Error 
            console.error(error);
        }
    }
    // get Expectations
    const Expectations = async () => {
        try {
            // get data 
            const response = await fetch('https://api.hoodzpronos.com/expectations', { withCredentials: true });
            //If response is in json then in success
            const data = await response.json();

            //Success 
            if (!data.error) {
                setExpect(data)
            }
            //If response is not in json then in error
        } catch (error) {
            //Error 
            console.error(error);
        }
    }

    // get History
    const getHistory = async () => {
        try {
            // get data 
            const response = await fetch('https://api.hoodzpronos.com/findOneSub', { withCredentials: true });
            //If response is in json then in success
            const data = await response.json();
            //Success 
            if (!data.error) {
                setHistory(data)
            }
            //If response is not in json then in error
        } catch (err) {
            // dispatch({ type: userTypes.ERROR, payload: err?.response?.data?.error });
        }
    };

    React.useEffect(() => {
        setPage(0);
        Profile()
        Expectations();
        getHistory();
    }, [itemsPerPage]);

    console.log(history);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <HeaderBackAction goBack={navigation.goBack} title="Mon compte" />
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
                <List.Section title="Bienvenue à revenir">
                    <List.Accordion
                        title="INFORMATIONS PERSONNELLES"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <DataTable.Row>
                            <DataTable.Cell>*Nom :</DataTable.Cell>
                            <DataTable.Cell>{profile?.user?.firstName}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>*Prénom :</DataTable.Cell>
                            <DataTable.Cell>{profile?.user?.lastName}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>*Email :</DataTable.Cell>
                            <DataTable.Cell>{profile?.user?.email}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>*Tél :</DataTable.Cell>
                            <DataTable.Cell>{profile?.user?.phone}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>*rôle :</DataTable.Cell>
                            <DataTable.Cell>{profile?.user?.role}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>*Genre :</DataTable.Cell>
                            <DataTable.Cell>{profile?.user?.sexe}</DataTable.Cell>
                        </DataTable.Row>
                    </List.Accordion>
                    <List.Accordion
                        title="Attentes"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <DataTable>
                            {expect &&
                                expect.map((expect, index) => (
                                    <View key={index}>
                                        <DataTable.Header>
                                            <DataTable.Title>{expect?.title}</DataTable.Title>
                                        </DataTable.Header>
                                        <DataTable.Row>
                                            <DataTable.Cell>{expect?.content}</DataTable.Cell>
                                        </DataTable.Row>
                                    </View>
                                ))}
                        </DataTable>
                    </List.Accordion>
                    <List.Accordion
                        title="dashbord"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <DataTable
                            style={styles.content}
                        >
                            <DataTable.Header>
                                <DataTable.Title>Nom pack</DataTable.Title>
                                <DataTable.Title numeric>Jours</DataTable.Title>
                                <DataTable.Title numeric>Prix</DataTable.Title>
                                <DataTable.Title numeric>telegram</DataTable.Title>
                            </DataTable.Header>
                            {history &&
                                history.map((group, index) => (
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell>{group.packs.title}</DataTable.Cell>
                                        <DataTable.Cell numeric>{group.packs.days}</DataTable.Cell>
                                        <DataTable.Cell numeric>{group.packs.amount}$</DataTable.Cell>
                                        <DataTable.Cell numeric>join</DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                        </DataTable>
                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        width: '100%',
        padding: 0,
        margin: 0
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'center',
    }

});

export default AccountScreen;
