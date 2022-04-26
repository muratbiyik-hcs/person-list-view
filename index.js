import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

import styles from './styles';

const PersonListView = (
  {
    list,
    itemRadius = 15,
    textColor = 'white',
    itemColor = 'red',
    backgroundColor = 'white',
  }
) => {
  const [items, setItems] = useState(list);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    setItems(
      [
        ...items,
        {
          id: items.length + 1,
          name: items[items.length - 5].name,
          age: items[items.length - 5].age + 1,
        }
      ]
    );
    setIsRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
      style={
        [
          styles.body,
          { backgroundColor: backgroundColor }
        ]
      }>
      {
        items.map((item) => {
          return (
            <View
              key={item.id}
              style={
                [
                  styles.item,
                  {
                    backgroundColor: itemColor,
                    borderRadius: itemRadius
                  }
                ]
              }>
              <Text style={
                [
                  styles.text,
                  { color: textColor }
                ]
              }>{'Name: ' + item.name}</Text>
              <Text style={
                [
                  styles.text,
                  { color: textColor }
                ]
              }>{'Age: ' + item.age}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

export default PersonListView;