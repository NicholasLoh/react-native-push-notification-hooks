import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useNotificationHook} from '../usePushLocalNotification';

export const HomeScreen = () => {
  const {
    schedule,
    pushNotification,
    listNotification,
    removeNotification,
    removeAllScheduleNotification,
  } = useNotificationHook();

  const navigator = useNavigation();

  const [notificationId, setNotificationId] = useState(0);

  const scheduleNotification = () => {
    schedule({
      id: notificationId,
      message: 'My Notification Message', // (required)
      date: new Date(Date.now() + 60 * 1000), // in 60 secs
    });

    setNotificationId(notificationId + 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>
            React Native Push Notification Hook Implementation
          </Text>

          <View style={styles.content}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigator.navigate('secondScreen')}>
              <Text style={styles.btnText}>Go to second page</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pushNotification}>
              <Text style={styles.btnText}>Send notification</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                pushNotification({
                  userInfo: {
                    navigation: 'secondScreen',
                  },
                })
              }>
              <Text style={styles.btnText}>
                Send Notification with navigation path
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={scheduleNotification}>
              <Text style={styles.btnText}>Send scheduled notification</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={removeAllScheduleNotification}>
              <Text style={styles.btnText}>
                Delete all scheduled notification
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => removeNotification(notificationId)}>
              <Text style={styles.btnText}>
                Remove last scheduled notification
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={listNotification}>
              <Text style={styles.btnText}>See scheduled all notification</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  content: {
    flex: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: 15,
    textAlign: 'center',
  },
});
