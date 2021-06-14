/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNotificationHook} from './usePushLocalNotification';

const App = () => {
  const {
    initialize,
    schedule,
    pushNotification,
    listNotification,
    removeNotification,
    removeAllScheduleNotification,
  } = useNotificationHook();

  const [notificationId, setNotificationId] = useState(0);
  useEffect(() => {
    initialize();
  }, []);

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
      <View style={styles.root}>
        <Text style={styles.title}>
          React Native Push Notification Hook Implementation
        </Text>

        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={pushNotification}>
            <Text style={styles.btnText}>Press for notification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={scheduleNotification}>
            <Text style={styles.btnText}>Press for scheduled notification</Text>
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
            <Text style={styles.btnText}>Console log all notification</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 50,
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

export default App;
