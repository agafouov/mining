import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";
import HeaderBtn from "../../components/HeaderBtn";

export default function Main() {
  return (
    <>
      <div className="a7LD">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <TonConnectButton/>
        </div>
        <div
          style={{
            maxWidth: "100%",
            whiteSpace: "nowrap",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              transformOrigin: "center center",
              flexGrow: "initial",
              transform: "scale(1)",
            }}
          >
            <div className="YWSF">
              <div className="htWJ">
                <span className="Neh8">$</span>
                <span>0</span>
                <span className="tWFE">.</span>
                <span className="xAWJ">00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="VFOP EFAG eF4q YE3Y">
        <section className="_LuN ElzW">
          <HeaderBtn asset={"buy"} />
          <HeaderBtn asset={"withdraw"} />
          <HeaderBtn asset={"trade"} />
        </section>
      </div>
    </>
  );
}
