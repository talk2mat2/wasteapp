import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  Modal as PaperModal,
  Portal,
  Button,
  PaperProvider,
} from 'react-native-paper';
import colors from '../constants/colors';
import {ScaledSheet, scale} from 'react-native-size-matters';
import ScheduleCard from '../components/schedulecard';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import TruckIcon from '../components/icons/truckIcon';
import CustomHeader from '../components/customheader';
import CustomPicker from '../components/custompicker';
import CustomInput from '../components/custominput';
import SpacingY from '../components/spacingy';
import CustomDatePicker from '../components/customDatePicker';
import CustomLocation from '../components/customlocation';
import CheckBox from '@react-native-community/checkbox';
import CustomBtn from '../components/customBtn';
import {categoryTypes} from '../constants/mockDatas';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GetLocation from 'react-native-get-location';
import {geocode_url} from '../constants/mockDatas';
import Confirm from '../components/confirm';
import Submiting from '../components/submiting';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const ScheduleForm1: React.FC<props> = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<categoryTypes[]>([]);
  const [modalOpen, setModalopen] = React.useState<boolean>(false);
  const onChangeCategory = (items: categoryTypes[]) => {
    setSelected(items);
  };
  const windowHeight = Dimensions.get('window').height;
  const [quantity, setQantity] = React.useState<string>('');
  const [location, setLocation] = React.useState<string>('');
  const [ScheduleDate, setScheduleDate] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [submiting, setSubmiting] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function getMylocation() {
    setLoading(true);
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(async location => {
        console.log(location);
        const geurl = geocode_url(location.longitude, location.latitude);
        // console.log(geurl);
        const response = await fetch(geurl);
        const mylocate = await response.json();
        const locationString = mylocate?.['display_name'];
        setLocation(locationString);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        Alert.alert('We cant get your location');
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  function conformRequest() {
    setModalopen(false);
  }

  React.useEffect(() => {
    if (toggleCheckBox) {
      getMylocation();
    }
  }, [toggleCheckBox]);
  return (
    <View style={{flex: 1}}>
      <Portal>
        <PaperModal visible={true} onDismiss={hideModal}>
          <Submiting />
        </PaperModal>
      </Portal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          setModalopen(!modalOpen);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Pressable style={{flex: 1}} onPress={() => setModalopen(false)}>
            <View style={{flex: 1}}></View>
          </Pressable>
          <View
            style={{
              height: windowHeight / 1.44,
              marginTop: 'auto',
              backgroundColor: colors.primary[100],
            }}>
            <Confirm
              conformRequest={conformRequest}
              quantity={quantity}
              category={selected}
              location={location}
              ScheduleDate={ScheduleDate}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <CustomHeader
          navigation={navigation}
          showIcon={false}
          showNav={true}
          title="Schedule Pickup"
        />
        <View style={styles.wrapper}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.spacingTop}></View>
            <CustomPicker onChange={onChangeCategory} navigation={navigation} />
            <SpacingY height={40} />
            <CustomInput
              value={quantity}
              onChangeText={txt => {
                setQantity(txt);
              }}
              title="Waste Quantity"
              placeholder="Enter your waste quantities"
            />
            <SpacingY height={40} />
            <CustomDatePicker
              title="Schedule Date"
              value={ScheduleDate}
              onChangeDate={(text: string) => setScheduleDate(text)}
              placeholder="Enter your preffered schedule date"
            />
            <SpacingY height={40} />
            {loading ? (
              <View style={{marginBottom: 8}}>
                <ActivityIndicator style={{alignSelf: 'center'}} size={20} />
                <Text
                  style={{
                    marginTop: 3,
                    fontFamily: 'Roboto',
                    textAlign: 'center',
                  }}>
                  Getting location..
                </Text>
              </View>
            ) : (
              <CustomLocation
                value={location}
                disabled={!toggleCheckBox}
                onChangeText={(text: string) => setLocation(text)}
                title="Pickup Location"
                placeholder="Enter your pickup location"
              />
            )}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={loading}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.text}>Use my current address</Text>
            </View>
            <SpacingY height={57} />
            <View>
              <Text
                style={[
                  styles.text,
                  {fontStyle: 'italic', textAlign: 'center'},
                ]}>
                We’ve added a 10% fee to your waste schedules for {'\n'}your
                convenience.
              </Text>
              <SpacingY height={16} />
              <CustomBtn
                onPress={() => setModalopen(true)}
                disabled={
                  !location ||
                  selected?.length < 1 ||
                  !ScheduleDate ||
                  !quantity
                }
                title="Continue"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary[100],
  },
  wrapper: {
    paddingHorizontal: '23@msr',
    flex: 1,
  },
  text: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    color: colors.neutral[150],
    fontSize: '12@s',
  },
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '40@vs',
  },
});

export default ScheduleForm1;
