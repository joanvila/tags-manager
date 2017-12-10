import React from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class TagManager extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ScrollView style={styles.scrollview}>
                <Button
                    title="Add"
                    onPress={() => this.props.add('#joan')} />
                <Text>
                    {this.props.tags.tags}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        padding: 30,
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center'
    },
});
