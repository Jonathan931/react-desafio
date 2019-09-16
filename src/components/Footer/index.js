import React from "react";
import { GroupContato } from "./styles";

export default function Footer() {
  return (
    <GroupContato>
      <div className="whatsapp clearfix">
        <div style={{ float: "left" }}>
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </div>
        <div style={{ float: "left", marginLeft: 3 }}>
          <strong>0800 123 2222</strong>
          <br /> Segunda a sexta 8h ás 22h
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 5
        }}
      >
        <div className="item">
          <i className="fa fa-comments"></i>
          <div>
            <strong>Chat</strong>
          </div>
        </div>
        <div className="item">
          <i className="fa fa-envelope"></i>
          <div>
            <strong>E-mail</strong>
          </div>
        </div>
        <div className="item">
          <i className="fa fa-info"></i>
          <div>
            <strong>Ajuda</strong>
          </div>
        </div>
      </div>
      <div style={{ padding: 30, textAlign: "center" }}>
        Feito com <i className="fa fa-heart-o" aria-hidden="true"></i> pela
        Quero Educação
      </div>
    </GroupContato>
  );
}
