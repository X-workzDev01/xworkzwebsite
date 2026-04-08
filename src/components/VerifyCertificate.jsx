import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent
} from "@mui/material";
import { Urlconstant } from "./constant/Urlconstant";
import { useParams } from "react-router-dom";

const VerifyCertificate = () => {
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [showInvalidPopup, setShowInvalidPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const { uniqueId, certificateType } = useParams();


  useEffect(() => {
    if (!uniqueId || uniqueId.trim() === "") {
      setShowInvalidPopup(true);
      setLoading(false);
      return;
    }

    const apiUrl =
      `${Urlconstant.url}api/getDetailsByUniqueId` +
      `?uniqueId=${encodeURIComponent(uniqueId)}` +
      (certificateType
        ? `&certificateType=${encodeURIComponent(certificateType)}`
        : "");

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API response not OK");
        }
        return response.json();
      })
      .then((data) => {
        if (
          !data ||
          !data.basicInfo ||
          !data.adminDto ||
          !data.adminDto.updatedOn ||
          data.adminDto.updatedOn === "NA"
        ) {
          setShowInvalidPopup(true);
        } else {
          setCertificateDetails(data);
        }
      })
      .catch(() => {
        setShowInvalidPopup(true);
      })
      .finally(() => setLoading(false));
  }, [uniqueId, certificateType]);

  if (showInvalidPopup) {
    return (
      <Dialog open={true}>
        <DialogTitle>Invalid Certificate</DialogTitle>
        <DialogContent>
          <Typography>
            This certificate could not be verified. Please check the unique ID
            or try again later.
          </Typography>
        </DialogContent>
      </Dialog>
    );
  }

  if (loading || !certificateDetails) {
    return null;
  }

  const { basicInfo, educationInfo, csrDto, adminDto } = certificateDetails;

  const isInternship = certificateType == "INTERNSHIP";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 1, sm: 2, md: 3 }
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 800,
          p: { xs: 2, sm: 3 },
          borderRadius: 3
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            mb: 3
          }}
        >
          <Box
            component="img"
            src="https://vajiram-prod.s3.ap-south-1.amazonaws.com/Ministry_of_Micro_Small_Medium_Enterprises_f68dd0df33.jpg"
            alt="MSME Logo"
            sx={{ width: { xs: 80, sm: 120, md: 150 } }}
          />

          <Box
            component="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4MLa7W2jjHbAwq7SEZ5VQUEFVB4ORJpnsw&s"
            alt="Center Mark"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: 60, sm: 80, md: 100 }
            }}
          />

          <Box
            component="img"
            src="https://www.x-workz.in/Logo.png"
            alt="X-Workz Logo"
            sx={{ width: { xs: 80, sm: 120, md: 150 } }}
          />
        </Box>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem" }
          }}
        >
          {isInternship
            ? "X-workz Internship Certificate is successfully verified"
            : "X-workz Certificate is successfully verified"}
        </Typography>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <Typography variant="h6">
              <strong>Unique ID:</strong> {csrDto?.uniqueId || "NA"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">
              <strong>Issued To:</strong> {basicInfo?.traineeName || "NA"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">
              <strong>College Name:</strong>{" "}
              {educationInfo?.collegeName || "NA"}
            </Typography>
          </Grid>

          {isInternship && (
            <Grid item xs={12}>
              <Typography variant="h6">
                <strong>Designation:</strong> Software Intern
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Typography variant="h6">
              <strong>Issued On:</strong> {adminDto.updatedOn}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default VerifyCertificate;
