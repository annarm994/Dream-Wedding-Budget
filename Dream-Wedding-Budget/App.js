import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import SearchToDoList from './components/SearchToDoList';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <SearchToDoList />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
});
