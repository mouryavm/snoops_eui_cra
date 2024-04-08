import React from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiText,
  EuiButton,
} from "@elastic/eui";

import building from "../../assets/buildings.png";
import overlay_image from "../../assets/overlay_frame.png";

const InviteOrg: React.FC = () => {
  return (
    <div>
      <EuiFlexGroup style={{ width: "100%", height: "92.5vh" }} gutterSize="l">
        <EuiFlexItem grow={6}>
          <EuiCard
            title=""
            description={
              <div style={{ margin: 35 }}>
                <EuiFlexGroup gutterSize="l">
                  <EuiFlexItem grow={1}>
                    <EuiForm>
                      <EuiText
                        style={{
                          fontFamily: "Plus Jakarta Sans",
                          color: "rgba(81, 89, 144, 1)",
                          marginBottom: 10,
                        }}
                        textAlign="left"
                      >
                        <h4>Organization details</h4>
                      </EuiText>
                      <EuiFormRow>
                        <EuiFieldText placeholder="Parent Organization Name" />
                      </EuiFormRow>
                      <EuiFormRow>
                        <EuiFieldText placeholder="Organization Name" />
                      </EuiFormRow>
                      <EuiFormRow>
                        <EuiTextArea placeholder="Organization Address" />
                      </EuiFormRow>
                    </EuiForm>
                  </EuiFlexItem>

                  <EuiFlexItem grow={false}>
                    <div
                      style={{
                        borderRight: "1px solid #d3d3d3",
                        height: "100%",
                        margin: "0 auto",
                      }}
                    ></div>
                  </EuiFlexItem>

                  <EuiFlexItem grow={1}>
                    <EuiForm>
                      <EuiText
                        style={{
                          fontFamily: "Plus Jakarta Sans",
                          color: "rgba(81, 89, 144, 1)",
                          marginBottom: 10,
                        }}
                        textAlign="left"
                      >
                        <h4>Admin details</h4>
                      </EuiText>
                      <EuiFormRow>
                        <EuiFieldText placeholder="First Name" />
                      </EuiFormRow>
                      <EuiFormRow>
                        <EuiFieldText placeholder="Last Name" />
                      </EuiFormRow>
                      <EuiFormRow>
                        <EuiFieldText
                          placeholder="Organization Email"
                          type="email"
                        />
                      </EuiFormRow>
                    </EuiForm>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <EuiButton style={{ margin: 15,backgroundColor:"#6863F9",color:"#fff" }}>Send Invite</EuiButton>
                </div>
              </div>
            }
          />
        </EuiFlexItem>

        <EuiFlexItem grow={4}>
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${building})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${overlay_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1, // Adjust opacity as needed
                borderRadius: 8,
              }}
            ></div>
            <EuiCard title="" />
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default InviteOrg;
