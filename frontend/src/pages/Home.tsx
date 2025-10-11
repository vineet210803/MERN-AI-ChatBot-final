import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 6 },
          py: 6,
        }}
      >
        {/* Typing Animation */}
        <Box sx={{ mb: 6 }}>
          <TypingAnim />
        </Box>

        {/* Images Row */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, md: 8 },
            mb: 10,
          }}
        >
          {/* <Box
            component="img"
            src="robot.png"
            alt="robot"
            sx={{
              width: { xs: "150px", sm: "180px", md: "220px" },
              filter: "drop-shadow(0px 0px 15px rgba(100, 243, 213, 0.7))",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
          /> */}
          <Box
            component="img"
            src="openai.png"
            alt="openai"
            className="image-inverted rotate"
            sx={{
              width: { xs: "150px", sm: "180px", md: "220px" },
              filter: "drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.4))",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "rotate(10deg) scale(1.05)" },
            }}
          />
        </Box>

        {/* Chatbot Image */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src="chat.png"
            alt="chatbot"
            sx={{
              width: isBelowMd ? "85%" : "60%",
              borderRadius: "20px",
              boxShadow: "0px 0px 45px rgba(100, 243, 213, 0.5)",
              mt: 4,
              mb: 6,
              p: 2,
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          />
        </Box>
      </Box>

      {/* Footer */}
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
