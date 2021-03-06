import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  background-color: #2750a0;
  height: ${hp('35%')};
`;

export const ContainerProfileHome = styled.View``;

export const ContainerProfile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${wp('4%')};
  margin-right: ${wp('5%')};
  margin-left: ${wp('5%')};
`;

export const ContainerSold = styled.View``;

export const Sold = styled.Text`
  font-size: ${wp('7%')};
  font-family: 'NunitoSans-Bold';
  letter-spacing: ${wp('-0.2%')};
  font-weight: bold;
  color: #fff;
`;

export const AvailableBalance = styled.Text`
  font-size: ${wp('4.4%')};
  font-family: 'NunitoSans-Regular';
  letter-spacing: ${wp('0.02%')};
  color: #e6e2e6;
  margin-left: ${wp('5%')};
  margin-bottom: ${wp('5%')};
`;

export const ContainerPhotoNotification = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperPhoto = styled.View`
  height: ${hp('6.8%')};
  width: ${wp('12.8%')};
  border: 1.4px solid #fff;
  align-items: center;
  justify-content: center;
  border-radius: ${wp('4')};
`;

export const Photo = styled.Image`
  height: ${hp('6.5')};
  width: ${wp('12')};
  border-radius: ${wp('4')};
`;

export const WrapperNotification = styled.View`
  height: ${hp('1.5%')};
  width: ${wp('2.9%')};
  border-radius: ${wp('70')};
  background-color: #f9917d;
  margin-top: ${wp('-2.9%')};
  margin-left: ${wp('-3%')};
  margin-right: ${wp('2')};
  border: 2.7px solid #2750a0;
`;

export const Notification = styled.Image`
  height: ${hp('4%')};
  width: ${wp('7%')};
  transform: rotate(10deg);
`;

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${wp('3')};
`;

export const WrapperMenusIcons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerMenusIcons = styled.View`
  margin-top: ${wp('1')};
  margin-bottom: ${wp('1')};
  margin-right: ${wp('5')};
  align-items: center;
`;

export const MenusIcons = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${(props) => (props.gray ? '#F5F7F9' : '#e6e2e6')};
  padding-bottom: ${wp('1')};
  padding-left: ${wp('2.4')};
  border-top-left-radius: ${wp('4')};
  border-top-right-radius: ${wp('4')};
  border-bottom-left-radius: ${wp('4')};
  border-bottom-right-radius: ${wp('4')};
  width: ${wp('12%')};
  height: ${hp('6.2%')};
`;

export const Icons = styled.Image`
  width: ${wp('7%')};
  height: ${hp('7%')};
`;

export const ContainerLabelIcon = styled.View`
  align-items: center;
  margin-top: ${wp('1.3')};
`;

export const LabelIcon = styled.Text`
  font-size: ${wp('3.4')};
  color: #e6e2e6;
  font-family: 'NunitoSans-Bold';
`;
