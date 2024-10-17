import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
//Appointment booking screen
export default function AppointmentScreen({ route }) {
  const { doctor } = route.params;
  const [name, setName] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleAppointment = () => {
    
    console.log('Appointment details:', { doctor, name, appointmentTime });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Book an appointment with {doctor.name}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        placeholder="Your Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        placeholder="Appointment Time"
        onChangeText={(text) => setAppointmentTime(text)}
        value={appointmentTime}
      />
      <Button title="Book Appointment" onPress={handleAppointment} />
    </View>
  );
}
