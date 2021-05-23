import { StyleSheet, Dimensions } from 'react-native';
import colors from './Colors';

export default StyleSheet.create({
  tabbarTxtFontSize: {
    fontSize: 18,
  },
  headerFontSize: {
    fontSize: 18,
  },
  smallFontSize: {  //for 3.5sp
    fontSize: 15,
  },
  menuFontSize: {  //for 4.5sp
    fontSize: 18,
  },

  fourFontSize: {  //for 4sp
    fontSize: 19,
  },
  mubarakHoFontSize: { //for 9sp
    fontSize: 36,
  },
  italicFontSize: { //for 5.3sp
    fontSize: 21,
  },
  textSize6sp: { //for 6sp
    fontSize: 24,
  },
  commonFontSize: { //for 6.5sp
    fontSize: 26,
  },

  //New font sizes using these all over the App
  textFontActionBar: {
    fontSize: 20,
  },
  logInTitleFontSize: {
    fontSize: 20,
  },
  buttonFontSize: {//5.5sp according to zaplin
    fontSize: 22,
  },
  textFieldFontSize: {
    fontSize: 22,
  },

  //5.5 sp font size for textFields && Search List
  TextFieldFontSize: {
    fontSize: 22,
  },

  //DashBoard and Others Main Screens
  textFontMainScreen: {
    fontSize: 22,
  },
  //Starter screens top Title elements 
  starterScreenTopTextLetterSpacing: {
    letterSpacing: 0.5,
  },
  starterScreenTopTextLineHeight: {
    lineHeight: 36,
  },
  starterScreenTopTextFontSize: {
    fontSize: 26
  },

  fontSize18: {
    fontSize: 18,
  },
  fontSize20: {
    fontSize: 20,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize17: {
    fontSize: 17,
  },
  fontSize15: {
    fontSize: 15,
  },
  fontSize14: {
    fontSize: 14,
  },
  fontSize13: {
    fontSize: 13,
  },
  fontSize12: {
    fontSize: 12,
  },

  //Table View Fonts 
  tableViewTextFontSize: {
    fontSize: 20,
  },
  tableViewTextLetterSpacing: {
    letterSpacing: 1,
  },
  //New Fonts ends here  =================/////////
  monthsSize5sp: {
    fontSize: 18,
  },
  salesNoSize10Sp: {
    fontSize: 40,
  },
  salesSize3p8Sp: {
    fontSize: 14,
  },
  viewFull: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardStyle: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'gray',
    shadowOpacity: 1,
    zIndex: 999,
  },
  cardStyleOrder: {
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'gray',
    shadowOpacity: 1,
    zIndex: 999,
  },
  commonLeftRightMargin: {
    marginLeft: 20,
    marginRight: 20,
  },
});
