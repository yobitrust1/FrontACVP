import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import FormButton from "../../Form/FormButton";
import JSONViewer from 'react-json-viewer';
import Scroll from "react-scroll";
var Element = Scroll.Element;
const Info = (props) => {
  let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        position: "all",
        color: [ "#ff0000"],
        cross: "dead",
        random: 10
      };
      return (

        <div>
          <View style={tailwind('items-center')}>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Cin:{props.patientList["cin"]}</Text>

           </View>
           <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>generalInformation:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["generalInformation"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>habitudesDeVie:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["interrogatoire"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>expoRisque:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["examenClinique"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>confDiags:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["etudeECG"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>admissions:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["etudeQRS"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>caracCliniques:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["etudeOndeT"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>examenCli:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["segment"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>examRadio_paraCli:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["aspectSegment"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>evaluationFinale:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["ventricule"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>examBio:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["ficheIRM"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Epaisseurs diastoliques:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["cercle1"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Epaisseurs systoliques:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["cercle2"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Epaissement absolu:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["cercle3"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Epaissement relatif:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["cercle4"]} /></Element>
          <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>evolution:</Text>
          <Element name="test7" className="element" id="containerElement" style={{ position: "relative",  overflow: "scroll"}}><JSONViewer json={props.patientList["fiche"]} /></Element>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />



              </div>
      );
};

  const mapStateToProps = (state) => ({
      patientList: state.medicalService.patientList
  });
  const mapActionToProps = {
  };
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2193b0',
    },
  });
  export default connect(mapStateToProps, mapActionToProps)(Info);