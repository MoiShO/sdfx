import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { HomeScreenNavigationProp } from '../../pages/Home'
import { Character } from '../../dto/types/Character'

export const publicApiListItem = ({ item, navigation }: { item: Character, navigation: HomeScreenNavigationProp }) => {

    return <TouchableOpacity onPress={() => { navigation.navigate('Details', { ...item }) }}>
        <View style={styles.container}>
            <Image
                style={styles.profileImg}
                source={{
                    uri: `${item.image}`,
                }}
            />
            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.arrow}>{'>'}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        alignItems: 'center',
    },
    profileImg: {
        marginLeft: 20,
        overflow: 'hidden',
        height: 60,
        width: 60,
        borderRadius: 40,
    },
    name: {
        display: 'flex',
        flex: 1,
        textAlign: 'center',
        color: '#000000',
    },
    arrow: {
        color: '#CED0CE',
        fontSize: 30,
    }
});

