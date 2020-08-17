import React from 'react';
import { Animated, Image, Text, StyleSheet, View } from 'react-native';
import { Route } from '@react-navigation/native';
import { Character } from '../dto/types/Character';


interface IDeatils {
    route: Route<string>,
}

class Details extends React.PureComponent<IDeatils> {
    opacity = new Animated.Value(0);

    componentDidMount() {
        Animated.timing(this.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }


    render() {
        const { name, image, status, species, type, gender, origin } = this.props.route.params as Character;
        return <View style={styles.container}>
            <Text style={{ ...styles.text, fontWeight: 'bold' }}>{name}</Text>
            <Animated.Image
                style={{ ...styles.profileImg, opacity: this.opacity }}
                source={{
                    uri: `${image}`,
                }}
            />
            <Text style={styles.text}>Status: {status}</Text>
            <Text style={styles.text}>Species: {species}</Text>
            <Text style={styles.text}>Gender: {gender}</Text>
            {
                type != '' &&
                <Text>{type}</Text>
            }
        </View>
    }
}

export default Details;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImg: {
        overflow: 'hidden',
        height: 180,
        width: 180,
        borderRadius: 40,
        marginTop: 10,
        marginBottom: 20
    },
    text: {
        paddingBottom: 10,
        fontSize: 16,
    }
});