import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootState } from '../dto/types/state';
import { fetchPublicApi, fetchPublicApiMore } from '../store/actions/actions';
import { PublicApiList } from '../components/ListItem/PublicApiList';
import { RootStackParamList } from '../router/RootNavigator';

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;


const mapStateToProps = (state: RootState) => ({
    error: state.publicApiReducer.error,
    loading: state.publicApiReducer.loading,
    publicApiData: state.publicApiReducer.publicApiData,
});

const mapDispatchToProps = {
    requestPublicApi: () => fetchPublicApi(),
    requestPublicApiMore: (url: String) => fetchPublicApiMore(url),
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

interface IPublicApiEnteriesList extends PropsFromRedux {
    navigation: HomeScreenNavigationProp
}

class Home extends React.PureComponent<IPublicApiEnteriesList> {

    componentDidMount() {
        this.props.requestPublicApi();
    }

    loadMoreData = () => {
        if (this.props.publicApiData.info?.next != null) {
            this.props.requestPublicApiMore(this.props.publicApiData.info.next)
        }
    };

    render() {
        const { loading, error, publicApiData } = this.props;
        return <PublicApiList
            entries={publicApiData.results}
            loading={loading}
            loadMore={this.loadMoreData}
            navigation={this.props.navigation}
        />
    }
}

export default connector(Home);