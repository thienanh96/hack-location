import React from "react";
import { geolocated } from "react-geolocated";
import './App.css'
import './text.scss';

const Waiting = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 700 }}>
      <div style={{ fontSize: 30 }}>Ấn đồng ý để sang trang bên 😁😁😁</div>
    </div>
  )
}

const Accept = () => (
  <div className="accept loveu" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
    <div>
      <div style={{ width: '100%',marginBottom: 20 }}>Anh xin lỗi vì đã biết nhà em nhưng anh chỉ muốn từ giờ được đón đưa em tận nơi 😢😢😢</div>
      <div style={{ width: '100%', marginBottom: 20  }}>Với lại anh cũng muốn biết nhà mẹ vợ nhanh hơn một tí 😘😘😘</div>
      <div>Thiện Anh yêu em</div>
    </div>

  </div>
)


class App extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <Accept />
    ) : (
            <Waiting />
          );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 100000,
})(App);