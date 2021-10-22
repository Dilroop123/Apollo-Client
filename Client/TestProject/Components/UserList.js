/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useQuery, gql} from '@apollo/client';

import {LOAD_USERS} from '../GraphQl/Queries';

const UserList = () => {
  const {data, loading, error} = useQuery(LOAD_USERS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error.message}</Text>;

  return (
    <View>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
        Appollo CLient Test
      </Text>

      <FlatList
        extraData={data}
        data={data?.getAllUsers}
        renderItem={({item}) => (
          <View
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: '#dae4f5',
              borderRadius: 10,
            }}>
            <Text style={{textAlign: 'center'}}>{item.firstName}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UserList;
