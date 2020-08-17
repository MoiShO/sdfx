import React from 'react';
import {
    FlatList,
    SafeAreaView,
    RefreshControl,
    View,
} from 'react-native';
import { Character } from '../../dto/types/Character'
import { publicApiListItem } from '../PublicApiListItem/PublicApiListItem'
import { HomeScreenNavigationProp } from '../../pages/Home'

interface IPublicApiList {
    loading: boolean,
    entries: Character[],
    loadMore: () => void,
    navigation: HomeScreenNavigationProp
}

const renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "92%",
                backgroundColor: "#CED0CE",
                marginLeft: "4%"
            }}
        />
    );
};

export const PublicApiList = ({ entries, loading, loadMore, navigation }: IPublicApiList) => {

    return <SafeAreaView>
        <FlatList
            ItemSeparatorComponent={renderSeparator}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                    onRefresh={() => { }}
                />
            }
            data={entries}
            renderItem={({ item }) => publicApiListItem({ item: item, navigation: navigation })}
            keyExtractor={item => `${item.name + item.image}`}
            onEndReachedThreshold={0.25}
            onEndReached={loadMore}
        />
    </SafeAreaView>
}
