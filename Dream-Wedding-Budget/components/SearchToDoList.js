import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, useWindowDimensions } from 'react-native';

const SearchToDoList = () => {
    const { width } = useWindowDimensions(); // Get the current screen width
    const isLargeScreen = width > 600; // Determine if the screen is "large"

    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState([
        { id: '1', item: 'Photobooth', estimatedBudget: '400.00', actualCost: '0.00' },
        { id: '2', item: 'Flowers', estimatedBudget: '500.00', actualCost: '0.00' },
        { id: '3', item: 'Shuttle Service', estimatedBudget: '1000.00', actualCost: '0.00' },
        { id: '4', item: 'Wedding & Reception Decorations', estimatedBudget: '500.00', actualCost: '0.00' },
        { id: '5', item: 'Alcohol Servers', estimatedBudget: '400.00', actualCost: '0.00' },
        { id: '6', item: 'Plates & Glasses', estimatedBudget: '200.00', actualCost: '0.00' },
        { id: '7', item: 'Set Up (Venue)', estimatedBudget: '600.00', actualCost: '0.00' },
        { id: '8', item: 'Clean-up (Venue)', estimatedBudget: '275.00', actualCost: '0.00' },
        { id: '9', item: 'Staffing (Venue)', estimatedBudget: '250.00', actualCost: '0.00' },
    ]);
    const [newItem, setNewItem] = useState({ item: '', estimatedBudget: '', actualCost: '' });

    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const filteredItems = items.filter((item) =>
        item.item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddItem = () => {
        if (newItem.item && newItem.estimatedBudget && newItem.actualCost) {
            setItems([...items, { id: Date.now().toString(), ...newItem }]);
            setNewItem({ item: '', estimatedBudget: '', actualCost: '' });
        }
    };

    return (
        <View style={[styles.container, isLargeScreen && styles.largeContainer]}>
            <TextInput
                placeholder="Search items..."
                value={searchQuery}
                onChangeText={handleSearch}
                style={[styles.searchBar, isLargeScreen && styles.largeSearchBar]}
            />

            <View style={[styles.inputContainer, isLargeScreen && styles.largeInputContainer]}>
                <TextInput
                    placeholder="Item"
                    value={newItem.item}
                    onChangeText={(text) => setNewItem({ ...newItem, item: text })}
                    style={[styles.input, isLargeScreen && styles.largeInput]}
                />
                <TextInput
                    placeholder="Estimated Budget"
                    value={newItem.estimatedBudget}
                    onChangeText={(text) => setNewItem({ ...newItem, estimatedBudget: text })}
                    keyboardType="numeric"
                    style={[styles.input, isLargeScreen && styles.largeInput]}
                />
                <TextInput
                    placeholder="Actual Cost"
                    value={newItem.actualCost}
                    onChangeText={(text) => setNewItem({ ...newItem, actualCost: text })}
                    keyboardType="numeric"
                    style={[styles.input, isLargeScreen && styles.largeInput]}
                />
                <Button title="Add Item" onPress={handleAddItem} />
            </View>

            <FlatList
                data={filteredItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, isLargeScreen && styles.largeItemContainer]}>
                        <Text style={styles.itemText}>{item.item}</Text>
                        <Text style={styles.budgetText}>Budget: ${item.estimatedBudget}</Text>
                        <Text style={styles.costText}>Cost: ${item.actualCost}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        flex: 1,
        alignItems: 'center',
    },
    largeContainer: {
        paddingHorizontal: '10%',
    },
    searchBar: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        maxWidth: 500,
        backgroundColor: '#ffffff',
    },
    largeSearchBar: {
        maxWidth: 700,
    },
    inputContainer: {
        marginVertical: 10,
        width: '100%',
        maxWidth: 500,
        alignItems: 'center',
    },
    largeInputContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxWidth: 700,
    },
    input: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#34495e',
    },
    largeInput: {
        width: '48%',
        marginBottom: 10,
    },
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
        maxWidth: 500,
        alignItems: 'flex-start',
    },
    largeItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 700,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#34495e',
    },
    budgetText: {
        fontSize: 14,
        color: '#2c3e50',
    },
    costText: {
        fontSize: 14,
        color: '#2c3e50',
    },
});

export default SearchToDoList;
