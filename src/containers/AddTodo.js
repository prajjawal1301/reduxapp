/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class AddTodo extends Component {

    state = {
        text: '',
    }
    addTodo = (text) => {
        //redux store
        this.props.dispatch({ type: 'ADD_TODO', text });
        this.setState({ text: '' });
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='Add New Task'
                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }} />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <Text style={{ paddingVertical: 10, marginHorizontal: 10 }}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);
