
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const doctors = [
  { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Johnson', specialty: 'Pediatrician' },
  {id:3,name:"Dr.snehith",specialty:'Gynacologist'}
  // Add more doctors as needed
];

export default function DoctorListScreen({ navigation }) {
  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Appointment', { doctor: item })}
    >
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.name}</Text>
        <Text>{item.specialty}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={doctors}
        renderItem={renderDoctorItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
