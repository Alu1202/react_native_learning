

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native';

const imageUrl = 'data:image/jpeg;base64,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';



const styles = StyleSheet.create({
    card: {

        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        margin: 10,
        flexGrow:0
    },
    productImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    grid: {
        margin: 20,
        padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    discountText: {
        fontSize: 14,
        color: '#388e3c',
        marginTop: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    rowImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    rowDetails: {
        flex: 1,
        marginLeft: 10,
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowPrice: {
        fontSize: 14,
        color: '#888',
    },
    rowQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'space-between',
        padding:10,
    },
    quantityText: {
        marginHorizontal: 10,
        fontSize: 16,
    },
});

interface QuantityButtonProps {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ quantity, setQuantity }) => {
    const handleQuantityChange = (text: string) => {
        const num = parseInt(text, 10);
        if (!isNaN(num) && num >= 0) {
            setQuantity(num);
        } else if (text === '') {
            setQuantity(0);
        }
    };

    return (
        <View style={styles.rowQuantity}>
            <Button title="-" onPress={() => setQuantity(quantity >= 1 ? quantity - 1 : 0)} />
            <TextInput
                style={styles.quantityText}
                keyboardType="numeric"
                value={quantity.toString()}
                onChangeText={handleQuantityChange}
            />
            <Button title="+" onPress={() => setQuantity(quantity + 1)} />
        </View>
    );
};

const ProductRow = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.row}>
            <Image source={{ uri: imageUrl }} style={styles.rowImage} />
            <View style={styles.rowDetails}>
                <Text style={styles.rowTitle}>Smart Watch</Text>
                <Text style={styles.rowPrice}>$199.99</Text>
            </View>
            <QuantityButton quantity={quantity} setQuantity={setQuantity} />
        </View>
    );
};

const ProductCard = () => {
    const [quantity, setQuantity] = useState(0);

    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.productImage} />

            <Text style={styles.title}>Smart Watches</Text>

            <Text style={styles.discountText}>Min. 40% Off</Text>

            <QuantityButton  
            
            quantity={quantity} setQuantity={setQuantity} />
        </View>
    );
};

const ProductList = () => {
    const products = Array(6).fill(null); 

    return (
        <FlatList
            data={products}
            renderItem={() => <ProductRow />}
            keyExtractor={(item, index) => index.toString()}
            style={{ margin: 20 ,  }}
        />
    );
};



export { ProductGrid, ProductCard, ProductList };
const ProductGrid = () => {
    const products = Array(6).fill(''); 

    return (
        <FlatList
            horizontal={false}

            data={products}
            renderItem={() => <ProductCard />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}

            style={{ margin: 20, }}
        />
    );
};


export default { ProductGrid, ProductCard, ProductList };
