import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "../Dashbord/upload-files.component3";
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import '../home.css';
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
function Dash3(props) {
  return (
    <section className="landing-background">
    <div>

    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h4>Upload IRM cardiaque</h4>
      </div>
      <UploadFiles />
      <FormButton title="Précédent" onPress={() => { props.navigation.navigate("FicheIRM") }} />
      <FormButton title="Suivant" onPress={() => { props.navigation.navigate("FicheEffort") }} />
</div>
<ParticlesBg type="cobweb" config={config} bg={true} />
</div>
</section>
  );
}

export default Dash3;
