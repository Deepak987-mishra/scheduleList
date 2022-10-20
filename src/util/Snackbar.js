import Snackbar from 'react-native-snackbar';
import { colors } from '../constants/constants';
export default function Snack(msg) {
  Snackbar.show({
    text: msg,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor:colors.blue,
    textColor:colors.white
  });
}
