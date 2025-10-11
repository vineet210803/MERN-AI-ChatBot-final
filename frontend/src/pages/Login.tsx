import React, { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed In Successfully", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Signing In Failed", { id: "login" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);

  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      bgcolor="linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
    >
      {/* Left Robot Illustration */}
      <Box
        flex={1}
        display={{ xs: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
        sx={{ p: 6 }}
      >
        <img
          src="airobot.png"
          alt="Robot"
          style={{
            width: "400px",
            filter: "drop-shadow(0px 0px 25px rgba(0,255,252,0.6))",
          }}
        />
      </Box>

      {/* Right Login Card */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            padding: "40px",
            boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight={700}
              color="#00fffc"
              mb={2}
            >
              Welcome Back
            </Typography>

            {/* Inputs */}
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />

            {/* Login Button */}
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1.5,
                mt: 2,
                borderRadius: 3,
                bgcolor: "#00fffc",
                color: "#000",
                fontWeight: 600,
                letterSpacing: 1,
                boxShadow: "0px 4px 15px rgba(0,255,252,0.4)",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#000",
                  transform: "scale(1.05)",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              Login
            </Button>

            {/* Extra Text */}
            <Typography
              variant="body2"
              textAlign="center"
              color="gray"
              mt={2}
            >
              Don’t have an account?{" "}
              <span
                style={{
                  color: "#00fffc",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
