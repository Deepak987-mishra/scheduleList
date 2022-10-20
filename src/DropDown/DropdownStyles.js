import { StyleSheet } from "react-native";
//import { wpx } from "../../utils/AppConstants";
//import { wpx, hpx, nf, fonts, colors, wp } from "../../constants/constant";
import { wpx,hpx,icons,colors } from "../constants/constants";
export default ButtonStyles = StyleSheet.create({
  stateInputContainer: {
    flexDirection: "row",
    paddingLeft:5,
    alignItems: "center",
    alignSelf: "center",
    width:335,
    height: wpx(45),
    paddingLeft:5,
    justifyContent: "space-between",
   backgroundColor:colors.white,
    elevation:6,
    borderWidth:1,
    borderColor:colors.lightBlue,
    borderRadius:8,
    //fontFamily: fonts.regular,
  },

  dropDownIcon: {
    height:7,
    width: 13,
    resizeMode: "contain",
    marginRight:20,
  },
  optionText: {
    fontSize:14,
    color:colors.black,

  },
  optionsText: {
    fontSize:14,
    color:colors.black,
    paddingHorizontal:5,
    paddingVertical:3,
  },
  itemSeperator: {
    alignSelf: "stretch",
    width: "90%",
    marginTop:4,
    borderBottomColor:colors.gray,
    borderBottomWidth: 1,
    opacity: 0.29,
    marginHorizontal:5,
  },
  titleText: {
    //fontFamily: fonts.regular,
    fontSize: 14,
    color:colors.gray,
    opacity: 0.5,
  },
  bottomLine: {
    width:396,

    borderBottomWidth: 1,
    alignSelf: "center",
    opacity: 0.8,
  },
  optionsContainerStyle: {
    width:335,
    height: 150,
    backgroundColor:colors.offWhite,
    marginTop: 20,
    alignSelf: "center",
  },
  labelTextStyles: {
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize:14,
    //fontFamily: fonts.regular,
  },
});
