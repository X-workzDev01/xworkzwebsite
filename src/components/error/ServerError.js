import { Box, Typography, Paper, Stack, Divider, Avatar } from "@mui/material";

import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ServerError = () => {
  return (
    <Box
      sx={{
        minHeight: {
          xs: "auto",
          sm: "80vh",
        },

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        px: 2,

        py: {
          xs: 3,
          sm: 5,
        },

        background: "linear-gradient(180deg,#f8fafc 0%, #eef2ff 100%)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",

          maxWidth: 760,

          mx: "auto",

          borderRadius: 5,

          overflow: "hidden",

          boxShadow: "0px 12px 35px rgba(0,0,0,0.10)",
        }}
      >
        {/* Header */}

        <Box
          sx={{
            background: "linear-gradient(135deg,#ff5e14 0%,#ff014f 100%)",

            color: "white",

            py: {
              xs: 3,
              sm: 4,
            },

            px: 3,

            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "rgba(255,255,255,0.20)",

              width: {
                xs: 48,
                sm: 55,
              },

              height: {
                xs: 48,
                sm: 55,
              },

              mx: "auto",

              mb: 2,
            }}
          >
            <WarningAmberRoundedIcon
              sx={{
                fontSize: {
                  xs: 24,
                  sm: 28,
                },
              }}
            />
          </Avatar>

          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              fontSize: {
                xs: "1.4rem",
                sm: "2rem",
                md: "2.2rem",
              },

              lineHeight: 1.3,
            }}
          >
            Service Temporarily Unavailable
          </Typography>
        </Box>

        {/* Content */}

        <Box
          sx={{
            p: {
              xs: 3,
              sm: 5,
            },

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "0.95rem",
                sm: "1.08rem",
              },

              color: "#475569",

              fontWeight: 500,
            }}
          >
            We are currently experiencing technical difficulties.
          </Typography>

          <Typography
            sx={{
              mt: 1.5,

              color: "#64748b",

              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
              },
            }}
          >
            Our team is actively working to restore services.
          </Typography>

          <Typography
            sx={{
              mt: 1,

              color: "#64748b",

              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
              },
            }}
          >
            Please try again after a few minutes.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* Contact Card */}

          <Box
            sx={{
              background: "#f8fafc",

              borderRadius: 3,

              border: "1px solid #e2e8f0",

              p: {
                xs: 2.5,
                sm: 3,
              },
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#334155",

                mb: 3,

                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                },
              }}
            >
              For any queries, please contact
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,

                  color: "#475569",

                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                  },
                }}
              >
                9845658883
              </Typography>

              <Typography
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },

                  color: "#94a3b8",
                }}
              >
                |
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,

                  color: "#475569",

                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                  },
                }}
              >
                9886971480
              </Typography>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                gap: 1,

                flexWrap: "wrap",
              }}
            >
              <EmailOutlinedIcon
                sx={{
                  color: "#ff5e14",

                  fontSize: 22,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 600,

                  color: "#334155",

                  wordBreak: "break-word",

                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                  },
                }}
              >
                contact@x-workz.in
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 4,

              fontSize: {
                xs: "0.82rem",
                sm: "0.92rem",
              },

              color: "#6b7280",

              lineHeight: 1.6,
            }}
          >
            We apologize for the inconvenience and appreciate your patience.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ServerError;
