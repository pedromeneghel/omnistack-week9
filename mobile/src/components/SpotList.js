import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }) {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
              params: { tech }  
            })

            setSpots(response.data);
        }

        loadSpots();
    }, [])
    return (
        <View style={style.container}>
            <Text style={style.title}>Empresas que usam <Text style={style.bold}>{tech}</Text></Text>
            <FlatList 
                style={style.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={
                    ({ item }) => ( 
                        <View style={style.listItem}>
                            <Image style={style.thumbnail} source={{uri: item.thumbnail_url}} />
                            <Text style={style.company}>{item.company}</Text>
                            <Text style={style.price}>{item.price ? `R$ ${item.price}/dia` : 'Gratuito'}</Text>
                            <TouchableOpacity onPress={() => {}} style={style.button}>
                                <Text style={style.buttonText}>Solicitar reserva</Text>
                            </TouchableOpacity>
                        </View> 
                     )
                }
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    bold: {
        fontWeight: 'bold'
    }
})